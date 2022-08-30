
/*Write a program to find whether a given number is armstrong number or
not-
The Armstrong number is a number that is equal to the sum of cubes of
its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.

153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/



//Method-1

function Armstrong(num)
{
    let sum=0
    let temp=num
    while(temp>0)
    {
       let remainder=temp%10
       sum=sum+remainder*remainder*remainder
       temp=parseInt(temp/10) 
    }
    if (sum===num)
    {
        console.log(`${num} is an Armstrong Number`);
    }

    else
    {
        console.log(`${num} is not an Armstrong Number`);
    }

}

//pass value of number to be checked
Armstrong(4307)



//Method-2
// let num=407  //assign value of number to be checked
// let str=num.toString()
// let result=str.split("")
// sum=0
// result.forEach(element => {
//     element=parseInt(element)
//     sum=sum+element*element*element
// });

// //console.log(sum);

// if (num===sum)
// {
//     console.log(`${num} is an Armstrong Number`)
// }
// else
// {
//     console.log(`${num} is not an Armstrong Number`)
// }