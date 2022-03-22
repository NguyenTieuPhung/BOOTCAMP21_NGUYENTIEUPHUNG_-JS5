function tinhTong(){
    var numberx = document.querySelector('.numberx-bt2');
    var numbern = document.querySelector('.numbern-bt2');
    var tinhTongBt2 = document.querySelector('.tong-bt2');
    var numberxVal = +numberx.value;
    var numbernVal = +numbern.value;
    var tong = 0;
    var tich = 1;
    for (let i = 1; i <= numbernVal; i++){
        tich = tich * numberxVal;
        tong = tong + tich;
    }
    tinhTongBt2.value = 'Tổng là: ' + tong;
}