/**
 * Title: 设计一个有getMin功能的栈
 * Requement:
 *  1. pop, push, getMin操作的时间复杂度是O(1)
 *  2. 设计栈可以使用现有的栈结构
 */

class MyStack {
    constructor() {
        // JavaScript 的数组模拟栈操作
        this.stackData = []
        this.stackMin = []
    }

    push(value) {
        this.stackData.push(value)
        if (this.stackMin.length == 0) {
            this.stackMin.push(value)
        } else {
            if (this.stackMin[0] >= value) {
                this.stackMin.push(value)
            }
        }
    }

    pop() {
        let value = this.stackData.pop()

        if (value <= this.stackMin[0]) {
            this.stackMin.pop()
        }
        return value
    }

    getMin() {
        return this.stackMin[0]
    }
}

class MyAnotherStack {
    constructor() {
        // JavaScript 的数组模拟栈操作
        this.stackData = []
        this.stackMin = []
    }

    push(value) {
        this.stackData.push(value)
        if (this.stackMin.length == 0) {
            this.stackMin.push(value)
        } else {
            if (this.stackMin[0] >= value) {
                this.stackMin.push(value)
            } else {
                this.stackMin.push(this.stackMin[0])
            }
        }
    }

    pop() {
        let value = this.stackData.pop()
        this.stackMin.pop()
        return value
    }

    getMin() {
        return this.stackMin[0]
    }
}
