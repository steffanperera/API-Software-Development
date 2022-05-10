import React from "react"
import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    address: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, nic, address, phone, username, email, password } = formData

  const onChange = () => {}

  return (
    <>
      <section className="heading">
        <h4>
          <FaUser /> Citizen Dashboard
        </h4>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <br />
            <p>My profile</p>
            <br />
          </div>
        </form>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            {/* details */}
          </div>
        </form>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="973260081V" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Search
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Dashboard
