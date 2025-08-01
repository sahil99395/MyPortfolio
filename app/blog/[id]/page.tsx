import { FC } from 'react';
import BlogPost from './BlogPost';

// ✅ Next.js 15 dynamic segment expects this param structure
interface Props {
  params: {
    id: string;
  };
}

// ✅ Generate static paths (for SSG)
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

// ✅ Component with correct typing for dynamic routes
const BlogPostPage = async ({ params }: any) => {
  return <BlogPost postId={params.id} />;
};

export default BlogPostPage;
