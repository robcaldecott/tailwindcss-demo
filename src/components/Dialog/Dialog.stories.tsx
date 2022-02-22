import { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Button } from "../Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

export const Controlled = () => {
  const [open, setOpen] = useState(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>

      <Dialog
        open={open}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClose={onClose}
      >
        <DialogTitle id="dialog-title">
          Use Google's location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={onClose}>
            Disagree
          </Button>
          <Button variant="text" onClick={onClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
