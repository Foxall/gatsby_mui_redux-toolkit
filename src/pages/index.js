import React from 'react'
import Counter from '../components/counter'
import Myliste from '../components/myliste'
import Button from '@material-ui/core/Button'

export default function Home () {
  return (
    <div>
       <Button variant='contained' href="/about"> about </Button>
      <Counter/>
      <Myliste/>
    </div>
  )
}
