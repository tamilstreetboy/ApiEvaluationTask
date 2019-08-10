using ApiEvaluationTask.MockData;
using ApiEvaluationTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ApiEvaluationTask.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// submit form
        /// </summary>
        /// <param name="loginViewModel"></param>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(UserLoginViewModel loginViewModel)
        {
            //check if valid input is given
            if (ModelState.IsValid)
            {
                UserList userList = new UserList();
                //check if users exist in collection
                var user = userList.GetUserByEmailAndPassword(loginViewModel.Email, loginViewModel.Password);
                //if not null redirect news page
                if (user != null)
                {
                    Session["username"] = loginViewModel.Email;
                    return RedirectToAction("News", "Home");
                }
                //else show error maessage
                else
                {
                    ModelState.AddModelError("loginerror", "Invalid email or password");
                    return View("Index");
                }

            }
            return View("Index");

        }
    }
}