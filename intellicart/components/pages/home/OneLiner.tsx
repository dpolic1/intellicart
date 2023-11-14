import Link from "next/link";

export default function OneLiner() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-44 sm:px-6">
                <div className="max-w-3xl mx-auto text-center py-16 sm:py-20 lg:py-24">
                    <div className="rounded-tr-full rounded-bl-full py-5 px-8 bg-neutral-950 border-2 border-neutral-400/10">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Intelligent. Intuitive. Seamless.
                        </h2>
                    </div>
                    <p className="mt-4 text-md max-w-xl mx-auto text-neutral-400 dark:text-gray-400">
                        Intellicart is a shopping list app that allows you to create, organize, and check off items on your list right from your phone, making your shopping trip a breeze.
                    </p>
                </div>
            </div>
        </section>
    );
}