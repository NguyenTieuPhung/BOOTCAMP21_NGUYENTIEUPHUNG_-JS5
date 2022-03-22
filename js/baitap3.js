function giaiThua() {
    var number = document.querySelector('.numbern-bt3');
    var giaiThuaN = document.querySelector('.giaiThua-bt3');
    var numberVal = +number.value;
    var giaiThua = 1;

    if (numberVal < 1) {
        giaiThuaN.value = 'Lỗi: n phải lớn hơn 0. Nhập lại n!';
    } else {
        for (let i = 1; i <= numberVal; i++) {
            giaiThua = giaiThua * i;
        }
        giaiThuaN.value = giaiThua;
    }

}
