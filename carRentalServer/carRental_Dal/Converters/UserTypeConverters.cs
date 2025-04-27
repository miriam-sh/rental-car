using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL.Converters
{
    public class UserTypeConverters
    {
        public static DTO.UserType_Dto ToUserTypeDto(Models.UserType userType)
        {
            DTO.UserType_Dto userType1 = new DTO.UserType_Dto();
            userType1.Id = userType.Id;
            userType1.Description = userType.Description;
            return userType1;
        }

        public static List<DTO.UserType_Dto> ToListUserTypeDto(List<Models.UserType> listUserTypes)
        {
            List<DTO.UserType_Dto> lnew = new List<DTO.UserType_Dto>();
            foreach (var item in listUserTypes)
            {
                lnew.Add(ToUserTypeDto(item));
            }
            return lnew;
        }


        public static Models.UserType ToUserTypeModel(DTO.UserType_Dto userType)
        {
            Models.UserType userType1 = new Models.UserType();
            userType1.Id = userType.Id;
            userType1.Description = userType.Description;

            return userType1;
        }
    }
}
