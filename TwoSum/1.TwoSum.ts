function twoSum(nums: number[], target: number): number[] {
    let parNumber = 0;
    for(let i = 0; i < nums.length; i++){
        parNumber = nums[i];
        for(let a = 0; a < nums.length; a++){
           if(i !== a){
            if(nums[i] + nums[a] === target){
                return [i,a];
            }
           }
        }
    }
    return []
};

console.log(twoSum([2,7,11,15], 9)); //[0,1].
console.log(twoSum([3,2,4], 6)); //[1,2].
console.log(twoSum([3,3], 6)); //[0,1].
