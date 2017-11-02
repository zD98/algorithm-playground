/**
 * Title: 生成窗口最大值数组
 * desc: O(n)
 */

// 思路, O(n * w) 的思路就是移动一位遍历一次
function getMaxWindowONW(arr, w) {
    const maxes = []
    function getMax(childArr) {
        let max = Number.MIN_VALUE
        for (let i = 0; i < w; i++) {
            if (childArr[i] > max) {
                max = childArr[i]
            }
        }
        return max
    }
    let moveWindow = [Number.MIN_VALUE]
    for (let k = w - 1; k > 0; k--) {
        moveWindow.unshift(arr[k])
    }
    for (let i = 0; i < arr.length - w + 1; i++) {
        moveWindow.shift()
        moveWindow.push(arr[i + w - 1])
        maxes.push(getMax(moveWindow))
    }
    return maxes
}

// O(n) 利用辅助QMax
function getMaxWindowON(arr, w) {
    const maxes = []
    const maxTags = []

    for (let i = 0; i < arr.length; i++) {
        while (
            arr[maxTags[maxTags.length - 1]] < arr[i] &&
            maxTags.length != 0
        ) {
            maxTags.pop()
        }
        maxTags.push(i)

        if (i - w == maxTags[0]) {
            maxTags.shift()
        }
        if(i >= w-1) {
            maxes.push(arr[maxTags[0]])
        }
    }
    return maxes
}

const array = [4, 3, 5, 4, 3, 3, 6, 7]

let beginTime = +new Date()
console.time('o(NW)')
const result = getMaxWindowONW(array, 4)
// console.log(result)
console.timeEnd('o(NW)')
beginTime = +new Date()
console.time('o(N)')
const result2 = getMaxWindowON(array, 4)
console.timeEnd('o(N)')
// console.log(result2)
