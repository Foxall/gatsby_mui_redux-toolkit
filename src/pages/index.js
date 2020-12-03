import React from "react"
import Button from '@material-ui/core/Button';

export default function Home() {
  return <div>
    <p>
      Clicked: <span id="value">0</span> times
      <Button variant="contained" color="primary">
        +
      </Button>
      <Button variant="contained" color="primary">
        -
      </Button>
    </p>
  </div>
}
