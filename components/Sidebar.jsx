import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import * as Avatar from "@radix-ui/react-avatar"
import { useState, useEffect } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import {
  TbReportAnalytics,
  TbLayoutDashboard,
  TbCalendarEvent,
  TbSettings,
  TbMenu2,
} from "react-icons/tb"

const sidebarVariants = {
  open: { width: "16em" },
  closed: { width: "4.5em" },
  isOpen: { marginLeft: "16em" },
  isClosed: { marginLeft: "4.5em" },
  logoOpen: { height: "6em", width: "6em" },
  logoClosed: { height: "3em", width: "3em" },
}

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

useEffect(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const initialState = window.localStorage.getItem("isOpen") || "closed";
    setOpen(initialState === "open");
  }

  if (window.innerWidth <= 768) {
    setOpen(false);
  }
}, []);

const handleToggle = () => {
  setOpen(!isOpen);
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem("isOpen", isOpen ? "closed" : "open");
  }
};

  const links = `py-3 flex items-center ease-in-out text-sm duration-100 hover:text-black hover:bg-gray-200 text-gray-700 bg-gray-100 rounded-sm ${
    isOpen ? "gap-4 px-3" : "justify-center"
  }`

  return (
    <div className="flex">
      <motion.div
        className="fixed h-screen shadow-md bg-white"
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{}}
        variants={sidebarVariants}>
        <div className="rounded-b-sm pb-1 bg-red-600">
          <div className="flex justify-end items-center px-3 py-4 text-white">
            <button
              onClick={handleToggle}
              className={`${!isOpen && "w-full flex justify-center"}`}>
              <TbMenu2 size={24} /> 
            </button>
          </div>
          <div className={`flex flex-col items-center py-4`}>
            <Link href="/">
              <motion.div
                className={`p-[2px] flex justify-center items-center bg-white rounded-full`}
                initial={isOpen ? "logoOpen" : "logoClosed"}
                animate={isOpen ? "logoOpen" : "logoClosed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                variants={sidebarVariants}>
                <Image
                  src="/logo.png"
                  alt="Evsu Logo"
                  width={500}
                  height={500}
                />
              </motion.div>
            </Link>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="text-center grid gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <div className="text-lg text-white mt-2 font-bold">
                    EVSU REGISTRAR
                  </div>
                  <div className="w-fit flex m-auto item-center bg-gray-700/30 rounded-sm p-1">
                    <Avatar.Root className="bg-red-800 flex items-center text-gray-200 justify-center w-6 h-6 rounded-full">
                      <Avatar.Image
                        //   src="/logo.png"
                        alt="Colm Tuite"
                      />
                      <Avatar.Fallback delayMs={600}>
                        <BsFillPersonFill size={18} />
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <div className="text-white text-xs px-2 capitalize flex items-center">
                      username
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className={`flex flex-col gap-3 px-3 py-4`}>
          <Link href="/">
            <div className={links}>
              <TbLayoutDashboard size={24} />
              {isOpen && <p>Dashboard</p>}
            </div>
          </Link>
          <Link href="/">
            <div className={links}>
              <TbCalendarEvent size={24} />
              {isOpen && <p>Calendar</p>}
            </div>
          </Link>
          <Link href="/">
            <div className={links}>
              <TbReportAnalytics size={24} />
              {isOpen && <p>Report</p>}
            </div>
          </Link>
          <Link href="/">
            <div className={links}>
              <TbSettings size={24} />
              {isOpen && <p>Settings</p>}
            </div>
          </Link>
        </div>
      </motion.div>
      <motion.main
        className={`w-full`}
        initial={isOpen ? "isOpen" : "isClosed"}
        animate={isOpen ? "isOpen" : "isClosed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{}}
        variants={sidebarVariants}>
        {children}
      </motion.main>
    </div>
  )
}

export default Sidebar
