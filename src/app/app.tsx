import Button from 'components/atoms/button'
import CopyButton from 'components/molecules/copy-button'
import Header from '../components/organisms/header/Header'
import ProductImg from '../../src/img/iphone14better.png'

function App() {
  const PRODUCT_DESCRIPTION =
    'iPhone 14 Pro. Created to change everything for the better. For everyone.'
  return (
    <main className='font-Teachers'>
      <Header />
      <section className='bg-gradient-to-r from-[#211C24] bg-[#211C24]'>
        <div className='flex justify-between w-full items-center h-screen'>
          {/* // * Home Image Product */}
          <div className='font-Roboto w-full flex justify-center items-center mt-20'>
            <div className='flex flex-col gap-4 justify-center'>
              <p className='text-zinc-400 font-medium'>
                <span>Pro.Beyond.</span>
              </p>
              <h1 className='text-white text-8xl font-light'>
                iPhone 14 <span className='font-bold'>Pro.</span> <br />
              </h1>
              <p className='text-zinc-400 font-normal'>
                <span>
                  Created to change everything for the better. For everyone{' '}
                </span>
              </p>
              <div>
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
          {/* // * Image Product */}
          <div className='overflow-hidden h-full flex items-end justify-center'>
            <img
              className='w-4/5 object-cover transform -translate-y-0'
              src={ProductImg}
              alt={PRODUCT_DESCRIPTION}
            />
          </div>
        </div>
      </section>
      {/* <footer className='pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold'>
        <a href='https://github.com/ramirezDg'>
          ramirezDg @ {new Date().getFullYear()}
        </a>
      </footer> */}

      <section></section>
    </main>
  )
}

export default App
