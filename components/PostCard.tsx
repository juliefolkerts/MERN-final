"use client";

import Link from "next/link";
import ReactionButton from "./ReactionButton";

export interface PostAuthor {
    id: string;
    username: string;
    avatarUrl?: string | null;
}

export interface PostCardPost {
    id: string;
    title?: string | null;
    content: string;
    createdAt: string;
    author: PostAuthor;
    reactionsCount?: number;
    commentsCount?: number;
}

export interface PostCardProps {
    post: PostCardPost;
    onReact?: () => void;
}


export default function PostCard({ post, onReact }: PostCardProps) {
    const createdAt = new Date(post.createdAt).toLocaleString();

    return (
        <article className="border rounded-lg p-4 bg-white shadow-sm space-y-2">
            <header className="flex items-center justify-between gap-4">
                <div>
                    <p className="font-semibold">{post.author.username}</p>
                    <p className="text-xs text-gray-500">{createdAt}</p>
                </div>
                {post.title && (
                    <h2 className="font-bold text-lg">{post.title}</h2>
                )}
            </header>

            <p className="text-sm whitespace-pre-wrap">{post.content}</p>

            <footer className="flex items-center justify-between text-sm pt-2">
                <div className="flex items-center gap-2">
                    <ReactionButton
                        count={post.reactionsCount ?? 0}
                        ariaLabel="Like post"
                        onClick={onReact}
                    />
                    <span className="text-gray-500">
            {post.commentsCount ?? 0} comments
          </span>
                </div>
                <Link
                    href={`/thread/${post.id}`}
                    className="text-blue-600 hover:underline text-sm"
                >
                    View thread
                </Link>
            </footer>
        </article>
    );
}
