import { useEffect, useRef, useState } from "react";
import downArrow from '../../assets/icons/downArrow.svg'
import allOrders from '../../assets/icons/allOrders.svg'
import DonutChart from "./DonutChart";

const categories = ['Technology', 'Health', 'Finance'];
const orderDetails = [{
  id: 'order1',
  icon: allOrders,
  title: 'All',
  count: 50,
},
{
  id: 'order2',
  icon: allOrders,
  title: 'New',
  count: 50,
},
{
  id: 'order3',
  icon: allOrders,
  title: 'Pending',
  count: 50,
},
{
  id: 'order4',
  icon: allOrders,
  title: 'Dispatched',
  count: 50,
},
{
  id: 'order5',
  icon: allOrders,
  title: 'Delivered',
  count: 123,
},
{
  id: 'order6',
  icon: allOrders,
  title: 'Cancelled',
  count: 50,
},]


export default function OrderStatusChart() {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="bg-[#F6F8F9] border border-[#0E253C1A] rounded-2xl mt-4">
      <div className="flex justify-between items-center px-4 py-3">
        <h2>Order Status</h2>
        <div>
          <div className="relative w-[146px] rounded-xl" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="rounded-xl w-full px-4 py-2 text-left text-sm font-semibold border border-gray-300 bg-white shadow-sm hover:border-blue-500 focus:outline-none flex justify-between items-center "
            >
              {selected || 'All Categories'}<img src={downArrow} alt="downArrow" />
            </button>

            {open && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-md">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      setSelected(cat);
                      setOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
      <div className="flex border-t border-[#0E253C1A]">
        <div className="w-7/12 flex flex-wrap">
          {
            orderDetails?.map((order, index) => {
              const isLeftCol = index % 2 === 0;
              const isLastRow = index >= orderDetails.length - 2;

              return (
                <div className={`w-1/2 flex h-[118px] items-start px-5 py-8 gap-2 border-[#0E253C1A] ${isLeftCol ? 'border-r' : ''}
              ${!isLastRow ? 'border-b' : ''}`}>
                  <img src={order.icon} width={21} />
                  <div>
                    <p>{order.title}</p>
                    <h3>{order.count}</h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
        <div className="w-full"><DonutChart /></div>
    </div>
  );
}