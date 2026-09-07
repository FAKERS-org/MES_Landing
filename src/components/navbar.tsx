import React, { useState } from "react";

const menuItems = ["Home", "Purpose", "About Us", "Contact"];

export default function NavbarComponent({ locale }: { locale?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const predefinedPassword = "123456";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === predefinedPassword) {
      setIsDialogOpen(false);
      setIsSuccessDialogOpen(true);
      setIsLoggedIn(true);
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col">
      <nav className="w-full bg-white">
        <div className="flex items-center justify-between px-[5%] sm:px-[8%] lg:px-[100px] py-[32px] h-auto w-full md:justify-center justify-evenly items-center">
          {/* Start content */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className="sm:hidden text-[#06598F]"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-current mb-1" />
              <span className="block w-6 h-0.5 bg-current mb-1" />
              <span className="block w-6 h-0.5 bg-current" />
            </button>
            <a href="/" className="block">
              <img src="/navbar_images/MES_LOGO_WEB.png" alt="" width={111} height={36} className="w-[111px] h-auto" />
            </a>
          </div>

          {/* Center links */}
          <div className="hidden sm:flex gap-8 justify-center items-center">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveIndex(index)}
                aria-current={activeIndex === index ? "page" : undefined}
                className={`h-[40px] w-auto min-w-[92px] rounded-[100px] flex items-center justify-center transition-colors text-sm font-medium px-4 ${
                  activeIndex === index
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* End content */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-sm font-medium text-[#06598F] hover:text-blue-700 px-2 hidden lg:inline"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="px-4 py-2 text-sm text-white bg-[#0162A3] hover:bg-[#003D7A] rounded-md transition-colors"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <span className="text-sm font-medium text-[#06598F]">Profile</span>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden px-[5%] py-2 border-t border-gray-100 space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveIndex(index)}
                className={`block py-1 text-sm font-medium ${
                  activeIndex === index ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Login dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[320px] shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-[#06598F]">Enter Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-[#0162A3]"
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setIsDialogOpen(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">Close</button>
              <button type="submit" className="px-4 py-2 text-sm text-white bg-[#0162A3] hover:bg-[#003D7A] rounded">Submit</button>
            </div>
          </form>
        </div>
      )}

      {/* Success dialog */}
      {isSuccessDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-[320px] shadow-xl">
            <h2 className="text-lg font-semibold mb-2 text-[#06598F]">Success</h2>
            <p className="text-sm text-gray-600 mb-4">Password is correct</p>
            <div className="flex justify-end">
              <button onClick={() => setIsSuccessDialogOpen(false)} className="px-4 py-2 text-sm text-white bg-[#0162A3] hover:bg-[#003D7A] rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
