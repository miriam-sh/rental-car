using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{

    public class Car
    {

        /*
        public short Id { get; set; }

        public string LicensePlate { get; set; }

        public short CarModelId { get; set; }

        public short NumberOfSeats { get; set; }

        public short YearBook { get; set; }

        public bool AutomaticGear { get; set; }

        public short DriveTypeId { get; set; }

        public double PricePerHour { get; set; }

        public double PricePerLiter { get; set; }

        public double FuelConsumptionPerKm { get; set; }

        public short Balance { get; set; }

        public string? City { get; set; }

        public string? Street { get; set; }

        public bool Available { get; set; }

        public string Model { get; set; }

        public string Company { get; set; }

        public string? DriveType { get; set; }

        */

        public short Id { get; set; }

        public string LicensePlate { get; set; }

        public short CarModelId { get; set; }

        public short NumberOfSeats { get; set; }

        public short YearBook { get; set; }

        public bool AutomaticGear { get; set; }

        public short DriveTypeId { get; set; }

        public double PricePerHour { get; set; }

        public double FuelConsumptionPerKm { get; set; }

        public short Balance { get; set; }

        public string City { get; set; } = null!;

        public string Street { get; set; } = null!;

        public bool Available { get; set; }

    }
}
