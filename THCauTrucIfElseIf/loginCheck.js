function loginCheck()
{
    let inputUser;
    let inputPassword;

    inputUser = document.getElementById("username").value;
    inputPassword = document.getElementById("password").value;

    if (inputUser === "Admin")
    {
        if (inputPassword === "TheMaster")
            alert("Welcome");
        else
            if (inputPassword === "null")
                alert("Canceled");
            else
                alert("Wrong password");
    }
    else
    {
        if (inputUser === "null")
            alert("Canceled");
        else
            alert("I don't know you");
    }

}