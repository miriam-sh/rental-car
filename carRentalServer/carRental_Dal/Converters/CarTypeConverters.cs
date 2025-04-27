using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Converters
{
    public class CarTypeConverters
    {
        public static DTO.CarType ToCarTypeDto(Models.CarType CarType)
        {
            DTO.CarType CarType1 = new DTO.CarType();
            CarType1.Description = CarType.Description;
            CarType1.Id = CarType.Id;
            return CarType1;

        }

        public static List<DTO.CarType> ToListCarTypeDto(List<Models.CarType> listCarTypes)
        {
            List<DTO.CarType> lnew = new List<DTO.CarType>();
            foreach (var item in listCarTypes)
            {
                lnew.Add(ToCarTypeDto(item));
            }
            return lnew;
        }


        public static Models.CarType ToCarTypeModel(DTO.CarType CarType)
        {
            Models.CarType CarType1 = new Models.CarType();
            CarType1.Description = CarType.Description;
            CarType1.Id = CarType.Id;
            return CarType1;

        }
    }
}
