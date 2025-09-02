"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      <div className="h-full w-[1160px] mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Image
            src="/logo_row.png"
            alt="세라 세무회계 로고"
            width={200}
            height={60}
            className="h-auto w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            priority
            onClick={handleLogoClick}
          />
          <button>TRCFIRM</button>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-gray-500">경정어쩌구</span>
          <span className="text-gray-500">청구어쩌구</span>
        </div>
      </div>
    </header>
  );
}
