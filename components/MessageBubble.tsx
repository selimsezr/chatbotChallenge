'use client'
import { useContext } from "react";
import { CurrentUserContext } from "./LayoutContext";
const MessageBubble = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    return (
        <div className="flex flex-col w-full">
            {currentUser?.map((user, index) => {
                const day = user.time.getDate();
                const monthIndex = user.time.getMonth();

                const hours = user.time.getHours();
                const minutes = user.time.getMinutes();

                const formattedHours = hours.toString().padStart(2, "0");
                const formattedMinutes = minutes.toString().padStart(2, "0");

                const formattedTime = `${formattedHours}:${formattedMinutes} ${day}/${monthIndex + 1} `;

                return (
                    <div key={index} className={`flex m-1 ${user.isYou ? 'justify-end' : 'justify-items-start'}`}>
                        <div className={`flex flex-col p-3 rounded-lg  ${user.isYou ? "bg-green-200" : "bg-gray-200"}`}>
                            <div className={` text-100 break-words  max-w-28 max-w-96 my-1`}>{user.message}</div>
                            <div className={`justify-end text-xs font-extralight text-slate-500`}>{formattedTime}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default MessageBubble;