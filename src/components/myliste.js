import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import faker from 'faker'

const createUser = () => (
  { name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
  }
)

const createUsers = (numUsers = 5) => Array.from({length: numUsers}, createUser);

const Users = createUsers()

const list = Users.map((user,number)=><li key={number} >{user.name}</li>)

const Myliste = () => {

  return (
    <List component='nav' aria-label='secondary mailbox folders'>
      <ListItem>
        <ListItemText primary={list}/>
      </ListItem>
    </List>
  )
}
export default Myliste
