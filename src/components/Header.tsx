import { headerList } from "@/constant/headerList";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="wrapper fixed flex-center bg-white md:flex-end gap-4 !py-5">
      {headerList.map((headerItem) => (
        <Link href={headerItem.link} key={headerItem.label}>
          <h2 className="text-sm md:text-xl hover:underline decoration-accent">
            {headerItem.label}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export default Header;
