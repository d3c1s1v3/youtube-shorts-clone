"use client";

import { useState } from "react";

import { sidebarNavigation } from "@/constants";
import { SidebarItem, Hamburger } from "@/components";

const Sidebar = () => {
  const [hamburgerState, setHamburgerState] = useState<"closed" | "open">(
    "closed"
  );

  const toggleHamburgerState = () => {
    const state = hamburgerState === "closed" ? "open" : "closed";
    setHamburgerState(state);
    console.log("Hamburger State:", state);
  };

  return (
    <div className={`fixed pt-1.5  h-screen pl-1`}>
      <div className="flex justify-center">
        <Hamburger onClick={toggleHamburgerState} />
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
