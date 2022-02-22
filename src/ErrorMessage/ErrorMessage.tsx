import { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { Paper, Typography } from "@/components";

interface ErrorMessageProps {
  error: Response | null;
  action?: ReactNode | undefined;
}

export const ErrorMessage = ({ error, action }: ErrorMessageProps) => (
  <Paper className="p-8 flex flex-col items-center space-y-2">
    <ExclamationCircleIcon className="text-red-500 h-16 w-16" />

    <Typography variant="h5" component="h2" align="center">
      <FormattedMessage
        defaultMessage="Something went wrong!"
        description="The error message"
      />
    </Typography>

    {error && (
      <Typography variant="body1" align="center" color="secondary">
        {`${error.status}: ${error.statusText}`}
      </Typography>
    )}

    {action}
  </Paper>
);
