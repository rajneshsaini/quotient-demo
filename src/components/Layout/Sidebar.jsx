import mailIcon from '../../assets/icons/mailIcon.svg'
import phoneIcon from '../../assets/icons/phoneIcon.svg'
import messageIcon from '../../assets/icons/messageIcon.svg'
import calendarIcon from '../../assets/icons/calendarIcon.svg'
import BusinessDetails from '../Dashboard/BusinessDetails'

const social_links = [{
  id: 1,
  icon: mailIcon,
  name: 'Email',
  link: '#'
},
{
  id: 2,
  icon: phoneIcon,
  name: 'Call',
  link: '#'
},
{
  id: 3,
  icon: messageIcon,
  name: 'Message',
  link: '#'
},
{
  id: 4,
  icon: calendarIcon,
  name: 'Calender',
  link: '#'
}]
export default function Sidebar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4">
      <div className="user-info flex bg-white border border-[#0E253C1A] p-4 rounded-2xl mb-4">
        <div className="flex w-full">
          <div className="relative h-9 w-9 rounded-full bg-[#513CCE] flex items-center justify-center text-white mr-2">
            <span className="h-[10px] w-[10px] bg-[#22C55E] rounded-full absolute right-0 top-0"></span>
            MG
          </div>
          <div>
            <h3>Truck Grear <span>Business</span></h3>
            <p>jillali@onechanneladmin.com</p>
          </div>
        </div>
        <p>Change Status</p>
      </div>

      <div className="social_links  flex justify-between items-center bg-white border border-[#0E253C1A] p-4 rounded-2xl mb-4   [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-[#0E253C1A]">
        {social_links?.map((item) =>
          <div key={item?.id} className='text-center flex-1'>
            <img src={item?.icon} className='mx-auto' />
            <p className='text-center'>{item?.name}</p>
          </div>
        )}
      </div>
      <BusinessDetails />
    </div>
  );
}