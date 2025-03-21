function getvideo(n) {
  var no = n;
  if(no == "1")
  {
    msg = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/jyLkp66neYg?autoplay=1&loop=1&amp;controls=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    document.getElementById("flowVideo").innerHTML  = msg;
  }
}
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
$(document).on('click','[data-toggle="popup"]',function(e){
  e.preventDefault();
  let target = $(this).attr('data-target');
  $('.custom-popup').removeClass('active');
  $(document).find(target).addClass('active');
})

$(document).on('click','.custom-popupbox .close_btn',function(){
  $('.custom-popup').removeClass('active');
})

$("._VIDEO_,.demo-video").fancybox({
    'type':'iframe',
    'transitionIn'  : 'none',
    'transitionOut' : 'none',
    'width': window.innerWidth > 767 ? 900:450,
    'height': window.innerWidth > 767 ? 514:274,
});

$("#faqlink").fancybox({
  'type':'inline',
});

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

$('.banner-section .btn-block a').bind('click', function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior
      var target = $(this).attr("href"); // Set the target as variable
      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top - 70
      }, 800, function () {
          //location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });
      return false;
});