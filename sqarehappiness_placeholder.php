<?php
/**
 * Plugin Name: Placeholder Block - Square Happiness
 * Plugin URI: https://squarehappiness.com/squarehappiness-placeholder/
 * Description: Allows you to create layouts or blocks sets and display them as a placeholder in any other content. It's a Gutenberg block plugin.
 * Author: Square Happiness
 * Author URI: https://squarehappiness.com/
 * Version: 1.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: placeholder-block-square-happiness
 * Domain Path: languages
 *
 * @package SQHP
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

require_once plugin_dir_path( __FILE__ ) . 'inc/init.php';

function sqhp_plhd_init() {

  $sqhp_plhd = new SQHP_Placeholder_Init();

}

// Let's start
sqhp_plhd_init();
