using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoAppBackend.Data;
using TodoAppBackend.Entities;

namespace TodoAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoMonthlyController : ControllerBase
    {
        private readonly DataContext _context;

        public TodoMonthlyController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetTask()
        {
            var task = await _context.MonthlyTask.ToListAsync();
            return Ok(task);
        }
        [HttpPost]
        public async Task<IActionResult> addTask(TodoMonthlyTask task)
        {
            var existing = await _context.MonthlyTask.FirstOrDefaultAsync();
            _context.MonthlyTask.Add(task);
            await _context.SaveChangesAsync();
            return Ok(await _context.MonthlyTask.ToListAsync());

        }
        [HttpDelete]
        public async Task<IActionResult> deleteTask(int id)
        {
            var existing = await _context.MonthlyTask.FindAsync(id);
            if(existing == null) 
            {
                return BadRequest();
            }
            _context.MonthlyTask.Remove(existing);
            await _context.SaveChangesAsync();
            return Ok(await _context.MonthlyTask.ToListAsync());
        }

        
    }
}
