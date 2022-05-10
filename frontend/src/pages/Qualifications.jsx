import React from "react"
import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

function Qualifications() {
  const [formData, setFormData] = useState({
    qualifications: "",
  })

  const { qualifications } = formData

  return (
    <>
      <section className="heading">
        <h4>
          <FaUser /> Citizen Dashboard
        </h4>
        <p>Update qualifications</p>
      </section>
      <br />
      <br />
      <br />
      <div className="form-group">
        <p>Logged in as A A R S S Perera</p>
      </div>
      <br />
      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="qualifications"
              name="qualifications"
              value={qualifications}
              placeholder="BSc (Hons) Civil Engineering"
            />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Update Qualifications
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Qualifications
