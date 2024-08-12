using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoAppBackend.Data;
using TodoAppBackend.Entities;

namespace TodoAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly DataContext _context;

        public TodoController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetTask()
        {
            var task = await _context.DailyTasks.ToListAsync();
            return Ok(task);
        }

        [HttpPost]
        public async Task<IActionResult> addTask(TodoTask task)
        {
            var existingTask = await _context.DailyTasks.FirstOrDefaultAsync();
            _context.DailyTasks.Add(task);
            await _context.SaveChangesAsync();
            return Ok(await _context.DailyTasks.ToListAsync());
        }

        [HttpDelete]
        public async Task<IActionResult> deleteTask(int id)
        {
            var findId = await _context.DailyTasks.FindAsync(id);
            if (findId == null)
            {
                return BadRequest();
            }
            _context.DailyTasks.Remove(findId);
            await _context.SaveChangesAsync();
            return Ok(_context.DailyTasks);
        }
    }
}
