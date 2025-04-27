using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{

    public class CarModel
    {
        public short Id { get; set; }

        public string Company { get; set; } = null!;

        public string Model { get; set; } = null!;

        public short CarTypeId { get; set; }

        public string? Img { get; set; }

    }

}
