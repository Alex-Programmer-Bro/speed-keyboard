import { Card, CardBody, Kbd } from "@nextui-org/react";
import { motion } from 'framer-motion'

const CustomKbd = motion(Kbd);

export const Canvas = ({ keys }: { keys: { id: string; key: string; style: React.CSSProperties }[] }) => {
  return <Card className="h-full">
    <CardBody className="overflow-hidden block items-start">
      {
        keys.map(item => {
          return <CustomKbd key={item.id} layoutId={item.id} className="inline-block align-top" style={item.style}>{item.key}</CustomKbd>
        })
      }
    </CardBody>
  </Card>
};
