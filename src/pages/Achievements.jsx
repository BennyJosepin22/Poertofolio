import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "introduction to python",
    org: "sololearn",
    date: "08 november 2024",
    img: "/certs/sololearn.jpg",
  },
  {
    id: 2,
    title: "pengentasan kemiskinan",
    org: "SDG Academy Indonesia",
    date: "20 maret 2025",
    img: "/certs/sdgs1.png",
  },
  {
    id: 3,
    title: "Peningkatan kualitas pendidikan",
    org: "SDG Academy Indonesia",
    date: "20 maret 2025",
    img: "/certs/sdgs4.png",
  },
  // Tambahkan item lain seperti di gambar...
];

const Achievements = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null); // menyimpan achievement yg sedang ditampilkan

  const filteredAchievements = achievements.filter(
    (ach) =>
      (filter === "all" ? true : ach.category === filter) &&
      ach.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto  text-white relative z-0">
      <h1 className="text-3xl  font-bold mb-4 text-center">Achievements</h1>
      <p className="mb-6 text-gray-400 text-center">
        A collection of certificates and badges that I have earned throughout my
        journey.
      </p>

      {/* Filter & Search - Horizontal Layout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        {/* Dropdown Filter */}
        <div className="relative inline-block text-left w-full md:w-64">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-white text-sm font-medium hover:bg-gray-700 focus:outline-none"
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {open && (
            <div className="origin-top-left absolute left-0 mt-2 w-full rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1 text-white">
                {[
                  "all",
                  "intern",
                  "bootcamp",
                  "competition",
                  "organization",
                  "webinar and seminar",
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            placeholder="Cari berdasarkan judul sertifikat..."
            className="w-full px-4 py-2 pl-10 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAchievements.map((ach) => (
          <div
            key={ach.id}
            onClick={() => setModal(ach)}
            className="cursor-pointer block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <img
              src={ach.img}
              alt={ach.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{ach.title}</h3>
              <p className="text-sm text-gray-300">{ach.org}</p>
              <p className="text-xs text-gray-400">{ach.date}</p>
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-blue-400 text-sm underline inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  Lihat Sertifikat
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAchievements.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          Tidak ada data yang cocok.
        </p>
      )}

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4 bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={() => setModal(null)}
            >
              <X size={24} />
            </button>
            <img
              src={modal.img}
              alt={modal.title}
              className="w-full object-contain max-h-[90vh]"
            />
            <div className="p-4 text-black">
              <h3 className="text-xl font-semibold">{modal.title}</h3>
              <p className="text-sm">{modal.org}</p>
              <p className="text-xs text-gray-600">{modal.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
