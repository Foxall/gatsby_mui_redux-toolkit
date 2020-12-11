import React from 'react'
import Counter from '../components/counter'
import Myliste from '../components/myliste'
import { Button } from 'gatsby-theme-material-ui'

export default function Home() {
  return (
    <div>
      <Button variant='outlined' to='/about'>
        {' '}
        about{' '}
      </Button>
      <Counter />
      <Myliste />
    </div>
  )
}
