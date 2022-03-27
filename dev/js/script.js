// Exercise 1
// const numLetter=(text)=>{
//     (!text)?console.warn('Is incorrect'):console.log(`The word "${text}" have ${text.length} letters`);
// }
// numLetter('Hello')

// Exercise 2 
// const cutText=(text,length=undefined)=>{
//     if(!text) console.warn('Error, is incorrect');
//     if(length===undefined) console.warn('Error, dont have a length');
//     else console.log(`Original word ${text} --- Modificated Word ${text.slice(0,length)}`);
// }
// cutText('Hello',2)

// Exercise 3
// const repeatText=(text,repeat=undefined)=>{
//     if(!text) console.warn('Error, is incorrect')
//     if(repeat === undefined) console.warn('No have a number of repeat');
//     if(repeat=== 0) console.warn('Repeat is 0');
//     if(Math.sign(repeat)===-1) console.warn('Error, negative numbers is not accepted');
//     for(let i=1;i<=repeat;i++) console.log(`Now repeat ${text} x ${i}`);
// }
// repeatText('Hello',5)

// Exercise 4
// const invertText=(text)=>{
//     if(!text) console.warn('Erros, is incorrect');
//     else console.log(`Original text ${text} --- Modificated Text ${text.split('').reverse('').join()}`);
// }
// invertText('Hello')

// Exercise 5
// const squareNumber=(number)=>{
//     if(!number) console.warn('Is not a number...');
//     else console.log(`The number ${number} elevated is ${Math.pow(number,2)}`);
// }
// squareNumber(5)