import Link from 'next/link'

import Logo from '@/components/Logo'

import styles from './page.module.css'

export const metadata = {
  title: 'Rowan & Raven Yarn | Every colour has a story',
  description: 'Hand dyed yarn from London, Ontario, Canada.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://rowanandravenyarn.ca',
    title: 'Rowan & Raven Yarn | Every colour has a story',
    description: 'Hand dyed yarn from London, Ontario, Canada.',
    images: [
      {
        url: '/meta.jpg',
        alt: 'A bunch of yarn skeins in a circle on a table, each skein is a different colour that look make a rainbow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://rowanandravenyarn.ca',
    title: 'Rowan & Raven Yarn | Every colour has a story',
    description: 'Hand dyed yarn from London, Ontario, Canada.',
    images: [
      {
        url: '/meta.jpg',
        alt: 'A bunch of yarn skeins in a circle on a table, each skein is a different colour that look make a rainbow',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <Logo />
      <div>
        <h1 className={styles.title}>
          Rowan &amp; Raven Yarn is now closed indefinitely.
        </h1>
        <p>
          Nadia may be around on Instagram from time to time by that name if
          you’d like to stay in touch :) So long and thanks for all the fish!
        </p>
        <p>~ Nadia, founder and owner of Rowan & Raven Yarn</p>
        <div className={styles.linkList}>
          <Link
            href='https://www.instagram.com/rowanandravenyarn/'
            rel='noreferrer noopener'
            target='_blank'
            className={styles.link}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              aria-hidden={true}
              focusable={false}
              className={styles.svg}
            >
              <path
                fill={'currentColor'}
                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              />
            </svg>
            <span className={styles.invisible}>
              Visit Rowan & Raven Yarn on Instagram
            </span>
          </Link>
          <Link
            href='https://www.facebook.com/rowanandravenyarn'
            rel='noreferrer noopener'
            target='_blank'
            className={styles.link}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              aria-hidden={true}
              focusable={false}
              className={styles.svg}
            >
              <path
                fill={'currentColor'}
                d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
              />
            </svg>
            <span className={styles.invisible}>
              Visit Rowan & Raven Yarn on Facebook
            </span>
          </Link>
          <Link
            href='https://www.ravelry.com/people/Rustierose'
            rel='noreferrer noopener'
            target='_blank'
            className={styles.link}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              aria-hidden={true}
              focusable={false}
              className={styles.svg}
            >
              <path
                fill={'currentColor'}
                d='M498.252,234.223c-1.208-10.34-1.7-20.826-3.746-31a310.306,310.306,0,0,0-9.622-36.6,184.068,184.068,0,0,0-30.874-57.5,251.154,251.154,0,0,0-18.818-21.689,237.362,237.362,0,0,0-47.113-36.116A240.8,240.8,0,0,0,331.356,26.65c-11.018-3.1-22.272-5.431-33.515-7.615-6.78-1.314-13.749-1.667-20.627-2.482-.316-.036-.6-.358-.9-.553q-16.143.009-32.288.006c-2.41.389-4.808.925-7.236,1.15a179.331,179.331,0,0,0-34.256,7.1,221.5,221.5,0,0,0-39.768,16.355,281.385,281.385,0,0,0-38.08,24.158c-6.167,4.61-12.268,9.36-17.974,14.518C96.539,88.494,86.34,97.72,76.785,107.555a243.878,243.878,0,0,0-33.648,43.95,206.488,206.488,0,0,0-20.494,44.6,198.2,198.2,0,0,0-7.691,34.759A201.13,201.13,0,0,0,13.4,266.385a299.716,299.716,0,0,0,4.425,40.24,226.865,226.865,0,0,0,16.73,53.3,210.543,210.543,0,0,0,24,39.528,213.589,213.589,0,0,0,26.358,28.416A251.313,251.313,0,0,0,126.7,458.455a287.831,287.831,0,0,0,55.9,25.277,269.5,269.5,0,0,0,40.641,9.835c6.071,1.01,12.275,1.253,18.412,1.873a4.149,4.149,0,0,1,1.19.56h32.289c2.507-.389,5-.937,7.527-1.143,16.336-1.332,32.107-5.335,47.489-10.717A219.992,219.992,0,0,0,379.1,460.322c9.749-6.447,19.395-13.077,28.737-20.1,5.785-4.348,10.988-9.5,16.3-14.457,3.964-3.7,7.764-7.578,11.51-11.5a232.162,232.162,0,0,0,31.427-41.639c9.542-16.045,17.355-32.905,22.3-50.926,2.859-10.413,4.947-21.045,7.017-31.652,1.032-5.279,1.251-10.723,1.87-16.087.036-.317.358-.6.552-.9V236.005A9.757,9.757,0,0,1,498.252,234.223Zm-161.117-1.15s-16.572-2.98-28.47-2.98c-27.2,0-33.57,14.9-33.57,37.04V360.8H201.582V170.062H275.1v31.931c8.924-26.822,26.771-36.189,62.04-36.189Z'
              />
            </svg>
            <span className={styles.invisible}>
              Visit Rowan & Raven Yarn on Ravelry
            </span>
          </Link>
          <Link
            href='https://linktr.ee/Rowanandravenyarn'
            rel='noreferrer noopener'
            target='_blank'
            className={styles.link}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              aria-hidden={true}
              focusable={false}
              className={styles.svg}
            >
              <path
                fill={'currentColor'}
                d='M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z'
              />
            </svg>
            <span className={styles.invisible}>
              Visit Rowan and Raven Yarn on Linktr.ee
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
