$(function(){
    $('.hamburger-btn').click(function(ev){
    ev.preventDefault();
    $(this).toggleClass('active');
    $('.container-box_mw780').toggleClass('visible');
    $('.menu_mw780').toggleClass('visible');
    
        });
    });