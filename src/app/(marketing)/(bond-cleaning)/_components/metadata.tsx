import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 End Of Lease Cleaning Service in ${location} - Bond Cleaning ${location}`,
        description: `Top rated vacate cleaning service in ${location}. Get Your Bond Back with 100% Guaranteed Bond Cleaning. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
