<footer id="footer">
    		<div class="container">
    			<div id="map"></div>
    			<div class="terms">
    				<h2>Условия <br>доставки</h2>
    				<p>Бесплатная доставка от 350 рублей.</p>
    				<p>Оплата курьеру наличными или по картам Visa, MasterCard.</p>
    			</div>
    		</div>
    		<div class="container container-bottom">
    			<div class="footer-bottom">
    				<div class="logo">
    					<img src="<?php echo get_stylesheet_directory_uri() ?>/img/logo-white.png" alt="">
    				</div>
    				<div class="socials">
    					<a href="#"><i class="fa fa-vk"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-twitter"></i></a>
    				</div>
    				<div class="contacts">
    					<a href="tel:+73412913033"><span>+7 (3412)</span> 913-033</a>
    				</div>
    			</div>
    		</div>
    	</footer>

    	<?php wp_footer(); ?>

    	<script>
    		var map;
    		var styles = [
			  {
			    stylers: [
			      { hue: "#6d0000" },
			      { saturation: -80 }
			    ]
			  },{
			    featureType: "road",
			    elementType: "geometry",
			    stylers: [
			      { lightness: 100 },
			      { visibility: "simplified" }
			    ]
			  },{
			    featureType: "road",
			    elementType: "labels",
			    stylers: [
			      { visibility: "off" }
			    ]
			  }
			];
		      function initMap() {
		        var myLatLng = {lat: 56.8496, lng: 53.2226};
		        map = new google.maps.Map(document.getElementById('map'), {
		          center: {lat: 56.8494329, lng: 53.2220936},
		          zoom: 15,
		          mapTypeControl: false,
		        });
		        var marker = new google.maps.Marker({
				    position: myLatLng,
				    map: map,
				    title: 'Hello World!'
				  });

		        map.setOptions({styles: styles});

		  	}
    	</script>


	    <!-- jQuery --> 
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<!-- Google Maps -->
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBD6xVoWO-8_t6w--FfiLefhi9kpsZ3EMs&callback=initMap"
        async defer></script>
	    <!-- GSAP -->
	    <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenMax.min.js"></script>
	    <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/ScrollMagic.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
	    <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
	    <!-- Other JS -->
	    <script src="<?php echo get_stylesheet_directory_uri() ?>/js/smoothscroll.min.js"></script>
	    <script src="<?php echo get_stylesheet_directory_uri() ?>/js/owl.carousel.min.js"></script>
	    <script src="<?php echo get_stylesheet_directory_uri() ?>/js/remodal.min.js"></script>
	    <script src="<?php echo get_stylesheet_directory_uri() ?>/js/jquery.fancybox.pack.min.js"></script>
	    <!-- Core -->
	    <script src="<?php echo get_stylesheet_directory_uri() ?>/js/main.min.js"></script>
	</body>
</html>