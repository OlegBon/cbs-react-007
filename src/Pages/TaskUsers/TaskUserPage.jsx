import { Link, useLoaderData } from "react-router-dom";

function TaskUserPage() {
  const user = useLoaderData();

  return (
    <div className="Main user-page">
      <div>
        <Link to="/taskusers">Back</Link>
      </div>
      <h2>{user.name}</h2>
      <h3>
        {user.username}
        <br />
        {user.email}
      </h3>
      <h3>{user.address.city}</h3>
      <h3>
        {user.phone}
        <br />
        {user.website}
      </h3>
      <h3>{user.company.name}</h3>
    </div>
  );
}

export default TaskUserPage;
