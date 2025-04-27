using DAL;
using System.ComponentModel;

namespace BLL
{
    public class DriveType
    {
        public async Task<List<DTO.DriveType>> SelectAllAsync()
        {
            DAL.DriveTypes driveTypes = new DAL.DriveTypes();
            var q = await driveTypes.SelectAllAsync();
            return q;
        }

        public async Task<List<DTO.DriveType>> AddAsync(DTO.DriveType driveType)
        {
            DAL.DriveTypes driveTypes = new DAL.DriveTypes();
            return await driveTypes.AddAsync(driveType);
        }

        public async Task<List<DTO.DriveType>> UpdatePriceAsync(int id, int price)
        {
            DAL.DriveTypes driveTypes = new DAL.DriveTypes();
            return await driveTypes.UpdatePriceAsync(id, price);
        }

        public async Task<List<DTO.DriveType>> DeleteAsync(int id)
        {
            DAL.DriveTypes driveTypes = new DAL.DriveTypes();
            return await driveTypes.DeleteAsync(id);
        }

    }
}
