using ApiEvaluationTask.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiEvaluationTask.MockData
{
    public class UserList : IUserList
    {
        List<UserLoginViewModel> userLoginViewModels = new List<UserLoginViewModel>();
        public UserList()
        {
            userLoginViewModels.Add(new UserLoginViewModel
            {
                Email = "test1@gmail.com",
                Password = "test123"
            });
            userLoginViewModels.Add(new UserLoginViewModel
            {
                Email = "test2@gmail.com",
                Password = "test123"
            });
            userLoginViewModels.Add(new UserLoginViewModel
            {
                Email = "test3@gmail.com",
                Password = "test123"
            });
        }
        public List<UserLoginViewModel> GetUsers()
        {
            return userLoginViewModels;
        }
        public UserLoginViewModel GetUserByEmailAndPassword(string email, string password)
        {
            return userLoginViewModels.Where(u => u.Email == email && u.Password == password).FirstOrDefault();
        }


    }
}