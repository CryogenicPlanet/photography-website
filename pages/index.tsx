import Link from 'next/link'
import Img from 'next/image'
import { IGetPlaiceholderReturn } from 'plaiceholder'
import { getAllImages } from '@utils/getAll'
import { Instagram } from '@components/Instagram'

export default function IndexPage({
  images
}: {
  images: IGetPlaiceholderReturn[]
}) {
  // console.log({ images })
  return (
    <>
      <div className="h-full min-h-screen flex bg-gray-900">
        {/* Narrow sidebar */}

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="w-full mx-auto">
                {/* Gallery */}
                <section className="" aria-labelledby="gallery-heading flex">
                  <ul role="list" className="grid grid-cols-2 sm:grid-cols-4">
                    {images.map((image, index) => (
                      <li key={index} className="relative">
                        <Link href={`/photo/[id]`} as={`/photo/${index}`}>
                          <div className="flex items-center h-full w-full cursor-pointer">
                            <div
                              className={
                                'group block w-full max-h-96 object-cover object-center overflow-hidden'
                              }>
                              <Img
                                placeholder="blur"
                                {...image.img}
                                blurDataURL={image.base64}
                                quality={40}
                                className={`object-cover ${
                                  image.img.height > 3500
                                    ? '-translate-y-96'
                                    : ''
                                } `}
                              />
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="h-64"></div>
                </section>
              </div>
            </main>
          </div>
        </div>

        <div className="fixed w-full h-screen flex items-end pointer-events-none">
          <div className="sticky bottom-0 left-0 w-full items-center justify-end bg-gray-800 py-10 flex px-20 rounded-t-lg pointer-events-auto">
            <div className="flex-1">
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/cryogenicplanet/">
                  <Instagram></Instagram>
                </a>
              </div>
            </div>
            <div className="">
              <p className="text-gray-200 text-2xl font-extrabold text-opacity-50 capitalize">
                by CryogenicPlanet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  // Get all posts again

  try {
    const images = await getAllImages()

    return {
      props: {
        images
      }
    }
  } catch (err) {
    console.error(err)
    return {
      redirect: {
        destination: '/404'
      }
    }
  }
}
