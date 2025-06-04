import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('/sumWorker.js', import.meta.url));

    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d === null ? 'Loading...' : d}</div>;
}
