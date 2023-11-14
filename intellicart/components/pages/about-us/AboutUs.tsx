import { aboutUsData } from "@/lib/constants";

export default function AboutUs() {
    return (
        <>
            <h1 className="font-bold text-6xl text-white lg:text-center my-10">
                About Us
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-8">
                {aboutUsData.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col space-y-3 border-2 border-neutral-700/30 p-8 rounded-lg bg-neutral-900"
                    >
                        <h2 className="text-xl font-bold text-white">{data.title}</h2>
                        <p className="text-zinc-200 dark:text-zinc-100">{data.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
