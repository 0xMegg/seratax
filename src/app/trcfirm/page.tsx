"use client";

import React from "react";

export default function TrcfirmPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 w-full">
        <iframe
          src="https://solution.trcfirm.co.kr/?managerID=01260"
          className="w-full h-full border-0"
          title="TRCFIRM 솔루션"
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}
