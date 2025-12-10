import PostCard, { PostCardPost } from "./PostCard";

export interface PostListProps {
    posts: PostCardPost[];
    onReactToPost?: (postId: string) => void;
}

export default function PostList({ posts, onReactToPost }: PostListProps) {
    if (!posts.length) {
        return (
            <p className="text-sm text-gray-500">
                No posts yet. Be the first to post!
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    onReact={onReactToPost ? () => onReactToPost(post.id) : undefined}
                />
            ))}
        </div>
    );
}
