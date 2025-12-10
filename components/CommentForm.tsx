"use client";

import { gql } from "@apollo/client";
import { useQuery, useMutation, useSubscription } from "@apollo/client/react";
import { useState } from "react";

const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        id
        username
      }
    }
  }
`;

export default function CommentForm({ postId }: { postId: string }) {
    const [text, setText] = useState("");
    const [addComment] = useMutation(ADD_COMMENT);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await addComment({ variables: { postId, text } });
        setText("");
    }

    return (
        <form onSubmit={submit} className="flex gap-2 mt-2">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Write a comment..."
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        </form>
    );
}
