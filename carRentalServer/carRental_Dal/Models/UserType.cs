using System;
using System.Collections.Generic;

namespace Models;

public partial class UserType
{
    public short Id { get; set; }

    public string Description { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
