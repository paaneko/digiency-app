'use client';

import Link from 'next/link';

export function ClientSideRoute({ children, route }: { children: React.ReactNode; route: string }) {
  return (
    <Link draggable={false} href={route}>
      {children}
    </Link>
  );
}

export default ClientSideRoute;
