function cleardoor(callback){
    setTimeout(()=>{console.log("door cleaned");
    callback();},2500);
}

function washclothes(){
    setTimeout(()=>{console.log("door cleaned");
    },3500);
}

cleardoor(()=>washclothes());