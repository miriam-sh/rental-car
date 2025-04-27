using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.Car>> SellectAllAsync()
        {
            BLL.Car car = new BLL.Car();
            var q = await car.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.Car>> AddAsync(DTO.Car c)
        {
            BLL.Car car = new BLL.Car();
            var q = await car.AddAsync(c);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.Car>> UpdateAsync(int id, DTO.Car c)
        {
            BLL.Car car = new BLL.Car();
            var q = await car.UpdateAsync(id, c);
            return q;
        }

        [HttpPut]
        [Route("available")]

        public async Task<List<DTO.Car>> UpdateAvailableAsync(int id)
        {
            BLL.Car car = new BLL.Car();
            var q = await car.UpdateAvailableAsync(id);
            return q;
        }

        [HttpDelete]
        public async Task<List<DTO.Car>> DeleteAsync(int id)
        {
            BLL.Car car = new BLL.Car();
            var q = await car.DeleteAsync(id);
            return q;
        }

    }
}
