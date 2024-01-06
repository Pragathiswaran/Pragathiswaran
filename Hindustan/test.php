<?php 
include 'libs/load.php';

$result = authentication("pragathis","praga@0009");

if($result === true){
    return true;
} else {
    return false;
}
// phpinfo();

?>

<script>
        const result = <?php echo json_encode($result); ?>;
    if(result === true) {
                window.location.href = 'test.html';
            } else {
                event.preventDefault();
                validateinputlog(_username,_password);
            }
</script>
<script src="js/authentication.js"></script>