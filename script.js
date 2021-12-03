// Active isotope with jQuery code:


var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: '.grid-item',
	  percentPosition: true,
    gutter: 0,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
  });
});

// Isotope click function
$('.iso-nav a').click(function(){
	$('.iso-nav a').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.grid').isotope({
		filter: selector
	});
	return false;
});