import moment from 'moment';
import Image from 'next/image';

import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function VideoResult(props) {
    const date = moment(props.result.date).format('MMMM Do YYYY');

    return (
        <li className="group shadow-custom m-4 bg-white basis-1/2 transition duration-200 hover:bg-gray-200 md:basis-1/4">
            <a href="" className="inline hover:bg-red-400">

                {/* thumbnail */}
                <div className="relative w-full bg-gray-300 border-b-2 border-gray-200">
                    <div className="z-10 absolute bg-black top-0 left-0 w-full h-full opacity-0 transition duration-200 group-hover:opacity-10"></div>
                    <Image src={props.result.thumbnail} alt='thumbnail' width={640} height={360} layout="responsive" objectFit="contain" className="relative m-0 group-hover:bg-blend-darken" />
                </div>

                {/* labels & icons */}
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
                    </div>
                    <div className="ml-5 flex-shrink-0">
                        <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </a>
        </li>
    )
}