import Image from "next/image";

export function FooterSection() {
  return (
    <>
      <div className="relative z-2 w-full">
        <Image
          className="green-home-footer-left w-[30%] -top-60 h-auto absolute left-0"
          src={"/home/green-home-footer-left.svg"}
          draggable="false"
          width={1920}
          height={1080}
          alt="footer"
        />
        <Image
          className="yellow-spike-right w-[15%] -top-80 h-auto absolute right-0"
          src={"/home/yellow-spike-right.png"}
          draggable="false"
          width={1920}
          height={1080}
          alt="footer"
        />
      </div>

      <div className="relative z-10 h-[10vh] w-screen bg-[#E44843]"></div>
    </>
  );
}