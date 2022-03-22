function soNGuyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 3; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function checkSoNguyenTo() {
    var input = document.querySelector('.number-bt5');
    var ketQuaBt5 = document.querySelector('.ketQua-bt5');

    var inputVal = +input.value;
    var ketQua = '';

    if (inputVal >= 2) {
        numberTwo = '2';
    }
    for (let i = 3; i <= inputVal; i += 2) {
        if (soNGuyenTo(i)) {
            ketQua += i;
            ketQua += ' ';
        }
    }
    ketQuaBt5.value = numberTwo + ' ' + ketQua;

}