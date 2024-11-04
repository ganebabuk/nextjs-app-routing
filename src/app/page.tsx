import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

// static meta data
export const metadata: Metadata = {
  title: 'Welcome to my page',
  description: 'Welcome to my page',
}
 
export default function Page() {
  return (
    <>
      <h1>Home</h1>
      <Image
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..." // Placeholder data
        src="/images/pic.png"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Responsive Image"
      />
      <p><Link href="/users">Users List</Link></p>
    </>
  )
}