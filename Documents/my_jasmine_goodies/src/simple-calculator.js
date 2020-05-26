function add (){
  let totalSum= 0;
    for(let i = 0; i< arguments.length; i++){
      totalSum += arguments[i];
    }
    return totalSum
   }
 
  function multiply (){
    let totalMultiple= 1;
      for(let i = 0; i< arguments.length; i++){
        totalMultiple *= arguments[i];
      }
      return totalMultiple
     }
   
   module.exports = {add , multiply};

  