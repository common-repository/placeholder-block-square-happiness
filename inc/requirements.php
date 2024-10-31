<?php
/**
 * File docs.
 */

/**
 *
 */
if ( !class_exists('SQHP_Placeholder_Requirements') ) :

  class SQHP_Placeholder_Requirements {

    /**
     * Type of error if any
     * @var Array
     */
    private static $error = array();

    function __construct() {

      // add_action( 'admin_init', array( $this, 'init'), 10, 1 );
      // add_action( 'admin_init', SQHP_Placeholder_Requirements::init, 10, 1 );

    }

    public static function are_requirements_meet ( $required_php_version, $required_wp_version ) {
      global $wp_version;

      if ( version_compare ( PHP_VERSION, $required_php_version, '<' ) ) {
        static::$error = array( 'code' => 0, 'name' => sprintf( __('Minimum PHP version is %s.', 'placeholder-block-square-happiness'), $required_php_version) );
        return false ;
      }

      if ( version_compare ( $wp_version, $required_wp_version, '<' ) ) {
        static::$error = array( 'code' => 10, 'name' => sprintf( __('Minimum WordPress version is %s.', 'placeholder-block-square-happiness'), $required_wp_version) );
        return false ;
      }

      // if ( ! is_plugin_active ( static::REQUIRED_PLUGIN ) ) { // this way seems to be better:
      if ( ! defined('GUTENBERG_VERSION') ) {
        $gut_url = 'https://wordpress.org/plugins/gutenberg/';
        $error = sprintf( wp_kses( __( 'Please install or activate <a href="%s" target="_blank">Gutenberg</a> before activating this plugin.', 'placeholder-block-square-happiness' ), array(  'a' => array( 'href' => array() ) ) ), esc_url( $gut_url ) );
        static::$error = array( 'code' => 20, 'name' => $error );
        return false ;
      }

      return true;
    }

    public static function get_error() {
      return static::$error;
    }

  }

endif;
