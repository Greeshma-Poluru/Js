// break:with break keyword we jump out of loop
// continue:with continue keyword we jump to next iteration.

let i=0;
while(i<=10){
    if(i==5) break;
    console.log(i);
    i++;
}

let j=0;
while(j<=10){
    if(j=5) continue;
    console.log(j);
    j++;
}

let k=0;
while(k<=10){
    if(k%2==0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}