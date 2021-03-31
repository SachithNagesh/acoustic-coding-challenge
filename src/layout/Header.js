import React from 'react';
import AcousticLogo from '../assests/images/AcousticLogo'


function Header() {

    return (
        <div className="relative bg-gradient-to-r from-teal-500 to-cyan-600 " >
            <div className="relative z-20">
                <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-6 sm:px-6 sm:py-6 lg:px-8 md:justify-start md:space-x-10">
                    <div>
                        <a href="/" className="flex">
                            <span className="sr-only">Acoustic Logo</span>
                            <div className="h-10 text-white">
                                <AcousticLogo />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header;