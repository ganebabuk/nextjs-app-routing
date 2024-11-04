import Link from 'next/link';
import UserList from '@/components/user-list';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
// static meta data
export const metadata: Metadata = {
  title: 'User list',
  description: 'User list',
}

export default function Dashboard() {

    return (
      <>
        <h1>Users list server side rendering with React component</h1>
        <Image
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,..." // Placeholder data
          src="https://nextjs-app-routing.vercel.app/images/pic.png"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Responsive Image"
        />
        <div>
        <UserList/>
        <Link href="/">Back</Link>
        </div>
      </>
    )
  }