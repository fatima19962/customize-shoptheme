var wc_add_to_cart_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "i18n_view_cart": "View Cart",
    "cart_url": "",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
var wc_add_to_cart_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "i18n_view_cart": "View Cart",
    "cart_url": "",
    "is_cart": "",
    "cart_redirect_after_add": "no"
};
var wc_single_product_params = {
	"i18n_required_rating_text": "Please select a rating",
	"review_rating_required": "yes"
};
var woocommerce_params = {
    "ajax_url": "",
    "wc_ajax_url": ""
};
var wc_cart_fragments_params = {
    "ajax_url": "",
    "wc_ajax_url": "",
    "fragment_name": "wc_fragments"
};
var JUNOTOYS_STORAGE = {
    "system_message": {
        "message": "",
        "status": "",
        "header": ""
    },
    "theme_font": "Ubuntu",
    "theme_color": "#232A34",
    "theme_bg_color": "#FFFFFF",
    "strings": {
        "ajax_error": "Invalid server answer",
        "bookmark_add": "Add the bookmark",
        "bookmark_added": "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
        "bookmark_del": "Delete this bookmark",
        "bookmark_title": "Enter bookmark title",
        "bookmark_exists": "Current page already exists in the bookmarks list",
        "search_error": "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
        "email_confirm": "On the e-mail address &quot;%s&quot; we sent a confirmation email. Please, open it and click on the link.",
        "reviews_vote": "Thanks for your vote! New average rating is:",
        "reviews_error": "Error saving your vote! Please, try again later.",
        "error_like": "Error saving your like! Please, try again later.",
        "error_global": "Global error text",
        "name_empty": "The name can&#039;t be empty",
        "name_long": "Too long name",
        "email_empty": "Too short (or empty) email address",
        "email_long": "Too long email address",
        "email_not_valid": "Invalid email address",
        "subject_empty": "The subject can&#039;t be empty",
        "subject_long": "Too long subject",
        "text_empty": "The message text can&#039;t be empty",
        "text_long": "Too long message text",
        "send_complete": "Send message complete!",
        "send_error": "Transmit failed!",
        "not_agree": "Please, check &#039;I agree with Terms and Conditions&#039;",
        "login_empty": "The Login field can&#039;t be empty",
        "login_long": "Too long login field",
        "login_success": "Login success! The page will be reloaded in 3 sec.",
        "login_failed": "Login failed!",
        "password_empty": "The password can&#039;t be empty and shorter then 4 characters",
        "password_long": "Too long password",
        "password_not_equal": "The passwords in both fields are not equal",
        "registration_success": "Registration success! Please log in!",
        "registration_failed": "Registration failed!",
        "geocode_error": "Geocode was not successful for the following reason:",
        "googlemap_not_avail": "Google map API not available!",
        "editor_save_success": "Post content saved!",
        "editor_save_error": "Error saving post data!",
        "editor_delete_post": "You really want to delete the current post?",
        "editor_delete_post_header": "Delete post",
        "editor_delete_success": "Post deleted!",
        "editor_delete_error": "Error deleting post!",
        "editor_caption_cancel": "Cancel",
        "editor_caption_close": "Close"
    },
    "ajax_url": "",
    "ajax_nonce": "92fdc8c8b5",
    "site_url": "",
    "site_protocol": "http",
    "vc_edit_mode": "",
    "accent1_color": "#1F5967",
    "accent1_hover": "#12AEE0",
    "slider_height": "100",
    "user_logged_in": "1",
    "toc_menu": "float",
    "toc_menu_home": "1",
    "toc_menu_top": "1",
    "menu_fixed": "1",
    "menu_mobile": "1024",
    "menu_hover": "fade",
    "menu_cache": "",
    "button_hover": "fade",
    "input_hover": "default",
    "demo_time": "0",
    "media_elements_enabled": "1",
    "ajax_search_enabled": "1",
    "ajax_search_min_length": "3",
    "ajax_search_delay": "200",
    "css_animation": "1",
    "menu_animation_in": "bounceIn",
    "menu_animation_out": "fadeOutDown",
    "popup_engine": "magnific",
    "email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
    "contacts_maxlength": "1000",
    "comments_maxlength": "1000",
    "remember_visitors_settings": "",
    "admin_mode": "",
    "isotope_resize_delta": "0.3",
    "error_message_box": null,
    "viewmore_busy": "",
    "video_resize_inited": "",
    "top_panel_height": "0"
};

var mejsL10n = {
	"language": "en-US",
	"strings": {
		"Close": "Close",
		"Fullscreen": "Fullscreen",
		"Turn off Fullscreen": "Turn off Fullscreen",
		"Go Fullscreen": "Go Fullscreen",
		"Download File": "Download File",
		"Download Video": "Download Video",
		"Play": "Play",
		"Pause": "Pause",
		"Captions\/Subtitles": "Captions\/Subtitles",
		"None": "None",
		"Time Slider": "Time Slider",
		"Skip back %1 seconds": "Skip back %1 seconds",
		"Video Player": "Video Player",
		"Audio Player": "Audio Player",
		"Volume Slider": "Volume Slider",
		"Mute Toggle": "Mute Toggle",
		"Unmute": "Unmute",
		"Mute": "Mute",
		"Use Up\/Down Arrow keys to increase or decrease volume.": "Use Up\/Down Arrow keys to increase or decrease volume.",
		"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds."
	}
};
var _wpmejsSettings = {
	"pluginPath": ""
};


jQuery(document).ready(function() {
	"use strict";
    if (jQuery(".rev_slider").length > 0)  
		initRevSlider();
	if (jQuery(".esg-grid").length > 0)  
		initEssentialGrid();
});

jQuery(window).load(function() {
	"use strict";
    jQuery(".esg-loader").remove();
});

var ajaxRevslider;

function initRevSlider() {
	"use strict";
    // CUSTOM AJAX CONTENT LOADING FUNCTION
    ajaxRevslider = function(obj) {

        var content = "";
        data = {};
        data.action = 'revslider_ajax_call_front';
        data.client_action = 'get_slider_html';
        data.token = 'ff52b11efa';
        data.type = obj.type;
        data.id = obj.id;
        data.aspectratio = obj.aspectratio;

        // SYNC AJAX REQUEST
        jQuery.ajax({
            type: "post",
            url: "",
            dataType: 'json',
            data: data,
            async: false,
            success: function(ret, textStatus, XMLHttpRequest) {
                if (ret.success == true)
                    content = ret.data;
            },
            error: function(e) {
                console.log(e);
            }
        });

        return content;
    };

    // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
    var ajaxRemoveRevslider = function(obj) {
        return jQuery(obj.selector + " .rev_slider").revkill();
    };

    var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
    var htmlDivCss = "";
    if (htmlDiv) {
        htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
    } else {
        var htmlDiv = document.createElement("div");
        htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
        document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
    }

    /******************************************
                     -	PREPARE PLACEHOLDER FOR SLIDER	-
                     ******************************************/

    var setREVStartSize = function() {
        try {
            var e = new Object,
                i = jQuery(window).width(),
                t = 9999,
                r = 0,
                n = 0,
                l = 0,
                f = 0,
                s = 0,
                h = 0;
            e.c = jQuery('#rev_slider_1_1');
            e.responsiveLevels = [1240, 1024, 778, 480];
            e.gridwidth = [1170, 1170, 1170, 700];
            e.gridheight = [635, 635, 635, 500];

            e.sliderLayout = "auto";
            if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
                    f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
                }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
                var u = (e.c.width(), jQuery(window).height());
                if (void 0 != e.fullScreenOffsetContainer) {
                    var c = e.fullScreenOffsetContainer.split(",");
                    if (c) jQuery.each(c, function(e, i) {
                        u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                    }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
                }
                f = u
            } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
            e.c.closest(".rev_slider_wrapper").css({
                height: f
            })

        } catch (d) {
            console.log("Failure at Presize of Slider:" + d)
        }
    };

    setREVStartSize();

    var tpj = jQuery;

    var revapi1;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_1_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_1");
        } else {
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    onHoverStop: "off",
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1170, 1170, 1170, 700],
                gridheight: [635, 635, 635, 500],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });

    if (jQuery('#wp-admin-bar-revslider-default').length > 0 && jQuery('.rev_slider_wrapper').length > 0) {
        var aliases = new Array();
        jQuery('.rev_slider_wrapper').each(function() {
            aliases.push(jQuery(this).data('alias'));
        });
        if (aliases.length > 0)
            jQuery('#wp-admin-bar-revslider-default li').each(function() {
                var li = jQuery(this),
                    t = jQuery.trim(li.find('.ab-item .rs-label').data('alias')); //text()

                if (jQuery.inArray(t, aliases) != -1) {} else {
                    li.remove();
                }
            });
    } else {
        jQuery('#wp-admin-bar-revslider').remove();
    }
	
	
	var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
		var htmlDivCss = "";
		if (htmlDiv) {
			htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
		} else {
			var htmlDiv = document.createElement("div");
			htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
			document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
		}
		
		
		
		var setREVStartSize = function() {
			try {
				var e = new Object,
					i = jQuery(window).width(),
					t = 9999,
					r = 0,
					n = 0,
					l = 0,
					f = 0,
					s = 0,
					h = 0;
				e.c = jQuery('#rev_slider_2_1');
				e.responsiveLevels = [1240, 1240, 1240, 480];
				e.gridwidth = [1170, 1024, 778, 480];
				e.gridheight = [665, 768, 960, 550];

				e.sliderLayout = "auto";
				if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
						f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
					}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
					var u = (e.c.width(), jQuery(window).height());
					if (void 0 != e.fullScreenOffsetContainer) {
						var c = e.fullScreenOffsetContainer.split(",");
						if (c) jQuery.each(c, function(e, i) {
							u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
						}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
					}
					f = u
				} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
				e.c.closest(".rev_slider_wrapper").css({
					height: f
				})

			} catch (d) {
				console.log("Failure at Presize of Slider:" + d)
			}
		};

		setREVStartSize();

		var tpj = jQuery;

		var revapi2;
		tpj(document).ready(function() {
			if (tpj("#rev_slider_2_1").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev_slider_2_1");
			} else {
				revapi2 = tpj("#rev_slider_2_1").show().revolution({
					sliderType: "standard",
					jsFileLocation: "",
					sliderLayout: "auto",
					dottedOverlay: "none",
					delay: 9000,
					navigation: {
						onHoverStop: "off",
					},
					responsiveLevels: [1240, 1240, 1240, 480],
					visibilityLevels: [1240, 1240, 1240, 480],
					gridwidth: [1170, 1024, 778, 480],
					gridheight: [665, 768, 960, 550],
					lazyType: "none",
					shadow: 0,
					spinner: "spinner0",
					stopLoop: "off",
					stopAfterLoops: -1,
					stopAtSlide: -1,
					shuffle: "off",
					autoHeight: "off",
					disableProgressBar: "on",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						nextSlideOnWindowFocus: "off",
						disableFocusListener: false,
					}
				});
			}
		});
		
		
		
		
	var setREVStartSize = function() {
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_3_1');
			e.responsiveLevels = [1240, 1024, 778, 778];
			e.gridwidth = [865, 745, 370, 480];
			e.gridheight = [390, 408, 427, 720];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
					f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
				}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function(e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi3;
	tpj(document).ready(function() {
		if (tpj("#rev_slider_3_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_3_1");
		} else {
			revapi3 = tpj("#rev_slider_3_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					onHoverStop: "off",
				},
				responsiveLevels: [1240, 1024, 778, 778],
				visibilityLevels: [1240, 1024, 778, 778],
				gridwidth: [865, 745, 370, 480],
				gridheight: [390, 408, 427, 720],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});
	
}

function revslider_showDoubleJqueryError(sliderID) {
	"use strict";
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}

function initEssentialGrid() {
	"use strict";
    var ajaxRemoveRevslider;
    var extendessential = setInterval(function() {
        if (jQuery.fn.tpessential != undefined) {
            clearInterval(extendessential);
            if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
                jQuery.fn.tpessential.defaults.ajaxTypes.push({
                    type: "revslider",
                    func: ajaxRevslider,
                    killfunc: ajaxRemoveRevslider,
                    openAnimationSpeed: 0.3
                });
            }
        }
    }, 30);

    if ("masonry" == "even") {
        var coh = 0,
            container = jQuery("#esg-grid-49-1");
        var cwidth = container.width(),
            ar = "4:4",
            gbfc = eggbfc(jQuery(window).width(), "id"),
            row = 1;
        ar = ar.split(":");
        aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
        coh = cwidth / aratio;
        coh = coh / gbfc.column * row;
        var ul = container.find("ul").first();
        ul.css({
            display: "block",
            height: coh + "px"
        });
    }



    var essapi_49;
    jQuery(document).ready(function() {
        essapi_49 = jQuery("#esg-grid-49-1").tpessential({
            gridID: 49,
            layout: "masonry",
            forceFullWidth: "off",
            lazyLoad: "off",
            row: 1,
            loadMoreAjaxToken: "bbc6c311dd",
            loadMoreAjaxUrl: "",
            loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
            ajaxContentTarget: "ess-grid-ajax-container-",
            ajaxScrollToOffset: "0",
            ajaxCloseButton: "off",
            ajaxContentSliding: "on",
            ajaxScrollToOnLoad: "on",
            ajaxNavButton: "off",
            ajaxCloseType: "type1",
            ajaxCloseInner: "false",
            ajaxCloseStyle: "light",
            ajaxClosePosition: "tr",
            space: 30,
            pageAnimation: "fade",
            paginationScrollToTop: "off",
            spinner: "spinner0",
            lightBoxMode: "single",
            animSpeed: 1000,
            delayBasic: 1,
            mainhoverdelay: 1,
            filterType: "single",
            showDropFilter: "hover",
            filterGroupClass: "esg-fgc-49",
            googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
            responsiveEntries: [{
                width: 1400,
                amount: 4
            }, {
                width: 1170,
                amount: 4
            }, {
                width: 1024,
                amount: 4
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 460,
                amount: 2
            }, {
                width: 300,
                amount: 1
            }]
        });

        try {
            jQuery("#esg-grid-49-1 .esgbox").esgbox({
                padding: [0, 0, 0, 0],
                afterLoad: function() {
                    if (this.element.hasClass("esgboxhtml5")) {
                        var mp = this.element.data("mp4"),
                            ogv = this.element.data("ogv"),
                            webm = this.element.data("webm");
                        this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                        var riint = setInterval(function() {
                            jQuery(window).trigger("resize");
                        }, 100);
                        setTimeout(function() {
                            clearInterval(riint);
                        }, 2500);
                    };
                },
                beforeShow: function() {
                    this.title = jQuery(this.element).attr('lgtitle');
                    if (this.title) {
                        this.title = "";
                        this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                    }
                },
                afterShow: function() {},
                openEffect: 'fade',
                closeEffect: 'fade',
                nextEffect: 'fade',
                prevEffect: 'fade',
                openSpeed: 'normal',
                closeSpeed: 'normal',
                nextSpeed: 'normal',
                prevSpeed: 'normal',
                helpers: {
                    media: {},
                    title: {
                        type: ""
                    }
                }
            });

        } catch (e) {}

    });

    var essapi_51;
    jQuery(document).ready(function() {
        essapi_51 = jQuery("#esg-grid-51-1").tpessential({
            gridID: 51,
            layout: "masonry",
            forceFullWidth: "off",
            lazyLoad: "off",
            row: 1,
            loadMoreAjaxToken: "bbc6c311dd",
            loadMoreAjaxUrl: "",
            loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
            ajaxContentTarget: "ess-grid-ajax-container-",
            ajaxScrollToOffset: "0",
            ajaxCloseButton: "off",
            ajaxContentSliding: "on",
            ajaxScrollToOnLoad: "on",
            ajaxNavButton: "off",
            ajaxCloseType: "type1",
            ajaxCloseInner: "false",
            ajaxCloseStyle: "light",
            ajaxClosePosition: "tr",
            space: 30,
            pageAnimation: "fade",
            paginationScrollToTop: "off",
            spinner: "spinner0",
            lightBoxMode: "single",
            animSpeed: 1000,
            delayBasic: 1,
            mainhoverdelay: 1,
            filterType: "single",
            showDropFilter: "hover",
            filterGroupClass: "esg-fgc-51",
            googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
            responsiveEntries: [{
                width: 1400,
                amount: 3
            }, {
                width: 1170,
                amount: 3
            }, {
                width: 1024,
                amount: 3
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 460,
                amount: 2
            }, {
                width: 300,
                amount: 1
            }]
        });

        try {
            jQuery("#esg-grid-51-1 .esgbox").esgbox({
                padding: [0, 0, 0, 0],
                afterLoad: function() {
                    if (this.element.hasClass("esgboxhtml5")) {
                        var mp = this.element.data("mp4"),
                            ogv = this.element.data("ogv"),
                            webm = this.element.data("webm");
                        this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                        var riint = setInterval(function() {
                            jQuery(window).trigger("resize");
                        }, 100);
                        setTimeout(function() {
                            clearInterval(riint);
                        }, 2500);
                    };
                },
                beforeShow: function() {
                    this.title = jQuery(this.element).attr('lgtitle');
                    if (this.title) {
                        this.title = "";
                        this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                    }
                },
                afterShow: function() {},
                openEffect: 'fade',
                closeEffect: 'fade',
                nextEffect: 'fade',
                prevEffect: 'fade',
                openSpeed: 'normal',
                closeSpeed: 'normal',
                nextSpeed: 'normal',
                prevSpeed: 'normal',
                helpers: {
                    media: {},
                    title: {
                        type: ""
                    }
                }
            });

        } catch (e) {}

    });

    var essapi_50;
    jQuery(document).ready(function() {
        essapi_50 = jQuery("#esg-grid-50-1").tpessential({
            gridID: 50,
            layout: "masonry",
            forceFullWidth: "off",
            lazyLoad: "off",
            row: 1,
            loadMoreAjaxToken: "bbc6c311dd",
            loadMoreAjaxUrl: "",
            loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
            ajaxContentTarget: "ess-grid-ajax-container-",
            ajaxScrollToOffset: "0",
            ajaxCloseButton: "off",
            ajaxContentSliding: "on",
            ajaxScrollToOnLoad: "on",
            ajaxNavButton: "off",
            ajaxCloseType: "type1",
            ajaxCloseInner: "false",
            ajaxCloseStyle: "light",
            ajaxClosePosition: "tr",
            space: 30,
            pageAnimation: "fade",
            paginationScrollToTop: "off",
            spinner: "spinner0",
            lightBoxMode: "single",
            animSpeed: 1000,
            delayBasic: 1,
            mainhoverdelay: 1,
            filterType: "single",
            showDropFilter: "hover",
            filterGroupClass: "esg-fgc-50",
            googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
            responsiveEntries: [{
                width: 1400,
                amount: 4
            }, {
                width: 1170,
                amount: 4
            }, {
                width: 1024,
                amount: 4
            }, {
                width: 960,
                amount: 3
            }, {
                width: 778,
                amount: 3
            }, {
                width: 460,
                amount: 2
            }, {
                width: 300,
                amount: 1
            }]
        });

        try {
            jQuery("#esg-grid-50-1 .esgbox").esgbox({
                padding: [0, 0, 0, 0],
                afterLoad: function() {
                    if (this.element.hasClass("esgboxhtml5")) {
                        var mp = this.element.data("mp4"),
                            ogv = this.element.data("ogv"),
                            webm = this.element.data("webm");
                        this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
                        var riint = setInterval(function() {
                            jQuery(window).trigger("resize");
                        }, 100);
                        setTimeout(function() {
                            clearInterval(riint);
                        }, 2500);
                    };
                },
                beforeShow: function() {
                    this.title = jQuery(this.element).attr('lgtitle');
                    if (this.title) {
                        this.title = "";
                        this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
                    }
                },
                afterShow: function() {},
                openEffect: 'fade',
                closeEffect: 'fade',
                nextEffect: 'fade',
                prevEffect: 'fade',
                openSpeed: 'normal',
                closeSpeed: 'normal',
                nextSpeed: 'normal',
                prevSpeed: 'normal',
                helpers: {
                    media: {},
                    title: {
                        type: ""
                    }
                }
            });

        } catch (e) {}

    });
	
	var essapi_55;
	jQuery(document).ready(function() {
		essapi_55 = jQuery("#esg-grid-55-1").tpessential({
			gridID: 55,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 1,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-55",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-55-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
		
	var essapi_56;
	jQuery(document).ready(function() {
		essapi_56 = jQuery("#esg-grid-56-1").tpessential({
			gridID: 56,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 1,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-56",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-56-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}
	});


	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
		
	}

	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("masonry" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-55-1");
		var cwidth = container.width(),
			ar = "4:4",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 1;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}



	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("masonry" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-56-1");
		var cwidth = container.width(),
			ar = "4:4",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 1;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("cobbles" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-48-1");
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_48;
	jQuery(document).ready(function() {
		essapi_48 = jQuery("#esg-grid-48-1").tpessential({
			gridID: 48,
			layout: "cobbles",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-48",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			aspectratio: "4:3",
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-48-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("cobbles" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-47-1");
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 3;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_47;
	jQuery(document).ready(function() {
		essapi_47 = jQuery("#esg-grid-47-1").tpessential({
			gridID: 47,
			layout: "cobbles",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 3,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-47",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			aspectratio: "4:3",
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 640,
				amount: 3
			}, {
				width: 480,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-47-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("masonry" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-56-1");
		var cwidth = container.width(),
			ar = "4:4",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 1;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_56;
	jQuery(document).ready(function() {
		essapi_56 = jQuery("#esg-grid-56-1").tpessential({
			gridID: 56,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 1,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-56",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-56-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 2
			}, {
				width: 1170,
				amount: 2
			}, {
				width: 1024,
				amount: 2
			}, {
				width: 940,
				amount: 2
			}, {
				width: 750,
				amount: 1
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("masonry" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-54-1");
		var cwidth = container.width(),
			ar = "4:3",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 1;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_54;
	jQuery(document).ready(function() {
		essapi_54 = jQuery("#esg-grid-54-1").tpessential({
			gridID: 54,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 1,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-54",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 2
			}, {
				width: 1170,
				amount: 2
			}, {
				width: 1024,
				amount: 2
			}, {
				width: 940,
				amount: 2
			}, {
				width: 750,
				amount: 1
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}]
		});

	});
	
	function eggbfc(winw, resultoption) {
		var lasttop = winw,
			lastbottom = 0,
			smallest = 9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}];
		if (responsiveEntries != undefined && responsiveEntries.length > 0)
			jQuery.each(responsiveEntries, function(index, obj) {
				var curw = obj.width != undefined ? obj.width : 0,
					cura = obj.amount != undefined ? obj.amount : 0;
				if (smallest > curw) {
					smallest = curw;
					samount = cura;
					resultidb = index;
				}
				if (largest < curw) {
					largest = curw;
					lamount = cura;
				}
				if (curw > lastbottom && curw <= lasttop) {
					lastbottom = curw;
					lastamount = cura;
					resultid = index;
				}
			})
		if (smallest > winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption == "id")
			return obj;
		else
			return lastamount;
	}
	if ("masonry" == "even") {
		var coh = 0,
			container = jQuery("#esg-grid-55-1");
		var cwidth = container.width(),
			ar = "4:4",
			gbfc = eggbfc(jQuery(window).width(), "id"),
			row = 1;
		ar = ar.split(":");
		aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
		coh = cwidth / aratio;
		coh = coh / gbfc.column * row;
		var ul = container.find("ul").first();
		ul.css({
			display: "block",
			height: coh + "px"
		});
	}
	var essapi_55;
	jQuery(document).ready(function() {
		essapi_55 = jQuery("#esg-grid-55-1").tpessential({
			gridID: 55,
			layout: "masonry",
			forceFullWidth: "off",
			lazyLoad: "off",
			row: 1,
			loadMoreAjaxToken: "a79a3d143c",
			loadMoreAjaxUrl: "",
			loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
			ajaxContentTarget: "ess-grid-ajax-container-",
			ajaxScrollToOffset: "0",
			ajaxCloseButton: "off",
			ajaxContentSliding: "on",
			ajaxScrollToOnLoad: "on",
			ajaxNavButton: "off",
			ajaxCloseType: "type1",
			ajaxCloseInner: "false",
			ajaxCloseStyle: "light",
			ajaxClosePosition: "tr",
			space: 30,
			pageAnimation: "fade",
			paginationScrollToTop: "off",
			spinner: "spinner0",
			lightBoxMode: "single",
			animSpeed: 1000,
			delayBasic: 1,
			mainhoverdelay: 1,
			filterType: "single",
			showDropFilter: "hover",
			filterGroupClass: "esg-fgc-55",
			googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
			responsiveEntries: [{
				width: 1400,
				amount: 4
			}, {
				width: 1170,
				amount: 4
			}, {
				width: 1024,
				amount: 4
			}, {
				width: 960,
				amount: 3
			}, {
				width: 778,
				amount: 3
			}, {
				width: 460,
				amount: 2
			}, {
				width: 300,
				amount: 1
			}]
		});

		try {
			jQuery("#esg-grid-55-1 .esgbox").esgbox({
				padding: [0, 0, 0, 0],
				afterLoad: function() {
					if (this.element.hasClass("esgboxhtml5")) {
						var mp = this.element.data("mp4"),
							ogv = this.element.data("ogv"),
							webm = this.element.data("webm");
						this.content = '<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + mp + '" type="video/mp4"><source src="' + webm + '" type="video/webm"><source src="' + ogv + '" type="video/ogg"></video></div>';
						var riint = setInterval(function() {
							jQuery(window).trigger("resize");
						}, 100);
						setTimeout(function() {
							clearInterval(riint);
						}, 2500);
					};
				},
				beforeShow: function() {
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title = "";
						this.title = '<div style="padding:0px 0px 0px 0px">' + this.title + '</div>';
					}
				},
				afterShow: function() {},
				openEffect: 'fade',
				closeEffect: 'fade',
				nextEffect: 'fade',
				prevEffect: 'fade',
				openSpeed: 'normal',
				closeSpeed: 'normal',
				nextSpeed: 'normal',
				prevSpeed: 'normal',
				helpers: {
					media: {},
					title: {
						type: ""
					}
				}
			});

		} catch (e) {}

	});
}