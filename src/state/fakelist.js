import faker from 'faker'
import { setRedux } from './fakelisteSlice'
import { useDispatch } from 'react-redux'

const SetFakeList = () => {

  const dispatch = useDispatch()
  const createUser = () => ({ name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetAddress(), bio: faker.lorem.sentence(), image: faker.image.avatar(), uuid: faker.random.uuid })
  const createUsers = (numUsers = 5) => Array.from({ length: numUsers }, createUser)
  const Users = createUsers()

  dispatch(setRedux())

  return null
}

export default SetFakeList
