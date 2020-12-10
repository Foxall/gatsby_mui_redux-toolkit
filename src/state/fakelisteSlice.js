import { createSlice } from '@reduxjs/toolkit'

const createUser = () => ({ name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), uuid: faker.random.uuid })
const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
const Users = createUsers()

const FakeListeSlice = createSlice({
    name: 'counter',
    Users
})

export const FakeListSlice;