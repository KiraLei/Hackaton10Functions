
const textarea = document.getElementsByClassName("textarea");  
const result = document.getElementsByClassName("result");


 function exercise(num) {
    //result.innerHTML = eval(textarea.value);
    
    
    result[num].innerHTML= eval(textarea[num].value);
}

//Exercise1
let exercise1 = `
    function concat(name, apellido, edad) {
        
        return 'Hola mi nombre es ' +name+ ' ' + apellido+' y mi edad es ' +edad ;
    }
    concat( 'Mirian' , 'Quispe', 24 );`



    textarea[0].innerHTML= exercise1;


 //Exercise2

let exercise2=`
    function cubesNums(a, b, c){
        return  [a,b,c]
            .map( e => Math.pow(e, 3))
            .reduce( (sum,e) => sum + e);
    
    }
    cubesNums(1,5,9)`
 textarea[1].innerHTML= exercise2;

 //console.log(cubesNums(1,5,9));


 //Exercise 3
let exercise3 =
`
    function type(element){
    return  typeof(element);
    } 
    type(true)`
//console.log(type(true));

textarea[2].innerHTML= exercise3;

 //Exercise 4
 let exercise4 =
 `
    function sumElements(...numbers){
        return numbers
            .reduce((se,e)=>se+e);
    } 
    sumElements(3,5,9,1,1,1)`
//console.log(sumElements(3,5,9,1,1,1)); 
textarea[3].innerHTML= exercise4;


//Exercise 5
let exercise5 =
`
    function filterString(...data){

        return data.filter(e => typeof(e) != 'string');

    } 
    filterString(5, 'miria', 6, 8, 'polo',3,true)`
//console.log(filterString(5, 'miria', 6, 8, 'polo',3,true));
textarea[4].innerHTML= exercise5;

//Exercise 6

let exercise6 =
`
    function minMax(...numbers){

        const order=numbers.sort();

        return  [order[0] , order[order.length-1]];

    } 
    minMax(5,9,8,3) `
//console.log(minMax(5,9,8,3));
textarea[5].innerHTML= exercise6;

//Exercise 7
let exercise7 =
 //`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;

`
    function numPhone(...numbers){

        return '(' +(numbers.slice(0,3).join(''))+')'+ ' ' +numbers.slice(3,6).join('')+'-'+numbers.slice(6,10).join('');

    }
    numPhone(1,2,3,4,5,6,7,8,9,0);
    `
//console.log(numPhone(1,2,3,4,5,6,7,8,9,0));
textarea[6].innerHTML= exercise7;

//Exercise 8
let exercise8 =
`
    function anyArrays(...numbers){
        return  numbers.map((e)=>{
            const order= e.sort();
            //console.log(order[order.length-1]);
            return order[order.length-1]
        });

    }
    anyArrays([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]);
`
//console.log(anyArrays([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]));
textarea[7].innerHTML= exercise8;

//Exercise 9
let exercise9 =
`
    function findLetter(word, letter){
        const word1 = word.toUpperCase();
        const  letter1 = letter.toUpperCase();
        return  [word1.indexOf(letter1), word1.lastIndexOf(letter1)];
    }
    findLetter('casitaaaaaaaaapPaLpA', 'a');
`
textarea[8].innerHTML= exercise9;

//console.log(findLetter('casitaaaaaaaaapPaLpA', 'a'));

//Exercise 10
let exercise10 =
`
    function createArray(newObj){
        return Object.entries(newObj);
    }
    createArray({a:1, b:2});
`
textarea[9].innerHTML= exercise10;

//console.log(createArray({a:1, b:2}));

//Exercise 11
let exercise11 =
`
    function sumMoney(data){
        return data.map((e)=> e.budget).reduce((sum,x)=> sum+x);
    }
    sumMoney([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }]
        );
`
/*
console.log(sumMoney([
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve", age: 32, budget: 40000 },
{ name: "Martin", age: 16, budget: 2700 }]
));*/
textarea[10].innerHTML= exercise11;

//Exercise 12
let exercise12 =
`
    function getNames(name){
        
        return name.map((e)=>e.name);

    }
    getNames([{name: 'Steve'}, {name: 'Mike'}, {name: 'Jhon'} ]);
`
//console.log(getNames([{name: 'Steve'}, {name: 'Mike'}, {name: 'Jhon'} ]));
textarea[11].innerHTML= exercise12;

//Exercise 13
let exercise13 =
`
    function clavesValues(data){
        return [Object.entries(data)];
    }
    clavesValues({
        likes: 2,
        dislikes: 3,
        followers: 10
    });
`
/*
console.log(clavesValues({
    likes: 2,
    dislikes: 3,
    followers: 10
}))*/
textarea[12].innerHTML= exercise13;

//Exercise 14
let exercise14 =
`
    function squaresSum(num){
        /*const newArray = [];

    for (i=1; i<=num ; i++) {
            newArray.push(i);

        }
        newArray.push()

        return newArray.map((e)=>
        Math.pow(e,2)
        ).reduce((sum,x)=> sum+x); */

        return ((num)*(num+1)*(2*num+1))/6;
        
    }
    squaresSum(4);
`
//console.log(squaresSum(4));
textarea[13].innerHTML= exercise14;

//exercise 15
let exercise15 =
`
    function multiplication(num){ 
        return num.map((e)=> e*num.length)

    }
    multiplication([2,3,1,0]);
`
//console.log(multiplication([2,3,1,0]));
textarea[14].innerHTML= exercise15;

//exercise 16  OTRA MANERA DE HACERLO
let exercise16 =
`
    function getNum(num){
        const newArray = [];

    for (i=0; i<=num ; i++) {
            newArray.push(i);
        } 

        return newArray;
    }
    getNum(4);
`
//console.log(getNum(4));
textarea[15].innerHTML= exercise16;


//exercise 17  
let exercise17 =
`
    function minMaxRest(num){
        const newNum = num.sort((a,b)=> a-b);
        return (newNum[newNum.length-1]) - newNum [0] ;
    }
    minMaxRest([10,4,1,4,-10,-50,32,21]);
`
//console.log(minMaxRest([10,4,1,4,-10,-50,32,21]));
textarea[16].innerHTML= exercise17;


//exercise 18  
let exercise18 =
`
    function integerNum(num){
        return num
            .filter(e=> typeof(e) ==='number')
            .map((e)=> Math.round(e));
    }
    integerNum([1.4,2,3,'x','y',10]);
`
//console.log(integerNum([1.4,2,3,'x','y',10]));
textarea[17].innerHTML= exercise18;


//exercise 19  
let exercise19 =
`
    function createArray(num, cant){
        return  Array(cant).fill(num);
    }
    createArray(13,5);
`
//console.log(createArray(13,5));
textarea[18].innerHTML= exercise19;

//exercise 20
let exercise20 =
`
    String.prototype.vreplace = function (e){
        const vocals= /[aeiou]/gi;
        return this.replace(vocals, e);
    }
    'apples and bananas'.vreplace('u');
`

//console.log('apples and bananas'.vreplace('u'));
textarea[19].innerHTML= exercise20;


//exercise 21
let exercise21 =
`
    function findNemo(phrase){
        const foundNemo = phrase.split(' ').indexOf('Nemo');
        return "!Encontre a Nemo en la posicion " + foundNemo + "!";
    } 
    findNemo('la vida de un amigo es igual a la de Nemo todo lleno de felicidad');
`

//console.log(findNemo('la vida de un amigo es igual a la de Nemo todo lleno de felicidad'));
textarea[20].innerHTML= exercise21;

//exercise 22
let exercise22 =
`
    function capital(word){
        return word.charAt(word.length-1).toUpperCase();
    }
    capital('hello mi lovu');
`
//console.log(capital('hello mi lovu'));

textarea[21].innerHTML= exercise22;
