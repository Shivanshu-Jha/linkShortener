"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Footer() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div>
                <h1>Please Sign In</h1>
                <button onClick={() => signIn()}>Sign In with GitHub</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {session.user.name}!</h1>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}
