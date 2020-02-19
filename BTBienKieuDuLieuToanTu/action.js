// bai1
function tongDiem() {
    let VL, HH, SH;

    VL = parseInt(document.getElementById("VL").value);
    HH = parseInt(document.getElementById("HH").value);
    SH = parseInt(document.getElementById("SH").value);

    let sum=VL+HH+SH;

    document.getElementById("tong").value =sum;
}

function tbc() {
    let VL, HH, SH;

    VL = parseInt(document.getElementById("VL").value);
    HH = parseInt(document.getElementById("HH").value);
    SH = parseInt(document.getElementById("SH").value);

    let tbc=(VL+HH+SH)/3;

    document.getElementById("tbc").value =tbc;
}
// end bai1

// bai2
function convertTemperature() {
    let doC, doF;

    doC = parseInt(document.getElementById("doC").value);;

    doF = ((doC*9)/5)+32;

    document.getElementById("doF").value=doF;
}
// bai2

// bai3+4

function tinhDienTichTheoD() {
    let diameter, area;

    diameter = parseInt(document.getElementById("duongKinh").value);

    area = ((diameter*diameter)/4) * (Math.PI);

    document.getElementById("ketQuaDienTichD").value = area;
}
function tinhChuViTheoD() {
    let diameter, perimeter;

    diameter = parseInt(document.getElementById("duongKinh").value);

    perimeter = diameter * (Math.PI);

    document.getElementById("ketQuaChuViD").value = perimeter;
}
function tinhDienTichTheoR() {
    let radius, area;

    radius = parseInt(document.getElementById("banKinh").value);

    area = (radius*radius) * (Math.PI);

    document.getElementById("ketQuaDienTichR").value = area;
}
function tinhChuViTheoR() {
    let radius, diameter;

    radius = parseInt(document.getElementById("banKinh").value);

    diameter = (2*radius) * (Math.PI);

    document.getElementById("ketQuaChuViR").value = diameter;
}
// end bai3+4
