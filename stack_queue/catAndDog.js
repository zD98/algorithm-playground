/**
 * Title: 猫狗问题
 */

class Pet {
    constructor(type) {
        this.type = type
    }
    getPetType() {
        return this.type
    }
}

class Dog extends Pet {
    constructor() {
        super('Dog')
    }
}

class Cat extends Pet {
    constructor() {
        super('Cat')
    }
}

class PetEnterQueue {
    constructor(pet, count) {
        this.pet = pet
        this.count = count
    }

    getPet() {
        return this.pet
    }
    getCount() {
        return this.count
    }
    getEnterPetType() {
        return this.pet.getPetType()
    }
}

class CatDogQueue {
    constructor() {
        this.cats = []
        this.dogs = []
        this.count = 0
    }

    add(pet) {
        if (pet.getPetType() == 'Dog') {
            this.dogs.push(new PetEnterQueue(pet, this.count++))
        } else if (pet.getPetType() == 'Cat') {
            this.cats.push(new PetEnterQueue(pet, this.count++))
        } else {
            throw new Error()
        }
    }
    pollAll() {
        let pet = null
        if (this.dogs.length == 0 && this.cats.length == 0) {
            throw new Error()
        } else if (this.dogs.length == 0) {
            return this.cats.pop().getPet()
        } else if (this.cats.length == 0) {
            return this.dogs.pop().getPet()
        } else {
            let cat = this.cats[0]
            let dog = this.dogs[0]

            if (cat.count < dog.count) {
                return this.cats.pop().getPet()
            } else {
                return this.dogs.pop().getPet()
            }
        }
    }
    pollDog() {
        if (this.dogs.length == 0) {
        } else {
            return this.dogs.pop().getPet()
        }
    }
    pollCat() {
        if (this.cats.length == 0) {
        } else {
            return this.cats.pop().getPet()
        }
    }
    isEmpty() {
        return this.dogs.length || this.cats.length
    }
    isDogEmpty() {
        return !!this.dogs.length
    }
    isCatEmpty() {
        return !!this.cats.length
    }
}
