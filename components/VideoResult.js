import moment from 'moment';
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function VideoResult(props) {
    const date = moment(props.result.date).format('MMMM Do YYYY');

    return (
        <li>
            <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                            <div className="flex text-sm">
                                <p className="font-medium text-indigo-600 truncate">{props.result.title}</p>
                            </div>
                            <div className="mt-2 flex">
                                <div className="flex items-center text-sm text-gray-500">
                                    <CalendarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' />
                                    <p>
                                        <time dateTime={props.result.date}>{date}</time>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                            <div className="flex overflow-hidden -space-x-1">
                                {/* <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Dries Vincent">

                                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lindsay Walton">

                                        <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Courtney Henry">

                                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Tom Cook"> */}
                            </div>
                        </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </a>
        </li>
    )
}