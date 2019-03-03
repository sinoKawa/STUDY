<?php
require_once '../class_/test.php';

//継承
class Programmer extends Employee 
{
    
    
    public function work($how = 'コンピューターで'){
        echo '##########################################', PHP_EOL;   
        echo $how,'働いています', PHP_EOL;
    }
    public function __construct($name,$type){
        //親のクラスに
        parent::__construct($name,$type);
    }
    
    
    
}

echo Programmer::work();

//標準クラスとキャスト
$obj = new stdClass();
$obj->softnamber = 1; 

?>