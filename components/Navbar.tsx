// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";

export default function Navbar() {
    const { user, logout } = useAuthStore();

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <div>
                <Link href="/feed" className="font-bold text-lg">
                    MERN Social
                </Link>
            </div>
            <div className="space-x-4">
                {user ? (
                    <>
                        <span>{user.username || user.email}</span>
                        <button onClick={logout} className="bg-red-500 px-2 py-1 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="hover:underline">
                            Login
                        </Link>
                        <Link href="/register" className="hover:underline">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
