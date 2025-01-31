
function firstNonRepeating(str) {
    let n = str.length;
    for (let i = 0; i < n; ++i) {
        let found = false;
        for (let j = 0; j < n; ++j) {
            if (i !== j && str[i] === str[j]) {
                found = true;
                break;
            }
        }
        if (found === false) {
            return str[i];
        }
    }
    return '$';
}


console.log(firstNonRepeating("swiss"));