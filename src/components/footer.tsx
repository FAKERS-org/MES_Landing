import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto flex-shrink-0">
      <div className="bg-white rounded-t-2xl shadow-md mx-auto overflow-hidden relative px-4 sm:px-8">
        {/* Background layer image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/footer_images/layer.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 py-8 md:py-12">
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-8">
            {/* Left column */}
            <div className="w-full md:w-1/3">
              <img
                src="/footer_images/mock-exam-logo.png"
                alt="Mock Exam Logo"
                className="w-[166px] h-auto mb-6"
              />
              <p className="text-[#1F3B5F] mb-6 md:mb-16 leading-relaxed text-sm">
                ប្រព� �� ស�ក�ល�ឃ�ម�ដ�ស�រ�ភ� នៅ� ស�kl�𝐫� ឃ�ក�ភ� ជ�ន�ដ�ឃ�ម�ល�ឃ�ដ�ឃ��រី�ន�ឃ� ឃ�ឃ�ឃ�ឃ�។
              </p>
              <p className="text-[#1F3B5F] mb-3 text-sm font-medium">Contact</p>
              <div className="flex flex-wrap gap-3">
                {["facebook", "telegram", "youtube", "instagram", "tiktok"].map((name) => (
                  <a key={name} href="#" aria-label={name} className="hover:opacity-80">
                    <img
                      src={`/footer_images/${name}.png`}
                      alt={name}
                      className="w-8 h-8 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Center illustration */}
            <div className="w-full md:w-1/3 flex justify-center items-center py-6 md:py-0">
              <img
                src="/footer_images/book.png"
                alt="Document"
                className="w-[248px] h-auto"
              />
            </div>

            {/* Right column */}
            <div className="w-full md:w-1/3 flex flex-col justify-between md:pl-8">
              <div className="invisible h-0">
                <img src="/footer_images/mock-exam-logo.png" alt="" className="w-[166px] h-auto opacity-0" />
              </div>
              <div className="mt-auto">
                <p className="text-[#1F3B5F] mb-2 text-sm font-medium">Recommendation</p>
                <div className="relative w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Leave a comment..."
                    className="w-full px-4 py-2 pr-16 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 text-sm"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#0162A3] hover:bg-[#003D7A] text-white px-4 rounded-md text-sm transition-colors">
                    Submit
                  </button>
                </div>
              </div>
              <div className="mt-6 md:mt-auto pt-6 flex justify-end text-sm text-gray-400">
                <img src="/footer_images/2.0.png" alt="Version 2.0" className="w-[137px] h-[55px] object-contain" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-10" />
          <div className="text-center text-gray-400 text-sm mt-6">
            © {new Date().getFullYear()} MES Mock Exam System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
