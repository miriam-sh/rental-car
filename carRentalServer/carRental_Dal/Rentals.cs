using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Rentals
    {
        public async Task<List<DTO.Rental>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.RentalConverters.ToListRentalDto(await db.Rentals.ToListAsync());
                return list;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public async Task<List<DTO.Rental>> AddAsync(DTO.Rental Rental)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.Rentals.Add(DAL.Converters.RentalConverters.ToRentalModel(Rental));
                int x = await db.SaveChangesAsync();
                if (x > 0)
                    return DAL.Converters.RentalConverters.ToListRentalDto(db.Rentals.ToList<Models.Rental>());
                return null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<List<DTO.Rental>> UpdateAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Rental Rental1 = await db.Rentals.FirstOrDefaultAsync(t => t.Id == id);
            if (Rental1 == null)
                return null;
            Rental1.Returned  = true;
            int x = await db.SaveChangesAsync();
            if (x > 0)
                return DAL.Converters.RentalConverters.ToListRentalDto(db.Rentals.ToList<Models.Rental>());
            return null;
        }

        public async Task<List<DTO.Rental>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Rental Rental1 = await db.Rentals.FirstOrDefaultAsync(t => t.Id == id);
            if (Rental1 == null)
                return null;
            db.Rentals.Remove(Rental1);
            int x = await db.SaveChangesAsync();
            if (x > 0)
                return DAL.Converters.RentalConverters.ToListRentalDto(db.Rentals.ToList<Models.Rental>());
            return null;
        }

        public async Task<List<DTO.Rental>> UpdateReturnAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Rental Rental1 = await db.Rentals.FirstOrDefaultAsync(t => t.Id == id);
            if (Rental1 == null)
                return null;
            Rental1.Returned = true;
            int x = await db.SaveChangesAsync();
            if (x > 0)
                return DAL.Converters.RentalConverters.ToListRentalDto(db.Rentals.ToList<Models.Rental>());
            return null;
        }

        public async Task<List<DTO.Rental>> SelectByIdAsync(int id)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.RentalConverters.ToListRentalDto(await db.Rentals.Where(r => r.UserId == id && r.Returned == false).ToListAsync());
                return list;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

    }
}
