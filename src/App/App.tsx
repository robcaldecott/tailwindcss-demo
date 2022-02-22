import { Suspense, lazy } from "react";
import { FormattedMessage } from "react-intl";
import { Routes, Route } from "react-router-dom";
import { AppHeader } from "../AppHeader";
import { Fallback } from "../Fallback";
import { FilterProvider } from "../FilterProvider";

const Vehicles = lazy(() => import("../Vehicles"));
const Details = lazy(() => import("../Details"));
const Create = lazy(() => import("../Create"));

export const App = () => (
  <>
    <AppHeader
      title={
        <FormattedMessage
          defaultMessage="Vehicle Manager"
          description="The app title"
        />
      }
    />

    <FilterProvider>
      <main className="xl:container p-4 mx-auto">
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Vehicles />} />
            <Route path="/vehicles/:vehicleId" element={<Details />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Suspense>
      </main>
    </FilterProvider>
  </>
);
