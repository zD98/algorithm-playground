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

const Action = {
    No: 'No',
    LToM: 'LToM',
    MToL: 'MToL',
    MToR: 'MToR',
    RToM: 'RToM'
}

function hanoiProblemTwo(num, left, mid, right) {
    let lS = [Number.MAX_VALUE]
    let mS = [Number.MAX_VALUE]
    let rS = [Number.MAX_VALUE]

    for(let i = num;i>0;i--) {
        lS.push(i)
    }
    let step = 0
    let record = [Action.No]

    while(rS.length != num + 1) {
        step += fStackTotStack(record, Action.MToL, Action.LToM, lS, mS, left, mid)
        step += fStackTotStack(record, Action.LToM, Action.MToL, mS, lS, mid, left)
        step += fStackTotStack(record, Action.MToR, Action.RToM, rS, mS, right, mid)
        step += fStackTotStack(record, Action.RToM, Action.MToR, mS, rS, mid, right)
    }
    return step
}

function fStackTotStack(record, inverseAction, nowAction, fS, tS, from, to) {
    if((record!=inverseAction)&&(fS[fS.length - 1] < tS[tS.length - 1])){
        tS.push(fS.pop())
        record[0] = nowAction
        console.log(`Move ${tS[tS.length - 1]} from ${from} to ${to} `)
        return 1;
    }

    return 0
}

steps = hanoiProblemTwo(3, 'left', 'mid', 'right')
console.log(steps)