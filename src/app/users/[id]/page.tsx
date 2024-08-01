import Link from 'next/link';
import UserDetail from '@/components/user-details';
export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>User Details</h1>
            <UserDetail id={params?.id}/>
            <Link href="/users">Back</Link>
        </>
    );
  }