using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DriveType
    {
        public short Id { get; set; }

        public string Description { get; set; } = null!;

        public double PricePerLiter { get; set; }

    }
}
