using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Converters
{
    public class ReturnConverters
    {
        public static DTO.Return_Dto ToReturnDto(Models.Return Return)
        {
            DTO.Return_Dto return1 = new DTO.Return_Dto();
            return1.Id = Return.Id;
            return1.RentalId = Return.RentalId;
            return1.DateAndTime = Return.DateAndTime;
            return1.Balance = Return.Balance;
            return1.TotalPayable = Return.TotalPayable;
            return1.Paid = Return.Paid;

            return return1;

        }

        public static Models.Return ToReturnModel(DTO.Return_Dto Return)
        {
            Models.Return return1 = new Models.Return();
            return1.Id = Return.Id;
            return1.RentalId = Return.RentalId;
            return1.DateAndTime = Return.DateAndTime;
            return1.Balance = Return.Balance;
            return1.TotalPayable = Return.TotalPayable;
            return1.Paid = Return.Paid;

            return return1;
        }

        public static List<DTO.Return_Dto> ToListReturnDto(List<Models.Return> Returns)
        {
            List<DTO.Return_Dto> lnew = new List<DTO.Return_Dto>();
            foreach (var Return in Returns)
            {
                lnew.Add(ToReturnDto(Return));
            }
            return lnew;
        }
    }
}
