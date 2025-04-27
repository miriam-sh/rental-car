namespace DTO
{
    public class User
    {
        public short Id { get; set; }

        public string Name { get; set; }

        public string Tz { get; set; }

        public string PhoneNumber { get; set; }

        public string Password { get; set; }

        public string CreditNumber { get; set; }

        public DateTime ExpirationDate { get; set; }

        public string Cvv { get; set; }

        public short UserTypeId { get; set; }

        public string UserType  { get; set; }

    }
}
