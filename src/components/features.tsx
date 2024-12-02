import { ReactNode } from "preact/compat"

type BentoCardProps = {
  src: string;
  title: ReactNode;
  description: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {
            description && (
              <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )
          }
        </div>
      </div>
      {title}
    </div>
  )
}

const Features = () => {
  return (
    <section
      className="bg-black pb-52"
    >
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
            converge into an interconnected overlay experience on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>radi<b>n</b>t</>
            }
            description="A cross-plaform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 ga-7">
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
