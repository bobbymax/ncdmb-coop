var screenWidth=$(window).width();function getUrlParams(e){var t,n,a=window.location.search.substring(1).split("&");for(n=0;n<a.length;n++)if((t=a[n].split("="))[0]===e)return void 0===t[1]||decodeURIComponent(t[1])}function carouselReview(){jQuery(".testimonial-one").length>0&&(jQuery(".testimonial-one").owlCarousel({loop:!0,autoplay:!0,margin:0,nav:!0,dots:!1,navText:['<i class="las la-long-arrow-alt-left"></i>','<i class="las la-long-arrow-alt-right"></i>'],responsive:{0:{items:1},480:{items:1},767:{items:1},1000:{items:1}}}),jQuery("#next-slide").on("click",function(){$(".testimonial-one").trigger("next.owl.carousel")}),jQuery("#prev-slide").on("click",function(){$(".testimonial-one").trigger("prev.owl.carousel")}))}function assignedProperty(){jQuery(".front-view-slider").length>0&&jQuery(".front-view-slider").owlCarousel({loop:!1,margin:30,nav:!0,autoplaySpeed:3e3,navSpeed:3e3,paginationSpeed:3e3,slideSpeed:3e3,smartSpeed:3e3,autoplay:!1,dots:!0,navText:["",""],responsive:{0:{items:1},480:{items:1},767:{items:1},1750:{items:1}}}),jQuery(".image-gallery").length>0&&jQuery(".image-gallery").owlCarousel({loop:!1,margin:30,nav:!0,autoplaySpeed:3e3,navSpeed:3e3,paginationSpeed:3e3,slideSpeed:3e3,smartSpeed:3e3,autoplay:!1,navText:['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],responsive:{0:{items:1},480:{items:1},767:{items:2},1750:{items:3}}})}jQuery(window).on("load",function(){$("#preloader").fadeOut(500),$("#main-wrapper").addClass("show"),$("select").selectpicker(),setTimeout(function(){carouselReview(),assignedProperty()},1e3)}),function(e){"use strict";e("#menu").metisMenu(),e("#checkAll").change(function(){e("td input:checkbox").prop("checked",e(this).prop("checked"))}),e(".nav-control").on("click",function(){e("#main-wrapper").toggleClass("menu-toggle"),e(".hamburger").toggleClass("is-active")});for(var t=window.location,n=e("ul#menu a").filter(function(){return this.href==t}).addClass("mm-active").parent().addClass("mm-active");n.is("li");)n=n.parent().addClass("mm-show").parent().addClass("mm-active");e("ul#menu>li").on("click",function(){"mini"===e("body").attr("data-sidebar-style")&&(console.log(e(this).find("ul")),e(this).find("ul").stop())});var a=window.outerHeight;((a=window.outerHeight)>0?a:screen.height)&&e(".content-body").css("min-height",a+60+"px"),e('a[data-action="collapse"]').on("click",function(t){t.preventDefault(),e(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),e(this).closest(".card").children(".card-body").collapse("toggle")}),e('a[data-action="expand"]').on("click",function(t){t.preventDefault(),e(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),e(this).closest(".card").toggleClass("card-fullscreen")}),e('[data-action="close"]').on("click",function(){e(this).closest(".card").removeClass().slideUp("fast")}),e('[data-action="reload"]').on("click",function(){var t=e(this);t.parents(".card").addClass("card-load"),t.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),setTimeout(function(){t.parents(".card").children(".card-loader").remove(),t.parents(".card").removeClass("card-load")},2e3)});const l=e(".header").innerHeight();e(window).scroll(function(){"horizontal"===e("body").attr("data-layout")&&"static"===e("body").attr("data-header-position")&&"fixed"===e("body").attr("data-sidebar-position")&&(e(this.window).scrollTop()>=l?e(".deznav").addClass("fixed"):e(".deznav").removeClass("fixed"))}),jQuery(".dz-scroll").each(function(){var e=jQuery(this).attr("id");new PerfectScrollbar("#"+e,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20})}),jQuery(".metismenu > .mm-active ").each(function(){!jQuery(this).children("ul").length>0&&jQuery(this).addClass("active-no-child")}),screenWidth<=991&&(jQuery(".menu-tabs .nav-link").on("click",function(){jQuery(this).hasClass("open")?(jQuery(this).removeClass("open"),jQuery(".fixed-content-box").removeClass("active"),jQuery(".hamburger").show()):(jQuery(".menu-tabs .nav-link").removeClass("open"),jQuery(this).addClass("open"),jQuery(".fixed-content-box").addClass("active"),jQuery(".hamburger").hide())}),jQuery(".close-fixed-content").on("click",function(){jQuery(".fixed-content-box").removeClass("active"),jQuery(".hamburger").removeClass("is-active"),jQuery("#main-wrapper").removeClass("menu-toggle"),jQuery(".hamburger").show()})),jQuery(".bell-link").on("click",function(){jQuery(".chatbox").addClass("active")}),jQuery(".chatbox-close").on("click",function(){jQuery(".chatbox").removeClass("active")});new PerfectScrollbar(".deznav-scroll");if(e(".btn-number").on("click",function(t){t.preventDefault(),fieldName=e(this).attr("data-field"),type=e(this).attr("data-type");var n=e("input[name='"+fieldName+"']"),a=parseInt(n.val());isNaN(a)?n.val(0):"minus"==type?n.val(a-1):"plus"==type&&n.val(a+1)}),jQuery(".dz-chat-user-box .dz-chat-user").on("click",function(){jQuery(".dz-chat-user-box").addClass("d-none"),jQuery(".dz-chat-history-box").removeClass("d-none")}),jQuery(".dz-chat-history-back").on("click",function(){jQuery(".dz-chat-user-box").removeClass("d-none"),jQuery(".dz-chat-history-box").addClass("d-none")}),jQuery(".dz-fullscreen").on("click",function(){jQuery(".dz-fullscreen").toggleClass("active")}),jQuery(".dz-fullscreen").on("click",function(e){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen()}),jQuery("#example-5").length>0)var o=e("#example-5").DataTable({searching:!1,paging:!0,select:!1,lengthChange:!1});jQuery("#example").length>0&&e("#example tbody").on("click","tr",function(){o.row(this).data()}),e(function(){e('[data-toggle="popover"]').popover()}),jQuery(".custom-file-input").length>0&&e(".custom-file-input").on("change",function(){var t=e(this).val().split("\\").pop();e(this).siblings(".custom-file-label").addClass("selected").html(t)})}(jQuery);