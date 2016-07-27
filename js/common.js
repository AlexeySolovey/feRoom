;(function($){
	$(document).ready(function() {
	        // Declare variables
	        var width = 400;
	        var slides = $('#list-images div');
	        var numSlides = slides.length;

	        // Wrap the slides & set the wrap width - this will be used to animate the slider left/right
	        slides.wrapAll('<div id="slide-wrap"></div>').css({ 'float': 'left', 'width': width });
	        $('#slide-wrap').css({ width: width * numSlides });

	        // Hover function - animate the slides based on index of links
	        $('#list-links li a').hover(function () {
	            $('#list-links li').removeClass('hover');
	            var i = $(this).index('#list-links li a');
	            $(this).parent().addClass('hover');
	            $('#slide-wrap').stop().animate({ 'marginLeft': width * (-i) });
	        });

	        $("#owl-example").owlCarousel({

	             items : 2, 
	             itemsDesktop : false,
	             itemsDesktopSmall : false,
	             itemsTablet: false,
	             itemsMobile : false,
	             pagination: false
	        });

	        $("#owl-products").owlCarousel({

	            items: 3,
	            itemsDesktop: false,
	            itemsDesktopSmall: false,
	            itemsTablet: false,
	            itemsMobile: false,
	            pagination: false
	        });


	});



})(jQuery)