using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserType
    {

        public  async Task<List<DTO.UserType_Dto>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                return Converters.UserTypeConverters.ToListUserTypeDto(await db.UserTypes.ToListAsync());
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public  async Task<List<DTO.UserType_Dto>> AddAsync(DTO.UserType_Dto userType)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.UserTypes.Add(Converters.UserTypeConverters.ToUserTypeModel(userType));
                int s = await db.SaveChangesAsync();

                return Converters.UserTypeConverters.ToListUserTypeDto(await db.UserTypes.ToListAsync());
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public  async Task<List<DTO.UserType_Dto>> UpdateAsync(int id, DTO.UserType_Dto userType)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.UserType userType1 = await db.UserTypes.FirstOrDefaultAsync(u => u.Id == id);
            if (userType1 == null)
                return null;

            userType1.Id = userType.Id;
            userType1.Description = userType.Description;

            int x = await db.SaveChangesAsync();
            return Converters.UserTypeConverters.ToListUserTypeDto(await db.UserTypes.ToListAsync());
        }

        public  async Task<List<DTO.UserType_Dto>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.UserType userType1 = await db.UserTypes.FirstOrDefaultAsync(u => u.Id == id);
            if (userType1 == null)
                return null;
            db.UserTypes.Remove(userType1);
            int x = await db.SaveChangesAsync();
            return Converters.UserTypeConverters.ToListUserTypeDto(await db.UserTypes.ToListAsync());
        }
    }
}
