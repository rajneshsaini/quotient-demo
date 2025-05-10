import Slider from "react-slick";
import totalOrdersIcon from "../../assets/icons/totalOrders.svg";
import arrowNextIcon from "../../assets/icons/arrowNextIcon.svg";
import arrowPrevIcon from "../../assets/icons/arrowPrevIcon.svg";
import profitIcon from "../../assets/icons/profit.svg";
import lossIcon from "../../assets/icons/loss.svg";

const statData = [
  {
    id: "stat1",
    icon: totalOrdersIcon,
    title: "Total Orders",
    statNum: 123,
    isProfit: true,
    profitLossVal: 28,
  },
  {
    id: "stat1",
    icon: totalOrdersIcon,
    title: "Total Revenue",
    statNum: 123,
    isProfit: false,
    profitLossVal: 28,
  },
  {
    id: "stat1",
    icon: totalOrdersIcon,
    title: "Pending Orders",
    statNum: "$1234.99",
    isProfit: false,
    profitLossVal: 28,
  },
  {
    id: "stat1",
    icon: totalOrdersIcon,
    title: "Pending Return",
    statNum: "$1234.99",
    isProfit: true,
    profitLossVal: 28,
  },
  {
    id: "stat1",
    icon: totalOrdersIcon,
    title: "Total Orders",
    statNum: 123,
    isProfit: true,
    profitLossVal: 28,
  },
];

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute w-6 h-6 left-1.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-xl rounded-full p-2 hover:bg-gray-100`}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <img src={arrowPrevIcon} />
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute w-6 h-6 right-1.5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-xl rounded-full p-2 hover:bg-gray-100`}
      style={{ transform: "translate(50%, -50%)" }}
    >
      <img src={arrowNextIcon} />
    </div>
  );
}

export default function CardStat() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="-mx-2">
        <Slider {...settings}>
          {statData?.map((stat, index) => (
            <div className="px-2" key={`${stat.id}-${index}`}>
              <div className="border border-[#0E253C1A] dark:border-[#FFFFFF21] rounded-2xl">
                <div className="bg-[#F6F8F9] dark:bg-[#010D19] rounded-tr-2xl rounded-tl-2xl p-5 flex gap-4">
                  <img src={stat.icon} />
                  <div>
                    <h3 className="text-xs font-medium text-[#0E253CD9] dark:text-[#FFFFFFCC]">
                      {stat.title}
                    </h3>
                    <p className="text-[#0E253C] dark:text-[#FFFFFF] text-[22px] font-semibold ">
                      {stat.statNum}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between bg-white dark:bg-[#001121]  dark:border-[#FFFFFF21] rounded-bl-2xl rounded-br-2xl px-5 py-3">
                  <p
                    className={` flex gap-0.5 items-center text-xs font-semibold ${
                      stat.isProfit ? "text-[#22C55E]" : "text-[#DC3545]"
                    }`}
                  >
                    <img
                      src={` ${stat.isProfit ? profitIcon : lossIcon}`}
                      className="w-4 h-4"
                    />{" "}
                    {stat.profitLossVal}%
                  </p>
                  <p className="text-xs font-medium text-[#0E253CD9] dark:text-[#FFFFFFCC]">
                    From The Last Month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}