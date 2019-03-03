<?php
//クロージャ
$my_pow = function($times = 2)
{
    return function ($v) use (&$times)
    {
        return pow($v,$times);
    };
};
$cube = $my_pow(3);
//echo $cube;
echo $cube(1),PHP_EOL;
echo $cube(2),PHP_EOL;
echo $cube(3),PHP_EOL;
echo $cube(4),PHP_EOL;

//create_function() 関数  非推奨
$array = array(1,2,3,4,5);
//array_map(create_function('$v','return $v * 2;'),$array);
//同じ内容
//array_map2(function($v){return $v * 2; },$array);
/*
array_map(function($v5){return $v5 * 3;},$array);
echo "####################",PHP_EOL;
echo array_map(1);
echo array_map(2);
echo array_map(3);
*/

?>