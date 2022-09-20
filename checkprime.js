 function checkprime(num){let factors=0;
for(let i=1; i<=num; i++){
  if(num%i==0){
    factors++
  }
}
 if(factors==2){
   return true;
} return false;  }
for (i=2; i<=9; i++){
  let ans=checkprime(i);
  if(ans==false){console.log(i,"is not a primenumber")
  }else {console.log(i,"is a prime number")} 
}