$(window).scrollTop(1)
$(window).scroll(function(){
  var sticky = $('.gojek-header'),
  scroll = $(window).scrollTop();
  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(document).on('click','.lavel_menu_toggle',function(){
  $('.gojek-header-right').stop().slideToggle();
  $(this).stop().toggleClass('open');
})
$('.menu-icon').click(function(){
  $('.gojek-header-right').stop().slideUp();
  $('.lavel_menu_toggle').removeClass('open')
})
$(document).on('click','.gojek-header ul li.have_dropdown > a',function(){
  $(this).toggleClass('open');
  $(this).next('.taxi-lavel-menu').slideToggle();
})
$(document).on('click','.services-tabs_content ul.havefive li.more-services',function(e){
    $(this).next('.more_ser').addClass('active');
})
$(document).on('click','.more_ser',function(e){
    $(this).removeClass('active');
})

$(document).on('click','.slider-part.style1 a.show-more',function(e){
    e.preventDefault();
    $('.slider-part.style1').find('.masonry').addClass('open');
    $(this).closest('.masonry-block_.style1').remove();
})
$(document).on('click','.slider-part.style2 a.show-more',function(e){
    e.preventDefault();
    $('.slider-part.style2').find('.masonry').addClass('open');
    $(this).closest('.masonry-block_.style2').remove();
})
$('.about-section-of .faq_toggle').click(function(){
  $('.faq-accordian-main').slideToggle(300);
  $('.about-section-of-data').slideUp(300);
  $('.seodata_toggle').removeClass('active');
  $(this).toggleClass('active');
})
$('.about-section-of .seodata_toggle').click(function(){
  $('.about-section-of-data').slideToggle(300);
  $('.faq-accordian-main').slideUp(300);
  $(this).toggleClass('active');
})

$('.flutter_button').click(function(){
  $(this).closest('.services-banner').toggleClass('open');
  $('.flutter-tech').toggleClass('active');
})