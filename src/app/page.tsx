import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* 메인 div */}
      <div className="flex items-center justify-center bg-[#bddeec] w-full h-[656px]">
        {/* 왼쪽 */}
        <div className="flex flex-col w-[1160px] justify-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#3178b5] pb-1">
              친구처럼 챙겨주는
            </h1>
            <h1 className="text-4xl font-bold pb-4">
              국내 1위, IT 세무법인 세라
            </h1>
            <span>전문 세무사와 IT 기술이 만나</span>
            <span className="pb-2">
              절세부터 환급까지 더 편리하게, 더 꼼꼼하게
            </span>
          </div>
          <div className="flex flex-row gap-4">
            <button className="bg-[#3178b5] text-white px-4 py-2 rounded-md">
              세무서비스 자세히 알아보기
            </button>
            <button className="bg-white text-[#3178b5] px-4 py-2 rounded-md">
              전문 세무사 상담 신청하기
            </button>
          </div>
        </div>
      </div>
      <div className="h-[656px] w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold pb-1 pt-20">
          세라만의 <span className="text-[#3178b5]">IT 세무 서비스</span>로
        </h1>
        <h1 className="text-4xl font-bold pb-4">
          내는 세금, 환급받을 세금까지 꼼꼼히 챙겨 드려요
        </h1>
      </div>
    </div>
  );
}
