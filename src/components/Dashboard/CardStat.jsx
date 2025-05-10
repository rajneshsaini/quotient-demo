import Slider from 'react-slick';
import totalOrdersIcon from '../../assets/icons/totalOrders.svg';

const statData = [{
  id: 'stat1',
  icon: totalOrdersIcon,
  title: 'Total Orders',
  statNum: 123,
  isProfit: true,
  profitLossVal: 28
},
{
  id: 'stat1',
  icon: totalOrdersIcon,
  title: 'Total Orders',
  statNum: 123,
  isProfit: true,
  profitLossVal: 28
},
{
  id: 'stat1',
  icon: totalOrdersIcon,
  title: 'Total Orders',
  statNum: 123,
  isProfit: true,
  profitLossVal: 28
},
{
  id: 'stat1',
  icon: totalOrdersIcon,
  title: 'Total Orders',
  statNum: 123,
  isProfit: true,
  profitLossVal: 28
},
{
  id: 'stat1',
  icon: totalOrdersIcon,
  title: 'Total Orders',
  statNum: 123,
  isProfit: true,
  profitLossVal: 28
}];

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-gray-100`}
      style={{ transform: 'translate(-50%, -50%)' }} // fine-tuned left edge position
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.293 16.707a1 1 0 010-1.414L15.586 12H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white shadow-md rounded-full p-2 hover:bg-gray-100`}
      style={{ transform: 'translate(50%, -50%)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L4.414 8H16a1 1 0 110 2H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
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
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative">
      <div className="-mx-2">
        <Slider {...settings}>
          {statData?.map((stat, index) => (
            <div className="px-2" key={`${stat.id}-${index}`}>
              <div className="border border-[#0E253C1A] rounded-2xl">
                <div className="bg-[#F6F8F9] rounded-tr-2xl rounded-tl-2xl p-5 flex gap-4">
                  <img src={stat.icon} />
                  <div>
                    <h3>{stat.title}</h3>
                    <p>{stat.statNum}</p>
                  </div>
                </div>
                <div className="flex justify-between bg-white rounded-bl-2xl rounded-br-2xl px-5 py-3">
                  <p className={`${stat.isProfit ? 'text-[#22C55E]' : 'text-[#DC3545]'}`}>
                    {stat.isProfit ? '+' : '-'}{stat.profitLossVal}%
                  </p>
                  <p>From The Last Month</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

}