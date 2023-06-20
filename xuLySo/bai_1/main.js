function tinhTheTich() {
    var banKinh = document.getElementById('banKinh').value;
    var theTich = (4 / 3) * Math.PI * Math.pow(banKinh, 3);
    document.getElementById('ketQua').innerHTML = 'Thể tích hình cầu: ' + theTich.toFixed(2);
}
