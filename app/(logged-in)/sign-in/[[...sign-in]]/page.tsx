import BgGradient from "@/components/common/BgGradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="flex justify-center items-center py-16">
            <BgGradient>
                <SignIn />
            </BgGradient>
        </section>
    );
}
