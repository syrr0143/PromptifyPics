"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/../public/logo-icon.png";
import home from "@/../public/assets/icons/home.svg";
import imagerestore from "@/../public/assets/icons/image.svg";
import gfill from "@/../public/assets/icons/stars.svg";
import objremove from "@/../public/assets/icons/scan.svg";
import recolor from "@/../public/assets/icons/filter.svg";
import bgremove from "@/../public/assets/icons/camera.svg";
import profile from "@/../public/assets/icons/profile.svg";
import bag from "@/../public/assets/icons/bag.svg";
import arrow from "@/../public/assets/icons/caret-down.svg";
import arrowside from "heroicons/16/solid/arrow-right-circle.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: profile,
};
const navigation = [
  { name: "Home", src: home, href: "/", current: false },
  {
    name: "Image Restore",
    src: imagerestore,
    href: "/transformation/add/restore",
    current: false,
  },
  {
    name: "Generative fill",
    src: gfill,
    href: "/transformation/add/fill",
    current: false,
  },
  {
    name: "Object Remove",
    src: objremove,
    href: "/transformation/add/remove",
    current: false,
  },
  {
    name: "Object Recolor",
    src: recolor,
    href: "/transformation/add/recolor",
    current: false,
  },
  {
    name: "Background Remove",
    src: bgremove,
    href: "/transformation/add/background",
    current: false,
  },
  {
    name: "Buy Credits",
    src: bag,
    href: "/transformation/add/background",
    current: false,
  },
];


export default function Example() {
  const pathname = usePathname();
  return (
    <>
      <SignedIn>
        <div className="min-h-full mb-4 border-b-2 border-gray-300">
          <Disclosure as="nav" className="">
            <div className="mx-auto max-w-7xl ">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex gap-2 items-center">
                    <Image alt="Promptifypics" src={logo} className="h-6 w-6" />
                    <span className="text-indigo-600 font-bold text-xl">
                      PromptifyPics
                    </span>
                  </div>
                </div>
                <div className="hidden md:block ">
                  <div className="ml-8 flex items-baseline space-x-2 rounded-2xl ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={`link rounded-lg ${
                          pathname === item.href
                            ? "bg-gray-900 brightness-100  text-white "
                            : "text-gray-400 hover:bg-indigo-700 hover:text-white"
                        }  px-3 py-2 text-sm font-medium flex`}
                      >
                        <Image src={item.src} alt="h" width={16} height={16} />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-center  border-2 px-2 py-2 rounded-lg border-gray-300">
                   
                         <UserButton showName />
                    
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block h-6 w-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden h-6 w-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`${
                      item.current
                        ? "bg-gray-900  rounded-lg"
                        : "text-gray-300 hover:bg-gray-700  hover:text-white"
                    } block  px-3 py-2 text-base font-medium`}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <UserButton showName />
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <DisclosureButton
                    as="a"
                    href="/"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Buy Credits
                  </DisclosureButton>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </SignedIn>
      <div className="flex justify-center items-center h-screen">
        <SignedOut>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-lg bg-cover text-white  px-8 py-4 "
          >
            <Link className="" href={"/sign-in"}>
              Login
            </Link>
          </Button>
        </SignedOut>
      </div>
    </>
  );
}
