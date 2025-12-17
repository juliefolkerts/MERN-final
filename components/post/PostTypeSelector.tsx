"use client";

export type PostType = "text" | "link" | "image" | "poll";

export default function PostTypeSelector({
                                             value,
                                             onChange,
                                         }: {
    value: PostType;
    onChange: (type: PostType) => void;
}) {
    const types: PostType[] = ["text", "link", "image", "poll"];

    return (
        <div className="flex gap-2">
            {types.map((type) => (
                <button
                    key={type}
                    onClick={() => onChange(type)}
                    className={`px-3 py-1 border rounded ${
                        value === type ? "bg-gray-200" : ""
                    }`}
                >
                    {type}
                </button>
            ))}
        </div>
    );
}
