import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-3 bg-slate-500 ">
      <nav className="flex justify-center gap-x-14 duration-75 ">
        <Link
          className="text-3xl text-white no-underline hover:text-slate-900 duration-150 font-bold"
          href={"/"}
        >
          HOME
        </Link>
        <Link
          className="text-3xl text-white no-underline hover:text-slate-900 duration-150 font-bold"
          href={"/products"}
        >
          PRODUCTS
        </Link>
        <Link
          className="text-3xl text-white no-underline hover:text-slate-900 duration-150 font-bold"
          href={"/docs"}
        >
          DOCS
        </Link>
      </nav>
    </header>
  );
}
