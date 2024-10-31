<?php
function sqhp_the_picture_url ( $picture ) {
  if ( $picture ) {
    return esc_url( plugins_url('assets/' . $picture, dirname( __FILE__ ) ) );
  }
}
?>
<div class="wrap sqhp-wrapper">

  <div class="sqhp-header">
    <h1><?php _e( 'Placeholder plugin', 'placeholder-block-square-happiness' ); ?></h1>
    <img class="logo" src="<?php echo sqhp_the_picture_url('logo.svg'); ?>" alt="Square Happiness logo" >
  </div>

  <div class="sqhp-main">

    <div class="sqhp-content">
      <nav class="sqhp-toc">
        <a href="#who-we-are"><?php _e( 'Who we are', 'placeholder-block-square-happiness' ); ?></a>
        <a href="#the-advantages-of-placeholder"><?php _e( 'The advantages of Placeholder', 'placeholder-block-square-happiness' ); ?></a>
        <a href="#getting-started"><?php _e( 'Getting started', 'placeholder-block-square-happiness' ); ?></a>
      </nav>

      <h2 id="who-we-are"><?php _e( 'Who we are', 'placeholder-block-square-happiness' ); ?></h2>
      <p><?php _e( 'The Placeholder plugin is developed and maintained by Square Happiness, a studio driven by professionals with a long experience in the market. Placeholder has been created for the Gutenberg editor with the aim of making repetitive work easier and thus, saving time.', 'placeholder-block-square-happiness' ); ?></p>

      <h2 id="the-advantages-of-placeholder"><?php _e( 'The advantages of Placeholder', 'placeholder-block-square-happiness' ); ?></h2>
      <ul>
        <li><?php _e( 'Create a set composed by blocks (paragraph, image, video and more), for instance Call to action header.', 'placeholder-block-square-happiness' ); ?></li>
        <li><?php _e( 'Take the Call to action header template from the admin menu and use it on all the pages you need.', 'placeholder-block-square-happiness' ); ?></li>
        <li><?php _e( 'Modify Call to action header once and Call to action header will be modified in all the pages and entries in which it is right away. You DONT need to change page by page.', 'placeholder-block-square-happiness' ); ?></li>
        <li><?php _e( 'Duplicate Call to action header and modify the content of the blocks (paragraph, image, video and more). You will have a new BLOCK2 with the same style but different content that you can use as many times as you need.', 'placeholder-block-square-happiness' ); ?></li>
      </ul>


      <h2 id="getting-started"><?php _e( 'Getting started', 'placeholder-block-square-happiness' ); ?></h2>
      <p><?php _e( 'You must ensure that you have installed and activated the Gutenberg editor. Otherwise, Placeholder does not work.', 'placeholder-block-square-happiness' ); ?></p>
      <p><?php _e( 'As many of you know, the Gutenberg editor is based on a block system of contents like paragraph, image, video and more to create posts or pages.', 'placeholder-block-square-happiness' ); ?></p>
      <p><?php _e( 'What happens when you want to use the same built content on different pages? Many times we have information important enough to share in different places of your site. However, duplicate the layout done is a hard work or too cumbersome.', 'placeholder-block-square-happiness' ); ?></p>
      <p><?php _e( 'Placeholder plugin allows you to <b>create sets of blocks</b> that you can save as a template to use wherever you want. And not only this, whenever you edit a Placeholder, <b>the changes made are updated in all the places</b> the Placeholder block is used.', 'placeholder-block-square-happiness' ); ?></p>

      <h3><?php _e( 'First step', 'placeholder-block-square-happiness' ); ?></h3>
      <p><?php _e( 'The Placeholder menu will appear in your Dashboardh menu. Go to Placeholder -> Add New.', 'placeholder-block-square-happiness' ); ?></p>
      <img src="<?php echo sqhp_the_picture_url('screenshot-1.jpg'); ?>" alt="screenshot 1" >

      <h3><?php _e( 'Second step', 'placeholder-block-square-happiness' ); ?></h3>
      <p><?php _e( 'Edit the Placeholder as you want it to appear. Add the needed blocks and set them as you like. Then save it. Take in account that the Placeholder´s title will never be displayed.' ); ?></p>
      <img src="<?php echo sqhp_the_picture_url('screenshot-2.jpg'); ?>" alt="screenshot 2" >

      <h3><?php _e( 'Third step', 'placeholder-block-square-happiness' ); ?></h3>
      <p><?php _e( 'Navigate to the content you want the Placeholder to appear in. Click the plus button and search for the Placeholder block.', 'placeholder-block-square-happiness' ); ?></p>
      <img src="<?php echo sqhp_the_picture_url('screenshot-4.jpg'); ?>" alt="screenshot 4" >
      <p><?php _e( 'Then, on the right side panel, select the Placeholder you want to use from the dropdown: ', 'placeholder-block-square-happiness' ); ?></p>
      <img src="<?php echo sqhp_the_picture_url('screenshot-5.jpg'); ?>" alt="screenshot 5" >

      <p><?php _e( 'Add any other blocks you may need and save your content. You are done!', 'placeholder-block-square-happiness' ); ?></p>
      <p><?php _e( 'Now you can see your set of blocks displayed where you put the Placeholder block, and if you need some changes, just update your Placeholder in one place and all your blocks apareances will update.', 'placeholder-block-square-happiness' ); ?></p>
      <img src="<?php echo sqhp_the_picture_url('screenshot-6.jpg'); ?>" alt="screenshot 6" >

    </div>


     <div class="sqhp-side">

      <h2><?php _e( 'Advantages', 'placeholder-block-square-happiness' ); ?></h2>
      <div class="sqhp-side-block">
        <ol>
          <li><?php _e( 'Compound reusable sets of blocks.', 'placeholder-block-square-happiness' ); ?></li>
          <li><?php _e( 'Use these sets anywhere you want.', 'placeholder-block-square-happiness' ); ?></li>
          <li><?php _e( 'Update once, update all.', 'placeholder-block-square-happiness' ); ?></li>
        </ol>
      </div>

      <h2><?php _e( 'Square Happiness', 'placeholder-block-square-happiness' ); ?></h2>
      <div class="sqhp-side-block">
        <p><?php _e( 'We are a plugin studio working hard to deliver the best plugins and WordPress tools.', 'placeholder-block-square-happiness' ); ?></p>
        <p><?php _e( '<a href="https://squarehappiness.com/" target="_blank">Visit us</a>', 'placeholder-block-square-happiness' ); ?></p>
      </div>
    </div>

  </div>


</div>
<script>
jQuery(document).ready(function ($) {

  // Scroll to anchor
  $( ".sqhp-toc a" ).click( function(e) {
    e.preventDefault();

    var href = $( this ).attr( "href" );
    $( "html, body" ).animate( {
      scrollTop: $( href ).offset().top - 70
    }, 'slow', 'swing' );
  } );


  // Back to top links
  $( "#help-panel h3" ).append( $( "<a class='back-to-top' href='#panel'><i class='fa fa-angle-up'></i> Back to top</a>" ) );

});
</script>
