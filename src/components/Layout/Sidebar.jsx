import mailIcon from "../../assets/icons/mailIcon.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import messageIcon from "../../assets/icons/messageIcon.svg";
import calendarIcon from "../../assets/icons/calendarIcon.svg";
import BusinessDetails from "../Dashboard/BusinessDetails";

const social_links = [
  {
    id: 1,
    icon: mailIcon,
    name: "Email",
    link: "#",
  },
  {
    id: 2,
    icon: phoneIcon,
    name: "Call",
    link: "#",
  },
  {
    id: 3,
    icon: messageIcon,
    name: "Message",
    link: "#",
  },
  {
    id: 4,
    icon: calendarIcon,
    name: "Calender",
    link: "#",
  },
];
export default function Sidebar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="user-info flex justify-between bg-white border border-[#0E253C1A] p-4 rounded-2xl mb-4 dark:bg-[#001121]">
        <div className="flex ">
          <div className="relative h-12 w-12 rounded-full bg-[#513CCE] flex items-center justify-center text-white mr-2">
            <span className="h-[10px] w-[10px] bg-[#22C55E] text-base rounded-full absolute right-0 top-1"></span>
            TG
          </div>
          <div>
            <h3 className="text-base text-[#0E253C] dark:text-[#FFFFFF] font-semibold flex items-center gap-1">
              Truck Grear{" "}
              <span className="text-[#E48D21] bg-[#E48D211A]  w-[66px] h-[19px] font-medium text-[10px] uppercase flex justify-center items-center rounded-[99px] mt-1">
                Business
              </span>
            </h3>
            <p className="text-[#0E253CD9] dark:text-[#FFFFFFCC] text-xs ">jillali@onechanneladmin.com</p>
          </div>
        </div>
        <p className="text-xs text-[#513CCE]  text-right">Change Status</p>
      </div>

      <div className="social_links  flex justify-between items-center bg-white dark:bg-[#001121] border border-[#0E253C1A] py-4 rounded-2xl mb-4   [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-[#0E253C1A] h-[76px]">
        {social_links?.map((item) => (
          <div key={item?.id} className="text-center flex-1">
            <img
              src={item?.icon}
              className="mx-auto dark:invert dark:brightness-0 dark:saturate-0"
            />
            <p className="text-center dark:text-white text-xs text-[#0E253CD9] mt-1">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
      <BusinessDetails />
    </div>
  );
}