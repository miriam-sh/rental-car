using System;
using System.Collections.Generic;

namespace Models;

public partial class Rental
{
    public short Id { get; set; }

    public short UserId { get; set; }

    public short CarId { get; set; }

    public DateTime DateAndTime { get; set; }

    public bool Returned { get; set; }

    public virtual Car Car { get; set; } = null!;

    public virtual ICollection<Return> Returns { get; set; } = new List<Return>();

    public virtual User User { get; set; } = null!;
}
