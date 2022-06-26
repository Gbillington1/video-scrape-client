import VideoResult from './VideoResult';
import { resultsData } from '../mock_data/mockResults';

export default function Results() {
    return (
        // {/* This example requires Tailwind CSS v2.0+ */ }
        // <div className="w-full" >
        <ul role="list" className="divide-y divide-gray-200 w-full flex flex-col justify-cetner items-center flex-wrap list-none md:flex-row md: justify-between">
            {/* change to render in a grid */}
            {/* <div className="w-full flex justify-between items-center" key={i}> */}
            {resultsData.map((result, i) => (
                <VideoResult key={i} result={result} />
            ))}
            {/* </div> */}
        </ul>
        // </div>
    )
} 