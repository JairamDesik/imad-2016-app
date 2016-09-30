console.log('Loaded!');

//Change the main-text
var element = document.getElementById('main-text');
element.innerHTML = 'It is FUN';

//Move the Image
//var img = document.getElementById('imad');
//var marginLeft = 0;
//function moveRight(){
//    marginLeft= marginLeft+10;
//    img.style.marginLeft= marginLeft+'px';
//}
//img.onclick=function(){
//    var interval=setInterval(moveRight,10);
//};

//Counter code
var button = document.getElementyById('countre');
var counter = 0;
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};