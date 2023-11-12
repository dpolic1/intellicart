import { aboutUsData } from "@/lib/constants";

export default function AboutUsPage() {
  return (
    <div className="mt-12 px-8">
      <h1 className="font-bold text-6xl text-white text-center my-10">
        About Us
      </h1>

      {aboutUsData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
        >
          <h2 className="text-xl font-bold text-white">{data.title}</h2>
          <p className="text-zinc-200 dark:text-zinc-100">{data.description}</p>
        </div>
      ))}
    </div>
  );
}
