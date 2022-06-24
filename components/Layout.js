import Head from 'next/head';

export default function Layout({ children, title, OGdescription, OGImagePath }) {

	// const domain = "ourdomain.com"
	// const url = `https://${domain}`

	return (
		<>
			<Head>

				{/* ready for use when we need them */}
				{/* Facebook Meta Tags */}
				{/* <meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={OGdescription} />
				<meta property="og:image" content={`${url}/${OGimagePath}`} /> */}


				{/* Twitter Meta Tags  */}
				{/* <meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={domain} />
				<meta property="twitter:url" content={url} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={OGdescription} />
				<meta name="twitter:image" content={`${url}/${OGimagePath}`} /> */}

				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{children}
			</main>
		</>
	)
}