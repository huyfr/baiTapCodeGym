

function executeBMI() {
    let weight, height, result, comment;

    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    comment = document.getElementById("commentBMI").value;
    result = document.getElementById("resultBMI").value;

    result = weight / ((height/100)*(height/100));

    if (weight == "null" || height == "null")
    {
        alert("Vui long nhap lai");
    }
    else
    {
        if (weight <= 0 || height <= 0)
        {
            alert("Vui long nhap lai")
        }
        else
        {
            if (result < 18.5)
            {
                document.getElementById("resultBMI").value = result;
                document.getElementById("commentBMI").value = "Underweight"
            }
            else
            {
                if (result < 25)
                {
                    document.getElementById("resultBMI").value = result;
                    document.getElementById("commentBMI").value = "Normal";
                }
                else
                {
                    if (result < 30)
                    {
                        document.getElementById("resultBMI").value = result;
                        document.getElementById("commentBMI").value = "Overweight";
                    }
                    else
                    {
                        document.getElementById("resultBMI").value = result;
                        document.getElementById("commentBMI").value = "Obese";
                    }
                }
            }
        }
    }
}

function clearInput() {
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
    document.getElementById("resultBMI").value="";
    document.getElementById("commentBMI").value="";
}