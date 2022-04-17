import { IconButton, Paper } from "@mui/material";
import Image from "next/image";
import { Images } from "../../constants";
import { BsArrowUpCircle } from "react-icons/bs";
import { DialogC2 } from "../parts";
import React from "react";

type Props = {
  title: string;
  percentage: number;
};
export function DroneCard(props: Props) {
  const { title, percentage } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px",
          minWidth: "400px",
          justifyContent: "space-between",
        }}
      >
        <div className="flex flex-row items-center space-x-4">
          <Image src={Images.icon} width={60} height={60} alt="icon" />
          <h2 className="font-semibold text-base">{title}</h2>
          <h1
            className={`font-semibold ${
              percentage > 75 ? "text-green-600" : "text-red-600"
            }`}
          >
            {percentage}%
          </h1>
        </div>
        <IconButton onClick={handleClickOpen}>
          <BsArrowUpCircle />
        </IconButton>
      </Paper>
      <DialogC2
        title="Get The Optimal Path to Deliver"
        onClose={handleClose}
        open={open}
      />
    </div>
  );
}
