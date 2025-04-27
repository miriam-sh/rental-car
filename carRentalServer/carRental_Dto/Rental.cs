using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{

    public partial class Rental
    {
        public short Id { get; set; }

        public short UserId { get; set; }

        public short CarId { get; set; }

        public DateTime DateAndTime { get; set; }

        public bool Returned { get; set; }

    }

}
