import { useState } from "react";
import { jismoniyShaxslarData, yuridikShaxslarData } from "../data"; // Data faylni import qilish

function LegalTabs() {
  const [activeTab, setActiveTab] = useState("jismoniy");

  return (
    <div className="bg-[#F2F8FB] py-[121.525px] px-8 border-b">
      <div className="container">
        <div className="bg-white">
          {/* Tabs */}
          <div className="flex justify-between mb-6">
            <button
              className={`px-6 py-2 border-b-2 border text-[28px] w-full font-semibold  ${
                activeTab === "jismoniy"
                  ? "border-b-red-500 text-black"
                  : "border-[#e8e8e8] text-[#9f9f9f]"
              }`}
              onClick={() => setActiveTab("jismoniy")}
            >
              <div className="py-8 px-12">Jismoniy shaxslar uchun</div>
            </button>

            <button
              className={`px-6 py-2 border border-b-2 text-[28px] w-full font-semibold ${
                activeTab === "yuridik"
                  ? "border-b-red-500 text-black"
                  : "border-[#e8e8e8] text-[#9f9f9f]"
              }`}
              onClick={() => setActiveTab("yuridik")}
            >
              <div className="py-8 px-12">Yuridik shaxslar uchun</div>
            </button>
          </div>

          {/* Content */}
          {activeTab === "jismoniy" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8 mt-8 mb-12">
              {jismoniyShaxslarData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white hover:bg-[#E8E8E8] text-center py-8 px-4"
                >
                  <div className="flex justify-center items-center cursor-pointer mb-6">
                    <div className="border-[6px] flex justify-center items-center rounded-full border-[#ff5050] w-[120px] h-[120px] shadow-[0_0_10px_6px_#EFD7CC]">
                      <div className="w-[60px] h-[60px]">
                        <img
                          className="mb-4 w-full h-full flex justify-center items-center"
                          src={item.icon}
                          alt="tap"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "yuridik" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  mx-8 mt-8 mb-12">
              {yuridikShaxslarData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-[#E8E8E8] bg-white text-center py-8 px-4"
                >
                  <div className="flex justify-center items-center cursor-pointer mb-6">
                    <div className="border-[6px] flex justify-center items-center rounded-full border-[#ff5050] w-[120px] h-[120px] shadow-[0_0_10px_6px_#EFD7CC]">
                      <div className="w-[60px] h-[60px]">
                        <img
                          className="mb-4 w-full h-full flex justify-center items-center"
                          src={item.icon}
                          alt="tap"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LegalTabs;
