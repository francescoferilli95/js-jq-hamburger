/**
 * 
 *  TASK
 *  SHOW & HIDE THE HAMBURGER MENU
 * 
/**/

// REFS

var showBtn = $('.fa-bars');
var hideBtn = $('.fa-times');
var hamburgerMenu = $('.hamburger-menu');

// SHOW THE HAMBURGER MENU

showBtn.click(function(){
    hamburgerMenu.show();
});


// HIDE THE HAMBURGER MENU

hideBtn.click(function(){
    hamburgerMenu.hide();
});