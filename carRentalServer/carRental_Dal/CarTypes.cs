using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CarTypes
    {
        public async Task<List<DTO.CarType>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.CarTypeConverters.ToListCarTypeDto(await db.CarTypes.ToListAsync());
                return list;
            }
            catch(Exception e) 
            { 
                throw e;
            }
        }

    }
}
