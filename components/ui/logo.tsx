import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative w-20 h-20 mb-4">
      <Image
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=160&h=160&auto=format&fit=crop"
        alt="Profile"
        width={80}
        height={80}
        className="rounded-full border-4 border-[#952A52] shadow-lg"
      />
    </div>
  );
}