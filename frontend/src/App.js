import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CompanyDashboard from "./pages/CompanyDashboard"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
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
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
