const accountId=144553
let accountEmail = "Sanjay@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;

//accountId =2// not allowed
console.log(accountId)

/*
 Prefer not to use Var because of issue 
 in block scope and functional scope
*/


accountEmail="sk@gmail.com"
accountPassword="54321"
accountCity="Sikar"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




