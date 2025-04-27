using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DriveTypes
    {
        public async Task<List<DTO.DriveType>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.DriveTypeConverters.ToListDriveTypeDto(await db.DriveTypes.ToListAsync());
                return list;
            }
            catch(Exception e) 
            { 
                throw e;
            }
        }

        public async Task<List<DTO.DriveType>> AddAsync(DTO.DriveType driveType)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.DriveTypes.Add(DAL.Converters.DriveTypeConverters.ToDriveTypeModel(driveType));
                int x = await db.SaveChangesAsync();
                if (x > 0)
                    return DAL.Converters.DriveTypeConverters.ToListDriveTypeDto(db.DriveTypes.ToList<Models.DriveType>());
                return null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<List<DTO.DriveType>> UpdatePriceAsync(int id, int price)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.DriveType driveType1 = await db.DriveTypes.FirstOrDefaultAsync(t => t.Id == id);
            if (driveType1 == null)
                return null;
            driveType1.PricePerLiter = price;
            int x = await db.SaveChangesAsync();
            if (x > 0)
                return DAL.Converters.DriveTypeConverters.ToListDriveTypeDto(db.DriveTypes.ToList<Models.DriveType>());
            return null;
        }

        public async Task<List<DTO.DriveType>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.DriveType driveType1 = await db.DriveTypes.FirstOrDefaultAsync(t => t.Id == id);
            if (driveType1 == null)
                return null;
            db.DriveTypes.Remove(driveType1);
            int x = await db.SaveChangesAsync();
            if (x > 0)
                return DAL.Converters.DriveTypeConverters.ToListDriveTypeDto(db.DriveTypes.ToList<Models.DriveType>());
            return null;
        }
    }
}
