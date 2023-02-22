let strMail = prompt('Enter Email');
function isEmail (strMail){
    const regexp = new RegExp (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/)
    return regexp.test(strMail)
}
console.log(isEmail(strMail))