import { Button } from '@nextui-org/react'
import { Controller } from './controller'
import { useState } from 'react'

function App() {
  const [time, setTime] = useState(1)

  const onPlay = () => {
    console.log('onPlay');
   }

  const onPasue = () => {
    console.log('onPasue');
   }

  const onStop = () => {
    console.log('onStop');
   }

  const onReset = () => {
    console.log('onReset');
   }

  return (
    <>
      <Controller time={time} onTimeChange={setTime} onPlay={onPlay} onPasue={onPasue} onStop={onStop} onReset={onReset} />
      <Button>Vite + React</Button>
    </>
  )
}

export default App
