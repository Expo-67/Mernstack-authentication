import { Route, Routes } from "react-router-dom";
//import FloatingShape from "./components/FloatingShape";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage.jsx";
function App() {
  return (
      {/* className="min-h-screen bg-gradient-to-br
  from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      /> */}
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/WorkoutForm" element={<WorkoutFormPage />} />
          <Route path="/WorkoutList" element={<WorkoutListPage />} />
          <Route path="/ProgressGraph" element={<ProgressGraphPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
