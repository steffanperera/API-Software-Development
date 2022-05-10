import React from "react"
import { FaUser } from "react-icons/fa"

function CompanyDashboard() {
  return (
    <>
      <section className="heading">
        <h4>
          <FaUser /> Company Dashboard
        </h4>
        <p>Enter nic to search</p>
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
      <section className="form">
        <form>
          <div className="form-group">
            <br />
            <p>Citizen profile not found</p>
            {/* <br />
            <br />
            <h5>6276256f58c6d23fe478e652</h5>
            <h5>A A R S S Perera</h5>
            <h5>973260081V</h5>
            <h5>2/B, Pansala Road, Katana</h5>
            <h5>0712345721</h5>
            <h5>aarssperera</h5>
            <h5>aarssperera@gmail.com</h5>
            <h5>BSc (Hons) Civil Engineering</h5>
            <h5>birth_certificate.pdf</h5>
            <h5>cv.png</h5>
            <h5>passport_copy.pdf</h5> */}
          </div>
          <br />
          {/* <div className="form-group">
            <button type="submit" className="btn btn-block">
              Deactivate Account
            </button>
          </div> */}
        </form>
      </section>
    </>
  )
}

export default CompanyDashboard
