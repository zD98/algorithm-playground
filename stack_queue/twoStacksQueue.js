/**
 * Title: 由两个栈实现队列
 * Intro: 用两个栈实现队列，支持队列的基本操作(add, poll, peek)
 */
class TwoStacksQueue {
    constructor() {
        this.stackPush = []
        this.stackPop = []
    }

    add(value) {
        this.stackPush.push(value)
    }

    poll() {
        if (this.stackPush.length == 0 && this.stackPop.length == 0) {
            throw new Error()
        } else if (this.stackPop.length == 0) {
            while (this.stackPush.length != 0) {
                this.stackPop.push(this.stackPush.pop())
            }
        }
        return this.stackPop.pop()
    }

    peek() {
        if (this.stackPush.length == 0 && this.stackPop.length == 0) {
            throw new Error()
        } else if (this.stackPop.length == 0) {
            while (this.stackPush.length != 0) {
                this.stackPop.push(this.stackPush.pop())
            }
        }
        return this.stackPop[0]
    }
}
