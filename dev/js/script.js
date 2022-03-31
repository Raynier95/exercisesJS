// Exercise 1
// const numLetter=(text)=>{
//     (!text)?console.warn('Is incorrect'):console.log(`The word "${text}" have ${text.length} letters`);
// }
// numLetter('Hello')

// Exercise 2 
// const cutText=(text,length=undefined)=>{
//     if(!text) console.warn('Error, is incorrect');
//     if(length===undefined) console.warn('Error, dont have a length');
//     else console.log(`Original word "${text}" --- Modificated Word "${text.slice(0,length)}"`);
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
//     if(!text) console.warn('Error, is incorrect');
//     else console.log(`Original text "${text}" --- Modificated Text "${text.split('').reverse('').join('')}"`);
// }
// invertText('Hello')

// Exercise 5
// const squareNumber=(number)=>{
//     if(!number) console.warn('Is not a number...');
//     else console.log(`The number ${number} elevated is ${Math.pow(number,2)}`);
// }
// squareNumber(5)

// Exercise 6
// const palindromeText=(text)=>{
//     if(!text) console.warn('Error, is empty');
//     text = text.toLowerCase()
//     let revertText = text.split('').reverse().join('')
//     return (revertText === text)
//     ?console.log(`The word "${text}" is a palindrome`)
//     :console.log(`The word "${text}" is not palindrome`)
// }
// palindromeText('salas')

// Exercise 7
// const numberCapicua=(number)=>{
//     if(!number) console.warn('Error');
//     if(isNaN(number)) console.error('Error, is empty');
//     number = number.toString()
//     let revertNumber = number.split('').reverse().join('')
//     return (revertNumber === number)
//     ?console.log(`The number "${number}" is capicua`)
//     :console.log(`The number "${number}" is not capicua`)
// }
// numberCapicua(2022)

// Exercise 8
// const numberPar=(number)=>{
//     if(!number) console.warn('Error');
//     if(isNaN(number)) console.error('Error is not a number');
//     return (number%2===0)?console.log(`The number "${number}" is par`):console.log(`The number "${number}" is impar`)
// }
// numberPar(2)

// Exercise 9
// const numberFactorial=(number)=>{
//     if(!number) console.warn('Error, is incorrect');
//     if(isNaN(number)) console.error('Is empty');
//     if(Math.sign(number)===-1) console.warn('Error, is not permited numbers negative');
//     let factorial = 1
//     for(let i=number; i>0; i--) factorial *= i
//     console.log(`The factorial of ${number} is ${factorial}`);
// }
// numberFactorial(5)

// Exercise 10
// const numberPrimo=(number)=>{
//     if(!number) console.warn('Error');
//     if(isNaN(number)) console.error('Error, is empty');
//     if(Math.sign(number)===-1) console.warn('Error, is not permited numbers negative');
//     if(number === 0) console.warn('Error, the number is 0');
//     return (number%2===0)
//     ?console.log(`The number "${number}" is not primo`)
//     :console.log(`The number "${number}" is primo`)
// }
// numberPrimo(4)