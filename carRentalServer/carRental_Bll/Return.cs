using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Return
    {
        public async Task<List<DTO.Return_Dto>> SelectAllAsync()
        {
            DAL.Return Returns = new DAL.Return();
            var q = await Returns.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.Return_Dto>> AddAsync(DTO.Return_Dto Return)
        {
            DAL.Return Returns = new DAL.Return();
            var x =  await Returns.AddAsync(Return);
            return x;
        }

        public async Task<List<DTO.Return_Dto>> UpdateAsync(int id, DTO.Return_Dto Return)
        {
            DAL.Return Returns = new DAL.Return();
            var x = await Returns.UpdateAsync(id, Return);
            return x;
        }

        public async Task<List<DTO.Return_Dto>> DeleteAsync(int id)
        {
            DAL.Return Returns = new DAL.Return();
            var x = await Returns.DeleteAsync(id);
            return x;
        }
    }
}
