function Header() {
  return (
    <div className="font-medium flex justify-between items-center py-7 bg-dark-white-bg">
      <div className="text-4xl flex">
        <p className="text-orange-main">Digi</p>ency
      </div>
      <div className="text-xl flex space-x-6">
        <div className="hover:text-orange-main cursor-pointer">Home</div>
        <div className="hover:text-orange-main cursor-pointer">About Us</div>
        <div className="hover:text-orange-main cursor-pointer">Services</div>
        <div className="hover:text-orange-main cursor-pointer">Portfolio</div>
        <div className="hover:text-orange-main cursor-pointer">Blog</div>
        <div className="hover:text-orange-main cursor-pointer">Contact Us</div>
      </div>
      <div className="text-xl">
        <button
          type="button"
          className="border-2 rounded py-2.5 px-5 hover:bg-orange-main hover:text-white-bg hover:border-main-bg"
        >{`Let's Talk`}</button>
      </div>
    </div>
  );
}

export default Header;
