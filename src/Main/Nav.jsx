import { hamburger } from "../NikeWebsite/assets/icons"


const Nav = () => {
  return (
    <header className="sticky top-0 bg-main-white p-6 z-50"> 
        <nav className="flex justify-between">
            Sye Phasuk
            <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
              <li>Home</li>
              <li>About me</li>
              <li>Projects</li>
              <li>Blog</li>
              <img
                src = {hamburger}
                width={20}
                height={20}
              >
              </img>
            </ul>
            <div className='hidden max-lg:block '>
              <img
                src = {hamburger}
                width={20}
                height={20}
              >
              </img>
            </div>
        </nav>

    </header>
  )
}

export default Nav