import { CardBody } from "../CardBody/CardBody";
import { CardHeader } from "../CardHeader/CardHeader";
import { CardTitle } from "../CardTitle/CardTitle";
import Image from "next/image";
import { Info } from "lucide-react";

const Card = () => {
  return (
    <CardBody className="w-72">
      <CardHeader>
        <CardTitle>
          <Image
            alt="Profile Photo"
            height={96}
            width={96}
            src="/CardPhoto.jpg"
            className="w-full h-full"
          />
        </CardTitle>
        <h3 className="font-semibold">Alex, 29</h3>
        <div className="flex justify-between gap-8">
          <p className="text-xs text-neutral-400 dark:text-neutral-400">
            Frontend Software Engineer @Gridiron Survivor
          </p>
          <Info className="text-neutral-400 dark:text-neutral-400" />
        </div>
      </CardHeader>
    </CardBody>
  );
};

export default Card;
