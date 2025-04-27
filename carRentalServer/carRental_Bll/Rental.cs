using Bll;
using DAL;
using System.ComponentModel;

namespace BLL
{
    public class Rental
    {
        public async Task<List<DTO.Rental>> SelectAllAsync()
        {
            DAL.Rentals Rentals = new DAL.Rentals();
            var q = await Rentals.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.Rental>> AddAsync(DTO.Rental Rental)
        {                       
            DAL.Rentals Rentals = new DAL.Rentals();
            int idCar = Rental.CarId;
            var cars = new DAL.Cars().SelectAllAsync();
            var car = cars.Result.Find(c => c.Id == idCar);
            if (!car.Available)
                throw new rentalException("available false!!!");
            return await Rentals.AddAsync(Rental);
        }

        public async Task<List<DTO.Rental>> UpdateAsync(int id)
        {
            DAL.Rentals Rentals = new DAL.Rentals();
            return await Rentals.UpdateAsync(id);
        }

        public async Task<List<DTO.Rental>> DeleteAsync(int id)
        {
            DAL.Rentals Rentals = new DAL.Rentals();
            return await Rentals.DeleteAsync(id);
        }

        public async Task<List<DTO.Rental>> UpdateReturnAsync(int id)
        {
            DAL.Rentals Rentals = new DAL.Rentals();
            return await Rentals.UpdateReturnAsync(id);
        }

        public async Task<List<DTO.Rental>> SelectByIdAsync(int id)
        {
            DAL.Rentals Rentals = new DAL.Rentals();
            var q = await Rentals.SelectByIdAsync(id);
            return q;
        }


    }
}
