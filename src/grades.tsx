import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

interface Props {
  correctRate: number;
  speed: number;
}

export const Grades = ({ correctRate, speed }: Props) => {
  return <Card>
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">练习成绩</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody>
      <p>
        正确率：<span className="text-sm">{correctRate}%</span>
      </p>
      <p>速度：<span className="text-sm">{speed}/m</span></p>
    </CardBody>
  </Card>
};
