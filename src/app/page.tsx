import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';

// static meta data
export const metadata: Metadata = {
  title: 'Welcome to my page',
  description: 'Welcome to my page',
}
 
export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/users">Users List</Link>
    </>
  )
}