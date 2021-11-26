let num = 1002
let numToString = String(num);

const isPalindrome = (numToString) => {
    const scopeString = numToString;
    for (let i = 0; i < scopeString.length / 2; i++) {
        if (scopeString[i] != scopeString[scopeString.length - 1 - i]) {
            return false
        } else {
            return true
        }      
    }

}

if(isPalindrome(numToString)){

}