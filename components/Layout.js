import Head from 'next/head';

export default function Layout({ children, props }) {

    // const domain = "ourdomain.com"
    // const url = `https://${domain}`

    return (
        <>
            <Head>

                {/* ready for use when we need them */}
                {/* Facebook Meta Tags */}
                {/* <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={`${url}/${props.imagePath}`} /> */}


                {/* Twitter Meta Tags  */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={domain} />
                <meta property="twitter:url" content={url} />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:image" content={`${url}/${props.imagePath}`} /> */}

                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}