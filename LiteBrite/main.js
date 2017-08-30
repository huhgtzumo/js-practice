function main(){
  var colorClass = '';
 $('.select-color') .click(function(){
   var selectedColor = 
       $(this).attr('class');
   switch (selectedColor) {
  case 'select-color cyan not-selected':
    // Set color on box div
     colorClass = 'cyan'  ;
    break;
  case 'select-color yellow not-selected':
    // Set color on box div
        colorClass = 'yellow'  ;
    break;
  case 'select-color magenta not-selected':
    // Set color on box div
        colorClass = 'magenta'  ;
    break;
       
}
   
   $(this).removeClass('not-selected');
   $(this).siblings().addClass('not-selected');
   
 });
  $('.box') .click(function(){
   $(this).toggleClass(colorClass);
});
  
  $('.toggle-blink').click(function(){
    if (colorClass) {
      $(this).toggleClass('opacity')
    setInterval(function(){
     $('.box.magenta, .box.yellow, .box.cyan').toggleClass('blink');
}, 350);
    }; 
  });
 
}
  
  

$(document).ready(main);


