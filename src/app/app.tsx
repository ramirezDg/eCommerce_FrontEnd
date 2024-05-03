import Button from 'components/atoms/button'
import CopyButton from 'components/molecules/copy-button'
import Header from '../components/organisms/header/Header'

function App() {
  return (
    <main className=''>
      <Header />
      <footer className='pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold'>
        <a href='https://github.com/ramirezDg'>
          ramirezDg @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  )
}

export default App
