using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.User_Dto>> SellectAllAsync()
        {
            BLL.User User = new BLL.User();
            var q = await User.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.User_Dto>> AddAsync(DTO.User_Dto u)
        {
            BLL.User User = new BLL.User();
            var q = await User.AddAsync(u);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.User_Dto>> UpdateAsync(int id, DTO.User_Dto u)
        {
            BLL.User User = new BLL.User();
            var q = await User.UpdateAsync(id, u);
            return q;
        }

        [HttpDelete]
        public async Task<List<DTO.User_Dto>> DeleteAsync(int id)
        {
            BLL.User User = new BLL.User();
            var q = await User.DeleteAsync(id);
            return q;
        }
    }
}
