function convertMoney() {
    let inputMoney, firstOption, secondOption, convert;
    inputMoney=parseInt(document.getElementById("money").value);
    firstOption=+document.getElementById("first").value;
    secondOption=+document.getElementById("second").value;

    convert= (secondOption/firstOption)*inputMoney;

    document.getElementById("result").value=convert;
}