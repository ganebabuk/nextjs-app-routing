export default function Page({ params }: { params: { slug: string } }) {
    return <h1>My Page and id #{params.slug}</h1>
  }