import Head from "next/head";

export interface MetaProps {
    title: string,
    description: string,
}

const Meta = ({ title, description }: MetaProps ) => {
    return <Head>
        <title>Simplex Dictionary - { title }</title>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="description" content={ description } />
        <meta name="keywords" content={`simplex, ${ title }`} />
    </Head>
}

export default Meta;