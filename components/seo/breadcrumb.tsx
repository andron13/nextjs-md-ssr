import Link from 'next/link';

import { BreadcrumbObj } from '../../types';

const Breadcrumb = ({ breadcrumbs }: { breadcrumbs: BreadcrumbObj[] }) => {
  return (
    <nav className="my-1 px-2 text-sm text-gray-500" aria-label="breadcrumb">
      <div className="flex items-center space-x-2">
        {breadcrumbs.map(({ label, href }, i) => {
          const lastElement = i === breadcrumbs.length - 1;
          if (lastElement) {
            return (
              <div key={label} className="breadcrumb-item active" aria-current="page">
                {label}
              </div>
            );
          }
          return (
            <div key={label} className="breadcrumb-item">
              <Link href={href} className="transition-colors duration-200 hover:text-gray-800">
                {label}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
