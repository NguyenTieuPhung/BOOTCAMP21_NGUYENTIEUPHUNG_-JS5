function clickCreateDiv () {
    var bt4 = document.querySelector('.bt4');
    for (let i = 1; i <= 10; i++){
        var div = document.createElement('div');
        div.style.padding = '10px';
        if (i % 2 === 0){
            div.style.backgroundColor = 'red';
        }else {
            div.style.backgroundColor = 'blue';
        }
        bt4.appendChild(div);
    }
}