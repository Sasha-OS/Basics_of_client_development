const fillArray = (n) => {
    const arr = new Array();
    for(let i = 0; i < n-1; i++) {
        arr.push(i);
    }
    console.log(arr)
}
fillArray(6);

const compare = (a, b, c) => {
    if ((a % b == 0) & (a % c == 0)) {
        console.log('true')
    }
    else {
        console.log('false');
    }
}

compare (12, 2, 6);
compare (13, 2, 6);

const сapitalize = (word) => {
    let newWord = word[0].toUpperCase() + word.slice(1);
    console.log(newWord);
};

сapitalize('work');