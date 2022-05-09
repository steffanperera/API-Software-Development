import React from 'react'
import {useState, useEffect} from "react"

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
  return (
    <div>Register</div>
  )
}

export default Register