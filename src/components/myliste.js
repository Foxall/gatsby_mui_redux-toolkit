import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import faker from 'faker'

const Myliste = () => {

  const createUser = () => ({ name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), uuid: faker.random.uuid })
  const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
  const Users = createUsers()

  const name = Users.map((user) => (
    <ListItem>
      <ListItemText key={user.uuid}>{user.name}</ListItemText>
    </ListItem>
  ))

  return (
    <div>
      <List>{name}</List>
    </div>
  )
}
export default Myliste
