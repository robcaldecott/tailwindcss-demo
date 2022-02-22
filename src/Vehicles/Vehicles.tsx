import { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import { ErrorMessage } from "../ErrorMessage";
import { useVehicles, Vehicle } from "../queries";
import { useFilter } from "../FilterProvider";
import { SearchField } from "./SearchField";
import { CreateFab } from "./CreateFab";
import {
  Badge,
  Paper,
  Skeleton,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@/components";

const Loading = () => {
  const intl = useIntl();

  return (
    <Paper
      aria-label={intl.formatMessage({
        defaultMessage: "Loading vehicles",
        description: "Accessibility label when the vehicle list is loading",
      })}
    >
      <Typography variant="h5" component="h1" className="p-4">
        <Skeleton />
      </Typography>
      <Divider />
      <List dividers>
        {Array.from(Array(10).keys()).map((key, index, arr) => (
          <ListItem key={key}>
            <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

const NoResults = () => (
  <div className="p-8 flex flex-col items-center space-y-4">
    <InformationCircleIcon className="text-indigo-700 dark:text-indigo-500 h-16 w-16" />

    <Typography variant="h5" component="h2" align="center">
      <FormattedMessage
        defaultMessage="No matching vehicles found."
        description="The search returned no matches"
      />
    </Typography>

    <Typography variant="body1" align="center" color="secondary">
      <FormattedMessage
        defaultMessage="Please try a different filter."
        description="Hint that a different filter should be used"
      />
    </Typography>
  </div>
);

const filterItems = (data: Vehicle[], filter: string) =>
  data.filter((vehicle) => {
    if (filter === "") {
      return true;
    }
    const re = new RegExp(filter, "i");
    const description = `${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`;
    return description.search(re) !== -1;
  });

interface SuccessProps {
  data?: Vehicle[];
}

const Success = ({ data = [] }: SuccessProps) => {
  const { filter, setFilter } = useFilter();
  const [items, setItems] = useState(filterItems(data, filter));
  useEffect(() => void setItems(filterItems(data, filter)), [filter, data]);

  return (
    <Paper>
      <div className="p-4">
        <div className="flex items-center flex-wrap md:flex-nowrap space-y-4 md:space-y-0">
          <div className="flex grow basis-full items-center space-x-2">
            <Typography variant="h5" component="h1">
              <FormattedMessage
                defaultMessage="Vehicles"
                description="The title for the list of vehicles"
              />
            </Typography>
            <Badge>{items.length}</Badge>
          </div>

          <Divider className="block md:hidden basis-full" />

          <SearchField
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            onClear={() => setFilter("")}
            className="basis-full md:basis-1/3"
          />
        </div>
      </div>
      <Divider />
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <List dividers>
          {items.map((vehicle, index, arr) => (
            <ListItem
              key={vehicle.id}
              button
              component={Link}
              to={`/vehicles/${vehicle.id}`}
            >
              <ListItemText
                primary={`${vehicle.manufacturer} ${vehicle.model} ${vehicle.type} ${vehicle.fuel}`}
                secondary={vehicle.registrationNumber}
              />
              <ChevronRightIcon className="h-6 w-6 text-slate-500 shrink-0" />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export const Vehicles = () => {
  const { isLoading, isSuccess, isError, data, error, refetch } = useVehicles();

  return (
    <>
      <div className="mb-24">
        {isLoading && <Loading />}
        {isSuccess && <Success data={data} />}
        {isError && (
          <ErrorMessage
            error={error}
            action={
              <Button variant="contained" onClick={() => refetch()}>
                <FormattedMessage
                  defaultMessage="Try again"
                  description="Fetch the list of vehicles again"
                />
              </Button>
            }
          />
        )}
      </div>

      <CreateFab />
    </>
  );
};
