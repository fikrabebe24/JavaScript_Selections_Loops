console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i < 100; i++){
    if (i % 2 !=0){
        console.log(i);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let j = 1; j <= 100; j++){
    if(j % 3 == 0 && j % 5 == 0){
        console.log(`FIZZBUZZ ${j}`);
    }
    else if (j % 5 == 0){
        console.log(`BUZZ ${j}`);
    }
    else if(j % 3 == 0){
        console.log(`FIZZ ${j}`);
    }
}

//Exercise 3:
console.log("EXERCISE 3:\n==========\n");
let number = 1;
while(number <= 100){
    if (number % 2 != 0){
        console.log(number);
    }
    number++
}

// let n = 1
// do{
//     if (n % 2 != 0){
//         console.log(n);
//     }
// } while([n <= 100]) 


// let f = 1
// while([f <= 100]){
//     if (f % 3 == 0 && f % 5 == 0){
//         console.log(`FIZZBUZZ ${f}`);
//     }
//     else if (f % 5 == 0){
//         console.log(`BUZZ ${f}`);
//     }
//     else if(f % 3 == 0){
//         console.log(`FIZZ ${f}`);
//     }
//     f++
// }

let b = 1
do{
    if(b % 3 == 0 && b % 5 == 0){
        console.log(`FIZZBUZZ ${b}`);
    }
    else if (b % 5 == 0){
        console.log(`BUZZ ${b}`);
    }
    else if(b % 3 == 0){
        console.log(`FIZZ ${b}`);
    }
    b++
}while(b <= 100)

//Exercise 4
let value = Math.round(Math.random() * 500);

let m = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 0; i <= m; i++){
    if(i == value)
    {
        console.log(`Found value!`);
        break;
    }
    if(i == m ){
        console.log(`Did not find value`);
    }
} 

//Exercise 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let o = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for( ; start <= o; start++){
    if(start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log(`FIZZBUZZ ${start}`);
    }
    else if (start % buzzDivisor == 0){
        console.log(`BUZZ ${start}`);
    }
    else if(start % fizzDivisor == 0){
        console.log(`FIZZ ${start}`);
    }
}

