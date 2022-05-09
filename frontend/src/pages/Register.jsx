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
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an accout!</p>
      </section>
      <section className="form">
        <form>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
        </form>
      </section>
    </>
  )
}

export default Register
