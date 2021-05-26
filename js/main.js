const $active = ('_active');
const $serviceToggler = ('.burger-js,.service-js');
const $menu = $('.burger-js,.service-js,.service-menu,.call-js,.call-us__menu');

// Click / Close outside
$(document).mouseup(e => {
   if (!$menu.is(e.target)
   && $menu.has(e.target).length === 0)
   {
     $menu.removeClass($active);
  }
 });

// Navigation
$(document).ready(function () {
	$($serviceToggler).click(function(){
    $('.burger-js,.service-js,.service-menu').toggleClass($active);
/*    $('body').toggleClass ($active) */
  })

// Call toggler (Mobile)
	$('.call-js').click(function(){
    $('.call-js,.call-us__menu').toggleClass($active);
  })

// Paginaton toggler
	$('.pagination__item').click(function() {
    $('.pagination__item').not(this).removeClass($active);
    $(this).toggleClass($active);
  });

// Scroll to
	$('.service-menu__item').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.blog').offset().top -140
    }, 500);
	});

// Show / hide on page-bottom
	$(window).scroll(function() {
		$('.call-js').addClass('show');
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
				$('.call-js').removeClass('show');
		}
 });

// Fancybox

 $('[data-fancybox="gallery"]').fancybox({
		loop: true,
		transitionEffect: "circular",
});

// Slick slider
	$('.slick-js').slick({
		arrows: false,
		dots: false,
		infinite: true,
  	slidesToShow: 7,
  	// slidesToScroll: 1,

		autoplay: true,
		autoplaySpeed: 0,
    speed: 1000,
		cssEase:'linear',
		adaptiveHeight: true,
		swipeToSlide : true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

// Mixitup
	var mixer = mixitup('.mixitup-js', {
		animation: {
			duration: 250,
			nudge: true,
			reverseOut: true,
			effects: 'fade translateY(-100%)'
		},
    controls: {
        toggleLogic: 'or',
    },
		callbacks: {
			onMixEnd: function(state){
				if(state.hasFailed){
					noItemsFoundMessage.style.display = 'block';
				}
				else{
					noItemsFoundMessage.style.display = 'none';
				}
			}
		}
	});
})
