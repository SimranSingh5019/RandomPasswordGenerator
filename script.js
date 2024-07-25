function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const LowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChar = '0123456789';
    const symbolChar = '!@#$%^&*()';
    let includeChar = "";
    let password = "";
    includeChar+=includeLowerCase?LowerCaseChar:"";
    includeChar+=includeUpperCase?UpperCaseChar:"";
    includeChar+=includeNumbers?numberChar:"";
    includeChar+=includeSymbols?symbolChar:"";
    if(passwordLength<=0){
        return `(Password length must atleast be 1)`;
    }
    if(includeChar.length == 0){
        return `(Atleast one set of characters needs to be selected)`;
    }
    for (let i = 0;i<passwordLength;i++){
        const randomIndex=Math.floor(Math.random()*includeChar.length);
        password+=includeChar[randomIndex];
    }
    return password;

}

const passwordLength = -1;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
console.log(`Generated password: ${password}`)
