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
if ( !class_exists('SQHP_Placeholder_Assets') ) :
class SQHP_Placeholder_Assets {

  function __construct() {

    $this->squarehappiness_placeholder_load_i18n();

    // add_action( 'wp_enqueue_scripts', array( $this, 'squarehappiness_placeholder_enqueue_scripts' ) );
    // add_action( 'enqueue_block_assets', array( $this, 'squarehappiness_placeholder_block_assets' ) );
    add_action( 'enqueue_block_editor_assets', array( $this, 'squarehappiness_placeholder_editor_assets' ) );

  }

  function squarehappiness_placeholder_load_i18n() {
    load_plugin_textdomain('placeholder-block-square-happiness', false, basename( dirname( __FILE__ ) ) . '/languages' );
  }

  /**
   * Enqueue Gutenberg block assets for both frontend + backend.
   * `wp-blocks`: includes block type registration and related functions.
   *
   * @since 1.0.0
   */
  function squarehappiness_placeholder_enqueue_scripts() {
    // TODO
  }


  /**
   * Enqueue Gutenberg block assets for both frontend + backend.
   * `wp-blocks`: includes block type registration and related functions.
   *
   * @since 1.0.0
   */
  function squarehappiness_placeholder_block_assets() {
    // Styles.
    wp_enqueue_style(
      'squarehappiness_placeholder-style-css',
      plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
      array( 'wp-blocks' )
    );
  }


  /**
   * Enqueue Gutenberg block assets for backend editor.
   *
   * `wp-blocks`: includes block type registration and related functions.
   * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
   * `wp-i18n`: To internationalize the block's text.
   *
   * @since 1.0.0
   */
  function squarehappiness_placeholder_editor_assets() {
    // Scripts.
    wp_enqueue_script(
      'squarehappiness_placeholder-block-js', // Handle.
      plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
      array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
      true // Enqueue the script in the footer.
    );

    // Styles.
    /* wp_enqueue_style(
      'squarehappiness_placeholder-block-editor-css',
      plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
      array( 'wp-edit-blocks' )
    ); */
  }

}
endif;
