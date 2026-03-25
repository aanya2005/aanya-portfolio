export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-pink-200 shadow">
      <h1 className="text-xl font-bold">Aanya 🌸</h1>

      <div className="flex gap-6">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}