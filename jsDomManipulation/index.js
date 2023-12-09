// const p = document.querySelector('section');
// console.log(p.innerHTML);

// function changeColor(event){
//     p.style.color='red';
//     console.log(event);
// }

// document.addEventListener('click', changeColor);

// // document.removeEventListener('click', changeColor);

// let aTag = document.querySelectorAll('a');

// aTag.forEach((link)=>{
//     link.addEventListener('click', (event)=>{
//         event.preventDefault();
//         console.log("Event Terminated !");
//     })
// });


// let list = document.createElement('ul');

// document.body.appendChild(list);

// let listItem1 = document.createElement('li');
// listItem1.innerText = "ListItem 1";
// let listItem2 = document.createElement('li');
// listItem2.innerText = "ListItem 2";


// list.appendChild(listItem1);
// list.appendChild(listItem2);

// function hide(event){
//     event.target.style.visibility = 'hidden';
// }

// list.addEventListener('click', hide);

//NODENAME

// let element = document.querySelector('#wrapper');

// element.addEventListener('click', (event)=>{
//      if(event.target.nodeName === 'SPAN')
//      console.log('You Clicked on ' + event.target.innerText);
// })


//DOCUMENT FRAGMENTS
// let t1 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 0; i<=100; i++){
//     let p = document.createElement('p');
//     p.innerText = 'This is para ' + i;
//     fragment.appendChild(p);
// }
// document.body.appendChild(fragment);
// let t2 = performance.now();
// console.log(t2-t1);


// PROMISE

// let pr = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('inside promise bitch !');
//         resolve('Resolved after 10secs');
//     },10000);
// });

// console.log("Mai first");


//TESTING THEN()

// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Value from the initial promise');
//     },4000);
// })

// pr.then((value)=>{
//   return new Promise((resolve)=>{
//     console.log(value + " logged from 1st .then()");
//     setTimeout(()=>{
//         resolve('value passed from 1st .then()')
//     },1000)
//   })
// })
// .then((value)=>{
//     console.log(value + 'logged from 2nd .then()');
// })


//ASYNC & AWAIT


// let pFunction = function () {
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve('Value from the Promise Function');
//              },3000);
//            })
// }

// async function aFunction(){
//      let value = await pFunction();
//      console.log(value + " logged from the 1st asyncFunction");
//      return new Promise((resolve)=>{
//             setTimeout(()=>{
//                 resolve('value passed from 1st asyncFunction')
//             },3000)
//           })
// }

// async function a2function(){
//     let value = await aFunction();
//     console.log(value + " logged from the 2nd asyncFunction");
    
// }

// a2function();


// ANOTHER WAY TO USE AWAIT


// async function weather(){
//     let delhi = new Promise((resolve)=>{
//         setTimeout(()=>{
//           resolve("Pollution hai yhn to bhai !");
//         },5000);
//   })
//   let d = delhi;
//   console.log(d);
//     let hyd = new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Its all good man !");
//           },5000);
//   })

//   let h = await hyd;
//   console.log(h);

//   return [d, h];
// }

// async function logOnConsole(){
//     const toLog = await weather();
//     console.log(toLog);
// }

// logOnConsole();


// FETCH API TO MAKE A GET CALL TO SERVER


// async function firstRequest(){
//     let fetchedData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let toLog = await fetchedData.json();
//     console.log(fetchedData.url);
//     console.log(toLog);
// }

// firstRequest();


// FETCH API TO MAKE A POST CALL TO SERVER


// async function postCall(){
//     let option = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         }
//       };

//     let callResponse = await fetch('https://jsonplaceholder.typicode.com/posts',option);
//     let toLog = await callResponse.json();
//     console.log(toLog);
// }

// postCall();


const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

