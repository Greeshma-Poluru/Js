

function cleardoor() 
{
  return new Promise((resolve, reject) => 
    {
     setTimeout(() => 
        {
            const cleaned = true;
            if (cleaned) resolve("door cleaned");
            else reject("not cleaned"), 2500;
         });
    });
}

function washclothes() 
{
  return new Promise((resolve, reject) => 
    {
       setTimeout(() => 
        {
            const cleaned = true;
            if (cleaned) resolve("clothes washed");
            else reject("not washed"), 2500;git add .Promise
         });
   });
}

cleardoor().then(value=>{console.log(value);return washclothes()})
           .then(value=>{console.log(value)})
           .catch(error=>console.log(error));


 