let adres = prompt('enter adress')
function adress(adres) {
    let cutadres = adres.matchAll(/^(?:https?:\/\/)?(?:www\.)?([^/]+)/g);
    cutadres = Array.from(cutadres);
    return cutadres;
}
console.log(adress(adres))