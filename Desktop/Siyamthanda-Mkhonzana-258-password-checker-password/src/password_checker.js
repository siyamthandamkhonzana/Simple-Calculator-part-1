function passwordIsValid(password){
    if(password === null || password === undefined ){
     throw new Error("Password does not exist");
       }
   if(password.match(/.{9,}/g) == null){
        throw new Error("Password should be longer than 8 characters");
       }
   if(password.search(/[a-z]/) == -1){
        throw new Error("Password should have at least one lowercase letter");
       }
    if(password.search(/[A-Z]/) == -1){
        throw new Error("Password should have at least one uppercase letter");
       }
    if(password.search(/[0-9]/ ) == -1){
        throw new Error("Password should have one digit");
       }
    if (password.search(/\W|_/) == -1){
        throw new Error("Password should have at least one character");
       }
}

function passwordIsOk(password){
    var conditiontsMet = [];
    if(password !== null || password !== undefined ){
        conditiontsMet.push("condition1");
          }
    if(/.{9,}/g.test(password) == true){
      conditiontsMet.push("condition2")
    }
    if(/[a-z]/.test(password) == true){
      conditiontsMet.push("condition3")
          }
    if(/[A-Z]/.test(password) == true){
      conditiontsMet.push("condition4")
          }
    if(/[0-9]/.test(password ) == true){
      conditiontsMet.push("condition5")
          }
    if(/\W|_/.test(password) == true){
      conditiontsMet.push("condition6")
          }
  while(/1/gm.test(conditiontsMet) == true && /2/gm.test(conditiontsMet) == true ){
  if( conditiontsMet.length > 3 ){
      return true ;
  }}
      return false
}
//console.log(2.match(/.{9,}/g)
module.exports = {passwordIsValid, passwordIsOk};

