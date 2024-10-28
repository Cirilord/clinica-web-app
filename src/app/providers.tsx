'use client';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export type ProvidersProps = {
    children: ReactNode
}

export function Providers(props: ProvidersProps) {

    const { children } = props;

    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute='class' disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    );
}