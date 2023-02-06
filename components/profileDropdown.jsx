import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { AvatarIcon, ChevronDownIcon, ExitIcon } from "@radix-ui/react-icons"
import { BsFillPersonFill } from "react-icons/bs"

const prolinks = `py-1 px-3 text-sm outline-none flex gap-2 items-center hover:bg-red-500 focus:bg-red-500 focus:text-white hover:text-white cursor-pointer rounded-sm`

const ProfileDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-1 py-1 px-2 rounded-md outline-none bg-gray-200/10 focus:bg-gray-200/10 hover:bg-gray-200/20">
        <Avatar.Root className="bg-red-800 flex items-center text-gray-200 justify-center w-8 h-8 rounded-full">
          <Avatar.Image
            //   src="/logo.png"
            alt="Colm Tuite"
          />
          <Avatar.Fallback delayMs={600}>
            <BsFillPersonFill size={20} />
          </Avatar.Fallback>
        </Avatar.Root>
        <ChevronDownIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="bg-white text-gray-700 shadow-md p-2 rounded-sm"
        sideOffset={4}
        align="end">
        <DropdownMenu.Item className={prolinks}>
          <AvatarIcon />
          Account Profile
        </DropdownMenu.Item>
        <DropdownMenu.DropdownMenuSeparator className="my-1 h-px bg-gray-200" />
        <DropdownMenu.Item className={prolinks}>
          <ExitIcon />
          logout
        </DropdownMenu.Item>
        <DropdownMenu.DropdownMenuArrow fill="white" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ProfileDropdown