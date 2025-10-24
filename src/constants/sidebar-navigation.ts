import {
  FaRegUserCircle,
  IoHomeOutline,
  MdOutlineSubscriptions,
  SiYoutubemusic,
  SiYoutubeshorts,
  TfiDownload,
} from "@/components/icons";

export const sidebarNavigation = [
  {
    label: "Główna",
    icon: IoHomeOutline,
    route: "",
  },
  {
    label: "Shorts",
    icon: SiYoutubeshorts,
    route: "",
  },
  {
    label: "Subskrypcje",
    icon: MdOutlineSubscriptions,
    route: "",
  },
  {
    label: "YouTube Music",
    icon: SiYoutubemusic,
    route: "",
  },
  {
    label: "Ty",
    icon: FaRegUserCircle,
    route: "",
  },
  {
    label: "Pobrane",
    icon: TfiDownload,
    route: "",
  },
];
