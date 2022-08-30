
/*Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/
let final=""
let count=0
for (let i=1;i<=4;i++)
{
    final=""
    for (let j=1;j<i+1;j++)
    { 
        
        count+=1
        final=final+count+" "
        
        
        // i+=1
        //j+=1
    }
    console.log(final)
    
}

    
