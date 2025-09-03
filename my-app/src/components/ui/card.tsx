import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";

// Tipagem do que o componente aceita
type CardProps = {
  source: string; 
  text: string;
  small: string
  h4: string
};

export default function Cards({ source,text,small,h4 }: CardProps) {
  return (
    <Card className="py-4 bg-red-900 mt-20 rounded-md w-80 h-80 hover:scale-105 transiton ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col ">
        <p className="text-tiny text-yellow-300 font-bold">{text}</p>
        <small className="text-default-500">{small}</small>
        <h4 className="font-bold text-large ">{h4}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={source}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
