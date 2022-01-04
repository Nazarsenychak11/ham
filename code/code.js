'use strict'

$(document).ready(function($){

    // tabs services section
    $('.tab-img-li').hide();
    $('.tab-img-li:first').show();
    $('.tab-img-li:first').addClass('tab-img-li-active');
    $('.tab-title-li').click(function(){
        $('.tab-title-li').removeClass('tab-title-li-active').eq($(this).index()).addClass('tab-title-li-active');
        $('.tab-img-li').hide().eq($(this).index()).fadeIn(800);
    });
    // tabs end---
// our amazing work
    $('.work-tab-li').click(function(){
        $('.work-tab-li').removeClass('work-tab-li-active').eq($(this).index()).addClass('work-tab-li-active');
    });
// click tabs
    
    $('.all').on('click', () => {
        $('.work-photo-block').show(600);
    });
    $('.graphic').on('click', () => {
        $('.work-photo-block').hide();
        $('.graphic-des').show(400);
    });
    $('.web').on('click', () => {
        $('.work-photo-block').hide();
        $('.web-des').show(400);
    });
    $('.landing').on('click', () => {
        $('.work-photo-block').hide();
        $('.landing-des').show(400);
    });
    $('.wordpres').on('click', () => {
        $('.work-photo-block').hide();
        $('.wordpres-des').show(400);
    });
        
    // btn show next photo block
    $('.work-photo-section-next').hide();
    $('.btn-next-block').on('click', () =>  {
        $('.work-photo-section-next').show(600);
        $('.btn-load').hide(600);
    });

});