import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      </div>

      <Outlet />
      {/* Outlet tells.. baaki ki chijein kaha dikhne waali hai */}
      {/* Outlet - Renders the matching child route of a parent route or nothing if no child route matches. */}
    </div>
  )
}

export default Product
