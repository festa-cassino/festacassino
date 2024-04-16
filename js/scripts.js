(function($) {
    "use strict";

	
	$('.portfolio-filter ul li:first-child ').addClass('active');
	
	$('.portfolio-filter ul li a').click(function(){
	
	$('.portfolio-filter ul li:first-child').removeClass('active');
	
	});
    // Preloader
    function preloadShow() {
        // Setup HTML
        if($('.preloader')) {
            $('.preloader').remove();
        }
        //$('body').append('<div class="preloader"><div class="top"></div><div class="bottom"></div><div class="logo">' + ("undefined" === typeof $('body').attr('data-preloadable-logo') ? 'Logo' : $('body').attr('data-preloadable-logo')) + '</div><div class="bar"><div class="value"><div class="left"></div><div class="right"></div></div></div><div class="percent">0%</div></div>');
        $('body').append('<div class="preloader"><div class="top"></div><div class="bottom"></div><div class="logo">' + ("undefined" === typeof $('body').attr('data-preloadable-logo') ? 'Logo' : $('body').attr('data-preloadable-logo')) + '</div><div class="percent">0%</div></div>');
        var $preloader  = $('.preloader');

        // Attach image loaded callback
        var $images     = $('img');
        if(0 < $images.length) {
            var current = 0;
            var total   = $images.length;
            $images.imgpreload({each: function() {
                var percent = Math.round((++current / total) * 100);
                $preloader.find('.percent').html(percent + '%');
                $preloader.find('.bar .value').width(percent + '%');
                if(100 === percent) {
                    setTimeout(preloadHide, 500);
                }
            }});
        }
    }
    function preloadHide() {
        // Skip if no preloader
        var $preloader  = $('.preloader');
        if(0 === $preloader.length) {
            return;
        }

        // Remove the preloader
        $preloader.find('.logo, .bar, .percent').css('opacity', 0);
        setTimeout(function() {
            $preloader.find('.top, .bottom').css('height', 0);
        }, 500);
        setTimeout(function() {
            $preloader.remove();
            $('body').triggerHandler('preload-removed');
        }, 1000);
    }
    if($('body').is('.preloadable')) {
        $('body').removeClass('preloadable');
        preloadShow();
        var preloadTimeout = setTimeout(preloadHide, 5000);
        $('body').bind('preload-removed', function() {
            clearTimeout(preloadTimeout);
        });
    }

    // Window resize end event
    $(window).bind('resize', function() {
        var $this   = $(this);
        clearTimeout($this.data('resize-start'));
        $this.data('resize-start', setTimeout(function() {
            $this.triggerHandler('resize-end');
        }, 200));
    });

    // Fixed navigation
    $(window).bind('scroll', function() {
        var $this   = $(this);
        var $body   = $('body');
        var offset  = 0 === $('#hero').length ? 0 : $('#hero').height();
        if($this.scrollTop() >= offset) {
            $body.addClass('nav-fixed');
			$('.navbar').addClass('show');
			setTimeout( function() {
	$( "body.nav-fixed .navbar" ).css('top','0');
	},1000);
			} else {
            $body.removeClass('nav-fixed');
			$('.navbar').removeClass('show');
				$( ".navbar" ).attr('style','');

			}
		});
		
		
		

    // Native placeholder support
    if(!('placeholder' in document.createElement('input'))) {
        $('[placeholder]').livequery(function() {
            var $this   = $(this);
            if(0 === $this.val().length) {
                $this.val($this.attr('placeholder'));
            }
        }).livequery('focus', function() {
            var $this   = $(this);
            if($this.val() == $this.attr('placeholder')) {
                $this.val('');
            }
        }).livequery('blur', function() {
            var $this   = $(this);
            if($this.val() == '') {
                $this.val($this.attr('placeholder'));
            }
        });
    }

    // Smooth section scrolling
    $('[href^="#"]:not([href^="#!"])').bind('click', function(e) {
        e.preventDefault();
        var $this   = $(this);
        var $target = $($this.attr('href'));
        var offset  = $('.navbar').height();
        var speed   = isNaN(parseInt($('body').attr('data-scroll-speed'))) ? 50 : parseInt($('body').attr('data-scroll-speed'));
        if(0 < $target.length) {
            $.scrollTo.window().queue([]).stop();
            $.scrollTo({left: 0, top: Math.max(0, $target.offset().top - offset)}, {duration: speed});
        }
    });

    // Revolution slider
    $(document).ready(function() {
        $('.slider').revolution({
            delay: 10000,
            startwidth: 1170,
            startheight: 600,
            autoHeight: "on",
            fullScreen: "on",
            fullWidth: "off",
            fullScreenAlignForce: "off",

            onHoverStop: "on",

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 3,

            hideThumbsOnMobile: "off",
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResoluition: 0,

            hideThumbs: 0,

            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "round",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 30,
            navigationVOffset: 30,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,


            touchenabled: "off",

            stopAtSlide: -1,
            stopAfterLoops: -1,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,

            dottedOverlay: "none",

            forceFullWidth: "off",

            shadow: 0
        });
		
		
		
		
		if (jQuery.fn.cssOriginal!=undefined)
    jQuery.fn.css = jQuery.fn.cssOriginal;
    var api = jQuery('.slider').revolution();
	   api.bind("revolution.slide.onchange",function (e,data) {
	   var colo=  jQuery('.slider').find('li').eq(data.slideIndex-1).attr('data-head');
	   var clas=  jQuery('.slider').find('li').eq(data.slideIndex-1).attr('data-class');
	   var menu=  jQuery('.slider').find('li').eq(data.slideIndex-1).attr('data-menu');
	   
		jQuery('nav.navbar').removeAttr("style");
		jQuery('nav.navbar').css("background", colo );
		jQuery('.nav.navbar').addClass(clas);
		$('.navbar-nav a').removeAttr('style');
		$('.navbar-nav a').css('color',menu);
		
	});
	
		
		
    });
	
	 var elems = $('.isotope-item');
    elems.on('mouseenter mouseleave', function(e) {
        elems.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.6:1);
    });
	
	

    // Add "animated-out" class to elements with data-animated attribute
    $('[data-animated]').each(function() {
        $(this).addClass('animated-out');
    });

    // Switch "animated-out" class to "animated-in" when scrolling
    $(window).scroll(function() {
        var scroll      = $(window).scrollTop();
        var height      = $(window).height();
        $('.animated-out[data-animated]').each(function() {
            var $this   = $(this);
            if(scroll + height >= $this.offset().top) {
                var delay   = parseInt($this.attr('data-animated'));
                if(isNaN(delay) || 0 === delay) {
                    $this.removeClass('animated-out').addClass('animated-in');
                } else {
                    setTimeout(function() {
                        $this.removeClass('animated-out').addClass('animated-in');
                    }, delay);
                }
            }
        });
    });

    // Adaptive blocks
    $('[data-adaptive]').each(function() {
        var $this   = $(this);
        $this.data('width', $this.width()).data('height', $this.height());
        $(window).bind('resize-end', function() {
            var width   = $(window).width();
            var size    = Math.ceil(width / $this.data('width'));
            $this.css({width: width / size, height: (width / size) * ($this.data('height') / $this.data('width'))});
        }).triggerHandler('resize-end');
    });

    // Featured portfolio items
    $(window).load(function() {
        $('.featured').fitImage('> img');
    });
    $(window).bind('resize-end', function() {
        $('.featured-slider, .featured-slider .wrapper').height($('.featured-slider').find('.featured').eq(0).height());
        $('.featured-slider .wrapper').width($('.featured').width() * $('.featured').length);
    }).triggerHandler('resize-end');
    $('.featured-slider .arrow-left').bind('click', function(e) {
        e.preventDefault();
        var $wrap   = $('.featured-slider').find('.wrapper');
        var pages   = Math.ceil(Math.round(100 * $wrap.width() / $(window).width()) / 100);
        var page    = (-1 * Math.floor(parseInt($wrap.css('margin-left')) / $(window).width())) - 1;
        if(page < 0) {
            page    = pages - 1;
        }
        $wrap.stop().animate({marginLeft: -1 * page * $(window).width()}, 1000);
    });
    $('.featured-slider .arrow-right').bind('click', function(e) {
        e.preventDefault();
        var $wrap   = $('.featured-slider').find('.wrapper');
        var pages   = Math.ceil(Math.round(100 * $wrap.width() / $(window).width()) / 100);
        var page    = (-1 * Math.floor(parseInt($wrap.css('margin-left')) / $(window).width())) + 1;
        if(page >= pages) {
            page    = 0;
        }
        $wrap.stop().animate({marginLeft: -1 * page * $(window).width()}, 1000);
    });

    // Content slider
    $('.content-slider').each(function() {
        var $slider = $(this);
        $slider.bind('page', function(e, page) {
            var $old    = $slider.find('> .slide:visible');
            var $new    = $slider.find('> .slide').eq(page);
            $slider.data('page', page);
            $slider.find('> .bullets > ul > li.active').removeClass('active');
            $slider.find('> .bullets > ul > li').eq(page).addClass('active');
            if(0 < $old.length) {
                $old.stop().animate({opacity: 0}, 1000, function() {
                    $(this).css({display: 'none'});
                });
            }
            $new.css({opacity: 0, display: 'block'});
            setTimeout(function() {
                $new.stop().animate({opacity: 1}, 1000);
            }, 100);
            $slider.stop().animate({height: $new.height() + 30}, 250);
        }).bind('prev', function() {
            var page    = $slider.data('page');
            if(isNaN(page)) {
                page    = 0;
            } else {
                page    = page - 1;
                if(page < 0) {
                    page = $slider.find('> .slide').length - 1;
                }
            }
            $slider.triggerHandler('page', [page]);
        }).bind('next', function() {
            var page    = $slider.data('page');
            if(isNaN(page)) {
                page    = 0;
            } else {
                page    = page + 1;
                if(page >= $slider.find('> .slide').length) {
                    page = 0;
                }
            }
            $slider.triggerHandler('page', [page]);
        });
        $slider.find('> .bullets').append('<ul/>');
        $slider.find('> .slide').each(function(index) {
            var $link   = $('<a href="#" data-index="' + index + '"><img src="./img/spacer.gif" alt="" /></a>');
            var $item   = $('<li />');
            $link.bind('click', function(e) {
                e.preventDefault();
                var $this   = $(this);
                $this.parents('.content-slider').triggerHandler('page', [$this.attr('data-index')]);
            });
            $slider.find('> .bullets > ul').append($item.append($link));
        });
        $slider.find('.arrow-left').bind('click', function(e) {
            e.preventDefault();
            $slider.triggerHandler('prev');
        });
        $slider.find('.arrow-right').bind('click', function(e) {
            e.preventDefault();
            $slider.triggerHandler('next');
        });
        $(window).load(function() {
            $slider.triggerHandler('page', [0]);
        });
    });


$('.portfolio-items').mixItUp();	

    // Scroll spy
    $(window).bind('resize', function() {
        $('body').scrollspy({target: '.navbar-collapse', offset: $('.navbar').height() + 1});
    }).triggerHandler('resize');

    // Animate count elements
    $('.count').each(function() {
        var $this   = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });
    $(window).bind('scroll', function() {
        var speed   = 3000;
        $('.count').each(function() {
            var $this   = $(this);
            if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({dummy: 1}, {
                    duration: speed,
                    step:     function(now) {
                        var $this   = $(this);
                        var val     = Math.round($this.data('target') * now);
                        $this.html(val);
                        if(0 < $this.parent('.value').length) {
                            $this.parent('.value').css('width', val + '%');
                        }
                    }
                });
            }
        });
    }).triggerHandler('scroll');

	
	
    // Google map
     if(0 < $('#map').length) {
        var coordinates = $('#map').attr('data-coordinates').split(',');
        var myLatlng = new google.maps.LatLng(parseFloat(coordinates[0]), parseFloat(coordinates[1]));
        var mapOptions = {
            zoom: 4,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            draggable: true,
            position: map.getCenter(),
            icon: './img/marker.png'
        });
    } 
	
	
	  var container = jQuery('#portfolio-list');
        var portfolio = jQuery('#portfolio-list');
        var portfolioItem = portfolio.find('li');
        var projectLength = portfolioItem.length;
        var prevButton = jQuery('#project-container .prev');
        var nextButton = jQuery('#project-container .next');
       
        function projectFunctions() {
                  jQuery('#project-container [class^="slideshow"]').bxSlider({
                        mode: 'fade',
                        controls: true,
                        pager: false,
                        prevText: '<i class="fa fa-angle-left"></i>',
                        nextText: '<i class="fa fa-angle-right"></i>'
                });
                jQuery('.fluid-width-video-wrapper').css('padding-top', '56.25%');
                jQuery('#project-container .spinner').fadeOut(1000);
        };
		
		
	jQuery('.slideshow-fade').bxSlider({
                        mode: 'fade',
                        controls: true,
                        pager: false
                });
		
		
        /*portfolioItem.find('a').click(function (e) {
                e.preventDefault();
                jQuery('#project-container .spinner').show(0);
                jQuery('body').addClass('overflow-hidden');
                var projectLink = jQuery(this).attr('href');
                var projectOpen = portfolio.find(this).attr('href', projectLink).closest('li');
                projectOpen.addClass('open');

                if (projectOpen.index() == 0) {
                        prevButton.addClass('disabled');
                } else {
                        prevButton.attr('href', projectOpen.prev('li').find('.project-link').attr('href'));
                }
                if (projectOpen.index() + 1 == projectLength) {
                        nextButton.addClass('disabled');
                } else {
                        nextButton.attr('href', projectOpen.next('li').find('.project-link').attr('href'));
                }
                jQuery('#project-container').addClass('show');
                jQuery('.project-content').load(window.location.pathname + ' ' + projectLink, function () {
                        projectFunctions();
                });
        });*/
        jQuery('.prev').click(function () {
                jQuery('#project-container .spinner').show(200);
                var currentProject = portfolio.find('.open');
                var currentIndex = currentProject.index() + 1;
                jQuery('.next').removeClass('disabled');
                if (currentIndex <= 2) {
                        jQuery('.prev').addClass('disabled');
                }
                var prevProjectLink = currentProject.prev('li').find('a').attr('href');
                currentProject.removeClass('open').prev('li').addClass('open');
                jQuery('.project-content').load(window.location.pathname + ' ' + prevProjectLink, function () {
                        projectFunctions();
                });
        });
        jQuery('.next').click(function () {
                jQuery('#project-container .spinner').show(200);
                var currentProject = portfolio.find('.open');
                var currentIndex = currentProject.index() + 1;
                jQuery('.prev').removeClass('disabled');
                if (currentIndex + 1 >= projectLength) {
                        jQuery('.next').addClass('disabled');
                }
                var nextProjectLink = currentProject.next('li').find('a').attr('href');
                currentProject.removeClass('open').next('li').addClass('open');
                jQuery('.project-content').load(window.location.pathname + ' ' + nextProjectLink, function () {
                        projectFunctions();
                });
        });
        jQuery('.close').click(function () {
                jQuery('body').removeClass('overflow-hidden');
                jQuery('#project-container').removeClass('show');
                portfolio.find('.open').removeClass('open');
                jQuery('.project-content').html('');
        });
        jQuery(document).keyup(function (e) {
                if (e.keyCode == 27) {
                        jQuery('body').removeClass('overflow-hidden');
                        jQuery('#project-container').removeClass('show');
                        portfolio.find('.open').removeClass('open');
                        jQuery('.project-content').html('');
                }
        });
	
	
})(jQuery);