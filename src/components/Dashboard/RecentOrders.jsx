import React from 'react';
import Card from '../common/Card';
import { CircleArrowRight } from 'lucide-react';
import iphoneImg from '../../assets/images/iphone.png'
import perfumeImg from '../../assets/images/perfume.png'
import smartwatch from '../../assets/images/smartwatch.png'
import redlipstickImg from '../../assets/images/redlipstick.png'
import tshirtImg from '../../assets/images/tshirt.png'
import ebaylogo from '../../assets/images/ebay.png'
import walmartlogo from '../../assets/images/walmart.png'
import etsylogo from '../../assets/images/etsy.png'
import amazonlogo from '../../assets/images/amazon.png'
import facebooklogo from '../../assets/images/facebook.png'
import cust1 from '../../assets/images/cust1.png'
import cust2 from '../../assets/images/cust2.png'
import cust6 from '../../assets/images/cust6.jpg'
import cust4 from '../../assets/images/cust4.png'
import cust5 from '../../assets/images/cust5.png'

const orders = [
  {
    id: '275936',
    quantity: 1,
    product: {
      name: 'iPhone 15 pro max',
      image: iphoneImg
    },
    channel: {
      name: 'eBay',
      logo: ebaylogo
    },
    customer: {
      name: 'Gabriella Golden',
      avatar: cust1
    },
    total: '$ 400.00',
    deliveryDate: 'Today'
  },
  {
    id: '415368',
    quantity: 4,
    product: {
      name: 'White Denim Tank Mens',
      image: tshirtImg
    },
    channel: {
      name: 'Walmart',
      logo: walmartlogo
    },
    customer: {
      name: 'Harris Santana',
      avatar: cust2
    },
    total: '$ 151.00',
    deliveryDate: 'Today'
  },
  {
    id: '275063',
    quantity: 2,
    product: {
      name: 'David Beckham classic',
      image: perfumeImg
    },
    channel: {
      name: 'Facebook',
      logo: facebooklogo
    },
    customer: {
      name: 'Lila Ponce',
      avatar: cust5
    },
    total: '$ 167.00',
    deliveryDate: 'Tomorrow'
  },
  {
    id: '274778',
    quantity: 3,
    product: {
      name: 'Samsung i-20 series',
      image: smartwatch
    },
    channel: {
      name: 'Amazon',
      logo: amazonlogo
    },
    customer: {
      name: 'Rehan Chase',
      avatar: cust6
    },
    total: '$ 262.00',
    deliveryDate: 'Tomorrow'
  },
  {
    id: '638032',
    quantity: 5,
    product: {
      name: 'Nykaa Red lipstick',
      image: redlipstickImg
    },
    channel: {
      name: 'Etsy',
      logo: etsylogo
    },
    customer: {
      name: 'Maxim Bray',
      avatar: cust4
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
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-[#0E253C] dark:text-gray-400">
                      x{order.quantity}
                    </div>
                    <div className="flex-shrink-0 h-8 w-8 rounded bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <img src={order.product.image} width={30} height={36} />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-[#0E253C] dark:text-white">
                        {order.product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center border border-[#0E253C1A] bg-[#0E253C0D] p-1.5 rounded-lg h-[26px]">
                    <img src={order.channel.logo} alt={order.channel.name} className="w-auto object-coverall  mx-auto" />
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-800 dark:text-purple-200">
                      <img src={order.customer.avatar} className='w-6 h-6 rounded-full' />
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
        <div className="flex justify-center gap-1 border-t border-[#0E253C1A]">
          <button className="h-[34px] flex items-center text-[#513CCE] dark:text-[#513CCE] text-xs">
            View 256 more orders
            <CircleArrowRight size={20} strokeWidth={1.5} className='text-[#513CCE] ml-1' />
          </button>
        </div>
      </div>


    </div>
  );
};

export default RecentOrders;