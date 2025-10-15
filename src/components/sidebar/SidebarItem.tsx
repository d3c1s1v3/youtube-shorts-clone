import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  route: string;
}

const SidebarItem = ({ label, icon: Icon, route }: SidebarItemProps) => {
  return (
    <li
      className="flex flex-col items-center hover:bg-overlay-light mt-5 rounded-md text-center"
      key={label}
    >
      <Link href={route} className="block p-2 w-full h-full">
        <div className="flex justify-center">
          <Icon size={22} />
        </div>
        <span className="text-[10px]">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
