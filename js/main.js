$(document).ready(function() {

	// Nav toggle
	$('.nav-collapse').on('click', function(){
		$('.top-nav ul').toggleClass('showing');
		$('#nav-icon').toggleClass('open');
	});
	
	//Header animation
	var topAnimation = new TimelineMax();

	topAnimation
		.to('.main-content', 2, {autoAlpha: 1, y:"0", ease: Linear.easeNone});

	//init scrolmagic
	var controller = new ScrollMagic.Controller();

	//Header zoom
	var headerZoom = new TimelineMax();

	headerZoom
		.to("#top .bcg div", 1.5, {z:'100', ease: Linear.easeNone})
		.to(".bcg-dark", 1.5, {autoAlpha: 1, ease: Linear.easeNone}, "-=1.5");

	var headerScene = new ScrollMagic.Scene({
		triggerElement: '#top',
		triggerHook: "0",
		duration: 700
	})
	.setTween(headerZoom)
	.addTo(controller);

	//Nav scroll
	  $(window).scroll(function(event) {
	    if ($(window).scrollTop()>=800){
	    	$('.top-nav').css('transform', 'translateY(-60px)');
	      $('.top-nav').addClass('nav-scroll');
	    } else {
	    	$('.top-nav').css('transform', 'translateY(0)');
	      $('.top-nav').removeClass('nav-scroll');
	    }

	    if ($(window).scrollTop()<=799){
	      $('.top-nav').removeClass('nav-scroll');
	    } else {
	      $('.top-nav').addClass('nav-scroll');
	    }
	  });

	//Second section
	var cookTween = new TimelineMax();

	cookTween
		.to(".cook-img", 1, {y:'80', ease: Power2.easeInOut})
		.to('.cook-desc', 1, {y:'-40', ease: Power3.easeInOut}, "-=1")
		.to('.cook-desc .bcg', 1, {y:'-100', ease: Power2.easeInOut}, "-=1");

	var cookScene = new ScrollMagic.Scene({
		triggerElement: '#details',
		triggerHook: "0.2",
		duration: 700
	})
	.setTween(cookTween)
	.addTo(controller);

	//Third section
	var deliveryTween = new TimelineMax();

	deliveryTween
		.to(".delivery-img", 1, {y:'80', ease: Power2.easeInOut})
		.to('.delivery-desc', 1, {y:'-40', ease: Power3.easeInOut}, "-=1")
		.to('.delivery-desc .bcg', 1, {y:'-100', ease: Power2.easeInOut}, "-=1");

	var deliveryScene = new ScrollMagic.Scene({
		triggerElement: '#details',
		triggerHook: "0.2",
		offset: 700,
		duration: 700
	})
	.setTween(deliveryTween)
	//.addIndicators()
	.addTo(controller);

	//Actions Carousel
	$("#actionSlider").owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      autoplaySpeed: 2000,
      dotsSpeed: 1000,
	    items:1
  });

	//Actions section
	var actionTween = new TimelineMax();

	actionTween
		.to("#actions-title", 1, {'top':'20px', ease: Power2.easeInOut});

	var actionScene = new ScrollMagic.Scene({
		triggerElement: '#actions',
		triggerHook: "0.7",
		duration: 500
	})
	.setTween(actionTween)
	//.addIndicators()
	.addTo(controller);

	//Actions section
	var feedbackTween = new TimelineMax();

	feedbackTween
		.to("#feedback-title", 1, {'top':'20px', ease: Power2.easeInOut});

	var feedbackScene = new ScrollMagic.Scene({
		triggerElement: '#feedback',
		triggerHook: "0.7",
		duration: 500
	})
	.setTween(feedbackTween)
	//.addIndicators()
	.addTo(controller);

	//Footer section
	var footerTween = new TimelineMax();

	footerTween
		.to("#map", 3, {'top':'-80px', ease: Power2.easeInOut})
		.to(".terms", 2, {'top':'-100px', ease: Power2.easeInOut}, "-=3");

	var footerScene = new ScrollMagic.Scene({
		triggerElement: '#footer',
		triggerHook: "0.6"
	})
	.setTween(footerTween)
	//.addIndicators()
	.addTo(controller);

	//Feedback Gallery
	$('.feedback-gallery').fancybox();

	
	//Add to cart animation
	
		// $(".add_to_cart_button").click(function(event) {
		// 	$('li.product a img').each(function(index, val) {
		// 	var productAddTween = new TimelineMax();

		// 	productAddTween
		// 			.to(this, 1, {'scale':'1.3', autoAlpha: 0, ease: Power2.easeInOut})
		// 			.set(this, {'scale': '0.7'})
		// 			.to(this, 1, {'scale':'1', autoAlpha: 1, ease: Power2.easeInOut});
		// 	});	
		// });

	

		var all = document.querySelectorAll('li.product a img');

		for(var i = all.length; i--;){
		  all[i].animation = TweenLite
		  	.to(all[i], 1, {'scale':'1.3', autoAlpha: 0, ease: Power2.easeInOut, paused:true});
		  all[i].addEventListener('click', AnimPlay );
		};

		function AnimPlay(e) { 
		  var anim = e.target.animation ;
		  if(!anim.isActive()){
		    e.target.animation.play(0);
		  }else{
		    TweenLite.delayedCall(anim.duration()-anim.time(),function(){anim.play(0)});
		  }
		};


	



});