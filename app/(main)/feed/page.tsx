"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import PostList from "@/components/PostList";
import CreatePostForm from "@/components/CreatePostForm";

export default function FeedPage() {
    // Mock data
    const mockPosts = [
        {
            id: "1",
            title: "Mock Post",
            content: "This is a fake post so you can test your UI.",
            createdAt: new Date().toISOString(),
            author: { id: "u1", username: "Alice" },
            reactionsCount: 3,
            commentsCount: 2,
        },
        {
            id: "2",
            title: "Another Mock Post",
            content: "Second example post.",
            createdAt: new Date().toISOString(),
            author: { id: "u2", username: "Bob" },
            reactionsCount: 1,
            commentsCount: 0,
        },
    ];

    return (
        <ProtectedRoute>
            <div className="max-w-xl mx-auto p-4 space-y-4">
                <CreatePostForm />
                <PostList posts={mockPosts} />
            </div>
        </ProtectedRoute>
    );
}




// import ProtectedRoute from "@/components/ProtectedRoute";
// import CreatePostForm from "@/components/CreatePostForm";
//
// export default function FeedPage() {
//     return (
//         <ProtectedRoute>
//             <div className="max-w-xl mx-auto p-4">
//                 <CreatePostForm />
//
//                 {/* posts would be listed here */}
//             </div>
//         </ProtectedRoute>
//     );
// }
//
//
//
//
//
// //"use client";
// //
// // import { useQuery } from "@apollo/client/react"; // <- fixed
// // import { GET_POSTS } from "@/graphql/queries/posts";
// // import ThreadCard from "@/components/thread/ThreadCard";
// //
// // export default function FeedPage() {
// //     const { data, loading, error } = useQuery(GET_POSTS);
// //
// //     if (loading) return <p className="p-8">Loading...</p>;
// //     if (error) return <p className="p-8 text-red-500">Error: {error.message}</p>;
// //
// //     // @ts-ignore
// //     const posts = data.posts;
// //
// //     return (
// //         <main className="p-8">
// //             <h1 className="text-3xl font-bold mb-6">Feed</h1>
// //             <div className="space-y-4">
// //                 {posts.map((post: any) => (
// //                     <ThreadCard key={post.id} post={post} />
// //                 ))}
// //             </div>
// //         </main>
// //     );
// // }