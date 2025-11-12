import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import React from 'react';

export interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
    active?: boolean;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Breadcrumb className="mb-6 h-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((_, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink
                href={_.href}
                className={_.active ? 'active' : ''}
                aria-current={_.active ? 'page' : undefined}
              >
                {_.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
