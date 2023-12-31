import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    if (!showMenu) setShowMenu(true)
    else setShowMenu(false)
  }

  return (
    <div className="w-full flex justify-between items-center pt-4 px-4 sm:px-12 lg:px-4">
      <section className="w-24">
        <a href="/">
          <img src="../../logo.png" alt="logo" />
        </a>
      </section>
      <section className="sm:hidden">
        <input type="checkbox" id="checkbox" onClick={handleShowMenu} />
        <label htmlFor="checkbox" className="toggle">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
        {showMenu &&
          <section className="bg-[#292929] absolute top-28 left-0 right-0 h-screen z-50 sm:hidden">
            <ul className="flex flex-col justify-around mt-5">
              <li>
                <a
                  href="/"
                  className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/characters"
                  className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
                >
                  Characters
                </a>
              </li>
              <li>
                <a
                  href="/characters"
                  className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
                >
                  Episodes
                </a>
              </li>
              <li>
                <a
                  href="/characters"
                  className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
                >
                  Locations
                </a>
              </li>
            </ul>
          </section>
        }
      </section>
      <section className="hidden sm:block sm:w-96">
        <ul className="flex justify-around">
          <li>
            <a
              href="/"
              className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/characters"
              className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
            >
              Characters
            </a>
          </li>
          <li>
            <a
              href="/characters"
              className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
            >
              Episodes
            </a>
          </li>
          <li>
            <a
              href="/characters"
              className="flex items-center justify-center text-[#2a5fff] h-16 p-2 text-xl"
            >
              Locations
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Header