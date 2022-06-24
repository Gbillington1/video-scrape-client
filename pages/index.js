import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

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
            <div className="w-screen h-screen max-h-screen bg-green-300 flex justify-center items-center">

                {/* search form */}
                <SearchForm />

                {/* results */}
                <div className="flex flex-col items-center justify-start">

                </div>

            </div>
        </Layout>
    )
}
