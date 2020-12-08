import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import faker from 'faker'

const createUser = () => ({ name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar() })

const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)

const Users = createUsers()

const name = Users.map((user, number) => <li key={number}>{user.name}</li>)

const email = Users.map((user, number) => <li key={number}>{user.email}</li>)

const address = Users.map((user, number) => <li key={number}>{user.address}</li>)

const Myliste = () => {
  return (
    <div>
      <List component='item'>
        <ListItem>
          <ListItemText primary='item1' />
        </ListItem>
        <ListItem>
          <ListItemText primary='item2' />
        </ListItem>
        <ListItem>
          <ListItemText primary='item3' />
        </ListItem>
      </List>

      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem>
          <ListItemText primary={name} />
        </ListItem>
        <ListItem>
          <ListItemText primary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary={address} />
        </ListItem>
      </List>
    </div>
  )
}
export default Myliste
