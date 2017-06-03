$(document).ready(function(){
	$('.search').mouseenter(function(){
		$(this).addClass('open');
	})
	$('.search').mouseleave(function(){
		$(this).removeClass('open');
	})

    $('ul.tabs').tabs();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
     $('.modal').modal();
     $('#modal1').modal('open');

 	 $('.dropdown-button').dropdown('open');
     $('.dropdown-button').dropdown('close');
     	$('.toggle-chat').click(function(){
		$('body').addClass('open');
	})
     		$('.back-toggle').click(function(){
		$('body').removeClass('open');
	})
  });