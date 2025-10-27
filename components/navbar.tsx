import Link from 'next/link';

export function NavBar() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between ">
        {/* Navigation */}
        <div>
          <div className="flex items-center gap-6">
            <Link className="text-2xl font-bold" href="/">
              Store
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                href="/"
              >
                Some Link
              </Link>
            </nav>
          </div>
        </div>
        {/* Login / Cart */}
        <div>right</div>
      </div>
    </div>
  );
}
