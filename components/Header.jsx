import React from "react"
import ProfileDropdown from "./profileDropdown"
import {
  IoMdNotificationsOutline,
} from "react-icons/io"
import {
  IoChatboxEllipsesOutline,
} from "react-icons/io5"

const Header = () => {
  return (
    <div className="flex py-2 px-6 items-center justify-between bg-red-700 text-white">
      <div className="font-bold">Dashboard</div>
      <div className="flex gap-4 items-center">
        <div className="p-2 cursor-pointer hover:bg-gray-200/20 rounded-full bg-gray-200/10">
          <IoMdNotificationsOutline size={22} />
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-200/20 rounded-full bg-gray-200/10">
          <IoChatboxEllipsesOutline size={22} />
        </div>
        <ProfileDropdown />
      </div>
    </div>
  )
}

export default Header
