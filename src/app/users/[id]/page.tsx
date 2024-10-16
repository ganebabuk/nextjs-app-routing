import { headers } from 'next/headers';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
interface User {
    email: string;
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
    marks: Array<{
      english: number;
      maths: number;
    }>;
    date_created: string;
}
  
interface PageProps {
    params: {
        id: string;
    };
}

// static meta data
// export const metadata: Metadata = {
//   title: 'User details',
//   description: 'User details',
// }

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/users/${params?.id}`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data: User = await response.json();
    return {
      title: `User details of ${data?.first_name?.toLowerCase()} ${data?.last_name?.toLowerCase()}`,
      description:  `User details of ${data?.first_name?.toLowerCase()} ${data?.last_name?.toLowerCase()}`,
    }
}

async function fetchUserData(id: string): Promise<User> {
    const headersList = headers();
    const protocol = headersList.get('x-forwarded-proto') || 'http';
    const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/users/${id}`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    const data: User = await response.json();
    return data;
}
  
  export default async function Page({ params }: PageProps) {
    const user = await fetchUserData(params.id);
  
    return (
      <div>
        <h1>User Details with server side rendering without React component</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>First Name:</strong> {user.first_name}</p>
        <p><strong>Last Name:</strong> {user.last_name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Date Created:</strong> {new Date(user.date_created).toLocaleDateString()}</p>
        <h2>Marks</h2>
        <ul>
          <li><strong>English:</strong> {user.marks[0].english}</li>
          <li><strong>Maths:</strong> {user.marks[0].maths}</li>
        </ul>
        <Link href="/users">Back</Link>
      </div>
    );
  }
  