<?php
//マジックメソッド
//Magic method

class Employee
{
    public function __toString()
    {
        return 'thisis::'.__CLASS__ ;
    }
    public function __construct(){}
    public function __destruct(){}

    
    
}

//グローバル関数でないといけない。
//処理は一つしかできない
function __autoload($name){
    $filename = $name . ".php";
    if(is_readable($filename)){
        
        
        require $filename;
    }
    
    
}
$sino = new Employee();
echo $sino,PHP_EOL;



?>