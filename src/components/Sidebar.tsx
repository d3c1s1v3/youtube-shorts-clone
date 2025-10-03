"use client";

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen = true }: Props) => {
  return <div className="fixed h-screen"></div>;
};

export default Sidebar;
