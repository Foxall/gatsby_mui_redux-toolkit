import React from "react"

export default function Home() {
  return <div>
    <p>
      Clicked: <span id="value">0</span> times
      <button id="increment">+</button>
      <button id="decrement">-</button>
    </p>
  </div>
}
