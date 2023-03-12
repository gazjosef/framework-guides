import SearchBar from "@/components/SearchBar";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <header className="bg-emerald-700 mt-12">
        <div className="md:container | h-40 mx-auto p-6 | flex items-center justify-between">
          <SearchBar />
          <div className="flex items-center | text-5xl">
            {/* LOGO */}
            <FaSearch />
            <h1 className="ml-2 ">ODDSTRACKER</h1>
          </div>
        </div>
      </header>
      <main className="md:container | bg-neutral-500 min-h-screen mx-auto p-6">
        <section>
          {/* TITLE */}
          TITLE
        </section>
        <section>
          {/* EVENT */}
          EVENT
        </section>
      </main>
    </div>
  );
}
