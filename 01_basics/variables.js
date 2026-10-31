const accountId = 144553
let accountEmail = "souvik123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
acccountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Do not use var beacuse of block scope and 
functional scope
 */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
