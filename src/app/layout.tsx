import { ReactNode } from 'react';
import { Providers } from './providers';

export type RootLayoutProps = {
    children: ReactNode
}

export default async function RootLayout(props: RootLayoutProps) {

    const { children } = props;

    return (
        <html suppressHydrationWarning>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}