function soNguyenDuongNhoNhat (){
    var ketQua = document.querySelector('.ketQuaBt1');
    tong = 0;
    var n = 0;
    while (tong < 10000){
        n++;
        tong = tong + n;
    }
    ketQua.value = 'Số nguyên dương nhỏ nhất thoả điều kiện là: ' + n;
}