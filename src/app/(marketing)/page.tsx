import React from 'react';
import { BreadcrumbJsonLd, OrganizationJsonLd } from 'next-seo';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import Commitment from '@/components/commitment';
import { absoluteUrl } from '@/lib/utils';
import { siteConfig } from '@/configs/site';
import Services from './_components/services';
import About from '@/components/about';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Reviews from './_components/reviews';
import FAQs from './_components/faqs';
import Checklist from './_components/checklist';
import Features from './_components/features';
import Gurantee from './_components/gurantee';
import LatestBlog from './_components/latest-blog';

import Featuring from './_components/featuring';
import SocialVideos from '@/components/social-videos';
import { ServicesDialog } from '@/components/services-dialog';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `Brisbane's Top-Rated House Cleaning Service`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our expert cleaners. Book online in 60 seconds!`,
};

export default function Page() {
    return (
        <>
            <Shell>
                <Hero />
                <Reviews location="Brisbane" />
                <HowWork />
                <Features />
                <Services />
                <Checklist />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
            </Shell>
            <OrganizationJsonLd
                useAppDir
                id={absoluteUrl('')}
                name={siteConfig.title}
                description={siteConfig.description}
                legalName={siteConfig.name}
                url={absoluteUrl('')}
                logo={absoluteUrl('/')}
                sameAs={[
                    siteConfig.links.facebook,
                    siteConfig.links.linkin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter,
                    siteConfig.links.youtube,
                ]}
                address={{
                    streetAddress: '401 / 249 George St',
                    addressLocality: 'Waterloo',
                    addressRegion: 'NSW',
                    postalCode: '2017',
                    addressCountry: 'AU',
                }}
            />
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={[
                    {
                        position: 1,
                        name: 'Home',
                        item: absoluteUrl(''),
                    },
                ]}
            />
        </>
    );
}