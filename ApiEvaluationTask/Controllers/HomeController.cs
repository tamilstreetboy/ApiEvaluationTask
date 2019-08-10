using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApiEvaluationTask.Controllers
{
    public class HomeController : Controller
    {
        /// <summary>
        /// Display for submission page
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            //check whether session is null
            //if not null redirect to login page
            if (Session["username"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }

        }
        /// <summary>
        /// display new page
        /// </summary>
        /// <returns></returns>
        public ActionResult News()
        {
            ViewBag.Title = "Home Page";
            //check if user name is not null
            //if not null show news
            if (Session["username"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
            
        }
    }
}
