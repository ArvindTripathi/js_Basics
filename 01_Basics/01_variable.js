const accountId = 144553   
let accountEmail = "arvind@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let state;



// accountId = 2 // not allowed because its already declared using const keyword.

accountEmail ="hdfc@gmail.com"
accountPassword = "123456789"
accountCity = "Delhi"

console.log(accountId)

/*
Prefer not to use Var Because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,state])