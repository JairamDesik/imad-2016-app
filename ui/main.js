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
var button = document.getElementById('counter');
button.onclick = function () {
    //Create a request object
    var request = new XMLHttpRequest();
    //Captuer the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter=request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
   //Make a request
   request.open('GET','http://jairamdesik.imad.hasura-app.io/counter',true);
   request.send(null);
};

