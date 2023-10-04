var twoSum = function(nums, target) {
    const twoInd = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num2 = target - nums[i];
        
        if (twoInd.has(num2)) {
            return [twoInd.get(num2), i];
        }

        twoInd.set(nums[i], i);
    }

    return []; 
};

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 