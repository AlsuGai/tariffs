import { useState } from 'react'
import Container from './Components/Container'

const arrTariffs = [
  {name: "Безлимитный 300", price:"300", speed: "10", color: "blue", id: 1},
  {name: "Безлимитный 450", price:"450", speed: "50", color: "green", id: 2},
  {name: "Безлимитный 550", price:"550", speed: "100", color: "red", id: 3},
  {name: "Безлимитный 1000", price:"1000", speed: "200", color: "black", id: 4},
]


function App() {
  return (
    <>
      <Container arrTariffs = {arrTariffs} />
    </>
  )
}

export default App
