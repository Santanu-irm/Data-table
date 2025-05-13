export const sortUsers = (users, sortData) => {
  const sorted = [...users];
  const { key, direction } = sortData;

  if (!key) return sorted;

  sorted.sort((a, b) => {
    const aValue = key === "company" ? a.company.name : a[key];
    const bValue = key === "company" ? b.company.name : b[key];
    return direction === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  return sorted;
};
