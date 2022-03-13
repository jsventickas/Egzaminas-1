"use strict";

var anchors = document.getElementsByClassName("side-link");
var burger = document.getElementById("burger");
var sideNav = document.querySelector(".side-nav");

// Toggles links style
for(var x of anchors){
    x.addEventListener("click", function(){

        for(var x of anchors){
            x.classList.remove("selected");
        }
        this.classList.add("selected");
    })
}

// Toggle links display and burger style
burger.addEventListener("click", function(){
    for(var x of anchors){
        x.classList.toggle("block");
        x.classList.remove("selected");
    }
    sideNav.classList.toggle("transform-side");
    this.classList.toggle("rotate");
});

// Change on resize
window.addEventListener("resize", function(){
     for(var x of anchors){
        x.classList.remove("block");
        x.classList.remove("selected");
    }
    sideNav.classList.remove("transform-side");
    burger.classList.remove("rotate");
});

function changeHeader(event, name){
      var tabs = document.querySelectorAll('.tab');
      var buttons = document.querySelectorAll('button');
      for (var i = 0; i < tabs.length; i++){
       tabs[i].style.display = 'none';
       buttons[i].classList.remove('selected');
      }


      document.getElementById(name).style.display = 'inline-grid';
      event.currentTarget.classList.add('selected');
      setTimeout(function(){
       var tabs = document.querySelectorAll('.tab');
       for (var x of tabs){
       x.classList.remove('tabAnimation');
       }

       document.getElementById(name).classList.add('tabAnimation');
      }, 10);
    }
    changeHeader('first');

    //SWIPER
    var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
