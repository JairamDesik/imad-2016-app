console.log('Loaded!');

//Change the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'It is FUN';

//Move the Image
var img = document.getElementById('img');
img.onclick = functon(){
    img.style.marginLeft = '200px';
}