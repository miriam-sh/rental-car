using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypeController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.UserType_Dto>> SellectAllAsync()
        {
            BLL.UserType UserType = new BLL.UserType();
            var q = await UserType.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.UserType_Dto>> AddAsync(DTO.UserType_Dto c)
        {
            BLL.UserType UserType = new BLL.UserType();
            var q = await UserType.AddAsync(c);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.UserType_Dto>> UpdateAsync(int id, DTO.UserType_Dto c)
        {
            BLL.UserType UserType = new BLL.UserType();
            var q = await UserType.UpdateAsync(id, c);
            return q;
        }

        [HttpDelete]
        public async Task<List<DTO.UserType_Dto>> DeleteAsync(int id)
        {
            BLL.UserType UserType = new BLL.UserType();
            var q = await UserType.DeleteAsync(id);
            return q;
        }
    }
}
