    //基本パターン
    var colors = ['red','blue','green'];
    for(var i = 0 ; i < colors.length; i++) 
    //ES6パターン
    
    //
    //forEach
    //
    colors.forEach(function(color){
        console.log(color);
    })
    
    //数字の配列を用意する
    var numbers = [1,2,3,4,5];
    //合計をほじする変数を用意する
    var sum = 0;
    //配列の一つ一つの数字をたす
    numbers.forEach(function(number){
        sum += number;
    });
    //合計を表示する
    sum;    
    console.log(sum)
    
    //下記のような書き方でもOK
    function adder(number){
        sum += number;
    }
    numbers.forEach(adder);
    console.log(sum)
    
    //
    //map 
    //
    
    
    
    