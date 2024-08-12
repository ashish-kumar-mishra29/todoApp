using Microsoft.EntityFrameworkCore;
using TodoAppBackend.Entities;

namespace TodoAppBackend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<TodoTask> DailyTasks { get; set; }
        public DbSet<TodoMonthlyTask> MonthlyTask { get; set; }
    }
}
