import React from 'react';
import Card from '../common/Card';
import { CircleArrowRight } from 'lucide-react';


const orders = [
  {
    id: '275936',
    quantity: 1,
    product: {
      name: 'iPhone 15 pro max',
      image: '📱'
    },
    channel: {
      name: 'eBay',
      logo: 'https://cdn-icons-png.flaticon.com/512/888/888848.png'
    },
    customer: {
      name: 'Gabriella Golden',
      avatar: 'G'
    },
    total: '$ 400.00',
    deliveryDate: 'Today'
  },
  {
    id: '415368',
    quantity: 4,
    product: {
      name: 'White Denim Tank Mens',
      image: '👕'
    },
    channel: {
      name: 'Walmart',
      logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969428.png'
    },
    customer: {
      name: 'Harris Santana',
      avatar: 'H'
    },
    total: '$ 151.00',
    deliveryDate: 'Today'
  },
  {
    id: '275063',
    quantity: 2,
    product: {
      name: 'David Beckham classic',
      image: '👞'
    },
    channel: {
      name: 'Facebook',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png'
    },
    customer: {
      name: 'Lila Ponce',
      avatar: 'L'
    },
    total: '$ 167.00',
    deliveryDate: 'Tomorrow'
  },
  {
    id: '274778',
    quantity: 3,
    product: {
      name: 'Samsung i-20 series',
      image: '📱'
    },
    channel: {
      name: 'Amazon',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968217.png'
    },
    customer: {
      name: 'Rehan Chase',
      avatar: 'R'
    },
    total: '$ 262.00',
    deliveryDate: 'Tomorrow'
  },
  {
    id: '638032',
    quantity: 5,
    product: {
      name: 'Nykaa Red lipstick',
      image: '💄'
    },
    channel: {
      name: 'Etsy',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968239.png'
    },
    customer: {
      name: 'Maxim Bray',
      avatar: 'M'
    },
    total: '$ 319.00',
    deliveryDate: '05/01/2023'
  }
];

const RecentOrders = () => {
  return (
   <div className="bg-[#F6F8F9] dark:bg-[#010D19] border border-[#0E253C1A] dark:border-[#FFFFFF21] rounded-2xl mt-4">
      <div className="flex justify-between items-center px-4 py-3">
       <h2 className="text-lg font-semibold text-[#0E253C] dark:text-white">Recent Activities</h2>
        <div>
        </div>
      </div>
      <div className="overflow-x-auto border-t border-[#0E253C1A] dark:border-[#FFFFFF21]">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className='bg-white dark:bg-[#001121]'>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Products
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Channel
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-[#0E253CD9] dark:text-gray-400 uppercase tracking-wider">
                Delivery Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#F6F8F9] dark:bg-[#010D19] divide-y divide-gray-200 dark:divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 whitespace-nowrap text-sm  text-[#0E253C] dark:text-white">
                  {order.id}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                      <div className="text-sm text-[#0E253C] dark:text-gray-400">
                        x{order.quantity}
                      </div>
                    <div className="flex-shrink-0 h-8 w-8 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-lg">{order.product.image}</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-[#0E253C] dark:text-white">
                        {order.product.name}
                      </div>
                    
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={order.channel.logo} alt={order.channel.name} className="h-5 w-5" />
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{order.channel.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-200">
                      {order.customer.avatar}
                    </div>
                    <div className="ml-2 text-sm text-[#0E253C] dark:text-white">
                      {order.customer.name}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#0E253C] dark:text-white">
                  {order.total}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#0E253C] dark:text-white">
                  {order.deliveryDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center gap-1">
        <button className="h-[34px] flex items-center text-[#513CCE] dark:text-[#513CCE] text-xs">
          View 256 more orders 
        <CircleArrowRight size={20} strokeWidth={1.5} className='text-[#513CCE]' />
        </button>
      </div>
    </div>
  );
};

export default RecentOrders;