import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <section className="relative bg-gray-900">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-8 md:h-10">

                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                    </div>

                    {/* Site navigation */}
                    <nav className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            <li>
                                <Link to='/blog' target="_blank" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Прайслист</Link>
                            </li>

                        </ul>

                    </nav>

                </div>
            </div>
        </section>
    );
}

export default TopBar;