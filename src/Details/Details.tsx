import { useState, useEffect } from "react";
import { useIntl, FormattedMessage, FormattedNumber } from "react-intl";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { useVehicle, useDeleteVehicle, Vehicle } from "../queries";
import { AlertError } from "./AlertError";
import { DeleteDialog } from "./DeleteDialog";
import {
  Button,
  Card,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  Skeleton,
} from "@/components";

interface BreadcrumbsProps {
  registrationNumber?: string;
}

const Breadcrumbs = ({ registrationNumber }: BreadcrumbsProps) => (
  <nav className="font-sans text-base font-normal mb-4">
    <ol className="flex space-x-2">
      <li>
        <RouterLink
          to="/"
          className="text-indigo-500 dark:text-indigo-100 hover:text-indigo-900 dark:hover:text-indigo-400 underline"
        >
          <FormattedMessage
            defaultMessage="Home"
            description="Click to return to the home page"
          />
        </RouterLink>
      </li>
      {registrationNumber && (
        <>
          <li className="text-slate-500 dark:text-slate-200">/</li>
          <li className="text-slate-500 dark:text-slate-200">
            {registrationNumber}
          </li>
        </>
      )}
    </ol>
  </nav>
);

const Loading = () => {
  const intl = useIntl();

  return (
    <>
      <Breadcrumbs />

      <Card
        aria-label={intl.formatMessage({
          defaultMessage: "Loading vehicle",
          description:
            "Accessibility label when the vehicle details are loading",
        })}
      >
        <CardHeader title={<Skeleton />} subheader={<Skeleton />} />
        <Divider />
        <CardContent>
          {Array.from(Array(16).keys()).map((key) => (
            <Skeleton key={key} height={20} />
          ))}
        </CardContent>
      </Card>
    </>
  );
};

const Swatch = ({ color }: { color: string }) => (
  <span
    className="h-4 w-4 rounded-full inline-block border border-slate-300 dark:border-slate-500"
    style={{ backgroundColor: color.replace(/ /g, "") }}
  />
);

interface SuccessProps {
  data?: Vehicle;
}

const Success = ({ data }: SuccessProps) => {
  const intl = useIntl();
  const [showDialog, setShowDialog] = useState(false);
  const { mutate, isError, error, reset } = useDeleteVehicle();
  const navigate = useNavigate();

  if (data === undefined) {
    return null;
  }

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs registrationNumber={data.registrationNumber} />

      {/* Vehicle details card */}
      <Card
        aria-label={intl.formatMessage({
          defaultMessage: "Vehicle details",
          description: "Accessibility label for the vehicle details card",
        })}
      >
        <CardHeader
          title={`${data.manufacturer} ${data.model} ${data.type}`}
          subheader={data.registrationNumber}
        />
        <Divider />
        <CardContent>
          <dl>
            {/* Color */}
            <dt
              id="color"
              className="font-sans text-base font-medium text-slate-900 dark:text-white"
            >
              <FormattedMessage
                defaultMessage="Colour"
                description="Label for the vehicle colour"
              />
            </dt>
            <dd
              className="font-sans text-base font-normal text-slate-500 dark:text-slate-300 flex space-x-1 items-center"
              aria-labelledby="color"
            >
              <Swatch color={data.color} />
              <span>
                {data.color.charAt(0).toUpperCase() + data.color.slice(1)}
              </span>
            </dd>

            {/* Fuel */}
            <dt
              id="fuel"
              className="font-sans text-base font-medium mt-4 text-slate-900 dark:text-white"
            >
              <FormattedMessage
                defaultMessage="Fuel"
                description="Label for the vehicle fuel type"
              />
            </dt>
            <dd
              className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
              aria-labelledby="fuel"
            >
              {data.fuel}
            </dd>

            {/* VIN */}
            <dt
              id="vin"
              className="font-sans text-base font-medium mt-4 text-slate-900 dark:text-white"
            >
              <FormattedMessage
                defaultMessage="VIN"
                description="Label for the vehicle VIN"
              />
            </dt>
            <dd
              className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
              aria-labelledby="vin"
            >
              {data.vin}
            </dd>

            {/* Mileage */}
            <dt
              id="mileage"
              className="font-sans text-base font-medium mt-4 text-slate-900 dark:text-white"
            >
              <FormattedMessage
                defaultMessage="Mileage"
                description="Label for the vehicle mileage"
              />
            </dt>
            <dd
              className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
              aria-labelledby="mileage"
            >
              <FormattedNumber value={data.mileage} />
            </dd>

            {/* Registration date */}
            <dt
              id="date"
              className="font-sans text-base font-medium mt-4 text-slate-900 dark:text-white"
            >
              <FormattedMessage
                defaultMessage="Registration date"
                description="Label for the vehicle registration date"
              />
            </dt>
            {data.registrationDate && (
              <dd
                aria-labelledby="date"
                className="font-sans text-base font-normal text-slate-500 dark:text-slate-300"
              >
                <FormattedMessage
                  defaultMessage="{date, date, full}"
                  values={{ date: new Date(data.registrationDate) }}
                  description="The vehicle registration date"
                />
              </dd>
            )}
          </dl>
        </CardContent>
        <Divider />
        <CardActions>
          {isError ? (
            <AlertError error={error!} onClick={reset} />
          ) : (
            <>
              <Button
                variant="text"
                color="error"
                onClick={() => {
                  setShowDialog(true);
                }}
              >
                <FormattedMessage
                  defaultMessage="Delete vehicle"
                  description="Click to delete the vehicle"
                />
              </Button>
            </>
          )}
        </CardActions>
      </Card>

      {/* Delete vehicle dialog */}
      <DeleteDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        onDelete={() => {
          mutate(data.id, {
            onSuccess: () => {
              navigate(-1);
            },
            onSettled: () => {
              setShowDialog(false);
            },
          });
        }}
      />
    </>
  );
};

const Details = () => {
  // Reset scroll position to the top
  useEffect(() => void window.scrollTo(0, 0), []);
  const { vehicleId } = useParams();
  const { isLoading, isSuccess, isError, data, error } = useVehicle(vehicleId!);

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && <Success data={data} />}
      {isError && (
        <ErrorMessage
          error={error}
          action={
            <Button
              variant="contained"
              color="primary"
              // startIcon={<HomeOutlined />}
              component={RouterLink}
              to="/"
            >
              <FormattedMessage
                defaultMessage="Home"
                description="Click to return to the home page"
              />
            </Button>
          }
        />
      )}
    </>
  );
};

export { Details, AlertError, DeleteDialog };
