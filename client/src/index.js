import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import EmployeeList from "./Pages/EmployeeList";
import EmployeeCreator from "./Pages/EmployeeCreator";
import EmployeeUpdater from "./Pages/EmployeeUpdater";
import EquipmentList from "./Pages/Equipment/EquipmentList"
import EquipmentCreator from "./Pages/Equipment/EquipmentCreator"
import EquipmentUpdater from "./Pages/Equipment/EquipmentUpdater"
import KittensForm from "./Pages/Kittens/KittensForm"


import "./index.css";
import TableTest from "./Pages/TableTest";
import FormTest from "./Pages/FormTest";
import DeleteForm from "./Components/DeleteForm/DeleteForm";
import CreateCompany from "./Pages/Companies/CreateCompany";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/table-test",
        element: <TableTest />,
      },
      {
        path: "/form-test",
        element: <FormTest />,
      },
      {
        path: "/equipment",
        element: <EquipmentList />,
      },
      {
        path: "/equipment/create",
        element: <EquipmentCreator />,
      },
      {
        path: "/equipment/update/:id",
        element: <EquipmentUpdater />,
      },
      {
        path: "/employees/:search",
        element: <EmployeeList />,
      },
      {
        path: "/missing",
        element: <EmployeeList />,
      },
      {
        path: "/top-paid/",
        element: <EmployeeList />,
      },
      {
        path: "equipment/delete/:id",
        element: <DeleteForm />,
      },
      {
        path: "kittens/:employeeId",
        element: <KittensForm />,
      },
      {
        path: "create-company",
        element: <CreateCompany />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
