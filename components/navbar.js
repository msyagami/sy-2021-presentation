import Link from 'next/link';
import { useState } from 'react';

export const Navbar = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 font-quicksand'>
        <div className="duration-100 group rounded-lg hover:bg-msy-blue-500">
          <Link href='/'>
            <a className='duration-100 group-hover:text-msy-blue-100 inline-flex items-center p-2 text-xl text-black font-bold tracking-wide'>
              <svg
                className="fill-current pr-1 stroke-current duration-100 text-msy-blue-900 group-hover:text-msy-blue-100"
                id="alt_svg__Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 192"
                width="2em"
                height="2em"
                {...props}
              >
                <path
                  className="alt_svg__cls-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8px"
                  d="M54.86 133.76V60.22M137.14 47.02l-.56 99.94"
                />
                <path
                  d="M110.56-4S83 22.44 91 77.61s27 82.76-3 118.39"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4px"
                />
              </svg>
              MegaloSansYagami
            </a>
          </Link>
        </div>
        <button
          className=' duration-100 inline-flex p-3 hover:bg-msy-blue-600 rounded lg:hidden text-black ml-auto hover:text-msy-blue-300 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='duration-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-msy-blue-600 hover:text-msy-blue-100'>
                Home
              </a>
            </Link>
            <Link href='/blog'>
              <a className='duration-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-msy-yellow-600 hover:text-msy-yellow-100'>
                Articles
              </a>
            </Link>
            <Link href='/projects'>
              <a className='duration-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-pink-600 hover:text-msy-pink-100'>
                Projects
              </a>
            </Link>
            <Link href='/posts/about-me'>
              <a className='duration-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-msy-green-700 hover:text-msy-green-100'>
                About Me
              </a>
            </Link>
            <Link href='https://twitter.com/msyagam1'>
              <a className='duration-100 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-accent-7 hover:text-accent-1'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
