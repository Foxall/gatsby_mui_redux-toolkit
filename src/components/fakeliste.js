import React from 'react'
import faker from 'faker'


const SetRedux = () => {
const createUser = () => ({ name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), uuid: faker.random.uuid })
const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
const Users = createUsers()
return (null)
}