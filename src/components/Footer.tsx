const Footer = () => {
  return (
    <footer className="m-4 w-full rounded-lg bg-white">
      <div className="container mx-auto w-full p-4 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            IOJEK
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
