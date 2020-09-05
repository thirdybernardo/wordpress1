function selectedActive(elem) {
        var selectedAttr = jQuery(elem),
                selectionID = "." + jQuery(selectedAttr).data("select");

                jQuery(".selecton a").removeClass("active");
                jQuery(selectedAttr).addClass("active");
                jQuery(".food-menu").removeClass("active");

        if (selectionID == ".*") jQuery(".food-menu").addClass("active");
        else jQuery(selectionID).addClass("active");
}


function enableCounterUp(a) {
        var counterElement;
        if (isExists('#counter')) {
                counterElement = jQuery('#counter');
        }
        else {
                return;
        }
        var oTop = jQuery('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
                jQuery('.counter-value').each(function () {
                        var $this = jQuery(this),
                                countDuration = $this.data('duration'),
                                countTo = $this.attr('data-count');
                                jQuery({countNum: $this.text()}).animate({countNum: countTo}, {
                                duration: countDuration,
                                easing: 'swing',
                                step: function () {
                                        $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                        $this.text(this.countNum);
                                }
                        });
                });
                a = 1;
        }
        return a;
}

function panelAccordian(){

        var panelTitle = jQuery('.panel-title');
        panelTitle.on('click', function(){
                jQuery(this).toggleClass('active');
                return false;
        });

}


function enableRadialProgress(){
        jQuery(".radial-progress").each(function(){
                var $this = jQuery(this),
                        progPercent = $this.data('prog-percent');

                var bar = new ProgressBar.Circle(this, {
                        color: '#fff',
                        strokeWidth: 3,
                        trailWidth: 0,
                        easing: 'easeInOut',
                        duration: 1400,
                        text: {},
                        from: { color: '#fff', width: 1 },
                        to: { color: '#EF002E', width: 3 },
                        // Set default step function for all animate calls
                        step: function(state, circle) {
                                circle.path.setAttribute('stroke', state.color);
                                circle.path.setAttribute('stroke-width', state.width);

                                var value = Math.round(circle.value() * 100);
                                if (value === 0) { circle.setText(''); } else { circle.setText(value); }
                        }
                });

                jQuery(this).waypoint(function(){ bar.animate(progPercent); },{offset: "90%"})
        });
}

(function (jQuery) {

        "use strict";

        // ACCORDIAN

        panelAccordian();

        // RADIAL PROGRESS BAR
        enableRadialProgress();

        enableSwiper();

        /*COUNTER*/
        var countLineProgress = 0;
        var countCounterUp = 0;
        var a = 0;
        countCounterUp = enableCounterUp(countCounterUp);

        jQuery(window).on('scroll', function () {
                countCounterUp = enableCounterUp(countCounterUp);
        });

        /*CUSTOME ISOTOPE*/
        var selectedAttr = jQuery('[data-select].active');
        selectedActive(selectedAttr);

        jQuery('[data-select]').on("click", function () {
                var selectedAttr = jQuery(this);
                selectedActive(selectedAttr);
                return false;
        });


        // DROPDOWN MENU

        var winWidth = jQuery(window).width();
        dropdownMenu(winWidth);

        jQuery(window).on('resize', function () {
                winWidth = jQuery(window).width();
                dropdownMenu(winWidth);

        });


        jQuery('[data-menu]').on('click', function () {

                var mainMenu = jQuery(this).data('menu');

                jQuery(mainMenu).toggleClass('visible-menu');

        });


})(jQuery);


function dropdownMenu(winWidth) {

        if (winWidth > 767) {

                jQuery('.main-menu li.drop-down').on('mouseover', function () {
                        var $this = jQuery(this),
                                menuAnchor = $this.children('a');

                        menuAnchor.addClass('mouseover');

                }).on('mouseleave', function () {
                        var $this = jQuery(this),
                                menuAnchor = $this.children('a');

                        menuAnchor.removeClass('mouseover');
                });

        } else {

                jQuery('.main-menu li.drop-down > a').on('click', function () {

                        if (jQuery(this).attr('href') == '#') return false;
                        if (jQuery(this).hasClass('mouseover')) {
                                jQuery(this).removeClass('mouseover');
                        }
                        else {
                                jQuery(this).addClass('mouseover');
                        }
                        return false;
                });
        }

}

function enableSwiper() {

        if (isExists('.swiper-container')) {

                jQuery('.swiper-container').each(function (index) {

                        var swiperDirection = jQuery(this).data('swiper-direction'),
                                swiperSlidePerView = jQuery(this).data('swiper-slides-per-view'),
                                swiperBreakpoints = jQuery(this).data('swiper-breakpoints'),
                                swiperSpeed = jQuery(this).data('swiper-speed'),
                                swiperCrossFade = jQuery(this).data('swiper-crossfade'),
                                swiperLoop = jQuery(this).data('swiper-loop'),
                                swiperAutoplay = jQuery(this).data('swiper-autoplay'),
                                swiperMousewheelControl = jQuery(this).data('swiper-wheel-control'),
                                swipeSlidesPerview = jQuery(this).data('slides-perview'),
                                swiperMargin = parseInt(jQuery(this).data('swiper-margin')),
                                swiperSlideEffect = jQuery(this).data('slide-effect'),
                                swiperAutoHeight = jQuery(this).data('autoheight'),
                                swiperScrollbar = (jQuery(this).data('scrollbar') ? $(this).parentsUntil('.swiper-area').find('.swiper-scrollbar') : null);
                        swiperScrollbar = (isExists(swiperScrollbar) ? swiperScrollbar : null),
                                swprResponsive = jQuery(this).data('swpr-responsive');

                        var swiper = new Swiper(jQuery(this)[0], {
                                pagination: jQuery(this).find('.swiper-pagination'),
                                slidesPerView: (swiperSlidePerView ? swiperSlidePerView : 1),
                                direction: (swiperDirection ? swiperDirection : 'horizontal'),
                                loop: (swiperLoop ? swiperLoop : false),
                                nextButton: '.swiper-button-next',
                                prevButton: '.swiper-button-prev',
                                autoplay: (swiperAutoplay ? swiperAutoplay : false),
                                paginationClickable: true,
                                spaceBetween: (swiperMargin ? swiperMargin : 0),
                                mousewheelControl: ((swiperMousewheelControl) ? swiperMousewheelControl : false),
                                scrollbar: (swiperScrollbar ? swiperScrollbar : null),
                                scrollbarHide: false,
                                speed: (swiperSpeed ? swiperSpeed : 1000),
                                autoHeight: ((swiperAutoHeight == false) ? swiperAutoHeight : true),
                                effect: (swiperSlideEffect ? swiperSlideEffect : 'coverflow'),
                                fade: {crossFade: swiperCrossFade ? swiperCrossFade : false},
                                breakpoints: {
                                        1200: {slidesPerView: swprResponsive[3] ? swprResponsive[3] : 1,},
                                        992: {slidesPerView: swprResponsive[2] ? swprResponsive[2] : 1,},
                                        768: {slidesPerView: swprResponsive[1] ? swprResponsive[1] : 1,},
                                        576: {slidesPerView: swprResponsive[0] ? swprResponsive[0] : 1,}

                                },
                        });

                        jQuery('.swiper-container').hover(function () {
                                swiper.stopAutoplay();
                        }, function () {
                                swiper.startAutoplay();
                        });


                });


        }
}

function isExists(elem) {
        if (jQuery(elem).length > 0) {
                return true;
        }
        return false;
}

function initMap() {

        // Create a map object, and include the MapTypeId to add
        // to the map type control.

        var uluru = {lat: 56.946285, lng: 24.105078};
        var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: uluru
        });

        var image = 'images/google-marker.png';
        var marker = new google.maps.Marker({
                position: uluru,
                map: map,
                icon: image
        });
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
}