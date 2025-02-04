// hooks
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//components
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

//pages
import Auth from "./pages/Login/Auth";
import ForgetPassword from "./pages/forgetPassword/FogetPassword";

//protected pages
import Home from "./pages/Home/Home";
import Patient from "./pages/patient/Patient";
import Add from "./pages/add/Add";
import Dashboard from "./pages/dashboard/Dashboard";
import AddCheckUp from "./pages/addCheckUp/AddCheckUp";
import CheckUps from "./pages/CheckUp/CheckUps";
import AddTreatment from "./pages/addTreatment/AddTreatment";
import Treatments from "./pages/Treatment/Treatments";
import Settings from "./pages/settings/Settings";
import TreatmentDetails from "./pages/treatmentDetails/TreatmentDetails";
import Help from "./pages/help/Help";
import CheckUpDetails from "./pages/checkUpDetails/CheckUpDetails";
import AddMEdicalFolder from "./pages/addMedicalFolder/AddMEdicalFolder";
import MedicalFolderDetails from "./pages/medicalFolderDetails/MedicalFolderDetails";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <div title="app">
      <Router>
        <Routes>
          {/* privete route */}
          <Route path="/home" element={<ProtectedRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/settings" element={<ProtectedRoute />}>
            <Route exact path="/settings" element={<Settings />} />
          </Route>

          <Route path="/profile" element={<ProtectedRoute />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>

          <Route path="/home/patients/:id" element={<ProtectedRoute />}>
            <Route exact path="/home/patients/:id" element={<Patient />} />
          </Route>

          <Route path="/home/add" element={<ProtectedRoute />}>
            <Route exact path="/home/add" element={<Add />} />
          </Route>

          <Route path="/home/patients/add/checkUp" element={<ProtectedRoute />}>
            <Route
              exact
              path="/home/patients/add/checkUp"
              element={<AddCheckUp />}
            />
          </Route>
          <Route path="/home/check-ups" element={<ProtectedRoute />}>
            <Route exact path="/home/check-ups" element={<CheckUps />} />
          </Route>
          <Route path="/home/checkUp-details" element={<ProtectedRoute />}>
            <Route
              exact
              path="/home/checkUp-details"
              element={<CheckUpDetails />}
            />
          </Route>

          <Route
            path="/home/patients/add/treatment"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/home/patients/add/treatment"
              element={<AddTreatment />}
            />
          </Route>
          <Route path="/home/treatments" element={<ProtectedRoute />}>
            <Route exact path="/home/treatments" element={<Treatments />} />
          </Route>
          <Route path="/home/treatment-details" element={<ProtectedRoute />}>
            <Route
              exact
              path="/home/treatment-details"
              element={<TreatmentDetails />}
            />
          </Route>

          <Route
            path="/home/patients/add/medical-folder"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/home/patients/add/medical-folder"
              element={<AddMEdicalFolder />}
            />
          </Route>

          <Route
            path="/home/medical-folder-details"
            element={<ProtectedRoute />}
          >
            <Route
              exact
              path="/home/medical-folder-details"
              element={<MedicalFolderDetails />}
            />
          </Route>

          <Route path="/help" element={<ProtectedRoute />}>
            <Route exact path="/help" element={<Help />} />
          </Route>

          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" exact element={<Auth />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
