"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";

interface ThreadPageProps {
    params: {
        id: string;
    };
}

export default function ThreadPage({ params }: ThreadPageProps) {
    const { id } = params;

    return (
        <ProtectedRoute>
            <div className="max-w-xl mx-auto p-4 space-y-4">
                <h1 className="text-2xl font-bold">Thread #{id}</h1>

                {/* Comments */}
                <CommentList postId={id} />

                {/* Add comment */}
                <CommentForm postId={id} />
            </div>
        </ProtectedRoute>
    );
}
