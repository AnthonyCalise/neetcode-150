function topKFrequent(nums:number[], k:number): number[] {
    const mymap : {[key:number] : number} = {};
    const k_list: number[] = [];

    // Initilize hashmap
    for (let i = 0; i < nums.length; i++) {
        mymap[nums[i]] = mymap[nums[i]] ? mymap[nums[i]]+1 : 1;
    }
    
    // Find the max value
    let max = 0; 
    for (const key in mymap) {    
        if (mymap[key] >= max) {
            max = mymap[key];
        }
    }

    let k_cnt = 0

    // Iterate from the max value to 1 
    for (let i = max; i > 0; i--) {
        if (k_cnt == k) {break;}            // If we have reached k_n break out loop

        // For every key in the map 
        for (const key in mymap) {          
            if (mymap[key] == i) {          // if the map value equals 'i' which is our kth max
                k_list.push(parseInt(key))  // push it to the list
                k_cnt++;                    // update the kth count
            }
        }
    }

    return k_list
};

console.log(topKFrequent([1],1))
console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1,2], 2))
console.log(topKFrequent([3,0,1,0], 1))