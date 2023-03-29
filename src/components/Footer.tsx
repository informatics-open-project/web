import Link from "next/link";

const Footer = () => {
  return (
    <footer className="m-4 mx-auto w-full max-w-[968px] rounded-lg bg-white">
      <div className="container mx-auto w-full p-4 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            I-Ojek
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/privacy-policy"
              className="mr-4 hover:underline md:mr-6"
            >
              Ketentuan Privasi
            </Link>
          </li>
          <li>
            <Link href="/terms-conditions" className="hover:underline">
              Syarat dan Ketentuan
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
