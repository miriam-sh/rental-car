using Bll;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        [HttpGet]
        public async Task<List<DTO.Rental>> SellectAllAsync()
        {
            BLL.Rental Rental = new BLL.Rental();
            var q = await Rental.SelectAllAsync();
            return q;
        }

        [HttpGet("{id}")]
        public async Task<List<DTO.Rental>> SellectByIdlAsync(int id)
        {
            BLL.Rental Rental = new BLL.Rental();
            var q = await Rental.SelectByIdAsync(id);
            return q;
        }


        [HttpPost]
        public async Task<List<DTO.Rental>> AddAsync(DTO.Rental c)
        {
            BLL.Rental Rental = new BLL.Rental();
            try
            {
                var q = await Rental.AddAsync(c);
                return q;
            }
            catch (rentalException ex)
            {
                Response.StatusCode = 462;
                return null;
            }
        }

        [HttpPut]
        public async Task<List<DTO.Rental>> UpdateReturnAsync(int id)
        {
            BLL.Rental Rental = new BLL.Rental();
            return await Rental.UpdateReturnAsync(id);
        }

        [HttpDelete]
        public async Task<List<DTO.Rental>> DeleteAsync(int id)
        {
            BLL.Rental Rental = new BLL.Rental();
            return await Rental.DeleteAsync(id);
        }



    }
}
