import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Progress } from "@nextui-org/react";
import { useState } from "react";

interface Prop {
  time: number;
  onTimeChange: (value: number) => void;
  onPlay: () => void;
  onPasue: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const Controller = ({ time, onTimeChange, onPlay, onPasue, onStop, onReset }: Prop) => {
  const [playing, setPlaying] = useState(false);

  return <Card className="w-[260px]">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">按键练习</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <Input className="mb-3" type="number" label="时间（分钟）" value={time.toString()} onChange={e => onTimeChange(+e.target.value)} />
      <Progress
        classNames={{
          base: "max-w-md",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
        label="还剩 60 秒"
        value={65}
      />
    </CardBody>
    <Divider />
    <CardFooter className="flex justify-between">
      <Button color="primary" isIconOnly variant="shadow" disabled={playing} onClick={() => {
        setPlaying(true);
        onPlay();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </Button>
      <Button color="secondary" isIconOnly variant="shadow" onClick={onPasue}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
        </svg>
      </Button>
      <Button color="danger" isIconOnly variant="shadow" onClick={onStop}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
        </svg>
      </Button>
      <Button color="default" isIconOnly variant="shadow" onClick={onReset}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </Button>
    </CardFooter>
  </Card>
};
