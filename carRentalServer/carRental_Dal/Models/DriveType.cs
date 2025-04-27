using System;
using System.Collections.Generic;

namespace Models;

public partial class DriveType
{
    public short Id { get; set; }

    public string Description { get; set; } = null!;

    public double PricePerLiter { get; set; }

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();
}
