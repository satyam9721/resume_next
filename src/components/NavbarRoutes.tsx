import React from "react";

import {
  LayoutDashboard,
  BadgeIndianRupee,
  HandCoins,
  ReceiptText,
  CircleUserRound,
  Hotel,
  Settings,
  Bot
} from "lucide-react";


import NavbarItems from "./NavbarItems";



const NavbarRoutes = () => {
  const FinanceRoutes = [
    {
      href: "/",
      name: "About",
      icon: LayoutDashboard,
    },
    {
      href: "/user/tax-calculater",
      name: "Resume",
      icon: BadgeIndianRupee,
    },
   
    {
      href: "/dashboard/hra",
      name: "Portfolio",
      icon: Hotel,
    },
    {
      href: "/pending-bills",
      name: "Blog",
      icon: ReceiptText,
    },
    {
      href: "/user/settings",
      name: "Contact",
      icon: Settings,
    },
   
  
  ];

  return (
    <div className="flex flex-row item center  ">
      {FinanceRoutes.map((route,index) => (
        <NavbarItems
          key={route.href}
          label={route.name}
          href={route.href}
          icon={route.icon}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
};

export default NavbarRoutes;