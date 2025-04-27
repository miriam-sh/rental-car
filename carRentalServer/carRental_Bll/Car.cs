using System.ComponentModel;

namespace BLL
{
    public class Car
    {
        public async Task<List<DTO.Car>> SelectAllAsync()
        {
            DAL.Cars cars = new DAL.Cars();
            var q = await cars.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.Car>> AddAsync(DTO.Car car)
        {
            DAL.Cars cars = new DAL.Cars();
            return await cars.AddAsync(car);
        }

        public async Task<List<DTO.Car>> UpdateAsync(int id, DTO.Car car)
        {
            DAL.Cars cars = new DAL.Cars();
            return await cars.UpdateAsync(id, car);
        }
        public async Task<List<DTO.Car>> UpdateAvailableAsync(int id)
        {
            DAL.Cars cars = new DAL.Cars();
            return await cars.UpdateAvailableAsync(id);
        }

        public async Task<List<DTO.Car>> DeleteAsync(int id)
        {
            DAL.Cars cars = new DAL.Cars();
            return await cars.DeleteAsync(id);
        }

        /*

        public List<DTO.Car> rentalCarsContext()
        {
            DAL.Cars cars = new DAL.Cars();
            return DAL.Converters.CarConverters.ToListCarDto(cars.rentalCarsContext());
        }

        */
    }
}
