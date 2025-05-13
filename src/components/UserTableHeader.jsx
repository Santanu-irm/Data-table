import React from "react";

const headers = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "company", label: "Company" },
];

const getSortIcon = (key, currentKey, direction) => {
  if (key !== currentKey) return " ⬍";
  return direction === "asc" ? " 🔼" : " 🔽";
};

const UserTableHeader = ({ sortData, setSortData }) => {
  const handleSort = (key) => {
    const direction =
      sortData.key === key && sortData.direction === "asc" ? "desc" : "asc";
    setSortData({ key, direction });
  };

  return (
    <tr>
      {headers.map(({ key, label }) => (
        <th key={key} onClick={() => handleSort(key)}>
          {label}
          {getSortIcon(key, sortData.key, sortData.direction)}
        </th>
      ))}
    </tr>
  );
};

export default UserTableHeader;
