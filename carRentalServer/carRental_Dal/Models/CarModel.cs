using System;
using System.Collections.Generic;

namespace Models;

public partial class CarModel
{
    public short Id { get; set; }

    public string Company { get; set; } = null!;

    public string Model { get; set; } = null!;

    public short CarTypeId { get; set; }

    public string? Img { get; set; }

    public virtual CarType CarType { get; set; } = null!;

    public virtual ICollection<Car> Cars { get; set; } = new List<Car>();
}
