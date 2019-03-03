<?php
//
//無形関数例
//
$array = array(
    '"ダブルクオート"',
    '<tag>',
    '\'シングルクォート\'',
    );
var_dump($array);
$esc = array_map( function($value){
    return htmlspecialchars($value,ENT_QUOTES);
},$array);
echo $esc;
var_dump($esc);
var_dump($array);
?>