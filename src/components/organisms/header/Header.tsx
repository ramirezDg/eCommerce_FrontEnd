/* import React, { useState, useEffect, useRef } from 'react' */

/**
 * @component
 * Header
 *
 * @description
 * Descripción general de la vista.
 *
 * @example
 * <Header />
 *
 * @returns {JSX.Element}
 */
const Header: React.FC = () => {
  const PAGE_NAME = 'cyber'
  const MAX_SIZE_SVG = 22

  /**
   * @function
   * handleFunction
   *
   * @description
   * Descripción de la función y lo que hace.
   *
   * @param {type} paramName - Descripción del parámetro.
   * @returns {void}
   */
  /* const handleFunction = (paramName: type): void => {
    // Implementación de la función
  } */

  // Renderizado del componente
  return (
    <header className='bg-white text-white py-2 px-10'>
      <div className='container mx-auto flex justify-around items-center'>
        <h1 className='text-xl font-bold text-zinc-800 select-none cursor-pointer'>
          {PAGE_NAME}
        </h1>
        <div>
          <div className='relative mt-2 rounded-md shadow-sm'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-400 sm:text-sm'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height={MAX_SIZE_SVG}
                  width={MAX_SIZE_SVG}
                >
                  <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
                </svg>
              </span>
            </div>
            <input
              type='text'
              name='search'
              id='search'
              className='block rounded-md border-none pl-10 py-3.5 w-96 text-gray-900 bg-zinc-100 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6'
              placeholder='Search...'
            />
          </div>
        </div>
        <nav className='flex items-center gap-12 '>
          <ul className='text-zinc-400 font-medium flex space-x-20'>
            <li>
              <a href='/home' className='  p-2 rounded'>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className=' p-2 rounded'>
                About
              </a>
            </li>
            <li>
              <a href='/contact' className=' p-2 rounded'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='/contact' className=' p-2 rounded'>
                Blog
              </a>
            </li>
          </ul>
          {/* icons */}
          <ul className='text-zinc-800 flex space-x-10'>
            <li>
              <a href='/home' className=' p-4 rounded'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height={MAX_SIZE_SVG}
                  width={MAX_SIZE_SVG}
                >
                  <path d='M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z' />
                </svg>
              </a>
            </li>
            <li>
              <a href='/about' className='p-4 rounded'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  height={MAX_SIZE_SVG}
                  width={MAX_SIZE_SVG}
                >
                  <path d='M10 21 A1 1 0 0 1 9 22 A1 1 0 0 1 8 21 A1 1 0 0 1 10 21 z' />
                  <path d='M21 21 A1 1 0 0 1 20 22 A1 1 0 0 1 19 21 A1 1 0 0 1 21 21 z' />
                  <path d='M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6' />
                </svg>
              </a>
            </li>
            <li>
              <a href='/contact' className=' p-4 rounded'>
                <svg
                  viewBox='0 0 1024 1024'
                  fill='currentColor'
                  height={MAX_SIZE_SVG}
                  width={MAX_SIZE_SVG}
                >
                  <path d='M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z' />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
