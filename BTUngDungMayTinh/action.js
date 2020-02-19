function input(value1)
{
    document.getElementById("inputNumber").value+=value1;
}

function equalButton()
{
    document.getElementById("inputNumber").value=eval(document.getElementById("inputNumber").value);
}

function cleanNumber()
{
    document.getElementById("inputNumber").value="";
}

function sinButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=Math.sin(a);
}

function percentButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=(a/100);
}

function tanButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=Math.tan(a);
}

function sqrtButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=Math.sqrt(a);
}

function cosButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=Math.cos(a);
}

function logButton()
{
    let a;

    a=document.getElementById("inputNumber").value;

    document.getElementById("inputNumber").value=Math.log(a);
}

function errorButton(type)
{
    let a;
    if (type===1)
    {
       alert("Chua co chuc nang nay!");
    }
    else if (type===2)
    {
        alert("Chua co chuc nang nay!");
    }
    else if (type===3)
    {
        alert("Chua co chuc nang nay!");
    }
    else if (type===4)
    {
        alert("Chua co chuc nang nay!");
    }
    else if (type===5)
    {
        alert("Chua co chuc nang nay!");
    }
    else if (type===6)
    {
        alert("Chua co chuc nang nay!");
    }
    else
    {
        alert("Chua co chuc nang nay!");
    }
}
