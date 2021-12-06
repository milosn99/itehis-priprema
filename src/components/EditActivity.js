import React, { Component, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useHistory, useParams } from "react-router";

export default function EditActivity(props) {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities/" + id)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDate(new Date(res.data.date));
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/users/")
      .then((response) => {
        setUsers(response.data.map((user) => user.username));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/activities/${id}`, {
      username,
      description,
      date,
    });

    history.push("/");
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker selected={date} onChange={onChangeDate} />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
