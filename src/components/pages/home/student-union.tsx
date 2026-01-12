import Image from "next/image";
import Link from "next/link";

export function StudentUnionSection() {
  return (
    <div className="container-student-union mt-15 relative z-10 min-h-screen min-w-screen flex flex-col gap-8 items-center justify-center">
      <Image
        className="hidden sm:flex sobekan absolute z-1 w-full h-full bottom-0 left-0"
        src={"/home/pink-big-fracture.svg"}
        draggable="false"
        width={1920}
        height={1080}
        alt="sobekan"
      />
      <Image
        className="flex sm:hidden sobekan absolute z-1 w-full h-full bottom-0 left-0"
        src={"/home/mobile-sobekan.svg"}
        draggable="false"
        width={1920}
        height={1080}
        alt="sobekan"
      />
      <h1 className="what-is-su-imt-text mt-[-10%] relative z-10 text-6xl font-bold text-white font-family-impact">
        WHAT IS SU IMT
      </h1>
      <p className="su-imt-description relative z-10 text-xl text-white font-bold max-w-2xl text-center">
        Student Union Information and Multimedia Technology is a student-led
        organization that serves as a platform for students of the
        Informatics study program to grow professionally, socially, and
        academically. SU IMT UC organizes various events, workshops, and
        initiatives to enhance student engagement, develop leadership
        skills, and support innovation in technology.
      </p>
      <Link
        href="/about"
        className="learn-more-button relative font-family-impact z-10 text-4xl bg-[#0E54B2] hover:bg-[#2826c3] p-6 px-10 rounded-2xl text-white font-bold"
      >
        Learn More
      </Link>
      <Image
        className="hidden circle-stick sm:flex absolute z-2 w-1/5 top-[27.5%] left-0"
        src={"/home/circle-stick.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-stick-left"
      />
      <Image
        className="hidden circle-on-stick laptop-on-stick sm:flex absolute z-3 w-1/5 top-[27.5%] left-0"
        src={"/home/laptop-on-stick.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-stick-left"
      />
      <Image
        className="hidden book-laptop sm:flex absolute z-2 w-[22.5%] top-[42.5%] left-0"
        src={"/home/book-laptop.png"}
        draggable="false"
        width={422}
        height={376}
        alt="book-laptop"
      />

      <Image
        className="hidden camera sm:flex absolute z-2 w-1/5 top-[27.5%] right-0"
        src={"/home/camera.png"}
        draggable="false"
        width={422}
        height={376}
        alt="camera"
      />
      <Image
        className="hidden circle-background sm:flex absolute z-1 w-1/5 top-[27.5%] right-0"
        src={"/home/circle-background-right.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-foreground"
      />
      <Image
        className="hidden circle-foreground sm:flex absolute z-1 w-1/5 top-[23.5%] -right-4"
        src={"/home/circle-foreground-right.svg"}
        draggable="false"
        width={422}
        height={376}
        alt="circle-background"
      />

      <Image
        className="sobekan-biru-kiri absolute z-0 w-[32.5%] top-[-22.5%] -left-[5%]"
        src={"/home/sobekan-bottom-left.png"}
        draggable="false"
        width={422}
        height={376}
        alt="sobekan-left"
      />
      <Image
        className="sobekan-biru-kanan absolute rotate-y-180 z-0 w-[32.5%] top-[-22.5%] -right-[5%]"
        src={"/home/sobekan-bottom-left.png"}
        draggable="false"
        width={422}
        height={376}
        alt="sobekan-right"
      />
    </div>
  );
}