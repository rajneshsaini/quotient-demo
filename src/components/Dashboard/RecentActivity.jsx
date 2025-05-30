import React, { useState } from "react";
import messageIconWhite from '../../assets/icons/messageIconWhite.svg'
import replyIcon from '../../assets/icons/replyIcon.svg'

const activities = [
  {
    date: "Today",
    items: [
      {
        iconColor: "bg-orange-500",
        content: (
          <>
            <span className="text-[#513CCE] font-medium">Christian Wood</span> Sent Message to{' '}
            <span className="text-[#513CCE] font-medium">Nikita Houston</span>
          </>
        ),
        time: "1 min ago",
        replies: [{
          iconColor: "#0E253C1A",
          content: (
            <>
              <span className="text-[#513CCE] font-medium">Nikita Houston</span> Replay your message{' '}
              <span className="text-[#513CCE] font-medium">"Hello"</span>
            </>
          ),
          time: "1 min ago"
        },]
      },

      {
        iconColor: "bg-rose-500",
        content: (
          <>
            <span className="text-[#513CCE] font-medium">Christian Wood</span> Accept Order from{' '}
            <span className="text-[#513CCE] font-medium">Ebay</span>
          </>
        ),
        time: "1 min ago",
        replies: [{
          iconColor: "#0E253C1A",
          content: (
            <>
              <span className="text-[#513CCE] font-medium">Rohan Walker</span> Replay your message{' '}
              <span className="text-[#513CCE] font-medium">Ebay</span>
            </>
          ),
          time: "1 min ago"
        },
        {
          iconColor: "#0E253C1A",
          content: (
            <>
              <span className="text-[#513CCE] font-medium">Rohan Walker</span> Replay your message{' '}
              <span className="text-[#513CCE] font-medium">Ebay</span>
            </>
          ),
          time: "1 min ago"
        }]
      },

    ]
  },
  {
    date: "Yesterday",
    items: [
      {
        iconColor: "bg-purple-500",
        content: (
          <>
            <span className="text-[#513CCE] font-medium">Christian Wood</span> Accept Order from{' '}
            <span className="text-[#513CCE] font-medium">Amazon</span>
          </>
        ),
        time: "12:30PM"
      }
    ]
  },
  {
    date: "25 May 2024",
    items: [
      {
        iconColor: "bg-sky-500",
        content: (
          <>
            <span className="text-[#513CCE] font-medium">Christian Wood</span> Accept Order from{' '}
            <span className="text-[#513CCE] font-medium">Walmart</span>
          </>
        ),
        time: "11:20AM"
      }
    ]
  }
];

 

export default function RecentActivity() {
    const [activeTab, setActiveTab] = useState("message");
   const tabs = [
    { id: "message", label: "Message" },
    { id: "email", label: "Email" },
   
  ];
  return (
    <div className="bg-[#F6F8F9] border border-[#0E253C1A] rounded-2xl mt-4 dark:bg-[#010D19] dark:border-[#FFFFFF21]">
      <div className="flex justify-between items-center px-4 py-3">
       <h2 className="text-lg font-semibold text-[#0E253C] dark:text-white">Recent Activities</h2>
        <div>
                  <div className="flex flex-wrap gap-2 rounded-xl border border-[#0E253C1A] dark:border-[#FFFFFF21]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-white text-[#1D2433] dark:text-white dark:bg-[#8378FF] rounded-xl"
                  : "bg-transparent text-[#0E253CD9] dark:text-[#FFFFFFCC] hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </div>
      </div>
      <div className="border-t border-[#0E253C1A] dark:border-[#FFFFFF21] px-5">
        {activities.map((section, idx) => (
          <div >
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2 mt-4 dark:text-white">{section.date}</p>
            <ul className="space-y-3 mb-4">
              {section.items.map((item, i) => (
                <li key={i} className=" gap-2 items-start">
                  <div className="flex">
                    <div className={`w-6 h-6 rounded-full mt-1 ${item.iconColor} flex justify-center items-center mr-3`}>
                      <img src={messageIconWhite} className="dark:invert dark:brightness-0 dark:saturate-0" />
                    </div>
                    <div className="text-sm  dark:text-[#FFFFFFCC] text-[#0E253CD9] flex">
                      <div className=" dark:text-[#FFFFFFCC] text-[#0E253CD9]">{item.content}</div>
                      <div className="text-xs text-gray-500 dark:text-[#FFFFFFCC] mt-0.5"><span className="w-1 h-1 inline-block mx-1 bg-[#0E253CD9] rounded-full"></span>{item.time}</div>
                    </div>
                  </div>
                  <div className="reply ml-8">
                    {item.replies?.map((reply, id) => (
                      <div className="flex items-center gap-0.5">
                        <div className={`w-6 h-6 rounded-full mt-1 bg-[${reply.iconColor}] dark:bg-[#0E253C1A] flex justify-center items-center`}>
                          <img src={replyIcon} className="dark:invert dark:brightness-0 dark:saturate-0" />
                        </div>
                        <div className="text-sm dark:[#FFFFFFCC] text-[#0E253CD9] flex">
                          <div className=" dark:text-[#FFFFFFCC] text-[#0E253CD9]">{reply.content}</div>
                          <div className="text-xs text-gray-500 dark:text-[#FFFFFFCC] mt-0.5"><span className="w-1 h-1 inline-block mx-1 bg-[#0E253CD9] rounded-full"></span>{reply.time}</div>
                        </div>
                      </div>
                    ))}

                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
