using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarTypesController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.CarType>> SellectAllAsync()
        {
            BLL.CarType carType = new BLL.CarType();
            var q = await carType.SelectAllAsync();
            return q;
        }
    }
}
