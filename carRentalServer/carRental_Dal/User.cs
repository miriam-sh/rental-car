using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class User
    {

        public async Task<List<DTO.User_Dto>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.UserConverters.ToListUserDto(await db.Users.ToListAsync());
                return list;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<List<DTO.User_Dto>> AddAsync(DTO.User_Dto user)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.Users.Add(DAL.Converters.UserConverters.ToUserModel(user));
                int s = await db.SaveChangesAsync();

                return Converters.UserConverters.ToListUserDto(await db.Users.ToListAsync());
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        //public async Task<List<Models.User>> AddAsync(Models.User user)
        //{
        //    try
        //    {
        //        Models.RentalCarsContext db = new Models.RentalCarsContext();
        //        db.Users.Add(user);
        //        int s = await db.SaveChangesAsync();

        //        return await db.Users.ToListAsync<Models.User>();
        //    }
        //    catch (Exception e)
        //    {
        //        throw e;
        //    }
        //}

        public  async Task<List<DTO.User_Dto>> UpdateAsync(int id, DTO.User_Dto user)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.User user1 = await db.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user1 == null)
                return null;
            user1.Id=user.Id;
            user1.Name=user.Name;
            user1.Tz=user.Tz;
            user1.PhoneNumber=user.PhoneNumber;
            user1.Password = user.Password;
            user1.CreditNumber = user.CreditNumber;
            user1.ExpirationDate = user.ExpirationDate;
            user1.Cvv=user.Cvv;
            user1.UserTypeId = user.UserTypeId;

            int x = await db.SaveChangesAsync();
            return Converters.UserConverters.ToListUserDto(await db.Users.ToListAsync());
        }

        public  async Task<List<DTO.User_Dto>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.User user1 = await db.Users.FirstOrDefaultAsync(u => u.Id == id);
            if (user1 == null)
                return null;
            db.Users.Remove(user1);
            int x = await db.SaveChangesAsync();
            return Converters.UserConverters.ToListUserDto(await db.Users.ToListAsync());
        }

    }

}
