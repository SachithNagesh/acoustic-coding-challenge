import React from 'react'

const Error404 = () => {

    return (
    <div className="min-h-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div className="max-w-md">
                <div className="text-5xl font-dark font-bold">404</div>
                <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page. </p>
                <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a href="/" className="px-4 inline py-4 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600  hover:from-teal-700 hover:to-cyan-800">back to homepage</a>
            </div>
        </div>
    </div>
    )
}

export default Error404;