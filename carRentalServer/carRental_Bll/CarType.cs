using DAL;
using System.ComponentModel;

namespace BLL
{
    public class CarType
    {
        public async Task<List<DTO.CarType>> SelectAllAsync()
        {
            DAL.CarTypes carTypes = new DAL.CarTypes();
            var q = await carTypes.SelectAllAsync();
            return q;
        }

    }
}
