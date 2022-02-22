import { FormattedMessage } from "react-intl";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@/components";

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteDialog = ({
  open,
  onClose,
  onDelete,
}: DeleteDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="delete-dialog-title"
    aria-describedby="delete-dialog-description"
  >
    <DialogTitle id="delete-dialog-title">
      <FormattedMessage
        defaultMessage="Delete vehicle"
        description="Title for the Delete Vehicle dialog"
      />
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="delete-dialog-description">
        <FormattedMessage
          defaultMessage="Are you really sure you want to delete this vehicle?"
          description="Prompt for the Delete Vehicle dialog"
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="text" onClick={onClose}>
        <FormattedMessage
          defaultMessage="Cancel"
          description="Cancel the dialog"
        />
      </Button>
      <Button
        variant="contained"
        color="error"
        // startIcon={<DeleteOutline />}
        onClick={onDelete}
      >
        <FormattedMessage
          defaultMessage="Delete"
          description="Delete the vehicle"
        />
      </Button>
    </DialogActions>
  </Dialog>
);
