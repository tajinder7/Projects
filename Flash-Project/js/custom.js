$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.main-header').addClass("sticky");
  }
  else{
    $('.main-header').removeClass("sticky");
  }
});
$(document).ready(function(){

	$('.nav-toggle').click(function(){
		$('body').toggleClass('open');
		$(this).toggleClass('open');
	});
  $('#select-option').click(function(){
    $('.project-links').slideToggle();
    $(this).toggleClass('active');

  });
    $('.tabs.custom-tab .tab a').click(function(){
    $('.tabs.custom-tab ').slideUp();
    $('.webpage').removeClass('active');

  });
   
});

  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

   
    $(".tab-content").hide();
    $(".tab-content:first").show();
    $("ul.tabs li").click(function() {
    
      $(".tab-content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_heading").removeClass("d_active");
    $(".tab_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });

  $(".tab_heading").click(function() {
     
      $(".tab-content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  $('ul.tabs li').last().addClass("tab_last");



  