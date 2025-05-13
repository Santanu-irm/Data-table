import React from "react";

const CompanyFilter = ({ companyFilter, companyNames, setCompanyFilter }) => {
  return (
    <div className="filter-bar">
      <label htmlFor="companyFilter">Filter by Company:</label>
      <select
        id="companyFilter"
        value={companyFilter}
        onChange={(e) => setCompanyFilter(e.target.value)}
      >
        {companyNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanyFilter;
