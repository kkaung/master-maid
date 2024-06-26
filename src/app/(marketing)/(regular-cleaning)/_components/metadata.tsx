import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Regular Cleaning Service in ${location} - ${siteConfig.title}`,
        description: `Enjoy a Sparkling Clean with Regular ${location} Cleaning Service. 200% Guranteed Cleaning Service. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
