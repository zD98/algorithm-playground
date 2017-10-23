/**
 * Title: 用栈解决汉诺塔问题
 * desc: 不能直接从最左移到最右，也不能从最右移到最左，必须经过中间
 */

function hanoiProblemOne(num, left, mid, right) {
    if (num < 1) {
        return 0
    }
    return process(num, left, mid, right, left, right)
}
function move(num, from, to) {
    console.log(`move ${num} from ${from} to ${to}`)
}
function process(num, left, mid, right, from, to) {
    if (num == 1) {
        if (from == mid || to == mid) {
            move(num, from, to)
            return 1
        } else {
            move(num, from, 'mid')
            move(num, 'mid', to)
            return 2
        }
    } else {
        if (from == mid || to == mid) {
            let another = from == left || to == left ? right : left
            let part1 = process(num - 1, left, mid, right, from, another)
            move(num, from, to)
            let part2 = 1
            let part3 = process(num - 1, left, mid, right, another, to)
            return par1 + part2 + part3
        } else {
            let part1 = process(num - 1, left, mid, right, from, to)
            move(num, from, mid)
            let part2 = 1
            let part3 = process(num - 1, left, mid, right, to, from)
            move(num, mid, to)
            let part4 = 1
            let part5 = process(num - 1, left, mid, right, from, to)
            return part1 + part2 + part3 + part4 + part5
        }
    }
}
let steps = hanoiProblemOne(3, 'left', 'mid', 'right')
console.log(steps)