
 $(document).ready(function() {
  // to add plagin for gallery
  $('.grid-container').masonry({
          itemSelector: '.container-item',
          columnWidth: '.sizer'
  });
  // masonry 2
  $('.grid-container-another').masonry({
    itemSelector: '.container-item',
    columnWidth: '.sizer'
});
  
  // another gallery
  $('.grid-container-another').hide();
  $('.btn-next-block-galery').on('click', () =>  {
    
    $('.grid-container-another').show(600);
    $('.btn-next-block-galery').hide(600);   
  });
 
});
 