import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    try {
      setLoading(true);
      const users = await axios.get(
        "https://6346c13f9eb7f8c0f884b683.mockapi.io/users"
      );
      console.log(users);
      setUsers(users.data);
      setLoading(false);
    } catch (error) {
      alert("error");
    }
  };

  let deleteuser = () => {
    const result = window.confirm("Are you sure want to delete?");
    if (result) {
      alert("Deleted...");
    }
  };
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/create-user"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create User
        </Link>
      </div>

      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Date Of Birth</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Date Of Birth</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.dob}</td>
                        <td>
                          <Link
                            to={`/profile/${user.id}`}
                            className="btn btn-warning"
                          >
                            View
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/edit-user/${user.id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteuser()}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
