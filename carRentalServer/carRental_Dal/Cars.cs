using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Cars
    {
        public async Task<List<DTO.Car>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.CarConverters.ToListCarDto(await db.Cars.Include(c => c.CarModel).Include(c => c.DriveType).ToListAsync());
                return list;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<List<DTO.Car>> AddAsync(DTO.Car car)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.Cars.Add(DAL.Converters.CarConverters.ToCarModel(car));
                int s = await db.SaveChangesAsync();
                if (s == -1)
                    return null;
                return DAL.Converters.CarConverters.ToListCarDto(db.Cars.ToList<Models.Car>());
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Models.Car> rentalCarsContext()
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            return db.Cars.ToList<Models.Car>();

        }

        public async Task<List<DTO.Car>> UpdateAvailableAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Car car1 = await db.Cars.FirstOrDefaultAsync(c => c.Id == id);
            if (car1 == null)
                return null;
            car1.Available = false;
            int x = await db.SaveChangesAsync();
            if (x == -1)
                return null;
            return DAL.Converters.CarConverters.ToListCarDto(db.Cars.ToList<Models.Car>());
        }


        public async Task<List<DTO.Car>> UpdateAsync(int id, DTO.Car car)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Car car1 = await db.Cars.FirstOrDefaultAsync(c => c.Id == id);
            if (car1 == null)
                return null;
            car1.AutomaticGear = car.AutomaticGear;
            car1.Available = car.Available;
            car1.Balance = car.Balance;
            car1.CarModelId = car.CarModelId;
            car1.City = car.City;
            car1.DriveTypeId = car.DriveTypeId;
            car1.FuelConsumptionPerKm = car.FuelConsumptionPerKm;
            car1.LicensePlate = car.LicensePlate;
            car1.NumberOfSeats = car.NumberOfSeats;
            car1.PricePerHour = car.PricePerHour;
            car1.YearBook = car.YearBook;
            int x = await db.SaveChangesAsync();
            if (x == -1)
                return null;
            return DAL.Converters.CarConverters.ToListCarDto(db.Cars.ToList<Models.Car>());
        }

        public async Task<List<DTO.Car>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Car car1 = await db.Cars.FirstOrDefaultAsync(c => c.Id == id);
            if (car1 == null)
                return null;
            db.Cars.Remove(car1);
            int x = await db.SaveChangesAsync();
            if (x == -1)
                return null;
            return DAL.Converters.CarConverters.ToListCarDto(db.Cars.ToList<Models.Car>());
        }
    }
}
