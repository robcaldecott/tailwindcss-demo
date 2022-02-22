import { FormattedMessage } from "react-intl";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { Typography, Button } from "@/components";

interface AlertErrorProps {
  error: Response;
  onClick: () => void;
}

export const AlertError = ({ error, onClick }: AlertErrorProps) => (
  <div className="flex space-x-2 items-center px-4 pr-1 py-2 bg-red-100 dark:bg-red-900 min-w-0">
    <ExclamationCircleIcon className="h-5 w-5 text-red-500 shrink-0" />

    <Typography variant="body1" noWrap className="grow">
      {`${error.status}: ${error.statusText}`}
    </Typography>

    <Button variant="text" onClick={onClick}>
      <FormattedMessage
        defaultMessage="Close"
        description="Dismiss the error"
      />
    </Button>
  </div>
);
