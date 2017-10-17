/**
 * Title: 如何仅用递归函数和一个栈操作逆序一个栈
 */

/**
 * 获取&移除栈底元素
 */
function getAndRemoveLastElement(stack = []) {
    let result = stack.pop()

    if (stack.length == 0) {
        // 返回栈底元素
        return result
    } else {
        // 获取递归每次栈底元素
        let last = getAndRemoveLastElement(stack)
        // 恢复栈，用于逆序递归
        stack.push(last)
        return last
    }
}

/**
 * 逆序栈
 * @param {*} stack 
 */
function reverse(stack) {
    if (stack.length == 0) {
        return
    }
    let value = getAndRemoveLastElement(stack)
    reverse(stack)
    stack.push(value)
}
