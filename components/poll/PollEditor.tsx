"use client";

import { useState } from "react";

export interface PollData {
    question: string;
    options: string[];
}

export default function PollEditor({
                                       onChange,
                                   }: {
    onChange: (poll: PollData) => void;
}) {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState<string[]>(["", ""]);

    const updateOption = (index: number, value: string) => {
        const updated = [...options];
        updated[index] = value;
        setOptions(updated);
        onChange({ question, options: updated });
    };

    return (
        <div className="border p-3 rounded space-y-2">
            <input
                className="w-full border p-2 rounded"
                placeholder="Poll question"
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value);
                    onChange({ question: e.target.value, options });
                }}
            />

            {options.map((opt, i) => (
                <input
                    key={i}
                    className="w-full border p-2 rounded"
                    placeholder={`Option ${i + 1}`}
                    value={opt}
                    onChange={(e) => updateOption(i, e.target.value)}
                />
            ))}

            <button
                onClick={() => setOptions([...options, ""])}
                className="text-sm text-blue-500"
            >
                + Add option
            </button>
        </div>
    );
}
