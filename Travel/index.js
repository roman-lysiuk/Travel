console.log('1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48:\n-header +6 (отклонения в пределах 10 пикселей)\n-preview +9\n-steps +9\n-directions +9\n-stories +9\n-footer +6(отклонения в пределах 10px))\n4.Требования к css +8:\n-Не весь макет центрируется при масштабировании;\n-цвет фона не растягивается на всю ширину;\n5.Интерактивность реализована через css +20\nИтого: 106');
$(document).ready(function(){
 $('.header-burger').click(function(event){
    $('.header-burger, .menu').toggleClass('active');
 });
 $('.menu a').click(function(event){
   $('.header-burger, .menu').removeClass('active');
});

$('.image-close').click(function(event){
   $('.header-burger, .menu').removeClass('active');
});

});
