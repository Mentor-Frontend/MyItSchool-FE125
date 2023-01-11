let phone = prompt('enter a number');
function isPhone(phone) {
    const regexp = new RegExp (/^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d{7}))\s*$/)
    return regexp.test(phone)
}
console.log(isPhone(phone))

