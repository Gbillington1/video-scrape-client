import { VideoCameraIcon, SearchIcon } from '@heroicons/react/solid';

// we might have to handle this in the index.js file because it returns results
function handleSearch() {
    // make search request through our API
    console.log('searching...')
}

export default function SearchForm() {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Search videos</label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <VideoCameraIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="email" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="Donda music video" />
                </div>
                <button type="button" className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => handleSearch()}>
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}