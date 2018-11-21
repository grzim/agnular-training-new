import { Injectable } from '@angular/core'
import { User } from '../helpers/classes/user'
import { unique } from '../helpers/array-functions'
import { userData } from '../helpers/sample data/users-data'

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private users: Array<User> = userData;

    constructor() {
    }

    addUser(user: User) {
        this.users.push(user)
    }

    getUsers() {
        return this.users
    }

    getOldest() {
        return [...this.users].sort((u1, u2) => u1.age - u2.age)[0]
    }

    getProfessions() {
        return unique(this.users.map(user => user.profession.name))
    }

    getMature() {
        return this.users.filter(user => user.age > 17)
    }

    getUsersByAge() {
        return this.users.reduce((acc, curr) => ({
            ...acc,
            [curr.age]: acc[curr.age] ? [...acc[curr.age], curr] : [curr]
        }), {})
    }
}
