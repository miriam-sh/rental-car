using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class User
    {
        public async Task<List<DTO.User_Dto>> SelectAllAsync()
        {
            DAL.User Users = new DAL.User();
            var q = await Users.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.User_Dto>> AddAsync(DTO.User_Dto User)
        {
            DAL.User Users = new DAL.User();
            var x = await Users.AddAsync(User);
            return x;
        }

        public async Task<List<DTO.User_Dto>> UpdateAsync(int id, DTO.User_Dto User)
        {
            DAL.User Users = new DAL.User();
            var x = await Users.UpdateAsync(id, User);
            return x;
        }

        public async Task<List<DTO.User_Dto>> DeleteAsync(int id)
        {
            DAL.User Users = new DAL.User();
            var x = await Users.DeleteAsync(id);
            return x;
        }
    }
}
