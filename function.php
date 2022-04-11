<?php

function shoptheme_theme_setup()
{
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support( 'post-thumbnails' );
    add_image_size('home-featured',680,400,array('center','center'));
    add_theme_support( 'automatic-feed-links' );
    
    register_nav_menus(array(
        'primary' =>_('Primary Menu','my-theme');
    ));
}
add_action('after_setup_theme', 'mytheme_theme_setup');

function shoptheme_scripts_enqueue()
{

    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_script('jquery');
    wp_enqueue_script('shoptheme-custome', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/custom.js');
    wp_enqueue_script('shoptheme-lightbox', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/essgrid/lightbox.js');
    wp_enqueue_script('shoptheme-tools', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/essgrid/jquery.themepunch.tools.min.js');
    wp_enqueue_script('shoptheme-custome', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/revslider/jquery.themepunch.revolution.min.js');
    wp_enqueue_script('shoptheme-essential', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/essgrid/jquery.themepunch.essential.min.js');
    wp_enqueue_script('shoptheme-themepunch', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/revslider/jquery.themepunch.revolution.min.js');
    wp_enqueue_script('shoptheme-slideanims', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/revslider/extensions/revolution.extension.slideanims.min.js');
    wp_enqueue_script('shoptheme-actions-min', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/revslider/extensions/revolution.extension.actions.min.js');
    wp_enqueue_script('shoptheme-layeranimation', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/revslider/extensions/revolution.extension.layeranimation.min.js');
    wp_enqueue_script('shoptheme-add-to-cart', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/add-to-cart.min.js');
    wp_enqueue_script('shoptheme-woocommerce-add-to-cart', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/woocommerce-add-to-cart.js');
    wp_enqueue_script('shoptheme-modernizr', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/photostack/modernizr.min.js');
    wp_enqueue_script('shoptheme-blockUI', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/jquery.blockUI.min.js');
    wp_enqueue_script('shoptheme-cookie', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/jquery.cookie.min.js');
    wp_enqueue_script('shoptheme-cart-fragments', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/cart-fragments.min.js');
    wp_enqueue_script('shoptheme-woocommerce', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/woo/woocommerce.min.js');
    wp_enqueue_script('shoptheme-superfish', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/superfish.js');
    wp_enqueue_script('shoptheme-core-utils', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/jquery/core.utils.js');
    wp_enqueue_script('shoptheme-core-init', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/jquery/core.init.js');
    wp_enqueue_script('shoptheme-theme-init', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/jquery/theme.init.js');
    wp_enqueue_script('shoptheme-mediaelement', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/mediaelement/mediaelement-and-player.min.js');
    wp_enqueue_script('shoptheme-theme-shortcodes', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/jquery/theme.shortcodes.js');
    wp_enqueue_script('shoptheme-mediaelement-and-player', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/mediaelement/mediaelement-and-player.min.js');
    wp_enqueue_script('shoptheme-core-messages', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/custom/jquery/core.messages.js');
    wp_enqueue_script('shoptheme-widget-min', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/ui/widget.min.js');
    wp_enqueue_script('shoptheme-tabs-min', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/ui/tabs.min.js');
    wp_enqueue_script('shoptheme-effect-min', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/ui/effect.min.js');
    wp_enqueue_script('shoptheme-effect-fade', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/ui/effect-fade.min.js');
    wp_enqueue_script('shoptheme-isotope-pkgd', get_template_directory_uri() . 'http://127.0.0.1:81/wordpress/wp-content/themes/customize-shoptheme/js/vendor/isotope/isotope.pkgd.min.js');
}
add_action('wp_enqueue_scripts', 'shoptheme_scripts_enqueue');
