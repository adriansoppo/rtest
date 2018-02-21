<?php
/*
Plugin Name: asdasd
Plugin URI:  https://test.com
Description:  aas
Version:      1
Author:       asd
Author URI:   https://test.com
License:      MIT
License URI:  https://test.com
*/

add_action('init', 'my_rem_editor_from_post_type');
function my_rem_editor_from_post_type() {
    remove_post_type_support( 'post', 'editor' );
}

function do_something_after_title($post) {
    $postArr = ['id' => $post->ID, 'content' => $post->post_content];
    ?>
    <div id="app" data-post='<?php echo json_encode($postArr); ?>'></div>
    <script src="<?php echo plugin_dir_url(__FILE__) . 'bundle.js' ?>"></script>
    <?php
}
add_action( 'edit_form_after_title', 'do_something_after_title' );


function my_action() {
    $my_post = array(
        'ID'           => $_POST['id'],
        'post_content' => $_POST['content']
    );
    wp_update_post( $my_post );
	wp_die();
}
add_action( 'wp_ajax_my_action', 'my_action' );
