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
if ( !class_exists('SQHP_Placeholder_Types') ) :
class SQHP_Placeholder_Types {

  function __construct() {
    $this->squarehappiness_placeholder_register_post_type();
  }


  /**
   * Register placeholder post type
   *
   * @since 1.0.0
   */
  function squarehappiness_placeholder_register_post_type() {
    $args = array(
      'public' => false,
      'show_ui' => true,
      'label'  => 'Placeholder',
      'show_in_rest' => true,
      'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><rect x="2.5" y="4.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="13" height="13"/><rect x="7.5" y="2.5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="10" height="10"/></svg>')
    );
    register_post_type( 'placeholder', $args );
  }

}
endif;
