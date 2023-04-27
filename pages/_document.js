import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="es">
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>
            <body className="bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
