import { VideoCameraIcon, SearchIcon } from '@heroicons/react/solid';

export default function SearchForm() {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Search videos</label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* Heroicon name: solid/users */}
                        {/* <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg> */}
                        <VideoCameraIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="email" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="Donda music video" />
                </div>
                <button type="button" className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}