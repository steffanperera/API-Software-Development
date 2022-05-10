import React from "react"
import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

function Register() {
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

  const { name, nic, address, phone, username, email, password, password2 } = formData

  const onChange = () => {}

  return (
    <>
      <section className="heading">
        <h4>
          <FaUser /> Register
        </h4>
        <p>Please create an accout!</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              nic="nic"
              value={nic}
              placeholder="Enter nic number"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              address="address"
              value={address}
              placeholder="Enter address"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              phone="phone"
              value={phone}
              placeholder="Enter phone number"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              username="username"
              value={username}
              placeholder="Enter username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              email="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              password="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              password2="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
