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
interface UserDetailProps {
    id: string;
  }
const UserDetail: React.FC<UserDetailProps> = (props) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/users/${props?.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User = await response.json();
        setUser(data);
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
      <p>User ID: {user?._id}</p>
      <p>Firstname: {user?.first_name}</p>
      <p>Lastname: {user?.last_name}</p>
      <p>Email: {user?.email}</p>
      <p>Date Created: {user?.date_created}</p>
    </div>
  );
};

export default UserDetail;
