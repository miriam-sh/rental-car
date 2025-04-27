using DAL;
using System;
using System.ComponentModel;
using Aspose.Html;
using Aspose.Html.Net;


namespace BLL
{
    public class CarModel
    {
        public async Task<List<DTO.CarModel>> SelectAllAsync()
        {
            DAL.CarModels CarModels = new DAL.CarModels();
            var q = await CarModels.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.CarModel>> AddAsync(DTO.CarModel CarModel)
        {
            DAL.CarModels CarModels = new DAL.CarModels();
            if (CarModel.Img == null) CarModel.Img = "null.png";
            return await CarModels.AddAsync(CarModel);

        }

        public async Task<List<DTO.CarModel>> UpdateAsync(int id, DTO.CarModel CarModel)
        {
            DAL.CarModels CarModels = new DAL.CarModels();
            return await CarModels.UpdateAsync(id, CarModel);
        }

        public async Task<List<DTO.CarModel>> DeleteAsync(int id)
        {
            DAL.CarModels CarModels = new DAL.CarModels();
            return await CarModels.DeleteAsync(id);
        }

    }
}
