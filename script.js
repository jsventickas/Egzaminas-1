'use strict';


var anchors = document.getElementsByClassName('link')
var burger = document.getElementsByClassName('burger');

//Toggles link style
for (var x of anchors){
x.addEventListener('click', function(){

    for(var x of anchors){
     x.classList.remove('selected');
    }
    this.classList.add('selected');
   })
}

//Toggle links display and burger style
burger.addEventListener('click', function(){
 for (var x of anchors){
  x.classList.toggle('block');
  x.classList.remove('selected');
 }
 this.classList.toggle('rotate');
});

//Change on resize
window.addEventListener('resize', function(){
for(var x of anchors){
 x.classList.remove('block');
 x.classList.remove('selected');
}
burger.classList.remove('rotate');

})
