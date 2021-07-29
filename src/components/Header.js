import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import { search } from 'material-icons';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Header = ({ loggedInUser, setLoggedInUser }) => {

    const logOutUser = () => {
        setLoggedInUser(null)
        localStorage.removeItem("authToken")
    }

    return (
        <Popover className="relative bg-white">
            {({ open }) => (
                <>
                    <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
                    <div className="relative z-20">
                        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                            <div>
                                <a href="#" className="flex">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto sm:h-10"
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                                <Popover.Group as="nav" className="flex space-x-10">
                                    <Popover>
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    )}
                                                >
                                                    <span>Women</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-600' : 'text-gray-400',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition >
                                                    <Popover.Panel
                                                        static
                                                        className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                                                    >
                                                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Tops
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Bottoms
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Dresses & Jumpsuits
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Sleepwear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Indian Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Sportswear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Accessories
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Shoes
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Winter Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Essentials
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Face Mask
                                                                </a>
                                                            </div>

                                                        </div>

                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                    <Popover>
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    )}
                                                >
                                                    <span>Men</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-600' : 'text-gray-400',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition >
                                                    <Popover.Panel
                                                        static
                                                        className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                                                    >
                                                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Tops
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Bottoms
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Sportswear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Accessories
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Indian Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    shoes
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Winter Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Face Mask
                                                                </a>
                                                            </div>

                                                        </div>

                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>

                                    <Popover>
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    )}
                                                >
                                                    <span>Girls</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-600' : 'text-gray-400',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition >
                                                    <Popover.Panel
                                                        static
                                                        className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                                                    >
                                                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Tops
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Bottoms
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Essentials
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Accessories
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Indian Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Shoes
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Winter Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Sleepwear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Face Mask
                                                                </a>
                                                            </div>

                                                        </div>

                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>

                                    <Popover>
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open ? 'text-gray-900' : 'text-gray-500',
                                                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                    )}
                                                >
                                                    <span>Boys</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? 'text-gray-600' : 'text-gray-400',
                                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition >
                                                    <Popover.Panel
                                                        static
                                                        className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                                                    >
                                                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Tops
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Bottoms
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Essentials
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Accessories
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Shoes
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Indian Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Winter Wear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Sleepwear
                                                                </a>

                                                                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                                                    Face Mask
                                                                </a>
                                                            </div>

                                                        </div>

                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </Popover.Group>
                                <div class="shadow flex">
                                    <input class="w-full rounded p-2" type="text" placeholder="What are you looking for?" />
                                    <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-3 hover:text-blue-400">
                                        <i class="material-icons">search</i>
                                    </button>
                                </div>

                                

                                <div className="flex items-center md:ml-12">
                                    {loggedInUser ?
                                        <>

                                            <div className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                onClick={() => logOutUser()}

                                            >
                                                Logout
                                            </div>

                                        </> : <><Link to="/login">
                                            <div className="text-base font-medium text-gray-500 hover:text-gray-900">
                                                Login
                                            </div>
                                        </Link>
                                            <Link to="/register">
                                                <div className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                >
                                                    Register
                                                </div>
                                            </Link>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    <Transition>
                        <Popover.Panel
                            focus
                            static
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 sm:pb-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="data:image/jpeg;base64,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"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6 sm:mt-8">
                                        <nav>
                                            <div className="mt-8 text-base">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    {' '}
                                                    View all products <span aria-hidden="true">&rarr;</span>
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            Dresses
                                        </a>

                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            Sleepwear
                                        </a>

                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            Indian Wear
                                        </a>

                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            Sportswear
                                        </a>

                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            shoes
                                        </a>

                                        <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            Face Mask
                                        </a>
                                    </div>

                                    <div className="mt-6">
                                        {loggedInUser ?
                                            <div
                                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                onClick={logOutUser}
                                            >
                                                Logout
                                            </div> :
                                            <>
                                                <Link to="/register">
                                                    <div
                                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                                    >
                                                        Register
                                                    </div>
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?{' '}
                                                    <Link to="/login">
                                                        <div className="text-indigo-600 hover:text-indigo-500">
                                                            Login
                                                        </div>
                                                    </Link>
                                                </p>
                                            </>}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}