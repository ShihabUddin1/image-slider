

var photos = ["image/shihab1.jpg","image/sharukh.jpg","image/katrenia1.jpg","image/Rajon.jpg","image/salman1.jpg","image/katrenia2.jpg","image/shihab2.jpg","image/salman2.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function next() {
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }   
}

function prev() {

    count--;
    if(count < 0){
        count = photos.length -1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }   

}