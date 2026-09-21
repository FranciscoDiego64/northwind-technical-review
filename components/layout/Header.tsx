export default function Header() {
    return (
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <div className="text-sm font-semibold tracking-tight">
              NORTHWIND
            </div>
            <div className="mt-0.5 text-xs text-black/50">
              Technical Health Review
            </div>
            <div className="mt-0.5 text-xs text-black/50">
                Diego Durán-Báez
            </div>
          </div>
  
          <div className="hidden text-right text-xs text-black/50 sm:block">
            <div>First 30 Days</div>
            <div className="mt-0.5">June 2026</div>
          </div>
        </div>
      </header>
    );
  }