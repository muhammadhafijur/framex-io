import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardHome = () => {
    return (
        <div>
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <NavLink
                                to="/home"
                                className="flex font-bold text-3xl items-center justify-center pt-6"
                            >
                                FrameX
                            </NavLink>
                            <nav className="mt-6">
                                <div>
                                    <Link
                                        to="/dashboard"
                                        className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800"
                                    >
                                        <span className="text-left">
                                            <svg
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                viewBox="0 0 2048 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">Dashboard</span>
                                    </Link>

                                    <Link
                                        to="/dashboard/my-orders"
                                        className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"

                                    >
                                        <span className="text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">My Orders</span>
                                    </Link>

                                    <Link
                                        to="/dashboard/add-services"
                                        className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                                    >
                                        <span className="text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Add Services
                                        </span>
                                    </Link>
                                    <Link
                                        to="/dashboard/make-admin"
                                        className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"

                                    >
                                        <span className="text-left">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">Make Admin</span>
                                    </Link>


                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                                    <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                        <div className="relative flex items-center w-full lg:w-64 h-full group">
                                            <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                                <svg
                                                    fill="none"
                                                    className="relative w-5 h-5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <svg
                                                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                            </svg>
                                            <input
                                                type="text"
                                                className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                                                placeholder="Search"
                                            />
                                            <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                        <a href="/" className="block relative">
                                            <img
                                                alt="profil"
                                                src="/images/person/1.jpg"
                                                className="mx-auto object-cover rounded-full h-10 w-10 "
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* outlet for dashboard */}
                        <div className="flex-1 p-2 min-h-screen">
                            <Outlet />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardHome;
