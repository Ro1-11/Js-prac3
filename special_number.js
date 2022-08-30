
/*Write a program to find whether a given number is special number or
not-
If the sum of the factorial of digits of a number (N) is equal to the
number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

function Spec_No(num)
{
    let sum=0
    let temp=num
    if (num===0)
    {
        sum=1
    }
    while(temp>0)
    {
       let remainder=temp%10
       let fact=1
            for(let k=1;k<=remainder;k++)
           {
              fact=fact*k
           }

       sum=sum+fact
       temp=parseInt(temp/10) 
    }
    
    if (sum===num)
    {
        console.log(`${num} is a Special Number`);
    }

    else
    {
        console.log(`${num} is not a Special Number`);
    }

}

//pass value of number to be checked
Spec_No(145)