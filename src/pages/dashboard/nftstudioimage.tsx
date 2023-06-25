import React from 'react';
import { useRouter } from 'next/router';

export default function NftStudioImage() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src="https://bafybeifq6sm7pj2r4yu5anbawikzaemre6ocg3zvgw3kwh7rnwpzzvvece.ipfs.dweb.link/ri.jpg"
        alt="Image"
        className="max-w-full max-h-full"
      />
      <button onClick={() => router.push('/dashboard')}>Go back to Home</button>
    </div>
  );
};
