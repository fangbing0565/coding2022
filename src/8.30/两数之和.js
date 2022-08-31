// 空间换时间
// n
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]];
        }
        hash[nums[i]] = i;
    }
    return [];
};



// n^2
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const index = nums.findIndex((item) => {
            target - nums[i] === item
        })
        if (index > -1) {
            return [nums[i], nums[index]]
        }
    }
    return []
};