using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class UserType
    {
        public async Task<List<DTO.UserType_Dto>> SelectAllAsync()
        {
            DAL.UserType UserTypes = new DAL.UserType();
            var q = await UserTypes.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.UserType_Dto>> AddAsync(DTO.UserType_Dto UserType)
        {
            DAL.UserType UserTypes = new DAL.UserType();
            var x = await UserTypes.AddAsync(UserType);
            return x;
        }

        public async Task<List<DTO.UserType_Dto>> UpdateAsync(int id, DTO.UserType_Dto UserType)
        {
            DAL.UserType UserTypes = new DAL.UserType();
            var x = await UserTypes.UpdateAsync(id, UserType);
            return x;
        }

        public async Task<List<DTO.UserType_Dto>> DeleteAsync(int id)
        {
            DAL.UserType UserTypes = new DAL.UserType();
            var x = await UserTypes.DeleteAsync(id);
            return x;
        }
    }
}
