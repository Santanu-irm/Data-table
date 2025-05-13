import React, { memo } from "react";

const UserTableRow = memo(({ user, handleInputChange, handleKeyDown }) => {
  return (
    <tr>
      <td>
        <input
          className="editable-input"
          value={user.name}
          onChange={(e) => handleInputChange(user.id, "name", e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </td>
      <td>
        <input
          className="editable-input"
          value={user.email}
          onChange={(e) => handleInputChange(user.id, "email", e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </td>
      <td>{user.company.name}</td>
    </tr>
  );
});

export default UserTableRow;
