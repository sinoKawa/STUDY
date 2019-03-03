<?php

/*/
namspace Food\Sweets{
    class Cake
    {
        public function __construct(){
            echo 'test',PHP_EOL;
        }
    }
}
*/
namespace Food\Sweets2;
use Food\Sweets2 as SweetProject;
    class Cake
    {
        public function __construct(){
            echo 'test',PHP_EOL;
        }
        public function __toString()
        {
            return 'thisis::'.__CLASS__ ;
        }
    }


$obj = new SweetProject\Cake();
echo $obj;
$obj2 = new Cake();
echo $obj2;















?>