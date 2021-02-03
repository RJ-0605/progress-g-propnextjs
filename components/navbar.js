import { useEffect, useState } from "react";

const NavBar = () => {

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = (e) => {
    setScrollY(window.pageYOffset)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={` navbar w-full z-50 py-2 top-0 fixed ${scrollY < 200 ? 'bg-transparent' : 'bg-gray-800'} transition-all`}>
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <h1 className={`bg-gray-800 ${scrollY < 200 ? 'text-5xl mt-5' : 'text-2xl'} transition-all transform rotate-3  cursor-default text-blue-300 px-4`}>Logo</h1>
        <div className="flex items-center space-x-8 px-2">
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">Home</a>
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">About Us</a>
          <a href="/" className="link-with-hover-effect text-sm px-4 text-gray-300 hover:text-white cursor-pointer py-2">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;