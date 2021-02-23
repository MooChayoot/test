<?php 
 $a = $_POST['cmd'];

 $return = array();
 $return2 = array();
 if ($a == "every_30sec") {
    $return = array(
        "a" => "<span style='color:red'>1</span>",
        "a_detail" => "test"
    );
 }

foreach($return as $key => $value) {
    // print_r($value);
    array_push($return2 , $value);

}
//  print_r($return);
echo json_encode($return2);
 exit();
?>