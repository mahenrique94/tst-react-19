import {
  BrowserRouter,
  Navigate,
  Outlet,
  Routes as RRRoutes,
  Route,
} from "react-router";

import { App } from "./layouts/App";
import { CustomElements } from "./routes/CustomElements";
import { FormActions } from "./routes/FormActions";
import { Home } from "./routes/Home";
import { UseActionState } from "./routes/UseActionState";
import { UseOptimistic } from "./routes/UseOptimistic";
import { UseTransition } from "./routes/UseTransition";
import { Use } from "./routes/Use";

export const Routes = () => (
  <BrowserRouter>
    <RRRoutes>
      <Route element={<App />} path="/">
        <Route element={<Home />} index />
        <Route element={<CustomElements />} path="custom-elements" />
        <Route element={<Outlet />} path="use">
          <Route element={<Use />} index />
          <Route element={<UseActionState />} path="action-state" />
          <Route element={<UseOptimistic />} path="optimistic" />
          <Route element={<UseTransition />} path="transition" />
        </Route>
        <Route element={<FormActions />} path="form-actions" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Route>
    </RRRoutes>
  </BrowserRouter>
);
