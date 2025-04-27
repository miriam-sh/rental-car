using System;
using System.Collections.Generic;

namespace Models;

public partial class Return
{
    public short Id { get; set; }

    public short RentalId { get; set; }

    public DateTime DateAndTime { get; set; }

    public short Balance { get; set; }

    public double TotalPayable { get; set; }

    public bool Paid { get; set; }

    public virtual Rental Rental { get; set; } = null!;
}
