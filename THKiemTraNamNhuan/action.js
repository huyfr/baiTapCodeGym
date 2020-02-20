function checkLeapYear()
{
    let inputYear;

    inputYear = document.getElementById("years").value;

    if (inputYear%4==0)
    {
        if (inputYear%100==0)
        {
            if (inputYear%400==0)
                document.getElementById("result").value="Nam nhuan";
            else
                document.getElementById("result").value="Khong phai nam nhuan";
        }
        else
            document.getElementById("result").value="Nam nhuan";
    }
    else
            document.getElementById("result").value="Khong phai nam nhuan";
}