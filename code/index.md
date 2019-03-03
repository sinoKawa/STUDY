# 無名関数
<?php
//
//CallBack関数
//
//
function add($v,$v2)
{
    return $v1 + $v2;
}


class Math{
    
    public function sub($v1,$v2){
        return $v1 - $v2;
    }
    public static function add($v1,$v2){
        return $v2 + $v2;
    }
}

$tes = call_user_func('add',1,2);
echo $tes;
$tes = call_user_func(function($v1,$v2){ return $v1 + $v2 + 4;},1,2);
echo $tes;
$tes = call_user_func(array('Math','add'),2,2);
echo $tes;
$tes = call_user_func('Math::add',3,5);
echo $tes;
$math = new Math();
$tes = call_user_func(array($math,'sub'),1,2);
echo $tes;
$tes = call_user_func_array('add',array(1,2));
echo $tes;
$tes = call_user_func_array(array($math,'add'),array(1,2));
echo $tes;