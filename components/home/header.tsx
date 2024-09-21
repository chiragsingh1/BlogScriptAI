import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Ghost } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
            <div className="flex lg:flex-1">
                <NavLink href="/">
                    <span className="flex items-center gap-2 shrink-0">
                        <Ghost className="hover:rotate-12 transform transition duration-200 ease-in-out" />
                        <span className="font-extrabold text-lg">
                            BlogScriptAI
                        </span>
                    </span>
                </NavLink>
            </div>
            <div className="flex lg:justify-center gap-2 lg:gap-12 lg-items-center">
                <NavLink href="/#pricing">Pricing</NavLink>
                <SignedIn>
                    <NavLink href="/posts">Your Blogs</NavLink>
                </SignedIn>
            </div>
            <div className="flex lg:justify-end lg:flex-1">
                <div className="flex gap-2 items-center">
                    <SignedIn>
                        <NavLink href="/dashboard">Upload a Video</NavLink>
                    </SignedIn>
                </div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            <SignedOut>
                <SignInButton>
                    <NavLink href="/sign-in">Sign In</NavLink>
                </SignInButton>
            </SignedOut>
        </nav>
    );
};

const NavLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => {
    return (
        <Link
            href={href}
            className="transition-colors duration-200 text-gray-600 hover:text-purple-500"
        >
            {children}
        </Link>
    );
};

export default Header;
