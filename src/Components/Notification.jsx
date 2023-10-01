import React, { useState } from 'react'
import data from "../../data.json"

export default function Notification() {
    const[userData, setUserDate] = useState(data);
    const markAsRead = () => {
        const clone = [...userData].map(item => {
            item.read = true;
            return item;
        })

        setUserDate(clone);
    }
  return (
    <div className='bg-white w-[730px] pl-[32px] pt-[33px] pr-[30px] pb-[18px] rounded-[15px]'>
        <header className='flex justify-between items-center'>
            <h1 className='text-[24px] font-extrabold'>Notifications <span className='text-[16px] text-white bg-[#0A327B] pl-[11px] pt-[1px] pr-[11px] pb-[4px] rounded-[6px] ml-[11px]'>{userData.filter(item => !item.read).length}</span></h1>
            <p onClick={markAsRead}>Mark all as read</p>
        </header>

        <div className='mt-[31px] flex flex-col gap-[20px]'>
            {userData.map((item) => {
                return (
                    <div className={`flex gap-[19px] p-[5px] items-center ${item.read ? "bg-transparent" : "bg-[#F7FAFD] rounded-[8px]"}`}>
                        <img src={`./images/avatar-${item.author.replace(" ", "-").toLowerCase()}.webp`} alt="" className='w-[45px]'/>
                        <div>
                            <p>
                                <span>{item.author}</span>
                                {" "}
                                <span>{item.type}</span>
                                {" "}
                                {item.content.includes(".webp") ? <img src={item.content}/> : <span className={`${item.type == "left the group" || item.type == "has joined your group" ? "text-[#0A327B] font-extrabold" : ""}`} >{item.content}</span>}
                            </p>
                            <p>{item.time}</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}
