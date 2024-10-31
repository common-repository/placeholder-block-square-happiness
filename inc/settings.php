<?php
/**
 * File docs.
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Plugin Initializer
 *
 * Boosgraps the plugin.
 *
 * @since   1.0.0
 * @package SQHP/Placeholder
 */
if ( !class_exists('SQHP_Placeholder_Settings') ) :
  class SQHP_Placeholder_Settings {

    function __construct() {
      add_action( 'admin_menu', array( $this, 'add_menu_page' ), 10, 1 );
      add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_styles' ) );
    }

    public function load_admin_styles ( $hook ) {
      if( $hook != 'placeholder_page_placeholder_settings' ) {
        return;
      }
      wp_enqueue_style( 'settings-page', plugins_url('dist/settings_page.css', dirname( __FILE__ ) ) );
    }

    public function add_menu_page () {
      add_submenu_page(
        'edit.php?post_type=placeholder',
        __( 'Help', 'placeholder-block-square-happiness' ),
        __( 'Help', 'placeholder-block-square-happiness' ),
        'manage_options',
        'placeholder_settings',
        array( $this, 'placeholder_settings_page')
      );
    }

    function placeholder_settings_page() {
      include( plugin_dir_path(__FILE__) . 'settings_page.php' );
    }

  }
endif;
