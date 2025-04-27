using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Return_Dto
    {
        public short Id { get; set; }

        public short RentalId { get; set; }

        public DateTime DateAndTime { get; set; }

        public short Balance { get; set; }

        public double TotalPayable { get; set; }

        public bool Paid { get; set; }


    }
}
