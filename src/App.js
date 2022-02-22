/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./views/auth/Login";
import Dashboard from "./views/Dashboard";
import PreLoader from "./components/commons/PreLoader";
import Settings from "./views/modules/configuration/Settings";
import Modules from "./views/modules/Modules";
import Module from "./views/modules/Module";
import Roles from "./views/modules/administration/Roles";
import Groups from "./views/modules/administration/Groups";
import Departments from "./views/modules/administration/Departments";
import Employees from "./views/modules/administration/Employees";
import BudgetHeads from "./views/modules/budget/BudgetHeads";
import Payments from "./views/modules/budget/Payment";
import SubBudgetHeads from "./views/modules/budget/SubBudgetHeads";
import Fund from "./views/modules/budget/Fund";
import Expenditures from "./views/modules/budget/Expenditures";
import Claims from "./views/modules/staff-services/Claims";
import GradeLevels from "./views/modules/structure/GradeLevels";
import Wages from "./views/modules/structure/Wages";
import Benefits from "./views/modules/structure/Benefits";
import Claim from "./views/modules/staff-services/Claim";
import Instructions from "./views/modules/staff-services/Instructions";
import Approvals from "./views/modules/approvals/Approvals";
import Logistics from "./views/modules/refunds/Logistics";
import Batch from "./views/modules/budget/Batch";
import RefundRequests from "./views/modules/refunds/RefundRequests";
import AddModules from "./views/modules/administration/AddModules";
import Overview from "./views/modules/overview/Overview";
import OverviewExpenditure from "./views/modules/overview/OverviewExpenditure";

const App = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/applications"
          element={
            <ProtectedRoute>
              <Modules />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/applications/:id"
          element={
            <ProtectedRoute>
              <Module />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/roles"
          element={
            <ProtectedRoute>
              <Roles />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/groups"
          element={
            <ProtectedRoute>
              <Groups />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/departments"
          element={
            <ProtectedRoute>
              <Departments />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/staff"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/budget-heads"
          element={
            <ProtectedRoute>
              <BudgetHeads />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/sub-budget-heads"
          element={
            <ProtectedRoute>
              <SubBudgetHeads />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/funds"
          element={
            <ProtectedRoute>
              <Fund />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/expenditures"
          element={
            <ProtectedRoute>
              <Expenditures />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/claims/:id/print"
          element={
            <ProtectedRoute>
              <Claim />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/claims/:id/add/details"
          element={
            <ProtectedRoute>
              <Instructions />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/claims"
          element={
            <ProtectedRoute>
              <Claims />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/payments"
          element={
            <ProtectedRoute>
              <Payments />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/grade-levels"
          element={
            <ProtectedRoute>
              <GradeLevels />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/benefit/wages"
          element={
            <ProtectedRoute>
              <Wages />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/benefits"
          element={
            <ProtectedRoute>
              <Benefits />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/approve/expenditures"
          element={
            <ProtectedRoute>
              <Approvals />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/logistics/refund"
          element={
            <ProtectedRoute>
              <Logistics />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/refund/requests"
          element={
            <ProtectedRoute>
              <RefundRequests />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/batch/claim"
          element={
            <ProtectedRoute>
              <Batch />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/modules"
          element={
            <ProtectedRoute>
              <AddModules />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/overview/:id/expenditure"
          element={
            <ProtectedRoute>
              <OverviewExpenditure />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/overview"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default App;
