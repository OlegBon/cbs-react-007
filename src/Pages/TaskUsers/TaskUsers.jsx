import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../../data/users.json";

function TaskUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  localStorage.setItem("users", JSON.stringify(users));

  return (
    <div className="Main">
      <h1>Task Users</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link to={`/taskusers/${item.username.toLowerCase()}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskUsers;
