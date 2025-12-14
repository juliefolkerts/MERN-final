"use client";

import { useState } from "react";
import { mockPosts } from "@/graphql/mock/posts";

export default function CreatePostForm() {
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!content.trim()) return;

        mockPosts.unshift({
            id: Math.random().toString(),
            title: "New Mock Post",
            content,
            createdAt: new Date().toISOString(),
            author: {
                id: "you",
                username: "You",
            },
            reactionsCount: 0,
            commentsCount: 0,
        });

        setContent("");
        alert("Post created (mock)!");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
          className="w-full border p-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Create a mock post..."
      />
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded"
            >
                Post
            </button>
        </form>
    );
}






//without mock data
// "use client";
//
// import { gql } from "@apollo/client";
// import { useQuery, useMutation, useSubscription } from "@apollo/client/react";
// import { useState } from "react";
//
// const CREATE_POST = gql`
//   mutation CreatePost($content: String!) {
//     createPost(content: $content) {
//       id
//       content
//       createdAt
//     }
//   }
// `;
//
// export default function CreatePostForm() {
//     const [content, setContent] = useState("");
//     const [createPost] = useMutation(CREATE_POST);
//
//     async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         await createPost({ variables: { content } });
//         setContent("");
//     }
//
//     return (
//         <form onSubmit={handleSubmit} className="p-4 border rounded">
//       <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full p-2 border rounded"
//           placeholder="Write a post..."
//       />
//
//             <button
//                 type="submit"
//                 className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
//             >
//                 Post
//             </button>
//         </form>
//     );
// }
