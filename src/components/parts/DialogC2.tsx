import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useAppSelector } from "../../store";

type props = {
  open: boolean;
  onClose: () => void;
  title: string;
};

export function DialogC2(props: props) {
  const { open, onClose, title } = props;
  const coords = useAppSelector((state) => state.coords.coords);

  const getOptimalPath = () => {
    console.log("getOptimalPath");
  };
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <div>
          {coords.map((coord, index) => (
            <h1 key={index}>
              {coord.lat}, {coord.lng}
            </h1>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Cancel
        </Button>
        <Button onClick={getOptimalPath} autoFocus>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}
