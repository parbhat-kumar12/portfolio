import React from "react";
import { Progress } from "@nextui-org/react";

const Newskill2 = (props: any) => {
  return (
    <div>
      <Progress
        size="md"
        radius="md"
        classNames={{
          base: "max-w-md max-h-md",
          track: " ",

          indicator: "bg-[#74f0ed]",
          value: "text-[#74f0ed]/69 text-end",
        }}
        value={props.title}
        showValueLabel={true}
      />
    </div>
  );
};

export default Newskill2;
