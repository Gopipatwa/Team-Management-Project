/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import Profile from '../Admin/Profile'
import Setting from '../Admin/Setting'
import ChangePwd from '../Admin/ChangePwd'
import { NavDropdown } from 'react-bootstrap'
import './Tabs.scss'
import NavBarMenuItem from './NavBarMenuItem'
import { Logout } from '../ApiRouter/ApiRouter'
import { useNavigate } from 'react-router-dom';


const navigation = [
    {
        name: 'Ledger',
        // current: true,
        submenu: [
            { name: 'Ledger Entry', href: '/ledger-entry' },
            { name: 'Company Ledger', href: '/company-ledger' }
        ]
    },
    {
        name: 'Setting',
        submenu: [
            { name: 'Conversion', href: '/conversion' },
            { name: 'User Configuration', href: '/user' },
            { name: 'Product Defination', href: '/product-defination' },
            { name: 'New User', href: '/new-user' }
        ]
    },
    {
        name: 'Trade',
        submenu: [
            { name: 'Trade Backup', href: '/trade-backup' },
            { name: 'Manual Trade', href: '/manual-trade' },
            { name: 'Export Tradebook', href: '/export-tradebook' }
        ]
    },
    {
        name: 'Charts',
        submenu: [
            { name: 'User MTM', href: '/usermtm' },
            { name: 'Exchange MTM', href: '/exchange-mtm' },
            { name: 'Margin Summary', href: '/margin-summary' }
        ]
    },
    // {
    //     name: 'Export',
    //     submenu: [
    //         { name: 'Csv', href:'/cvs' },
    //         { name: 'Download Pdf', href:'/download-pdf' },
    //     ]
    // },
    // { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
    // const [showSidebar, setShowSidebar] = useState(false);
    console.log(JSON.parse(props.userinfo).message[0].first_name);

    const [profileShow, setProfileShow] = useState(false);//profile

    const [changeShow, setChangeShow] = useState(false);//change pwd

    const [setting, setSetting] = useState(false)// setting
    const navigate = useNavigate();



    // const logout = (e) => {
    //     e.preventDefault();
    //     Logout();
    //    localStorage.clear(); //clear all localstorage
    //    localStorage.removeItem("token"); //remove one item
    //     // localStorage.removeItem("token")
    //     console.log("token1",localStorage.removeItem("token"));
    //     // console.log(Logout())
    //     navigate('/')

    // }

    const logout = (e) => {
        e.preventDefault();
        // Logout()
        localStorage.removeItem("token");
        localStorage.removeItem("userdata");
        // localStorage.clear(); 
        navigate('/', { replace: true })

    }



    return (
        <Disclosure as="nav" className=" shadow-md navbar-tab">
            {({ open }) => (
                <>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 pd-navbar">
                        <div className="relative flex items-center justify-between h-12">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden menu-icon ">
                                {/* Mobile menu button*/}
                                {/* <Disclosure.Button className="inline-flex items-center justify-center  rounded-md text-gray-400 hover:text-white"> */}
                                <Disclosure.Button className="text-gray-400">
                                    {/* <span className="sr-only">Open main menu</span> */}
                                    {open ? (
                                        <XIcon className="block h-6 w-6 outline-none border-none" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start relative">
                                <div className="flex-shrink-0 flex items-center logo">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="http://94.200.161.170:9500/static/assets/img/Cosmic-Trades-White%20-Logo.png"
                                        alt="LogoRMS"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="http://94.200.161.170:9500/static/assets/img/Cosmic-Trades-White%20-Logo.png"
                                        alt="LogoRMS"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">

                                        <ul className="menus">
                                            {navigation.map((menu, index) => {
                                                const depthLevel = 0;
                                                return <NavBarMenuItem items={menu} key={index} depthLevel={depthLevel} />;
                                            })}
                                        </ul>

                                        {/* {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))} */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 user-right">
                                <button
                                    type="button"
                                    className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <span className='text-400 user'>{JSON.parse(props.userinfo).message[0].first_name}</span>
                                <div className="dashboard-tab ">
                                    <NavDropdown title=
                                        {
                                            <span className="img-1">
                                                <img className="avatar-img" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </span>
                                        }
                                        id="collasible-nav-dropdown" className="nav-item">
                                        <div>
                                            <div className="menu">
                                                <div className="dropdown-body">
                                                    <ul className="list-inline">

                                                        <li className="inline-item">

                                                            <NavDropdown.Item href='#' className="single-item" onClick={() => setProfileShow(true)}>


                                                                <span className=''>
                                                                    Profile
                                                                </span>

                                                            </NavDropdown.Item>
                                                            <Profile
                                                                show={profileShow}
                                                                onHide={() => setProfileShow(false)}
                                                            />

                                                        </li>
                                                        <li className="inline-item">
                                                            <NavDropdown.Item href='#' className="single-item" onClick={() => setChangeShow(true)}>

                                                                <span>Change Password</span>

                                                            </NavDropdown.Item>

                                                            <ChangePwd
                                                                show={changeShow}
                                                                onHide={() => setChangeShow(false)}
                                                            />

                                                        </li>
                                                        <li className="inline-item">
                                                            <NavDropdown.Item href='#' className="single-item" onClick={() => setSetting(true)}>
                                                                <span >Settings</span>
                                                            </NavDropdown.Item>

                                                            <Setting
                                                                show={setting}
                                                                onHide={() => setSetting(false)}
                                                            />
                                                        </li>

                                                        <li className="inline-item">
                                                            <NavDropdown.Item className="single-item log-out" onClick={logout} >
                                                                <span >Log Out</span>
                                                            </NavDropdown.Item>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </div>



                                {/* <Menu as="div" className="ml-3 relative z-20">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div onClick={() => setProfileShow(true)}>
                                                        <div
                                                            // href="#"
                                                            className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-300')}

                                                        >
                                                            Your Profile
                                                        </div>
                                                        <Profile
                                                            show={profileShow}
                                                            onHide={() => setProfileShow(false)}
                                                        />

                                                    </div>


                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-300')}
                                                        onClick={() => setChangeShow(true)}
                                                    >
                                                        Change Password
                                                    </a>

                                                )}
                                            </Menu.Item>
                                            <Menu.Item >
                                                {({ active }) => (
                                                    <a
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-gray-300')}
                                                        onClick={() => setSetting(true)}
                                                    >
                                                        Settings
                                                    </a>
                                                )}

                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-700' : '', 'block px-4 py-2 text-sm text-red-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="left-0 p-3 t-0 w-100 h-auto shadow-md bg-gray-800 text-white absolute h-full space-y-1 z-20 ">
                            {/* {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'p-10 pr-20 text-white' : 'text-gray-500 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>

                            ))} */}

                            <ul className="menus">
                                {navigation.map((menu, index) => {

                                    const depthLevel = 0;
                                    return <NavBarMenuItem items={menu} key={index} depthLevel={depthLevel}
                                        className={
                                            classNames(
                                                menu.current ? 'p-10 pr-20 text-white' : 'text-gray-500 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium')}
                                    />;
                                })}
                            </ul>

                        </div>

                    </Disclosure.Panel>

                </>
            )}

        </Disclosure>

    )
}
