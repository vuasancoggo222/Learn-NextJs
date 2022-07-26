import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export interface DetailId {
}

export default function App (props: DetailId) {
    const router = useRouter()
  return (
    <div>
      <nav>
        <ul>
          <li><Link href='/'><a>Back to home page</a></Link></li>
        </ul>
      </nav>
     <div> {JSON.stringify(router.query)}</div>
    </div>
  );
}
