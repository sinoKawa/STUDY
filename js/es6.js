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
    //map  一覧を扱うのに便利
    //
    //特徴１　forEachとの違いは　return できる。5回なら5回渡される。配列のまま渡してくれる。
    var doubledNumbers = [];
    var doubled = numbers.map(function(number){
        return number *2;
    });
    console.log(doubled);
    
    var pans = [
        {type: "an",price:'120'},
        {type: "siro",price:'150'},        
        ];
    var price = pans.map(function(car){
       return car.price ;
    });
    //特徴２　配列のpricだけの配列を作成するとか。
    console.log(price);
    
    //
    //filter
    //
    //特徴　配列の中から必要なデータだけまとめることができる
    var products = [
        {name:'A',type:'yasai' ,quantity: 0,price:1}, 
        {name:'B',type:'sakana',quantity: 10,price:15}, 
        {name:'C',type:'yasai',quantity: 30,price:9}, 
        {name:'C',type:'yasai',quantity: 3,price:5} 
        ];
    var post = { id:4,title:'new article'};    
    var comments =[
        {postId: 4, content:'いい記事ですね'}, 
        {postId: 4, content:'勉強になります'}, 
        {postId: 4, content:'なるほど'}, 
    ]
    var productsfilter = products.filter(function(product){
        //特徴２　TRUEかFALSEで判定でまとめてくれる
        return product.type === 'yasai';
    });
    //応用 yasai で　量が10よりちいさく０個より多いなら とかそういうのが簡単につくれる。
    var productsfilter2 = products.filter(function(product){
        return product.type === 'yasai' 
        && product.quantity > 0 
        && product.price < 10;
    });
    
    function commentsForPost(post,comments){
        return comments.filter(function(comment){
            return comment.postId === post.id;
        });
    }
    var comment = commentsForPost(post,comments);
    console.log(comment);
    
    
    
    
    