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
if ( !class_exists('SQHP_Placeholder_Block') ) :

  class SQHP_Placeholder_Block {

    function __construct() {

      register_block_type( 'shp/placeholder', array(
        'render_callback' => array( $this, 'squarehappiness_render_block_placeholder' ),
      ) );

      add_filter( 'allowed_block_types', array( $this, 'allowed_block_types' ), 10, 2 );
    }



    /**
     * Create dynamic content
     * @param  Array $attributes Those defined in ths JS
     * @since 1.0.0
     */
    function squarehappiness_render_block_placeholder( $attributes ) {
      // Check for recusivity
      global $post;
      if ( $post->ID === $attributes['selectedPlaceholder']  ) {
        return;
      }

      if ( is_numeric ( $attributes['selectedPlaceholder'] ) ) {
        $currentPostId = (int) $attributes['selectedPlaceholder'];
        $post   = get_post( $currentPostId );
        $content =  apply_filters( 'the_content', $post->post_content );
        $title = esc_html( $post->post_title );
        $url = esc_url( get_permalink( $currentPostId ) );
        $titleLink = sprintf(
          '<a class="wp-block-my-plugin-latest-post" href="%1$s">%2$s</a>',
          $url,
          $title
        );

        // return $currentPostId . ' - ' . $titleLink . ' ' . $content;
        return $content;
      }
    }


    /**
     * TODO Don't allow the block on Placeholder post type
     * @param  [type] $allowed_block_types [description]
     * @param  [type] $post                [description]
     * @return [type]                      [description]
     */
    function allowed_block_types( $allowed_block_types, $post ) {

      if ( 'placeholder' == $post->post_type ) {
        return array(
          'core/paragraph',
          'core/image',
          'core/heading',
          'core/gallery',
          'core/list',
          'core/quote',
          'core/audio',
          'core/cover-image',
          'core/file',
          'core/video',

          'core/code',
          'core/classic',
          'core/custom-html',
          'core/preformated',
          'core/pullquote',
          'core/table',
          'core/verse',

          'core/button',
          'core/more',
          'core/page-break',
          'core/separator',
          'core/spacer',

          'core/shortcode',
          'core/archives',
          'core/categories',
          'core/latest-comments',
          'core/latest-posts',

          'core/embed',
        );
      }
      return $allowed_block_types;
    }


  }
endif;
