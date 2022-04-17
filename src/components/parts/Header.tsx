import { Button, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Images } from "../../constants";

export function Header() {
  return (
    <Paper
      elevation={3}
      className="w-full max-h-[80px] min-h-[80px] flex flex-row items-center
  justify-around "
      style={{
        backgroundColor: "#22186d",
        borderRadius: "0px",
      }}
    >
      <Image
        src={Images.logo}
        width={75}
        height={75}
        alt="logo"
        style={{
          backgroundColor: "#22186d",
        }}
      />
      <Link href="/" passHref>
        <Button variant="contained">Admin Dashboard</Button>
      </Link>
      <Link href="/client" passHref>
        <Button variant="contained">Client</Button>
      </Link>
    </Paper>
  );
}
