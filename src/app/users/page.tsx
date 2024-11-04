import Link from 'next/link';
import UserList from '@/components/user-list';
import type { Metadata, ResolvingMetadata } from 'next';
// static meta data
export const metadata: Metadata = {
  title: 'User list',
  description: 'User list',
}

export default function Dashboard() {

    return (
      <>
        <h1>Users list server side rendering with React component</h1>
        <UserList/>
        <Link href="/">Back</Link>
      </>
    )
  }