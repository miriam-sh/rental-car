using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarModelsController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.CarModel>> SellectAllAsync()
        {
            BLL.CarModel CarModel = new BLL.CarModel();
            var q = await CarModel.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.CarModel>> AddAsync(DTO.CarModel c)
        {
            Console.WriteLine(c);
            Console.WriteLine(c.Company);
            BLL.CarModel CarModel = new BLL.CarModel();
            var q = await CarModel.AddAsync(c);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.CarModel>> UpdateAsync(int id, DTO.CarModel c)
        {
            BLL.CarModel CarModel = new BLL.CarModel();
            return await CarModel.UpdateAsync(id, c);
        }

        [HttpDelete]
        public async Task<List<DTO.CarModel>> DeleteAsync(int id)
        {
            BLL.CarModel CarModel = new BLL.CarModel();
            return await CarModel.DeleteAsync(id);
        }

    }
}
