"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  _id: string
  date_created: string;
  first_name: string;
  last_name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user?._id}>
            <Link href={`/users/${user?._id}`}>{user?.first_name} {user?.last_name}({user?.email})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
