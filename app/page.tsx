export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] text-[#2B2233]">
      
      {/* NAVBAR */}
      <header className="w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8B5CF6] text-lg text-white shadow-sm">
              ✦
            </div>

            <span className="text-2xl font-bold tracking-tight text-[#3B1E4A]">
              lumeya
            </span>
          </div>

          {/* MENU */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-[#62546B] transition hover:text-[#8B5CF6]"
            >
              Fonctionnalités
            </a>

            <a
              href="#exams"
              className="text-sm font-medium text-[#62546B] transition hover:text-[#8B5CF6]"
            >
              Examens
            </a>

            <a
              href="#tutors"
              className="text-sm font-medium text-[#62546B] transition hover:text-[#8B5CF6]"
            >
              Répétiteurs
            </a>

            <a
              href="#schools"
              className="text-sm font-medium text-[#62546B] transition hover:text-[#8B5CF6]"
            >
              Écoles
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium text-[#62546B] transition hover:text-[#8B5CF6]"
            >
              Tarifs
            </a>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full px-5 py-3 text-sm font-semibold text-[#3B1E4A] transition hover:bg-[#F3ECF7] sm:block">
              Se connecter
            </button>

            <button className="rounded-full bg-[#3B1E4A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#8B5CF6]">
              Commencer
            </button>
          </div>

        </nav>

        
      </header>

    </main>
  );
}