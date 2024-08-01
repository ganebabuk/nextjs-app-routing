import Link from 'next/link';
import UserList from '@/components/user-list';

export default function Dashboard() {

    return (
      <>
        <h1>Users List</h1>
        <UserList/>
        <Link href="/">Back</Link>
      </>
    )
  }