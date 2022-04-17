import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DialogContentText } from "@mui/material";
import { DroneCard } from "../cards";

type props = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export function DialogC(props: props) {
  const { open, onClose, title } = props;
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <div className="space-y-4">
          <DroneCard title="Drone Air Smiley.2.0" percentage={95} />
          <DroneCard title="Blue Twirls.1.0" percentage={28} />
          <DroneCard title="Drone Air Smiley.2.2.1" percentage={65} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
