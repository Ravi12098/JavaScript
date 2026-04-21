const accountId = 23242
let accountEmail = "Ravi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

/*
var = perfer not to use var because of issue 
      in block scope and functional scope.
*/
      
accountEmail = "sonu@.com"
accountPassword = "124244"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);