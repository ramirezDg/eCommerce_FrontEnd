import Button from 'components/atoms/button'
import CopyButton from 'components/molecules/copy-button'
import Header from '../components/organisms/header/Header'
import ProductImg from '../../src/img/iphone14better.png'

function App() {
  return (
    <main className='font-Teachers'>
      <Header />
      <section className='bg-gradient-to-r from-[#211C24] bg-[#211C24] w-full h-screen flex items-center justify-center'>
        <div className='font-Roboto'>
          <div className='flex flex-col gap-2'>
            <p className='text-zinc-400 font-medium'>
              <span>Pro.Beyond.</span>
            </p>
            <h1 className='text-white text-5xl font-light'>
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
        <div className='overflow-hidden h-96'>
          {/* <img
            className='w-1/3 object-cover transform -translate-y-2/1'
            src={ProductImg}
            alt='product'
          /> */}
        </div>
      </section>
      <footer className='pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold'>
        <a href='https://github.com/ramirezDg'>
          ramirezDg @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  )
}

export default App
