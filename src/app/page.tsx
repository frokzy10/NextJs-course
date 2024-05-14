import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home Page",
    description:"Home Page Description"
}

export default function Home() {
    return (
        <div>
            <h2>Hello Next-js Course</h2>
            <Link href="/catalog">Go to Catalog</Link>
        </div>
    );
}
