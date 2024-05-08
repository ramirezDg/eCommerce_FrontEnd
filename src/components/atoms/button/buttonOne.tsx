import { forwardRef, ComponentProps } from 'react'

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<'button'>, 'className'>
>(({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className='px-10 py-3 border text-white rounded-lg transition-colors duration-200 hover:bg-zinc-800'
      {...rest}
    >
      {children}
    </button>
  )
})
export default Button
