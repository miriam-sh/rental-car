using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriveTypesController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.DriveType>> SellectAllAsync()
        {
            BLL.DriveType driveType = new BLL.DriveType();
            var q = await driveType.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.DriveType>> AddAsync(DTO.DriveType c)
        {
            BLL.DriveType driveType = new BLL.DriveType();
            var q = await driveType.AddAsync(c);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.DriveType>> UpdatePriceAsync(int id, int price)
        {
            BLL.DriveType driveType = new BLL.DriveType();
            return await driveType.UpdatePriceAsync(id, price);
        }

        [HttpDelete]
        public async Task<List<DTO.DriveType>> DeleteAsync(int id)
        {
            BLL.DriveType driveType = new BLL.DriveType();
            var q = await driveType.DeleteAsync(id);
            return q;
        }

    }
}
