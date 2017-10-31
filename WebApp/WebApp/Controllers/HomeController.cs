using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Redirect the user to the index/home page
        /// </summary>
        /// <returns>Returns the home page view</returns>
        public ActionResult Index()
        {
            return View();
        }
    }
}