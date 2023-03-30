function button_click() {
    if(document.querySelector('h1').style.color=='rgb(90, 201, 148)') {
        document.querySelector('h1').style.color = 'blue';
        document.querySelector('.button').style.borderColor = 'blue';
    } else {
        document.querySelector('h1').style.color = 'rgb(90, 201, 148)';
        document.querySelector('.button').style.borderColor = 'rgb(90, 201, 148)';
    }
}