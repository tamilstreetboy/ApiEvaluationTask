using ApiEvaluationTask.ViewModels;
using System.Collections.Generic;

namespace ApiEvaluationTask.MockData
{
    public interface IUserList
    {
        List<UserLoginViewModel> GetUsers();
        UserLoginViewModel GetUserByEmailAndPassword(string email, string password);
    }
}