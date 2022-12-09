import React from "react";
function Createuser() {
  let formsubmit = () => {
    alert("User created");
  };
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Usernmae</label>
              <input className="form-control" type={"text"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type={"email"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Country</label>
              <select className="form-control">
                <option>India</option>
                <option>China</option>
                <option>America</option>
                <option>Russia</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>State</label>
              <select className="form-control">
                <option>Tamilnadu</option>
                <option>Kerla</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>City</label>
              <select className="form-control">
                <option>Chennai</option>
                <option>Bengalore</option>
                <option>Coimbatore</option>
                <option>Salem</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Date Of Birth</label>
              <input className="form-control" type={"date"} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <button
                className="btn btn-primary"
                onClick={formsubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
