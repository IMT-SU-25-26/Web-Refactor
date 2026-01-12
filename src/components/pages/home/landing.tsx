import Image from "next/image";

export function LandingSection() {
  return (
    <div className="container-landing relative z-10 w-fit h-full flex items-center justify-center">
      <Image
        className="red-bubble z-8 top-0"
        src={"/home/su-imt-home-red-bubble.svg"}
        draggable="false"
        width={924}
        height={560}
        alt="red-bubble"
      />
      <Image
        className="dragon absolute z-9 w-48 h-auto bottom-16 -left-48"
        src={"/home/dragon.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="dragon"
      />
      <Image
        className="yellow-star-landing absolute z-9 w-40 h-auto top-1/3 -left-6"
        src={"/home/yellow-star-landing.webp"}
        draggable="false"
        width={628}
        height={380}
        alt="yellow-star-landing"
      />
      <Image
        className="green-spike-landing absolute z-9 w-60 h-auto top-0 left-0"
        src={"/home/green-spike-landing.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="green-spike-landing"
      />
      <Image
        className="crown absolute z-9 w-32 h-auto top-17 right-18"
        src={"/home/crown.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="crown"
      />
      <Image
        className="blue-line-landing absolute z-9 w-80 h-auto -top-15 -right-18"
        src={"/home/blue-line-landing.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="blue-line-landing"
      />
      <Image
        className="red-spike-landing absolute z-9 w-90 h-auto bottom-[25%] -right-[12.5%]"
        src={"/home/red-spike-landing.webp"}
        draggable="false"
        width={628}
        height={380}
        alt="red-spike-landing"
      />
      <Image
        className="green-arrow-landing absolute z-9 w-60 h-auto bottom-5 -right-2.5"
        src={"/home/green-arrow.png"}
        draggable="false"
        width={628}
        height={380}
        alt="green-arrow-landing"
      />
      <Image
        className="among-us absolute z-9 w-32 h-auto bottom-16 -right-48"
        src={"/home/among-us.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="mid-bubble"
      />
      <Image
        className="yellow-bubble absolute z-9 top-24 left-20"
        src={"/home/su-imt-home-yellow-bubble.svg"}
        draggable="false"
        width={628}
        height={380}
        alt="mid-bubble"
      />
      <Image
        className="front-bubble absolute z-10 top-30 left-32"
        src={"/home/su-imt-home-front-buble.svg"}
        draggable="false"
        width={547}
        height={334}
        alt="front-bubble"
      />
      <Image
        className="welcome absolute z-10 top-34 left-56"
        src={"/home/welcome.svg"}
        draggable="false"
        width={324.6}
        height={193.7}
        alt="su-welcome"
      />
      <Image
        className="demon-cat absolute z-10 top-50 left-38"
        src={"/home/demon-cat.png"}
        draggable="false"
        width={71}
        height={67}
        alt="demon-cat"
      />
      <Image
        className="stars-left absolute z-10 top-66 left-44"
        src={"/home/stars.svg"}
        draggable="false"
        width={45}
        height={37}
        alt="stars-left"
      />
      <Image
        className="stars-right absolute z-10 top-42 right-80"
        src={"/home/stars.svg"}
        draggable="false"
        width={45}
        height={37}
        alt="stars-right"
      />
      <Image
        className="to-text absolute z-10 top-60 left-[40.75%]"
        src={"/home/to.svg"}
        draggable="false"
        width={36.8}
        height={72.9}
        alt="to"
      />
      <Image
        className="su-imt-text absolute z-10 top-62 right-76"
        src={"/home/su-imt-text.svg"}
        draggable="false"
        width={426.5}
        height={126}
        alt="stars-right"
      />
      <Image
        className="title-background absolute z-10 right-76"
        src={"/home/your-creative-tech.svg"}
        draggable="false"
        width={426.5}
        height={126}
        alt="stars-right"
      />
    </div>
  );
}