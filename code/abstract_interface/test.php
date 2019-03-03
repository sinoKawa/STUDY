<?php
//インターフェース
//
// https://havelog.ayumusato.com/develop/php/e166-php-interface-abstract.html
//


// コミュニケーション
interface Communication
{
     // 話す
     public function talk();
     // 聞く
     public function hear($words);
}

// 生物  abstractはインスタンスを作れない。
abstract class Creature
{
     abstract public function eat();

     public function sleep()
     {
          // おやすみなさい
     }
}

// ヒューマン
class Human extends Creature implements Communication  //interface複数可能
{
     public function talk()
     {
          echo 'こんにちは';
     }
     public function hear($words)
     {
          // 耳で聞く
     }
     public function eat()
     {
          echo 'かゆうま';
     }
}

// エイリアン
class Alien extends Creature implements Communication
{
     public function talk()
     {
          echo '█████!?';
     }
     public function hear($words)
     {
          // 頭頂部で聞く
     }
     public function eat()
     {
          echo 'ヒトうま';
     }
}

// ロボット
class Robot implements Communication
{
     public function talk()
     {
          echo 'ガガピー';
     }
     public function hear($words)
     {
          // 内蔵マイクで聞く
     }
}

?>