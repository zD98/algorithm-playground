/**
 * Title: 用一个栈实现另一个栈的排序
 */

 function sortStackByStack(stack) {
    const help = []

    while(stack.length != 0 ) {
        let cur = stack.pop()

        while(help.length!=0 && help[0] > cur) {
            stack.push(help.pop())
        }
        help.push(cur)
    }
    while(help.length !=0 ){
        stack.push(help.pop())
    }

 }