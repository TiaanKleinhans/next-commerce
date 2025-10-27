import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        {' '}
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5"></Menu>
        </Button>
      </SheetTrigger>
    </Sheet>
  );
}
