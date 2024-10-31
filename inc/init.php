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
if ( !class_exists('SQHP_Placeholder_Requirements') ) :

  class SQHP_Placeholder_Init {

    const REQUIRED_PHP_VERSION = '5.6';
    const REQUIRED_WP_VERSION = '4.9';
    const REQUIRED_PLUGIN = 'gutenberg/gutenberg.php';

    public $plugin_file = 'squarehappiness-placeholder/sqarehappiness_placeholder.php';
    public $plugin_name = 'squarehappiness-placeholder';

    private $requirements_error;

    public function __construct() {

      require_once plugin_dir_path( __FILE__ ) . 'requirements.php';

      add_action( 'init', array( $this, 'squarehappiness_placeholder_check') );

    }

    public function squarehappiness_placeholder_check () {

      if ( SQHP_Placeholder_Requirements::are_requirements_meet( static::REQUIRED_PHP_VERSION, static::REQUIRED_WP_VERSION ) ) {
        // add_action( 'init', array( $this, 'squarehappiness_placeholder_assets') );
        $this->squarehappiness_placeholder_init();
      } else {
        $this->requirements_error = SQHP_Placeholder_Requirements::get_error();
        add_action( 'admin_notices', array( $this, 'admin_notice_error') );
      }
    }


    public function squarehappiness_placeholder_init () {

      require_once plugin_dir_path( __FILE__ ) . 'assets.php';
      require_once plugin_dir_path( __FILE__ ) . 'types.php';
      require_once plugin_dir_path( __FILE__ ) . 'block.php';
      require_once plugin_dir_path( __FILE__ ) . 'settings.php';

      $assets = new SQHP_Placeholder_Assets;
      $types = new SQHP_Placeholder_Types;
      $block = new SQHP_Placeholder_Block;
      $settings = new SQHP_Placeholder_Settings;

    }


    public function admin_notice_error() {

      deactivate_plugins( $this->plugin_file );

      $output_error = '<b>ERROR in '. $this->plugin_name .'</b>: ' . $this->requirements_error['name'];
      //$output_error = '<b>ERROR in '. $this->plugin_name .'</b>.';

      ?>
      <div class="notice notice-error is-dismissible">
        <p><?php echo $output_error; ?></p>
      </div>
      <?php
    }

  }

endif;

