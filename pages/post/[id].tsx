import { useRouter } from 'next/router';
import React from 'react';

export interface DetailId {
}

export default function App (props: DetailId) {
    const router = useRouter()
  return (
    <div>
      {JSON.stringify(router.query)}
    </div>
  );
}
