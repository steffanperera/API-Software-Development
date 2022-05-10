import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CompanyDashboard from "./pages/CompanyDashboard"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Qualifications from "./pages/Qualifications"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="/qualifications" element={<Qualifications />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
