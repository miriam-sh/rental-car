using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Return
    {
        public async Task<List<DTO.Return_Dto>> SelectAllAsync()
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                var list = Converters.ReturnConverters.ToListReturnDto(await db.Returns.Include(r => r.Rental).ToListAsync());
                return list;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        //public  async Task<List<Models.Return>> SelectAllAsync()
        //{
        //    try
        //    {
        //        Models.RentalCarsContext db = new Models.RentalCarsContext();
        //        return await db.Returns.ToListAsync();
        //    }
        //    catch (Exception e)
        //    {
        //        throw e;
        //    }
        //}

        public async Task<List<DTO.Return_Dto>> AddAsync(DTO.Return_Dto ret)
        {
            try
            {
                Models.RentalCarsContext db = new Models.RentalCarsContext();
                db.Returns.Add(DAL.Converters.ReturnConverters.ToReturnModel(ret));
                int s = await db.SaveChangesAsync();

                return Converters.ReturnConverters.ToListReturnDto(await db.Returns.ToListAsync());
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        //public async Task<List<Models.Return>> AddAsync(Models.Return ret)
        //{
        //    try
        //    {
        //        Models.RentalCarsContext db = new Models.RentalCarsContext();
        //        db.Returns.Add(ret);
        //        int s = await db.SaveChangesAsync();

        //        return await db.Returns.ToListAsync();
        //    }
        //    catch (Exception e)
        //    {
        //        throw e;
        //    }
        //}

        //public  async Task<List<Models.Return>> UpdateAsync(int id, Models.Return ret)
        //{
        //    Models.RentalCarsContext db = new Models.RentalCarsContext();
        //    Models.Return ret1 = await db.Returns.FirstOrDefaultAsync(r => r.Id == id);
        //    if (ret1 == null)
        //        return null;

        //    ret1.Id = ret.Id;
        //    ret1.RentalId = ret.RentalId;
        //    ret1.DateAndTime = ret.DateAndTime;
        //    ret1.Balance = ret.Balance;
        //    ret1.TotalPayable = ret.TotalPayable;
        //    ret1.Paid = ret.Paid;

        //    int x = await db.SaveChangesAsync();
        //    return await db.Returns.ToListAsync();
        //}

        public async Task<List<DTO.Return_Dto>> UpdateAsync(int id, DTO.Return_Dto ret)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Return ret1 = await db.Returns.FirstOrDefaultAsync(r => r.Id == id);
            if (ret1 == null)
                return null;

            ret1.Id = ret.Id;
            ret1.RentalId = ret.RentalId;
            ret1.DateAndTime = ret.DateAndTime;
            ret1.Balance = ret.Balance;
            ret1.TotalPayable = ret.TotalPayable;
            ret1.Paid = ret.Paid;

            int x = await db.SaveChangesAsync();
            return Converters.ReturnConverters.ToListReturnDto(await db.Returns.ToListAsync());
        }

        public  async Task<List<DTO.Return_Dto>> DeleteAsync(int id)
        {
            Models.RentalCarsContext db = new Models.RentalCarsContext();
            Models.Return ret1 = await db.Returns.FirstOrDefaultAsync(r => r.Id == id);
            if (ret1 == null)
                return null;
            db.Returns.Remove(ret1);
            int x = await db.SaveChangesAsync();
            return Converters.ReturnConverters.ToListReturnDto(await db.Returns.ToListAsync());
        }

    }
}

