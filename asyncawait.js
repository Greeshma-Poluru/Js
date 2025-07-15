function cleardoor(){
    return new Promise((resolve,reject)=>{
       
    setTimeout(()=>{
         const cleaned=false;
        if(cleaned) resolve(("door cleaned"));
        else reject(("not cleaned"))},2500);
});
}

function washclothes(){
     return new Promise((resolve,reject)=>{
    setTimeout(()=>
       resolve(("clothes cleaned"))
    ,2500);
});
}

async function chores(){
    try{
        console.log(await cleardoor());
         console.log(await washclothes());
    }
    catch(error){
        console.log(error);
    }
    
    
}
chores();