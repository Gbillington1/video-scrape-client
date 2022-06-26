import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import Results from '../components/Results';

export function getServerSideProps(ctx) {

    // could fetch results on the server side here (would have to make an endpoint in /pages/api and fetch it)

    return {
        props: {
            // results: [] // array of result objects from our API
        }
    };
}

export default function Home() {

    // could fetch results on the client side here

    return (
        <Layout title="Home" OGdescription="Free music for everyone" OGImagePath="some/path.png">
            <div className="w-screen h-full min-h-screen bg-gray-700 flex flex-col items-center">
                <div className="w-2/3 h-full">
                    {/* search form */}
                    <div className="h-1/5 flex justify-center items-center py-6">
                        <SearchForm />
                    </div>

                    {/* results */}
                    <div className="flex flex-col justify-center items-center space-y-4 overflow-auto">
                        <Results />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
