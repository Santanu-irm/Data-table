import React, { useState, useEffect, useMemo } from "react";
import { useUsersData } from "../hooks/useUsersData";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import Pagination from "./Pagination";
import CompanyFilter from "./CompanyFilter";
import { sortUsers } from "../utils/sortUtils";

const UserTable = () => {
  const { usersInfo, setUsersInfo, isLoading } = useUsersData();
  const [sortData, setSortData] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [companyFilter, setCompanyFilter] = useState("All");
  const usersPerPage = 10;

  const handleInputChange = (id, field, value) => {
    setUsersInfo((prev) =>
      prev.map((user) => (user.id === id ? { ...user, [field]: value } : user))
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.target.blur();
  };

  const companyNames = useMemo(() => {
    const names = usersInfo.map((user) => user.company.name);
    return ["All", ...Array.from(new Set(names))];
  }, [usersInfo]);

  const sortedUsers = useMemo(
    () => sortUsers(usersInfo, sortData),
    [usersInfo, sortData]
  );

  const filteredUsers = useMemo(() => {
    return companyFilter === "All"
      ? sortedUsers
      : sortedUsers.filter((user) => user.company.name === companyFilter);
  }, [sortedUsers, companyFilter]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => setCurrentPage(1), [companyFilter]);
  

  return (
    <div className="App">
      <CompanyFilter
        companyFilter={companyFilter}
        companyNames={companyNames}
        setCompanyFilter={setCompanyFilter}
      />
      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="table-container">
          <table className="user-table">
            <thead>
              <UserTableHeader sortData={sortData} setSortData={setSortData} />
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <UserTableRow
                  key={user.id}
                  user={user}
                  handleInputChange={handleInputChange}
                  handleKeyDown={handleKeyDown}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default UserTable;
