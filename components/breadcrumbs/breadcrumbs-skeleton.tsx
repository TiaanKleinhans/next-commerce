import { Skeleton } from '../ui/skeleton';

export function BreadcrumbsSkeleton() {
  return (
    <div className="mb-6 flex items-center gap-2">
      <Skeleton className="h-4 w-h rounded-full" />
      <Skeleton className="h-4 w-[80px] rounded-full" />
      <Skeleton className="h-4 w-[120px] rounded-full" />
    </div>
  );
}
