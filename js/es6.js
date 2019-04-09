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
    
    //
    //find
    //
    var findarray = [
        {name: '太郎'},
        {name: '次郎'},
        {name: '三郎'}
        ]
    //特徴　最初にみつかった一つが返される。
    var findr = findarray.find(function(user){
        return user.name ==='次郎';
    });
    console.log(findr);
    function Car(model){
        this.model = model;
    }
    var cars = [
        new Car('a'),
        new Car('b'),
        new Car('c')
        ];
    cars.finc(function(car){
        return car.model === "a";
    });
    
    var posts = [
        {id:1 ,title:"new"},
        {id:2 ,title:"old"},
        ];
    var comment = {postId: 2,content: 'ok!!'};
    
    function postForComment(posts,comment){
        return posts.find(function(post){
           return post.id === comment.postId; 
        });
    }
    
    //every some
    var computers = [
        {name:'Apple',ram:24},
        {name:'Mik',ram:4},
        {name:'Lind',ram:32},
        ];

    var allComputer = true;//全部OK
    var someComputer = false;//どれかでOK
    
    //every 論理積一個でもFALSEならFALSE　TURE　&&　FALSE &&　TRUE
    //some  論理和一個でもTRUEならTRUE　TURE　&&　FALSE &&　TRUE
    var is_e =computers.every(function(computer){
       return computer.ram >= 16 
    });
    console.log(is_e); //false
    var is_s =computers.some(function(computer){
       return computer.ram >= 16 
    });
    console.log(is_s); //true
    //validationチェックとかで全部OKならとかで使える
    //例
    function Field(value){
        this,value = value;
    }
    
    Field.prototype.validate = function(){
        return this.value.length > 0;
    }
    
    var username = new Field('my_username');
    var password = new Field('my_password');
    
    //now  if(username.validation() && password.validation()){}
    
    //some every
    var fields = [
        username,password    
    ];
    var isFormValidate =fields.every(function(field){
        return field.validate();
    });
    
    //
    //reduce
    //
    //特徴　初期値がいれられる、　return結果を次にもちあるける。
    var numbers_r = [10,20,30];
    var sum = 0;
    numbers.reduce(function(sum,number){//コールバック　return の結果が　sumに入る。
        return sum + number;
    },0);//    },初期値);
    
    var primaryColors = [
        {color: 'red'},
        {color: 'yello'},
        {color: 'blue'},
        ];
    
    var primaryColorArray =  primaryColors.reduce(function(preious,primaryColor){
      preious.push(primaryColor.color);
      return preious;
    },[]);
    
    
    function balanceParens(string){
        return !string.split('').reduce(function(previous,char){
            if(previous <0){return previous}
            if(char ==='('){
                return previous +1;
            }
            if(char ===')'){
                return previous -1;
            }
        } ,0);
    }
    balanceParens('()');
    
    
    //
    //const let var
    //
    var color = 'red';//ES6では基本使わない。
    const COLORC = 'red';//変わる可能性がないもの
    let Colorl = 'red'//変わる可能性があるもの
    
    //テンプレートリテラル　テンプレート文字列
    function getMessage(){
        const year = new Date().getFullYear();
       // return "今年は"+year+"年です";//old
       return `今年は${year}年です`;//ES6 JSをかけてしまう。
    }
    getMessage();
    
    //アロー関数
    //old
    var add = function(a,b){
        return a + b;
    }
    add(1,2)
    //es6 アロー関数
    const addaro = (a,b) => {
        return a + b;
    }
    //省略も可能
    const addaro2 = (a,b) => a + b;
    addaro (1,2);
    addaro2 (1,2);

    //省略も可能 一個の時はさらに
    const addaro3 = a => {
        return a;
    }
    addaro3(2);
 
    const numbersaro = [1,2,3]
     //mapもさらに省略も可能
    numbers.map(number => 2* number );
    
    const team = {
      members:['太郎','花子'],  
      teamName:'スーパーチーム',
      teamSummary:function(){
          return this.members.map(function(member){
              return `${member}は${this.teamName}の所属です`
          }.bind(this));
      }
    };
    
    team.teamSummary();//this.teamNameでエラーになる。.bind(this));でthisをもってくれば可能
    //または   var self = this;    で　mapの中にもってくる。
    
    //アロー関数なら簡単に解決できる。下記でOK　thisが中にも反映される　コールバック関数内のthisがかわらない
    const teamaro = {
      members:['太郎','花子'],  
      teamName:'スーパーチーム',
      teamSummary:function(){
          return this.members.map((member) => {
              return `${member}は${this.teamName}の所属です`
          });
      }
    };
    
    //オブジェクトリテラル
    //old     //es6だと
    function createBookSope(inventory){
        return{
            inventory: inventory,//es6からinventory: inventory→　 inventory,　でOK
            inventoryValue: function(){//inventoryValue: function() es6からinventoryValue() でOK　
                //価格の合計
                return this.inventory.reduce((total,book) =>total + book.price,0);
            },
            priveForTitle:function(title){
                //タイトルの価格
                return this.inventory.find((book) =>  book.title === title ).price;
            }
        };
    }
    const inventory =[
        {title:'ハリーポッター',price:1000},
        {title:'ハリーポッター2',price:1200},
        ];
    const bookShop = createBookSope(inventory);
    let booksumall = bookShop.inventoryValue();
    let bookprice = bookShop.priveForTitle('ハリーポッター');

    //Rest Spred
    
    const defaultColors =['red','green'];
    const userColor = ['black','white'];
    let Color = [...defaultColors,...userColor];
    function testarray(...array_){
        console.log("数字",...array_);
    }
    testarray(1,2,3,4,5,6,7);
    
    
    const MathLibrary = {
      caluculateProduct(...rest){
        return this.multiply(...rest);
      },
      multiply(a,b){
          return a * b; 
      }
        
    };
    
    //
    //分割代入
    //
    //旧
    var expense = {
      typee : '交際費',
      amountt : '4500 JPY'
    };
    var type =expense.type;
    var amount =expense.amount;   
    //es6
    const {typee,amountt} = expense;
    //メモtypeof でINTとかわかる
    //具体例
    function textcontent({name,extension,size},{username}){
        return `${name}.${extension}の${size}.${username}`
    }
    var saveText = {
        extension: 'jpg',
        name:'profile',
        size:14040
    }
    textcontent(saveText,{username:'ken'});
    
    const companies = [
        'g',
        'a',
        'm'
    ];
    const [namea,nameb,namec ]= companies;
    //旧
    const nameold = companies[0];
    //es6
    const [namenew]= companies;
    const [name1,...restarray]= companies;
    
    //
    const bigc =[
        {name:'g',location:'m1',area:['a','b','c']},
        {name:'f',location:'m2',area:['a','b','c']},
        {name:'a',location:'m3',area:['a','b','c']},
        ];
    //一個目の配列のlocation を取得
    const [{location}] = bigc;
    const [{area:[first]}] = bigc;//配列1行目のareaの一番目のaを取得する。
    
    //{}順番自由
    function sinup({user,username,psssword,email,city}){
        //
    }
    //Userオブジェクト作成
    const user = {
        username: '',
        psssword: '',
        email:'',
        city:''
    }
    sinup(user);
    //具体例
    const points = [
        [4,5],
        [10,1],
        [0,40]
    ];
    //を下記にするには
    //[
    //    {x:4,y:5},
    //    {x:10,y:1},
    //    {x:0,y:40}
    //]
    points.map((x,y) =>{
       return {x:x,y:y};// return {x,y};
    });
    
    
    //JS class　ほかの言語のclassとは違う　プロトタイプチェーンをつかっている
    //プロトタイプチェーン
    //リファクタリング
    //継承
    
    //旧
    function Car(options){
        this.title = options.title;
    }
    Car.prototype.drive = function(){
        return 'ピコーン';
    }
    var car = new Car({title:'プリウス'});
    console.log(car.drive());
    //継承 旧
    function Toyota(options){
        Car.call(this,options);
        this.color = options.color;
    }
    Toyota.prototype = Object.crate(Car.prototype);
    Toyota.prototype.constructor = Toyota;    
    Toyota.prototype.honk = function(){
        return 'alert';
    }
    console.log("WWWWWWWWWWWWW");
    const toyota_ = new Toyota({color:'red',title:'アクア'});
    toyota_.drive();
    toyota_.honk();
    
    //ES6
    class Car_{
        constructor({title}){
            this.title = title;
        }
        drive(){
            return 'ウィイイイン';
        }
    }
    class Toyo extends Car_{
        constructor(options){
            super();
            this.color = options.color;
        }
            
    }
    
     const toyota = new Toyo({color:'red',title:'ビッツ'});
     console.log(toyota.drive());
     
     //
     //generate
     //
     //for of //特徴　オブジェクトでもなんでもFOR文できる　generateと相性がいい
     const forofs = [1,2,3,4];
     let total = 0;
    for(let forof of forofs){
         
         total += forof;
     }
    function* genenumbers(){
        yield;
    } 
    const gen = numbers();
    gen.next();//false
    gen.next();//true
    
    function* shopping(){
        //歩道
        //お店にいく
        //財布を持つ    
        const stuffFormstore = yield '財布';//財布をわたす
        //家に帰る　買い物をして
        
        //コインランドリにいく
         const cleanClothes = yield '汚れた服';
        
        return [stuffFormstore,cleanClothes];//日用品をもらう
    }
    const sp = shopping();
    sp.next();//家から歩道に出る  {value: 財布　done :false}
    sp.next('日用品');//お店で買い物をして歩道にでる 。 {value: 汚れた服　done :false}
    sp.next('きれいな服')// {value:[ 日用品,きれいな服]　done :true}
    
    //for of だと綺麗にかける   
    function* gecolors(){
        yield 'red';
        yield 'blue';
        yield 'green';
    }
    const mygColor = [];
    for(let gecolor of gecolors()){
        mygColor.push(gecolor);
    }
    
    const engineering = {
        size:3,
        department:'ev',
        lead:'adam',
        manager:'lala',
        enginner:'kas'
    }
    const tester =[
        lead:'nori',
        tester:'taka'
    ]
    
    function* TeamIterator(team){
        yield team.lead;
        yield team.manager;
        yield team.engineer;
        const testGenerator =  TestIterator(team.tester);
        yield* testGenerator;
    }
        
    function* TestIterator(team){
        yield team.lead;
        yield team.tester;
    }
    //enginnerのみ
    const namesge =[];
    for(let name of TeamIterator(engineering) ){
        namesge.push(name);//[ev,adam,lala,kas]
    }
    //generator Symbol.iterator