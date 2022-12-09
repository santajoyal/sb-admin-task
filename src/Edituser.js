import React from 'react'
import { useParams } from 'react-router-dom';

function Edituser() {

    const params = useParams()

    let formupdate = () => {
        alert("User updated");
      };


  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Usernmae</label>
              <input className="form-control" type={"text"} value={`user${params.id}`}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type={"email"} value={`user${params.id}@gmail.com`}/>
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
                onClick={formupdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Edituser