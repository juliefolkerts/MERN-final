"use client";

import { gql } from "@apollo/client";
import { useQuery, useMutation, useSubscription } from "@apollo/client/react";

const GET_COMMENTS = gql`
  query GetComments($postId: ID!) {
    comments(postId: $postId) {
      id
      text
      user {
        id
        username
      }
    }
  }
`;

const COMMENT_SUB = gql`
  subscription OnComment($postId: ID!) {
    commentAdded(postId: $postId) {
      id
      text
      user {
        id
        username
      }
    }
  }
`;

export default function CommentList({ postId }: { postId: string }) {
    const { data, loading } = useQuery(GET_COMMENTS, { variables: { postId } });

    useSubscription(COMMENT_SUB, {
        variables: { postId },
        onData: ({ client, data }: { client: any; data: any }) => {
            const newComment = data.data.commentAdded;
            client.cache.modify({
                fields: {
                    comments(existing = []) {
                        return [...existing, newComment];
                    },
                },
            });
        },
    });

    if (loading) return <p>Loading…</p>;

    return (
        <div>
            {data.comments.map((c) => (
                <div key={c.id} className="p-2 border-b">
                    <strong>{c.user.username}</strong>: {c.text}
                </div>
            ))}
        </div>
    );
}
