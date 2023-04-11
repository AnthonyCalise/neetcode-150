function containsDuplicate(x : number[]): boolean {

    const mymap : {[key: number]: number} = {};

    for (let index = 0; index < x.length; index++) {
        mymap[x[index]] = 0; 
    }

    for (let index = 0; index < x.length; index++) {
        mymap[x[index]]++; 
    }

    for (const key in mymap) {
        if (mymap[key] > 1) {
            return true
        }
    }

    return false
}

console.log(containsDuplicate([1,2,3,4,5]))
console.log(containsDuplicate([1,2,3,4,5,6,7,8,9,1]))