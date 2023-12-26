import { Controller } from './controller'
import React, { useState } from 'react'
import { Grades } from './grades'
import { Canvas } from './canvas'
import { v1 } from 'uuid'

const randomStyle = () => {
  const scale = Math.random() + 1
  return {
    margin: `20px`,
    transform: `scale(${scale})`
  } as React.CSSProperties
}
function App() {
  const [time, setTime] = useState(1);
  const [keys, setKeys] = useState<{ id: string; key: string, style: React.CSSProperties }[]>([]);

  const insertKeys = () => {
    const length = (Math.random() * 10) | 0 + 1;
    const newKeys: ((typeof keys)[number])[] = [];

    for (let index = 0; index < length; index++) {
      const num = (Math.random() * 10) | 0;
      newKeys.push({ id: v1(), key: num.toString(), style: randomStyle() });
    }
    setKeys(pre => [...newKeys, ...pre]);
  }

  const onPlay = () => {
    console.log('onPlay');
    setInterval(() => {
      insertKeys();
    }, 1000)
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
    <div className='fixed left-0 top-0 w-full flex justify-center py-5 px-60 h-full'>
      <div className='flex-1 mr-10 h-full'><Canvas keys={keys} /></div>
      <div className='w-[300px]'>
        <div className='mb-10'>
          <Grades correctRate={100} speed={240} />
        </div>
        <Controller time={time} onTimeChange={setTime} onPlay={onPlay} onPasue={onPasue} onStop={onStop} onReset={onReset} />
      </div>
    </div>
  )
}

export default App
