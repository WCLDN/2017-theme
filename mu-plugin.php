<?php
namespace WCLDN;

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_cached_css', 11 );  // after the theme's stylesheet, but before Jetpack Custom CSS's stylesheet
function enqueue_cached_css() {
	wp_enqueue_style( 'wcldn-2017', 'http://wcldn-2017.dev/build/style.css' );
}

function typekit() {
    ?>
    <script src="https://use.typekit.net/epu4uzu.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
    <?php
}
add_action( 'wp_head', __NAMESPACE__ . '\typekit' );
