// Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = ({ userDetails, loading }) => (
  <div style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "2%" }}>
    <div style={{ padding: "10px" }}>
      <h3>Sidebar</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>
            <strong>{userDetails.fullname}</strong>
          </p>
          <p>{userDetails.email}</p>
        </div>
      )}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/user/private-chats">Private Chats</Link>
        </li>
        <li>
          <Link to="/user/friends">Friend List</Link>
        </li>
        <li>
          <Link to="/user/groups">Group List</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;