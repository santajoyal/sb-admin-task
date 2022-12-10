import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";

function Edituser() {
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      dob: "",
    },
   onSubmit:  async (values) => {
      try {
        const userdata = await axios.get(
          `https://6346c13f9eb7f8c0f884b683.mockapi.io/users/${params.id}`
        );
        console.log(userdata)
        formik.setValues(userdata.data)
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Usernmae</label>
              <input
                className="form-control"
                type={"text"}
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type={"email"}
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Country</label>
              <select
                className="form-control"
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
              >
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
              <select
                className="form-control"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
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
              <select
                className="form-control"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              >
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
              <input
                className="form-control"
                type={"date"}
                name="dob"
                onChange={formik.handleChange}
                value={formik.values.dob}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edituser;
