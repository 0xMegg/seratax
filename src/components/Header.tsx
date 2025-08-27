"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleTrcfirmClick = () => {
    router.push("/trcfirm");
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo_row.png"
            alt="세라 세무회계 로고"
            width={200}
            height={60}
            className="h-auto w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            priority
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
          <button
            className="text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            onClick={handleTrcfirmClick}
          >
            TRCFIRM
          </button>
        </div>
      </div>
    </header>
  );
}
