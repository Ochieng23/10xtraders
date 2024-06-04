"use client";
import { useState, useRef } from "react";

import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { NavLink } from "./Navlink";
import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MobileNavLink({ href, children }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={href}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition>
        <Transition.Child
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition>
    </Popover>
  );
}
export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = (e) => {
    if (
      !dropdownRef.current.contains(e.relatedTarget) &&
      !buttonRef.current.contains(e.relatedTarget)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleFocus = () => setIsDropdownOpen(true);
  const handleBlur = (e) => {
    if (
      !dropdownRef.current.contains(e.relatedTarget) &&
      !buttonRef.current.contains(e.relatedTarget)
    ) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white py-4 shadow-md sm:py-0">
      <Container>
        <nav className="flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden ml-28 md:flex md:gap-x-6 items-center">
              <NavLink href="#features">Trade Bot Builder</NavLink>
              <div
                className="relative"
                onMouseLeave={handleMouseLeave}
                onBlur={handleBlur}
              >
                <div
                  className="inline-flex items-center gap-x-1.5 text-sm font-semibold text-gray-900 cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onFocus={handleFocus}
                  ref={buttonRef}
                >
                  Insights
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 z-10 mt-0 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={dropdownRef}
                  >
                    <div className="py-1">
                      <div className="relative group">
                        <Link
                          href="#insight1"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Stock
                          <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                        </Link>
                        <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                          <Link
                            href="#insight1item1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Tracker
                          </Link>
                          <Link
                            href="#insight1item2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Screener
                          </Link>
                          <Link
                            href="#insight1item2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Technical Analysis
                          </Link>
                        </div>
                      </div>
                      <div className="relative group">
                        <Link
                          href="#insight2"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Forex
                          <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                        </Link>
                        <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                          <Link
                            href="#insight2item1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Tracker
                          </Link>
                          <Link
                            href="#insight2item2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Screener
                          </Link>
                          <Link
                            href="#insight2item3"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Technical Analysis
                          </Link>
                          <Link
                            href="#insight2item4"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sentiment Analysis
                          </Link>
                        </div>
                      </div>
                      <div className="relative group">
                        <Link
                          href="#insight3"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Crypto
                          <ChevronRightIcon className="h-5 w-5 ml-2 text-gray-400 inline-block" />
                        </Link>
                        <div className="absolute left-full top-0 hidden ml-1 w-48 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
                          <Link
                            href="#insight3item1"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Tracker
                          </Link>
                          <Link
                            href="#insight3item2"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Screener
                          </Link>
                          <Link
                            href="#insight3item3"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Technical Analysis
                          </Link>
                          <Link
                            href="#insight3item4"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sentiment Analysis
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <NavLink href="#videos">Videos</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button
              className="hidden md:block lg:inline"
              href="/register"
              color="blue"
            >
              <span>
                Get started <span className="hidden lg:inline"></span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
