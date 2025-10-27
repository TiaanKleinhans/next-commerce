import Link from 'next/link';
import { Button } from './ui/button';
import { Search, ShoppingCart } from 'lucide-react';
import { ThemeModeToggle } from './ui/theme-mode-toggle';
import { MobileNavigation } from './mobile-navigation';

export function NavBar() {
  return (
    <div className="border-b ">
      <div className="container mx-auto flex h-16 items-center justify-between ">
        {/* Navigation */}
        <div>
          <div className="flex items-center gap-6 md:block">
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
            <MobileNavigation />
          </div>
        </div>
        {/* Login / Cart */}
        <div className="flex items-center gap-0">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5"></Search>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5"></ShoppingCart>
            </Link>
          </Button>

          <ThemeModeToggle />
        </div>
      </div>
    </div>
  );
}
