export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 w-full">
      <div className="w-full px-4 sm:px-6 xl:px-12 2xl:px-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 lg:w-2/5 pr-0 md:pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Subscribe to get tips and tactics to grow the way you want.
            </h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white p-3 rounded-r-lg font-bold transition-colors duration-200 hover:bg-pink-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-x-8 md:pl-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Discover</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Small Bets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Help</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="#" className="hover:underline">Board meetings</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span className="font-bold text-lg mr-2 text-white">Re:<span className="text-pink-500">Init</span></span> Marketplace, Inc.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.260L21.619 22H18.29L12.003 14.94L5.275 22H2.029l7.558-8.65L1.884 2.25H5.16l5.265 6.074L18.244 2.25zm-1.114 17l-6.636-7.539L3.349 4.377H6.55L12.83 11.973L18.65 19h-1.526z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-1.011-.321-3.417-.321-4.434-.321H8.818c-1.017 0-3.423 0-4.434.321C3.396 3.505 2.193 4.708 1.872 5.719 1.551 6.732 1.551 9.497 1.551 12s0 5.268.321 6.281c.324 1.011 1.527 2.214 2.538 2.535 1.011.322 3.417.322 4.434.322h6.363c1.017 0 3.423 0 4.434-.322 1.011-.321 2.214-1.524 2.535-2.535.321-1.013.321-3.778.321-6.281s0-5.268-.321-6.281c-.321-1.011-1.524-2.214-2.535-2.535zm-9.405 14.542V6.449L17.518 12l-7.308 5.726z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C8.921 2 7.059 2.008 5.918 2.052A4.006 4.006 0 002.052 5.918C2.008 7.059 2 8.921 2 12s.008 4.941.052 6.082A4.006 4.006 0 005.918 21.948C7.059 21.992 8.921 22 12 22s4.941-.008 6.082-.052A4.006 4.006 0 0021.948 18.082C21.992 16.941 22 15.079 22 12s-.008-4.941-.052-6.082A4.006 4.006 0 0018.082 2.052C16.941 2.008 15.079 2 12 2zm0 3.73a6.27 6.27 0 100 12.54 6.27 6.27 0 000-12.54zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5-2.25a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.018 3.657 9.155 8.443 9.876V14.65H8.054v-2.6h2.389v-1.928c0-2.373 1.454-3.666 3.567-3.666 1.026 0 1.905.076 2.16.11v2.547h-1.547c-1.218 0-1.455.578-1.455 1.423v1.85h2.89l-.427 2.6H13.68v7.226C18.337 21.154 22 17.018 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Pinterest">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.238 2.76 7.828 6.602 9.243.483.087.66-.209.66-.462 0-.227-.008-.827-.013-1.62-.26-.184-.576-.44-.755-.658-.65-.793-1.253-1.802-1.253-3.116C7.24 13.067 8.2 12 9.41 12c1.235 0 1.92.935 1.92 2.376 0 2.1-.884 3.914-2.203 4.502-.423.188-.838.283-1.238.283-.418 0-.8-.112-.962-.255-.175-.157-.27-.373-.27-.614 0-.495.176-.902.392-1.12.22-.22.518-.328.878-.328.665 0 1.13.655 1.13 1.505 0 .848-.48 1.488-1.173 1.488-1.573 0-2.613-1.637-2.613-3.834 0-2.015 1.41-3.656 3.86-3.656 2.052 0 3.39 1.472 3.39 3.42 0 .914-.308 1.638-.724 2.115-.176.2-.206.353-.13.666.07.29.28.98.356 1.255.078.29-.028.402-.303.298-1.785-.68-2.65-2.656-2.65-4.526 0-2.923 2.138-5.32 5.093-5.32 3.03 0 4.887 2.235 4.887 5.176 0 2.736-1.042 4.63-2.68 5.48-.12.06-.21.09-.31.09-.138 0-.23-.11-.275-.246-.07-.21-.12-.486-.12-1.08 0-1.42.845-2.583 1.9-3.04-.15-.41-.23-.88-.23-1.378C16 7.622 14.153 6 12 6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}