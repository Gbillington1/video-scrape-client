import VideoResult from './VideoResult';
import { resultsData } from '../mock_data/mockResults';

export default function Results() {
    return (
        // {/* This example requires Tailwind CSS v2.0+ */ }
        <div className="bg-white shadow overflow-hidden sm:rounded-md" >
            <ul role="list" className="divide-y divide-gray-200">
                {resultsData.map((result, i) => (
                    <VideoResult key={i} result={result} />
                ))}
            </ul>
        </div>
    )
}