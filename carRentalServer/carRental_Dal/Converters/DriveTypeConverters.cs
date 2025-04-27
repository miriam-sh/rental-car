using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Converters
{
    public class DriveTypeConverters
    {
        public static DTO.DriveType ToDriveTypeDto(Models.DriveType driveType)
        {
            DTO.DriveType driveType1 = new DTO.DriveType();
            driveType1.PricePerLiter = driveType.PricePerLiter;
            driveType1.Description = driveType.Description;
            driveType1.Id = driveType.Id;
            return driveType1;

        }

        public static List<DTO.DriveType> ToListDriveTypeDto(List<Models.DriveType> listCars)
        {
            List<DTO.DriveType> lnew = new List<DTO.DriveType>();
            foreach (var item in listCars)
            {
                lnew.Add(ToDriveTypeDto(item));
            }
            return lnew;
        }


        public static Models.DriveType ToDriveTypeModel(DTO.DriveType driveType)
        {
            Models.DriveType driveType1 = new Models.DriveType();
            driveType1.PricePerLiter = driveType.PricePerLiter;
            driveType1.Description = driveType.Description;
            return driveType1;

        }
    }
}
