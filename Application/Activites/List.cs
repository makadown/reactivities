using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activites
{
    /// <summary>
    /// This will be the list of activities.
    /// Dont confuse with Generic.List
    /// </summary>
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            //private readonly ILogger<List> _logger;
            public Handler(DataContext context/*, ILogger<List> logger*/)
            {
              //  _logger = logger;
                _context = context;
            }

            public async Task<List<Activity>> Handle(Query request,
                       CancellationToken cancellationToken)
            {
              /*  try
                {
                    for (var i = 0; i < 10; i++)
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Delay(1000, cancellationToken);
                        _logger.LogInformation($"Task {i} has completed");
                    }
                }
                catch (System.Exception ex ) when (ex is TaskCanceledException)
                {
                    _logger.LogInformation("Task was cancelled");
                }*/
                return await _context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}