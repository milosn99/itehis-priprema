import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Activity = ({ activity, onDelete, key }) => (
  <tr>
    <td>{activity.username}</td>
    <td>{activity.description}</td>
    <td>{activity.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + activity._id}>edit</Link> |{" "}
      <p
        onClick={() => {
          onDelete(activity._id);
        }}
      >
        delete
      </p>
    </td>
  </tr>
);

function ActivityList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDeleteActivity = (id) => {
    axios
      .delete(`http://localhost:5000/api/activities/${id}`)
      .then((res) => {
        setActivities(activities.filter((a) => a._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const activityList = () => {
    return activities.map((a) => {
      return <Activity activity={a} onDelete={onDeleteActivity} key={a._id} />;
    });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{activityList()}</tbody>
      </table>
    </div>
  );
}

export default ActivityList;
