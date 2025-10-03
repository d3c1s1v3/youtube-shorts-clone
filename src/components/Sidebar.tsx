"use client";

import {
  FaRegUserCircle,
  IoHomeOutline,
  MdOutlineSubscriptions,
  SiYoutubemusic,
  SiYoutubeshorts,
  TfiDownload,
} from "@/components/icons";

import Hamburger from "./Hamburger";

type Props = {
  isOpen: boolean;
};

const Sidebar = () => {
  return (
    <div className="fixed pt-1.5 w-20 h-screen">
      <div className="flex justify-center">
        <Hamburger onClick={() => console.log("hamburger clicked.")} />
      </div>
      <div>
        <ul>
          <li>
            <div>
              <IoHomeOutline />
            </div>
            <span>Główna</span>
          </li>
          <li>
            <div>
              <SiYoutubeshorts />
            </div>
            <span>Shorts</span>
          </li>
          <li>
            <div>
              <MdOutlineSubscriptions />
            </div>
            <span>Subskrypcje</span>
          </li>
          <li>
            <div>
              <SiYoutubemusic />
            </div>
            <span>YouTube Music</span>
          </li>
          <li>
            <div>
              <FaRegUserCircle />
            </div>
            <span>Ty</span>
          </li>
          <li>
            <div>
              <TfiDownload />
            </div>
            <span>Pobrane</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
