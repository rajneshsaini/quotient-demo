import React from 'react';
import { Save, Plus, X } from 'lucide-react';
import Card from '../common/Card';

const BusinessDetails = () => {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-[#0E253C] dark:text-white">Business Details</h2>
        <button className="flex gap-1 items-center text-sm font-semibold text-[#22C55E] dark:text-[#22C55E]">
          <Save size={14} className="mr-1" color='#22C55E' />
          Save & Close
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
            Account Name
          </label>
          <input
            type="text"
            value="TRUCK GREAR"
            className="w-full py-2 px-3 border border-[#0E253C1A] rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div className='bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0'></div>
        <div>
          <div className="flex justify-between mb-1">
          <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
           Email
          </label>
          </div>
          
          <input
            type="email"
            value="Jillali@Onechanneladmin.Com"
            className="w-full py-2 px-3 border border-[#0E253C1A] rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div className='bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0'></div>
        
        <div>
          <div className="flex justify-between mb-1">
          <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
              Phone Number
            </label>
            <button className="text-xs text-[#513CCE]">
              +
            </button>
          </div>
          
          {['+1 344 434 4445', '+1 344 434 4445'].map((phone, index) => (
            <div key={index} className="flex mb-2 gap-1.5">
              <div className="flex-shrink-0">
                <select className="h-full p-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white w-[100px]">
                  <option>US</option>
                </select>
              </div>
              <input
                type="tel"
                value={phone}
                className=" text-sm p-2 border border-gray-300 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white w-[164px]"
              />
              <button className="px-3 w-[78px] bg-white dark:bg-gray-800 border  border-[#DC3545]  rounded-xl text-[#DC3545]">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className='bg-[#0E253C1A] border-t border-[#0E253C1A] h-[1px] w-full m-0 p-0'></div>
        
        <div>
        <label className="block text-xs font-medium text-[#0E253C] dark:text-gray-400 mb-2">
            Contact Owner
          </label>
          <div className="relative">
            <select className="w-full p-2 border text-sm border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none">
              <option>Sushilkumar@Onechannelamin.Com</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessDetails;