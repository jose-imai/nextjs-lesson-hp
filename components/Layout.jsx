import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "HP by Next.js" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-18 h-14">
            <div className="flex space-x-4">
              <Link href={"/"}>
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </div>
              </Link>
              <Link href={"/blog-page"}>
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </div>
              </Link>
              <Link href={"/contact-page"}>
                <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          Link
        >
          Powered by{""}
        </Link>

        <Image
          src="/vercel.svg"
          width={50}
          height={50}
          alt="Vercel-logo"
          className="h-4 ml-2"
        />
      </footer>
    </div>
  );
}
