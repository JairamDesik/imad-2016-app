console.log('Loaded!');

//Change the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'It is FUN';

//Move the Image
var img = document.getElementById('imad');
img.onclick=function(){
    img.style.marginLeft = '100px';
};