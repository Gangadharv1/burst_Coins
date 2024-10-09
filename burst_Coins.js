function maxCoins(nums) {
    let n = nums.length;
    nums = [1, ...nums, 1];
    let burstCoins = Array(n + 2).fill(0).map(() => Array(n + 2).fill(0));
    for (let length = 1; length <= n + 1; length++) {
        for (let left = 0; left <= n + 1 - length; left++) {
            let right = left + length - 1;
            for (let i = left; i <= right; i++) {
                burstCoins[left][right] = Math.max(burstCoins[left][right], nums  [left - 1] * nums[i] * nums[right + 1] + burstCoins[left][i - 1] + burstCoins[i + 1][right]);
            }
        }
    }
    return burstCoins[1][n];
}