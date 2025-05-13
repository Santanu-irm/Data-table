import { useEffect, useState } from "react";

export const useUsersData = () => {
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      const expanded = Array.from({ length: 1000 }, (_, i) => ({
        ...data[i % data.length],
        id: i + 1,
      }));
      setUsersInfo(expanded);
    } catch (err) {
      console.error("Error loading users:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { usersInfo, setUsersInfo, isLoading };
};
