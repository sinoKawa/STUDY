<?php
//クローン
class Employee{
    public $w = "test";
    public $q_self = "selfnil";
    public static $x_self = "self";
    public static $s_static = "技術者";
    private static $s_static_p = "技術者P";
    const T1 = 0x01;
    const T2 = 0x02;
    const T3 = 0x03;
    const T4 = 0x04;
    const T5 = 0x05;
    public $name = "nil";
    public $type = "nil";
    
    
    public function __construct($name,$type){
        $this->name = $name;
        $this->type = $type;
        
    }
    public function __destruct(){
        $name = "";
        $type = "";
    }
    public final function work_final($v){//オーバライドさせない。
        $this->w = $v;
        echo $this->w;
    }    
    public function work($v){
        $this->w = $v;
        echo $this->w;
    }
    public function set_work(){
        return $this->w;
    }
    public function set_self(){
        return self::$x_self ;//Employee::$x_self
    }
    public function set_self_nil(){
        return $this->q_self  ;//
    }
    //インスタンス
    public static function set_self_static(){
        return self::$s_static_p  ;//
    }
    
}

$suzuki = new Employee();

$yosida = $suzuki;
$tosi = clone $suzuki;
$yosida ->work("yosida");
echo $suzuki->set_work(),PHP_EOL;//"yosida"
echo $yosida->set_work(),PHP_EOL;//"yosida"
echo $tosi->set_work(),PHP_EOL;//"test"
echo $tosi->set_self(),PHP_EOL;
echo "%%%%%%%%%%%%%%%",PHP_EOL;
echo $tosi->set_self_nil(),PHP_EOL;
echo 'tt',Employee::$s_static,'tt',PHP_EOL;
echo '::',Employee::T5,':::',PHP_EOL;
echo '::',Employee::set_self_static(),':::',PHP_EOL;

//echo Employee::$w;  staticとの違いエラーになる



?>