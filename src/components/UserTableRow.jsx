import React, { useState, useRef, memo } from "react";

const UserTableRow = memo(({ user, handleInputChange, handleKeyDown }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const shouldShowEditButton = isHovered && !isInputFocused;

  const handleEditClick = (ref) => {
    setIsInputFocused(true);
    ref.current?.focus();
  };

  return (
    <tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsInputFocused(false);
      }}
      style={{ position: "relative" }}
    >
      <td>{user.id}</td>
      <td style={{ position: "relative" }}>
        <input
          ref={nameInputRef}
          className="editable-input"
          value={user.name}
          onChange={(e) => handleInputChange(user.id, "name", e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {shouldShowEditButton && (
          <button
            className="edit-btn"
            onClick={() => handleEditClick(nameInputRef)}
          >
            📝
          </button>
        )}
      </td>
      <td style={{ position: "relative" }}>
        <input
          ref={emailInputRef}
          className="editable-input"
          value={user.email}
          onChange={(e) => handleInputChange(user.id, "email", e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {shouldShowEditButton && (
          <button
            className="edit-btn"
            onClick={() => handleEditClick(emailInputRef)}
          >
            📝
          </button>
        )}
      </td>
      <td>{user.company.name}</td>
    </tr>
  );
});

export default UserTableRow;
