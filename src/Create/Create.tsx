import { useIntl, FormattedMessage } from "react-intl";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field, FormikErrors } from "formik";
import { useCreateVehicle, VehiclePayload } from "../queries";
import { manufacturers, fuelTypes, colors } from "../mocks/vehicles";
import {
  Button,
  Paper,
  Divider,
  Typography,
  FormikTextField,
  FormikSelectField,
} from "@/components";

interface Values extends Omit<VehiclePayload, "mileage"> {
  mileage: string;
  registrationDate: string;
}

export const Create = () => {
  const intl = useIntl();
  const { mutate } = useCreateVehicle();
  const navigate = useNavigate();

  return (
    <>
      <nav className="font-sans text-base font-normal mb-4">
        <ol className="flex space-x-2">
          <li>
            <RouterLink
              to="/"
              className="text-indigo-500 dark:text-indigo-100 dark:hover:text-indigo-400 hover:text-indigo-900 underline"
            >
              <FormattedMessage
                defaultMessage="Home"
                description="Click to return to the home page"
              />
            </RouterLink>
          </li>
        </ol>
      </nav>

      <Paper>
        <Typography variant="h5" component="h2" className="p-4">
          <FormattedMessage
            defaultMessage="Create new vehicle"
            description="Title for the Create Vehicle form"
          />
        </Typography>
        <Divider />

        <Formik
          initialValues={
            {
              manufacturer: "",
              model: "",
              type: "",
              fuel: "",
              registrationNumber: "",
              vin: "",
              color: "",
              mileage: "",
              registrationDate: "",
            } as Values
          }
          validate={(values) => {
            let errors: FormikErrors<Values> = {};

            if (values.manufacturer === "") {
              errors.manufacturer = intl.formatMessage({
                defaultMessage: "Please select a make",
                description: "Error if no make is selected",
              });
            }
            if (values.model === "") {
              errors.model = intl.formatMessage({
                defaultMessage: "Please enter the model",
                description: "Error if no model is entered",
              });
            }
            if (values.type === "") {
              errors.type = intl.formatMessage({
                defaultMessage: "Please enter the variant",
                description: "Error if no variant is entered",
              });
            }
            if (values.fuel === "") {
              errors.fuel = intl.formatMessage({
                defaultMessage: "Please select a fuel type",
                description: "Error if no fuel type is selected",
              });
            }
            if (values.registrationNumber === "") {
              errors.registrationNumber = intl.formatMessage({
                defaultMessage: "Please enter the registration number",
                description: "Error if no registration number is entered",
              });
            }
            if (values.vin === "") {
              errors.vin = intl.formatMessage({
                defaultMessage: "Please enter the VIN",
                description: "Error if no VIN is entered",
              });
            }
            if (values.color === "") {
              errors.color = intl.formatMessage({
                defaultMessage: "Please select a colour",
                description: "Error if no colour is selected",
              });
            }
            if (values.mileage === "") {
              errors.mileage = intl.formatMessage({
                defaultMessage: "Please enter the mileage",
                description: "Error if no mileage is entered",
              });
            } else if (values.mileage.match(/^\d+$/) === null) {
              errors.mileage = intl.formatMessage({
                defaultMessage: "Please enter a valid mileage",
                description: "Error if an invalid mileage is entered",
              });
            }
            if (values.registrationDate === "") {
              errors.registrationDate = intl.formatMessage({
                defaultMessage: "Please enter the registration date",
                description: "Error if no registration date is entered",
              });
            }

            return errors;
          }}
          onSubmit={(values: Values) => {
            mutate(
              {
                ...values,
                mileage: parseInt(values.mileage, 10),
              },
              {
                onSuccess: () => navigate(-1),
              }
            );
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form>
              <div className="p-4 grid grid-cols-12 gap-4">
                <Field
                  component={FormikSelectField}
                  name="manufacturer"
                  id="manufacturer"
                  label={
                    <FormattedMessage
                      defaultMessage="Make"
                      description="Label for the make"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-4"
                >
                  <option value="" disabled>
                    {intl.formatMessage({
                      defaultMessage: "Select a make",
                      description: "Label when no make is selected",
                    })}
                  </option>
                  {manufacturers().map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </Field>

                <Field
                  component={FormikTextField}
                  name="model"
                  id="model"
                  label={
                    <FormattedMessage
                      defaultMessage="Model"
                      description="Label for the model"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-4"
                />

                <Field
                  component={FormikTextField}
                  name="type"
                  id="type"
                  label={
                    <FormattedMessage
                      defaultMessage="Variant"
                      description="Label for the variant"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-4"
                />

                <Field
                  component={FormikSelectField}
                  name="fuel"
                  id="fuel"
                  label={
                    <FormattedMessage
                      defaultMessage="Fuel"
                      description="Label for the fuel type"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-6"
                >
                  <option value="" disabled>
                    {intl.formatMessage({
                      defaultMessage: "Select a fuel type",
                      description: "Label when no fuel type is selected",
                    })}
                  </option>
                  {fuelTypes().map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </Field>

                <Field
                  component={FormikSelectField}
                  name="color"
                  id="color"
                  label={
                    <FormattedMessage
                      defaultMessage="Colour"
                      description="Label for the colour"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-6"
                >
                  <option value="" disabled>
                    {intl.formatMessage({
                      defaultMessage: "Select a colour",
                      description: "Label when no colour is selected",
                    })}
                  </option>
                  {colors().map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                  ))}
                </Field>

                <Field
                  component={FormikTextField}
                  name="registrationNumber"
                  id="registrationNumber"
                  label={
                    <FormattedMessage
                      defaultMessage="Registration number"
                      description="Label for the registration number"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-6"
                />

                <Field
                  component={FormikTextField}
                  name="vin"
                  id="vin"
                  label={
                    <FormattedMessage
                      defaultMessage="VIN"
                      description="Label for the VIN"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-6"
                />

                <Field
                  component={FormikTextField}
                  name="mileage"
                  id="mileage"
                  label={
                    <FormattedMessage
                      defaultMessage="Mileage"
                      description="Label for the mileage"
                    />
                  }
                  inputMode="numeric"
                  required
                  className="col-span-12 md:col-span-6"
                />

                <Field
                  component={FormikTextField}
                  type="date"
                  name="registrationDate"
                  id="registrationDate"
                  label={
                    <FormattedMessage
                      defaultMessage="Registration date"
                      description="Label for the registration date"
                    />
                  }
                  required
                  className="col-span-12 md:col-span-6"
                />
              </div>
              <Divider />
              <div className="flex flex-wrap md:flex-nowrap p-4 space-x-4 space-y-4 md:space-y-0 justify-between">
                <Button
                  type="button"
                  variant="text"
                  onClick={() => resetForm()}
                  disabled={isSubmitting}
                  className="basis-full md:basis-auto"
                >
                  <FormattedMessage
                    defaultMessage="Reset"
                    description="Resets all the form fields"
                  />
                </Button>

                <div className="flex justify-center space-x-2 basis-full md:basis-auto">
                  <Button
                    type="button"
                    variant="text"
                    // color="primary"
                    onClick={() => navigate(-1)}
                    disabled={isSubmitting}
                  >
                    <FormattedMessage
                      defaultMessage="Cancel"
                      description="Cancel the form and return to the home page"
                    />
                  </Button>

                  <Button type="submit" disabled={isSubmitting}>
                    <FormattedMessage
                      defaultMessage="Create"
                      description="Create the vehicle"
                    />
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  );
};
