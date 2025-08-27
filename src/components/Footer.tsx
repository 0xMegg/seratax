import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              세라 세무회계
            </h3>
            <p className="text-gray-300 mb-2">Sera Tax Accounting</p>
            <p className="text-sm text-gray-400 mb-2">
              대표: 하혜인 (Ha Hye-in)
            </p>
            <p className="text-sm text-gray-400">
              사업자등록번호: 496-71-00759
            </p>
            <p className="text-sm text-gray-400">개업일: 2025년 08월 08일</p>
          </div>

          {/* 주소 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              사업장소재지
            </h3>
            <p className="text-gray-300 mb-2">
              서울특별시 강남구 삼성로99길 24, 1층 102호
            </p>
            <p className="text-gray-300 mb-2">(삼성동, 정해빌딩)</p>
            <p className="text-sm text-gray-400">
              Samseong-dong, Jeonghae Building
            </p>
          </div>

          {/* 업무 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">업무 영역</h3>
            <p className="text-gray-300 mb-2">업태: 서비스</p>
            <p className="text-gray-300 mb-2">종목: 세무사</p>
            <p className="text-sm text-gray-400 mb-4">
              Tax Accountant Services
            </p>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-500">
                © 2025 세라 세무회계. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
