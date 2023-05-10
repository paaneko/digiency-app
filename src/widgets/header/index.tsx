// TODO create onscroll effects (change color to white)
import Link from 'next/link';

function Header() {
  return (
    <div className="flex font-medium justify-between items-center py-8 bg-dark-white-bg">
      <div className="text-4xl flex py-1">
        <p className="text-orange-main">Digi</p>ency
      </div>
      <div className="hidden xl:flex text-xl space-x-6">
        <Link href="/">
          <div className="hover:text-orange-main cursor-pointer duration-500">Home</div>
        </Link>
        <div className="hover:text-orange-main cursor-pointer duration-500">About Us</div>
        <div className="hover:text-orange-main cursor-pointer duration-500">Services</div>
        <div className="hover:text-orange-main cursor-pointer duration-500">Portfolio</div>
        <Link href="/blog">
          <div className="hover:text-orange-main cursor-pointer duration-500">Blog</div>
        </Link>
        <div className="hover:text-orange-main cursor-pointer duration-500">Contact Us</div>
      </div>
      <div className="text-xl hidden xl:block">
        <button
          type="button"
          className="border-2 rounded py-2 px-5 hover:bg-orange-main hover:text-white-bg hover:border-main-bg"
        >{`Let's Talk`}</button>
      </div>
    </div>
  );
}

export default Header;
