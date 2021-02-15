// Styles
import '../sass/main.scss';

jQuery(document).ready(function ($) {
    gsap.set("#new", {
        autoAlpha: 0
    })

    var $button = $('.menu__item-link'),
        $page = $('.screen__item'),
        $screens = $('.screens');

    $button.on('mouseenter', function (e) {
        var $thisPage = $(this).attr('id');

        gsap.to($thisPage, 0.5, {
            autoAlpha: 1
        });
        gsap.to($page.not($thisPage), 0.5, {
            autoAlpha: 0
        }); // faster
    });

    $button.on('mouseleave', function (e) {
        var $thisPage = $(this).attr('id');

        gsap.to($page, 0.3, {
            autoAlpha: 0
        });
    });

    // Translate header up on scroll

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 40) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });

    // bind nav resize

    $(window).bind("resize", function () {
        if ($(this).width() < 768) {
            $('.site-header').addClass('overlay__nav');
        } else {
            $('.site-header').removeClass('overlay__nav');
        }
    }).trigger('resize');

    // Hamburger

    var trigger = $('#hamburger'),
        isClosed = true,
        closeNav = $('#closeNav');

    trigger.click(function () {
        burgerTime();
    });

    closeNav.click(function () {
        burgerClose();
    });

    function burgerTime() {
        if (isClosed == false) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            $('.nav__wrapper').removeClass('is-open');
            isClosed = true;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            $('.nav__wrapper').addClass('is-open');
            isClosed = false;
        }
    }

    function burgerClose() {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $('.nav__wrapper').removeClass('is-open');
        isClosed = true;
    }

    function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			var text_value = $(this).val();

			// on focus add class "active" to label
			$this.focus(function(){
				$this.next().addClass("active");
			});

			// on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
					}
			});
					
			// Check input values on postback and add class "active" if value exists
			if(text_value!=''){
				$this.next().addClass("active");
				}
			});
    
    	// Automatically remove floatLabel class from select input on load
    	$( "select" ).next().removeClass();
	}
	// Add a class of "floatLabel" to the input field
	floatLabel(".floatLabel");
});

const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 90%",
        scrub: true,
        once: true
    });
})

window.addEventListener('load', function(){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
})