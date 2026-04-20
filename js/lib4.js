
function tinhTien() {
    const soLuong = document.getElementsByClassName("sl");
    const donGia = document.getElementsByClassName("dg");
    const thanhTien = document.getElementsByClassName("tt");

    let tongThanhToan = 0;

    for (let i = 0; i < soLuong.length; i++) {

        thanhTien[i].innerText = 
            parseInt(soLuong[i].innerText) * parseInt(donGia[i].innerText);

        tongThanhToan += parseInt(thanhTien[i].innerText);
    }

    document.getElementById("kq").innerText = tongThanhToan;
}

window.onload = tinhTien;