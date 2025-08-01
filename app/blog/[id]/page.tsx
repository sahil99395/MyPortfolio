import BlogPost from './BlogPost';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
  ];
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost postId={params.id} />;
}