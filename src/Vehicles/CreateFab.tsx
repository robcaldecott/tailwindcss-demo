import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import { Fab } from "@/components";

export const CreateFab = () => (
  <>
    <div className="block md:hidden fixed right-4 bottom-4">
      <Fab component={Link} to="/create">
        <PlusIcon className="h-6 w-6" />
      </Fab>
    </div>

    <div className="hidden md:block fixed right-8 bottom-8">
      <Fab variant="extended" component={Link} to="/create">
        <PlusIcon className="h-6 w-6 mr-2" />
        <FormattedMessage
          defaultMessage="Create vehicle"
          description="Click to create a new vehicle"
        />
      </Fab>
    </div>
  </>
);
