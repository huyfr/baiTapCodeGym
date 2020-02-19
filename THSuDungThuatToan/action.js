function acreage() {
    var inputWidth;
    var inputHeight;

    inputHeight=prompt("Nhap chieu rong: ");
    inputWidth=prompt("Nhap chieu dai: ");

    var width=parseInt(inputWidth);
    var height=parseInt(inputHeight);

    var area=width*height;
    document.write("Dien tich: "+area);
}