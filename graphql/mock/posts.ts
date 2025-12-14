// graphql/mock/posts.ts

export interface MockPost {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    author: {
        id: string;
        username: string;
    };
    reactionsCount: number;
    commentsCount: number;
}

export const mockPosts: MockPost[] = [
    {
        id: "1",
        title: "Welcome to the Feed",
        content:
            "This is a mock post. Replace mock data with real backend once available.",
        createdAt: new Date().toISOString(),
        author: {
            id: "u1",
            username: "MockAlice",
        },
        reactionsCount: 3,
        commentsCount: 2,
    },
    {
        id: "2",
        title: "Second Mock Post",
        content: "Another mock post to test list rendering.",
        createdAt: new Date().toISOString(),
        author: {
            id: "u2",
            username: "MockBob",
        },
        reactionsCount: 1,
        commentsCount: 0,
    },
];
