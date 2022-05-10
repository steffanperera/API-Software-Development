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
          <div className="form-group"></div>
          <br />
        </form>
      </section>
    </>
  )
}

export default CompanyDashboard
