<?php

function shoptheme_theme_setup()
{
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_image_size('home-featured', 680, 400, array('center', 'center'));
    add_theme_support('automatic-feed-links');


    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'my-theme'),
        'secondary' => __('Secondary Navigation', 'my-theme')
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


// // Function that will return our Wordpress menu
// function show_wp_menu_function($atts, $content = null) {

//     extract(shortcode_atts(array(  
//         'menu'            => '', 
//         'container'       => 'div', 
//         'container_class' => '', 
//         'container_id'    => '', 
//         'menu_class'      => 'menu', 
//         'menu_id'         => '',
//         'echo'            => true,
//         'fallback_cb'     => 'wp_page_menu',
//         'before'          => '',
//         'after'           => '',
//         'link_before'     => '',
//         'link_after'      => '',
//         'depth'           => 0,
//         'walker'          => '',
//         'theme_location'  => ''), 
//         $atts));


//     return wp_nav_menu( array( 
//         'menu'            => $menu, 
//         'container'       => $container, 
//         'container_class' => $container_class, 
//         'container_id'    => $container_id, 
//         'menu_class'      => $menu_class, 
//         'menu_id'         => $menu_id,
//         'echo'            => false,
//         'fallback_cb'     => $fallback_cb,
//         'before'          => $before,
//         'after'           => $after,
//         'link_before'     => $link_before,
//         'link_after'      => $link_after,
//         'depth'           => $depth,
//         'walker'          => $walker,
//         'theme_location'  => $theme_location));
// }
// //Create the shortcode
// add_shortcode("show_wp_menu", "show_wp_menu_function");




// wp_nav_menu(array(
//     'menu'   => 'Something custom walker',
//     'walker' => new WPDocs_Walker_Nav_Menu()
// ));

// /**
//  * Custom walker class.
//  */
// class WPDocs_Walker_Nav_Menu extends Walker_Nav_Menu
// {

//     /**
//      * Starts the list before the elements are added.
//      *
//      * Adds classes to the unordered list sub-menus.
//      *
//      * @param string $output Passed by reference. Used to append additional content.
//      * @param int    $depth  Depth of menu item. Used for padding.
//      * @param array  $args   An array of arguments. @see wp_nav_menu()
//      */
//     function start_lvl(&$output, $depth = 0, $args = array())
//     {
//         // Depth-dependent classes.
//         $indent = ($depth > 0  ? str_repeat("\t", $depth) : ''); // code indent
//         $display_depth = ($depth + 1); // because it counts the first submenu as 0
//         $classes = array(
//             'sub-menu',
//             ($display_depth % 2  ? 'menu-odd' : 'menu-even'),
//             ($display_depth >= 2 ? 'sub-sub-menu' : ''),
//             'menu-depth-' . $display_depth
//         );
//         $class_names = implode(' ', $classes);

//         // Build HTML for output.
//         $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
//     }

//     /**
//      * Start the element output.
//      *
//      * Adds main/sub-classes to the list items and links.
//      *
//      * @param string $output Passed by reference. Used to append additional content.
//      * @param object $item   Menu item data object.
//      * @param int    $depth  Depth of menu item. Used for padding.
//      * @param array  $args   An array of arguments. @see wp_nav_menu()
//      * @param int    $id     Current item ID.
//      */
//     function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
//     {
//         global $wp_query;
//         $indent = ($depth > 0 ? str_repeat("\t", $depth) : ''); // code indent

//         // Depth-dependent classes.
//         $depth_classes = array(
//             ($depth == 0 ? 'main-menu-item' : 'sub-menu-item'),
//             ($depth >= 2 ? 'sub-sub-menu-item' : ''),
//             ($depth % 2 ? 'menu-item-odd' : 'menu-item-even'),
//             'menu-item-depth-' . $depth
//         );
//         $depth_class_names = esc_attr(implode(' ', $depth_classes));

//         // Passed classes.
//         $classes = empty($item->classes) ? array() : (array) $item->classes;
//         $class_names = esc_attr(implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item)));

//         // Build HTML.
//         $output .= $indent . '<li id="nav-menu-item-' . $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';

//         // Link attributes.
//         $attributes  = !empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) . '"' : '';
//         $attributes .= !empty($item->target)     ? ' target="' . esc_attr($item->target) . '"' : '';
//         $attributes .= !empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn) . '"' : '';
//         $attributes .= !empty($item->url)        ? ' href="'   . esc_attr($item->url) . '"' : '';
//         $attributes .= ' class="menu-link ' . ($depth > 0 ? 'sub-menu-link' : 'main-menu-link') . '"';

//         // Build HTML output and pass through the proper filter.
//         $item_output = sprintf(
//             '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
//             $args->before,
//             $attributes,
//             $args->link_before,
//             apply_filters('the_title', $item->title, $item->ID),
//             $args->link_after,
//             $args->after
//         );
//         $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
//     }
// }


// This theme requires WordPress 5.3 or later.
if (version_compare($GLOBALS['wp_version'], '5.3', '<')) {
    require get_template_directory() . '/inc/back-compat.php';
}

if (!function_exists('twenty_twenty_one_setup')) {
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     *
     * @since Twenty Twenty-One 1.0
     *
     * @return void
     */
    function my_theme_setup()
    {
        /*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Twenty-One, use a find and replace
		 * to change 'my_theme' to the name of your theme in all the template files.
		 */
        load_theme_textdomain('my_theme', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
		 * Let WordPress manage the document title.
		 * This theme does not use a hard-coded <title> tag in the document head,
		 * WordPress will provide it for us.
		 */
        add_theme_support('title-tag');

        /**
         * Add post-formats support.
         */
        add_theme_support(
            'post-formats',
            array(
                'link',
                'aside',
                'gallery',
                'image',
                'quote',
                'status',
                'video',
                'audio',
                'chat',
            )
        );

        /*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
        add_theme_support('post-thumbnails');
        set_post_thumbnail_size(1568, 9999);

        register_nav_menus(
            array(
                'primary' => esc_html__('Primary menu', 'my_theme'),
                'footer'  => esc_html__('Secondary menu', 'my_theme'),
            )
        );

        /*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
        add_theme_support(
            'html5',
            array(
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
                'navigation-widgets',
            )
        );

        /*
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
        $logo_width  = 300;
        $logo_height = 100;

        add_theme_support(
            'custom-logo',
            array(
                'height'               => $logo_height,
                'width'                => $logo_width,
                'flex-width'           => true,
                'flex-height'          => true,
                'unlink-homepage-logo' => true,
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        // Add support for Block Styles.
        add_theme_support('wp-block-styles');

        // Add support for full and wide align images.
        add_theme_support('align-wide');

        // Add support for editor styles.
        add_theme_support('editor-styles');
        $background_color = get_theme_mod('background_color', 'D1E4DD');
        if (127 > Twenty_Twenty_One_Custom_Colors::get_relative_luminance_from_hex($background_color)) {
            add_theme_support('dark-editor-style');
        }

        $editor_stylesheet_path = './assets/css/style-editor.css';

        // Note, the is_IE global variable is defined by WordPress and is used
        // to detect if the current browser is internet explorer.
        global $is_IE;
        if ($is_IE) {
            $editor_stylesheet_path = './assets/css/ie-editor.css';
        }

        // Enqueue editor styles.
        add_editor_style($editor_stylesheet_path);

        // Add custom editor font sizes.
        add_theme_support(
            'editor-font-sizes',
            array(
                array(
                    'name'      => esc_html__('Extra small', 'my_theme'),
                    'shortName' => esc_html_x('XS', 'Font size', 'my_theme'),
                    'size'      => 16,
                    'slug'      => 'extra-small',
                ),
                array(
                    'name'      => esc_html__('Small', 'my_theme'),
                    'shortName' => esc_html_x('S', 'Font size', 'my_theme'),
                    'size'      => 18,
                    'slug'      => 'small',
                ),
                array(
                    'name'      => esc_html__('Normal', 'my_theme'),
                    'shortName' => esc_html_x('M', 'Font size', 'my_theme'),
                    'size'      => 20,
                    'slug'      => 'normal',
                ),
                array(
                    'name'      => esc_html__('Large', 'my_theme'),
                    'shortName' => esc_html_x('L', 'Font size', 'my_theme'),
                    'size'      => 24,
                    'slug'      => 'large',
                ),
                array(
                    'name'      => esc_html__('Extra large', 'my_theme'),
                    'shortName' => esc_html_x('XL', 'Font size', 'my_theme'),
                    'size'      => 40,
                    'slug'      => 'extra-large',
                ),
                array(
                    'name'      => esc_html__('Huge', 'my_theme'),
                    'shortName' => esc_html_x('XXL', 'Font size', 'my_theme'),
                    'size'      => 96,
                    'slug'      => 'huge',
                ),
                array(
                    'name'      => esc_html__('Gigantic', 'my_theme'),
                    'shortName' => esc_html_x('XXXL', 'Font size', 'my_theme'),
                    'size'      => 144,
                    'slug'      => 'gigantic',
                ),
            )
        );

        // Custom background color.
        add_theme_support(
            'custom-background',
            array(
                'default-color' => 'd1e4dd',
            )
        );

        // Editor color palette.
        $black     = '#000000';
        $dark_gray = '#28303D';
        $gray      = '#39414D';
        $green     = '#D1E4DD';
        $blue      = '#D1DFE4';
        $purple    = '#D1D1E4';
        $red       = '#E4D1D1';
        $orange    = '#E4DAD1';
        $yellow    = '#EEEADD';
        $white     = '#FFFFFF';

        add_theme_support(
            'editor-color-palette',
            array(
                array(
                    'name'  => esc_html__('Black', 'my_theme'),
                    'slug'  => 'black',
                    'color' => $black,
                ),
                array(
                    'name'  => esc_html__('Dark gray', 'my_theme'),
                    'slug'  => 'dark-gray',
                    'color' => $dark_gray,
                ),
                array(
                    'name'  => esc_html__('Gray', 'my_theme'),
                    'slug'  => 'gray',
                    'color' => $gray,
                ),
                array(
                    'name'  => esc_html__('Green', 'my_theme'),
                    'slug'  => 'green',
                    'color' => $green,
                ),
                array(
                    'name'  => esc_html__('Blue', 'my_theme'),
                    'slug'  => 'blue',
                    'color' => $blue,
                ),
                array(
                    'name'  => esc_html__('Purple', 'my_theme'),
                    'slug'  => 'purple',
                    'color' => $purple,
                ),
                array(
                    'name'  => esc_html__('Red', 'my_theme'),
                    'slug'  => 'red',
                    'color' => $red,
                ),
                array(
                    'name'  => esc_html__('Orange', 'my_theme'),
                    'slug'  => 'orange',
                    'color' => $orange,
                ),
                array(
                    'name'  => esc_html__('Yellow', 'my_theme'),
                    'slug'  => 'yellow',
                    'color' => $yellow,
                ),
                array(
                    'name'  => esc_html__('White', 'my_theme'),
                    'slug'  => 'white',
                    'color' => $white,
                ),
            )
        );

        add_theme_support(
            'editor-gradient-presets',
            array(
                array(
                    'name'     => esc_html__('Purple to yellow', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $yellow . ' 100%)',
                    'slug'     => 'purple-to-yellow',
                ),
                array(
                    'name'     => esc_html__('Yellow to purple', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $purple . ' 100%)',
                    'slug'     => 'yellow-to-purple',
                ),
                array(
                    'name'     => esc_html__('Green to yellow', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $green . ' 0%, ' . $yellow . ' 100%)',
                    'slug'     => 'green-to-yellow',
                ),
                array(
                    'name'     => esc_html__('Yellow to green', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $green . ' 100%)',
                    'slug'     => 'yellow-to-green',
                ),
                array(
                    'name'     => esc_html__('Red to yellow', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $yellow . ' 100%)',
                    'slug'     => 'red-to-yellow',
                ),
                array(
                    'name'     => esc_html__('Yellow to red', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $yellow . ' 0%, ' . $red . ' 100%)',
                    'slug'     => 'yellow-to-red',
                ),
                array(
                    'name'     => esc_html__('Purple to red', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $purple . ' 0%, ' . $red . ' 100%)',
                    'slug'     => 'purple-to-red',
                ),
                array(
                    'name'     => esc_html__('Red to purple', 'my_theme'),
                    'gradient' => 'linear-gradient(160deg, ' . $red . ' 0%, ' . $purple . ' 100%)',
                    'slug'     => 'red-to-purple',
                ),
            )
        );

        /*
		* Adds starter content to highlight the theme on fresh sites.
		* This is done conditionally to avoid loading the starter content on every
		* page load, as it is a one-off operation only needed once in the customizer.
		*/
        if (is_customize_preview()) {
            require get_template_directory() . '/inc/starter-content.php';
            add_theme_support('starter-content', twenty_twenty_one_get_starter_content());
        }

        // Add support for responsive embedded content.
        add_theme_support('responsive-embeds');

        // Add support for custom line height controls.
        add_theme_support('custom-line-height');

        // Add support for experimental link color control.
        add_theme_support('experimental-link-color');

        // Add support for experimental cover block spacing.
        add_theme_support('custom-spacing');

        // Add support for custom units.
        // This was removed in WordPress 5.6 but is still required to properly support WP 5.5.
        add_theme_support('custom-units');

        // Remove feed icon link from legacy RSS widget.
        add_filter('rss_widget_feed_link', '__return_false');
    }
}
add_action('after_setup_theme', 'my_theme_setup');

/**
 * Register widget area.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 * @return void
 */
function my_theme_widgets_init()
{

    register_sidebar(
        array(
            'name'          => esc_html__('Footer', 'my_theme'),
            'id'            => 'sidebar-1',
            'description'   => esc_html__('Add widgets here to appear in your footer.', 'my_theme'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action('widgets_init', 'my_theme_widgets_init');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @global int $content_width Content width.
 *
 * @return void
 */
function twenty_twenty_one_content_width()
{
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
    $GLOBALS['content_width'] = apply_filters('twenty_twenty_one_content_width', 750);
}
add_action('after_setup_theme', 'twenty_twenty_one_content_width', 0);

/**
 * Enqueue scripts and styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twenty_twenty_one_scripts()
{
    // Note, the is_IE global variable is defined by WordPress and is used
    // to detect if the current browser is internet explorer.
    global $is_IE, $wp_scripts;
    if ($is_IE) {
        // If IE 11 or below, use a flattened stylesheet with static values replacing CSS Variables.
        wp_enqueue_style('twenty-twenty-one-style', get_template_directory_uri() . '/assets/css/ie.css', array(), wp_get_theme()->get('Version'));
    } else {
        // If not IE, use the standard stylesheet.
        wp_enqueue_style('twenty-twenty-one-style', get_template_directory_uri() . '/style.css', array(), wp_get_theme()->get('Version'));
    }

    // RTL styles.
    wp_style_add_data('twenty-twenty-one-style', 'rtl', 'replace');

    // Print styles.
    wp_enqueue_style('twenty-twenty-one-print-style', get_template_directory_uri() . '/assets/css/print.css', array(), wp_get_theme()->get('Version'), 'print');

    // Threaded comment reply styles.
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    // Register the IE11 polyfill file.
    wp_register_script(
        'twenty-twenty-one-ie11-polyfills-asset',
        get_template_directory_uri() . '/assets/js/polyfills.js',
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    // Register the IE11 polyfill loader.
    wp_register_script(
        'twenty-twenty-one-ie11-polyfills',
        null,
        array(),
        wp_get_theme()->get('Version'),
        true
    );
    wp_add_inline_script(
        'twenty-twenty-one-ie11-polyfills',
        wp_get_script_polyfill(
            $wp_scripts,
            array(
                'Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach' => 'twenty-twenty-one-ie11-polyfills-asset',
            )
        )
    );

    // Main navigation scripts.
    if (has_nav_menu('primary')) {
        wp_enqueue_script(
            'twenty-twenty-one-primary-navigation-script',
            get_template_directory_uri() . '/assets/js/primary-navigation.js',
            array('twenty-twenty-one-ie11-polyfills'),
            wp_get_theme()->get('Version'),
            true
        );
    }

    // Responsive embeds script.
    wp_enqueue_script(
        'twenty-twenty-one-responsive-embeds-script',
        get_template_directory_uri() . '/assets/js/responsive-embeds.js',
        array('twenty-twenty-one-ie11-polyfills'),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'twenty_twenty_one_scripts');

/**
 * Enqueue block editor script.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function my_theme_block_editor_script()
{

    wp_enqueue_script('my_theme-editor', get_theme_file_uri('/assets/js/editor.js'), array('wp-blocks', 'wp-dom'), wp_get_theme()->get('Version'), true);
}

add_action('enqueue_block_editor_assets', 'my_theme_block_editor_script');

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @link https://git.io/vWdr2
 */
function twenty_twenty_one_skip_link_focus_fix()
{

    // If SCRIPT_DEBUG is defined and true, print the unminified file.
    if (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) {
        echo '<script>';
        include get_template_directory() . '/assets/js/skip-link-focus-fix.js';
        echo '</script>';
    } else {
        // The following is minified via `npx terser --compress --mangle -- assets/js/skip-link-focus-fix.js`.
?>
        <script>
            /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", (function() {
                var t, e = location.hash.substring(1);
                /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
            }), !1);
        </script>
    <?php
    }
}
add_action('wp_print_footer_scripts', 'twenty_twenty_one_skip_link_focus_fix');

/**
 * Enqueue non-latin language styles.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function twenty_twenty_one_non_latin_languages()
{
    $custom_css = twenty_twenty_one_get_non_latin_css('front-end');

    if ($custom_css) {
        wp_add_inline_style('twenty-twenty-one-style', $custom_css);
    }
}
add_action('wp_enqueue_scripts', 'twenty_twenty_one_non_latin_languages');

// SVG Icons class.
require get_template_directory() . '/classes/class-twenty-twenty-one-svg-icons.php';

// Custom color classes.
require get_template_directory() . '/classes/class-twenty-twenty-one-custom-colors.php';
new Twenty_Twenty_One_Custom_Colors();

// Enhance the theme by hooking into WordPress.
require get_template_directory() . '/inc/template-functions.php';

// Menu functions and filters.
require get_template_directory() . '/inc/menu-functions.php';

// Custom template tags for the theme.
require get_template_directory() . '/inc/template-tags.php';

// Customizer additions.
require get_template_directory() . '/classes/class-twenty-twenty-one-customize.php';
new Twenty_Twenty_One_Customize();

// Block Patterns.
require get_template_directory() . '/inc/block-patterns.php';

// Block Styles.
require get_template_directory() . '/inc/block-styles.php';

// Dark Mode.
require_once get_template_directory() . '/classes/class-twenty-twenty-one-dark-mode.php';
new Twenty_Twenty_One_Dark_Mode();

/**
 * Enqueue scripts for the customizer preview.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function my_theme_customize_preview_init()
{
    wp_enqueue_script(
        'my_theme-customize-helpers',
        get_theme_file_uri('/assets/js/customize-helpers.js'),
        array(),
        wp_get_theme()->get('Version'),
        true
    );

    wp_enqueue_script(
        'my_theme-customize-preview',
        get_theme_file_uri('/assets/js/customize-preview.js'),
        array('customize-preview', 'customize-selective-refresh', 'jquery', 'my_theme-customize-helpers'),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('customize_preview_init', 'my_theme_customize_preview_init');

/**
 * Enqueue scripts for the customizer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function my_theme_customize_controls_enqueue_scripts()
{

    wp_enqueue_script(
        'my_theme-customize-helpers',
        get_theme_file_uri('/assets/js/customize-helpers.js'),
        array(),
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('customize_controls_enqueue_scripts', 'my_theme_customize_controls_enqueue_scripts');

/**
 * Calculate classes for the main <html> element.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function my_theme_the_html_classes()
{
    /**
     * Filters the classes for the main <html> element.
     *
     * @since Twenty Twenty-One 1.0
     *
     * @param string The list of classes. Default empty string.
     */
    $classes = apply_filters('my_theme_html_classes', '');
    if (!$classes) {
        return;
    }
    echo 'class="' . esc_attr($classes) . '"';
}

/**
 * Add "is-IE" class to body if the user is on Internet Explorer.
 *
 * @since Twenty Twenty-One 1.0
 *
 * @return void
 */
function my_theme_add_ie_class()
{
    ?>
    <script>
        if (-1 !== navigator.userAgent.indexOf('MSIE') || -1 !== navigator.appVersion.indexOf('Trident/')) {
            document.body.classList.add('is-IE');
        }
    </script>
<?php
}
add_action('wp_footer', 'my_theme_add_ie_class');
