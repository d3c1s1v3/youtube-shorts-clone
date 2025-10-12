"use client";

import { sidebarNavigation } from "@/constants";
import { SidebarItem, Hamburger } from "@/components";

const Sidebar = () => {
  return (
    <div className={`fixed pt-1.5  h-screen pl-1`}>
      <div className="flex justify-center">
        <Hamburger onClick={() => console.log("hamburger clicked.")} />
      </div>
      <div>
        <ul className="mt-6">
          {sidebarNavigation.map(({ label, icon, route }) => (
            <SidebarItem label={label} icon={icon} route={route} key={label} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
