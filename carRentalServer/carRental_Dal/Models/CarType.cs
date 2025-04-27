using System;
using System.Collections.Generic;

namespace Models;

public partial class CarType
{
    public short Id { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<CarModel> CarModels { get; set; } = new List<CarModel>();
}
