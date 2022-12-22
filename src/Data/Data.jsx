// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import {AiFillCar,} from "react-icons/ai";
import {FaTruckMoving} from "react-icons/fa";
import {GiSteeringWheel} from "react-icons/gi";
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports

import profile from "../imgs/profile.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: GiSteeringWheel,
    heading:'Drivers'
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: AiFillCar,
    heading: 'Cars'
  },
  
  {
    icon: FaTruckMoving,
    heading:'Trucks'

  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Verified Drivers",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: GiSteeringWheel,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Transactions",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue:100,
    value: "54,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [13000, 10000, 5400, 6700, 7000, 3000, 8900],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "14,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: profile,
    name: "Andrew Thomas",
    noti: "Successifully recieved my package.Thank you @easymove",
    time: "25 seconds ago",
  },
  {
    img: profile,
    name: "James Bond",
    noti: "Had fun with car i hired. very fast efficient and comfortable@easymove",
    time: "30 minutes ago",
  },
  {
    img: profile,
    name: "Iron Man",
    noti: "Top notch customer service",
    time: "2 hours ago",
  },
];
