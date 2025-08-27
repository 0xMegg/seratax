import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-306.5px)]">
      <Image
        src="/logo_col.png"
        alt="세라 세무회계 로고"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
