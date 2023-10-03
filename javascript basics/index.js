console.log("mitran da naa chlada naa chalda");
// let logic = (true && undefined && true);
// console.log(logic);

//objects in js(func inside object is termed as method)

//object creation: 1. Factory function:

function createRectangle(length,breath) {
   return rectangle={
    length,
    breath,
    draw: function(){
        console.log('Draw a Rectangle');
    }
 };
}

let rec1=createRectangle(2,4);
console.log(rec1.length);

// 2. Constructor function: (here PascalNotationIs followed)
// used to initialise and define an object(blueprint)

function Rectangle(len,bre){
     this.length=len;
     this.breath=bre;
     this.draw=function(){
        console.log('Draw a rectangle');
        return 'we did it';
     }
}

let rec2 = new Rectangle(6,7);
console.log(rec2.draw());

// dynamic nature of objets (we can add and delete property as per needs)

rec2.color='red';

// delete rec2.length;

// for-in loop(enumerbale objects)

let polygon = {
   length: 5,
   breath: 6
};

for(let key in polygon){
   console.log(key, polygon[key]);
}

//for of loops (used on iterable objects like arrays)

let car =['bmw', 'porche', 'mercedes', 'audi'];

for(let key of car){
   console.log(key);
}

//object cloning can be done in following 3 ways: iteration, assign, spread;

//iteration cloning method

let source = {
   a:10,
   b:15,
   c:20
};

let dest = {};

for(let key in source){
   dest[key] = source[key];
}

console.log(dest);

// assign cloning method

let source1 = {
   a:10,
   b:15,
   c:20
};

let source2={
   color: 'red'
};

let dest1 = Object.assign({},source1,source2);

console.log(dest1);

// spread cloning method

let source3 = {
   a:10,
   b:15,
   c:20
};

let dest2 = {...source3};

console.log(dest2);



