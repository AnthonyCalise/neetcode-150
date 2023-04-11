function twoSum(nums: number[], target:number): number[] {
    const mymap : {[key: number]: number} = {};
    var lookup : number = 0;

    for (let index = 0; index < nums.length; index++) {
        lookup = target - nums[index]

        if (lookup in mymap) {
            if (mymap[lookup] != index) {
                return [mymap[lookup], index]
            }
        }

        mymap[nums[index]] = index
    }

    return []
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))


