using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models;
namespace DAL.Converters
{
    public class UserConverters
    {
        public static DTO.User_Dto ToUserDto(Models.User user)
        {
            DTO.User_Dto user1 = new DTO.User_Dto();
            user1.Id = user.Id;
            user1.Name = user.Name;
            user1.Tz = user.Tz;
            user1.PhoneNumber = user.PhoneNumber;
            user1.Password = user.Password;
            user1.CreditNumber = user.CreditNumber;
            user1.ExpirationDate = user.ExpirationDate;
            user1.Cvv = user.Cvv;
            user1.UserTypeId = user.UserTypeId;

            return user1;
        }

        public static List<DTO.User_Dto> ToListUserDto(List<Models.User> listUsers)
        {
            List<DTO.User_Dto> lnew = new List<DTO.User_Dto>();
            foreach (var item in listUsers)
            {
                lnew.Add(ToUserDto(item));
            }
            return lnew;
        }


        public static Models.User ToUserModel(DTO.User_Dto user)
        {
            Models.User user1 = new Models.User();
            user1.Name = user.Name;
            user1.Tz = user.Tz;
            user1.PhoneNumber = user.PhoneNumber;
            user1.Password = user.Password;
            user1.CreditNumber = user.CreditNumber;
            user1.ExpirationDate = user.ExpirationDate;
            user1.Cvv = user.Cvv;
            user1.UserTypeId = user.UserTypeId;

            return user1;
        }

        //public static DTO_DAL.User ToUserDtoDal(DTO.User_Dto user)
        //{
        //    DTO_DAL.User user1 = new DTO_DAL.User();
        //    user1.Name = user.Name;
        //    user1.Tz = user.Tz;
        //    user1.PhoneNumber = user.PhoneNumber;
        //    user1.Password = user.Password;
        //    user1.CreditNumber = user.CreditNumber;
        //    user1.ExpirationDate = user.ExpirationDate;
        //    user1.Cvv = user.Cvv;
        //    user1.UserTypeId = user.UserTypeId;

        //    return user1;
        //}
    }
}
