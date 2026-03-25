import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Aanya 👋
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          CS student at UCI passionate about AI, cybersecurity, and building impactful tech.
        </p>
      </section>
    </main>
  );
}