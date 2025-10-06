"use client";

import { sidebarNavigation } from "@/constants";

import Hamburger from "../Hamburger";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={`fixed pt-1.5  h-screen pl-1`}>
      <div className="flex justify-center">
        <Hamburger onClick={() => console.log("hamburger clicked.")} />
      </div>
      <div>
        <ul className="mt-6">
          {sidebarNavigation.map((item) => (
            <li
              className="flex flex-col items-center hover:bg-[rgba(255,255,255,0.1)] mt-5 rounded-md text-center"
              key={item.label}
            >
              <Link href={item.route} className="block p-2 w-full h-full">
                <div className="flex justify-center">
                  <item.icon size={22} />
                </div>
                <span className="text-[10px]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
