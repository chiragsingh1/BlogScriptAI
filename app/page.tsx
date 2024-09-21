import BgGradient from "@/components/common/BgGradient";
import Banner from "@/components/home/banner";
import Divider from "@/components/home/divider";
import HowItWorks from "@/components/home/howitworks";
import Pricing from "@/components/home/pricing";

export default function Home() {
    return (
        <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px), transparent_1px)] [background-size:16px_16px]">
            <BgGradient />
            <Banner />
            <Divider />
            <HowItWorks />
            <Divider />
            <Pricing />
            <Divider />
            <footer className="bg-gray-200/20 flex h-20 py-20 px-12 z-20 relative overflow-hidden gap-2 mt-5">
                <p>All Rights Reserved, {new Date().getFullYear()}.</p>
                <a href="https://github.com/chiragsingh1" target="_blank">
                    Built by Chirag 🚀
                </a>
            </footer>
        </main>
    );
}
