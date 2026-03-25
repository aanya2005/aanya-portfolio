import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Aanya 🌸
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          CS student at UCI passionate about AI, cybersecurity, and building impactful tech.
        </p>

        <a
          href="#projects"
          className="mt-6 bg-pink-300 px-6 py-2 rounded-xl font-semibold hover:bg-pink-400 transition"
        >
          View Projects
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
          
          {/* Project 1 */}
          <div className="min-w-[300px] bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Text-2SQL</h3>
            <p className="text-sm text-gray-500 mb-2">
              Python, Git, GitHub, Gemma-2B-it, Mistral-7B
            </p>
            <p className="text-gray-600 text-sm mb-2">
              Feb 2025 – Present
            </p>
            <ul className="text-gray-600 text-sm list-disc ml-4 space-y-1">
              <li>Built AI system translating natural language → SQL queries</li>
              <li>Improved accuracy by 50% vs Mistral-7B on 10k+ queries</li>
              <li>Ran ablation studies + EM/EX evaluations</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="min-w-[300px] bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Web Crawler & Search Engine</h3>
            <p className="text-sm text-gray-500 mb-2">
              Python, Git
            </p>
            <p className="text-gray-600 text-sm mb-2">
              Feb 2026 – March 2026
            </p>
            <ul className="text-gray-600 text-sm list-disc ml-4 space-y-1">
              <li>Indexed 50k+ pages with concurrent crawling</li>
              <li>Built URL frontier + inverted index</li>
              <li>Achieved sub-100ms query latency</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="min-w-[300px] bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Petr Run 🎮</h3>
            <p className="text-sm text-gray-500 mb-2">
              TypeScript
            </p>
            <ul className="text-gray-600 text-sm list-disc ml-4 space-y-1">
              <li>Interactive web game inspired by UCI Petr sticker tradition</li>
              <li>Players collect virtual stickers in a fun campus simulation</li>
              <li>Built during GitHub Hackathon</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="min-w-[300px] bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Web Engine ⚙️</h3>
            <p className="text-sm text-gray-500 mb-2">
              Rust, Git
            </p>
            <p className="text-gray-600 text-sm mb-2">
              July 2025 – Sept 2025
            </p>
            <ul className="text-gray-600 text-sm list-disc ml-4 space-y-1">
              <li>Built a lightweight web engine from scratch in Rust</li>
              <li>Implemented routing and static file serving</li>
              <li>Analyzed system-level tradeoffs in scalability and usability</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 flex justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-xl">
          
          <h2 className="text-3xl font-bold mb-4 text-center">
            Get in Touch 💌
          </h2>

          <p className="text-gray-600 text-center mb-6">
            Have a question or want to work together? Fill out the form and I’ll get back to you soon!
          </p>
          <form
            action="https://formspree.io/f/xwvwewbz"
            method="POST"
            className="flex flex-col gap-4"
          >
            {/* Anti-spam (honeypot) */}
            <input type="text" name="_gotcha" className="hidden" />

            {/* Redirect after submit */}
            <input type="hidden" name="_next" value="http://localhost:3000" />

            {/* Name */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter the subject"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Enter your message"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-pink-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-pink-400 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}