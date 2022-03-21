using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    /// <summary>
    /// This will be the controller from every other controller will be inherited from
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
        /// <summary>
        /// Property to have access to the Mediator implementation.
        /// </summary>
        /// <typeparam name="IMediator"></typeparam>
        /// <returns></returns>
        protected IMediator Mediator => _mediator ??= HttpContext
                    .RequestServices.GetService<IMediator>();
    }
}