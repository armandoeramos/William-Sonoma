function onHoverShowPhotos() {
	$('.carousel').hover(
		function() {
			$(this).find('.product-thumbnail').hide();
			$(this).find('.carousel-image').each(function(i) {
					$('.carousel-image.shown').hide();

					$(this).show();
					$(this).addClass('shown');
			});
		},
		function() {
			$(this).find('.carousel-image').hide();
			$(this).find('.carousel-image').removeClass('shown');
			$(this).find('.product-thumbnail').show();
		}
	);
}

function initPhotoSlider() {
	$('.carousel').each(function(i) {
		let $carouselImages = $(this).find('.carousel-image');

		if($carouselImages.length > 1) {
			$carouselImages.first().addClass('first');
			$carouselImages.last().addClass('last');
		}
		else {
			$carouselImages.addClass('one');
			$carouselImages.addClass('last');
		}
	});

	onHoverShowPhotos();
}