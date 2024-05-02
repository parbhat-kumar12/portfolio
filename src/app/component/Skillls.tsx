import React from "react";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

const Newskill = (props: any) => {
  return (
    <div className=" flex justify-center ">
      <Card className="w-[240px] mt-6 bg-[#071c2a] h-[240px] text-[#74f0ed] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-28 h-28  text-[#74f0ed]",
              indicator: "stroke-[#74f0ed]",
              track: "stroke-white/1 border",
              value: "text-2xl font-semibold  text-[#74f0ed]",
            }}
            value={props.title}
            strokeWidth={2}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="justify-center  items-center bg-[#071c2a] text-[#74f0ed] pt-0">
          <Chip
            classNames={{
              base: "border-0/30",
              content: "text-[#74f0ed]/90 text-small font-semibold",
            }}
            variant="bordered"
          >
            {props.header}
          </Chip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Newskill;
