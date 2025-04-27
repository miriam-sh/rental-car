using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DAL.Converters
{
    public class CarConverters
    {
        public static DTO.Car ToCarDto(Models.Car car)
        {
            DTO.Car car1 = new DTO.Car();
            car1.Id = car.Id;
            car1.LicensePlate = car.LicensePlate;
            car1.YearBook = car.YearBook;
            car1.CarModelId = car.CarModelId;
            car1.AutomaticGear=car.AutomaticGear;
            car1.Balance=car.Balance;
            car1.NumberOfSeats=car.NumberOfSeats;
            car1.DriveTypeId=car.DriveTypeId;
            car1.PricePerHour=car.PricePerHour;
            car1.City=car.City;
            car1.Street=car.Street;
            car1.Available=car.Available;
            car1.FuelConsumptionPerKm = car.FuelConsumptionPerKm;

            return car1;

        }

        public static List<DTO.Car> ToListCarDto(List<Models.Car> listCars)
        {
            List<DTO.Car> lnew = new List<DTO.Car>();
            foreach (var item in listCars)
            {
                lnew.Add(ToCarDto(item));
            }
            return lnew;
        }


        public static Models.Car ToCarModel(DTO.Car car)
        {
            Models.Car car1 = new Models.Car();

            car1.LicensePlate = car.LicensePlate;
            car1.YearBook = car.YearBook;
            car1.CarModelId = car.CarModelId;
            car1.AutomaticGear = car.AutomaticGear;
            car1.Balance = car.Balance;
            car1.NumberOfSeats = car.NumberOfSeats;
            car1.DriveTypeId = car.DriveTypeId;
            car1.PricePerHour = car.PricePerHour;
            car1.City = car.City;
            car1.Street = car.Street;
            car1.Available = car.Available;
            car1.FuelConsumptionPerKm = car.FuelConsumptionPerKm;

            return car1;

        }

    }
}
