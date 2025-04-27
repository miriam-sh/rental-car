using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReturnsController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.Return_Dto>> SellectAllAsync()
        {
            BLL.Return Return = new BLL.Return();
            var q = await Return.SelectAllAsync();
            return q;
        }

        [HttpPost]
        public async Task<List<DTO.Return_Dto>> AddAsync(DTO.Return_Dto c)
        {
            BLL.Return Return = new BLL.Return();
            var q = await Return.AddAsync(c);
            return q;
        }

        [HttpPut]
        public async Task<List<DTO.Return_Dto>> UpdateAsync(int id, DTO.Return_Dto c)
        {
            BLL.Return Return = new BLL.Return();
            var q = await Return.UpdateAsync(id, c);
            return q;
        }

        [HttpDelete]
        public async Task<List<DTO.Return_Dto>> DeleteAsync(int id)
        {
            BLL.Return Return = new BLL.Return();
            var q = await Return.DeleteAsync(id);
            return q;
        }
    }
}
