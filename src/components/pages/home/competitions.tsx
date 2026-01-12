import Image from "next/image";
import Link from "next/link";

export function CompetitionsSection() {
  return (
    <div className="flex competition-wrapper relative w-screen flex-col justify-start items-center pb-[15%]">
      <h1 className="competition-text font-family-gill-condensed-bold font-extrabold text-6xl">
        COMPETITIONS
      </h1>
      <div className="competition-right-left-container mt-14 w-full h-full flex gap-40 justify-center items-center">
        <div className="w-full h-full relative z-10 competition-left-container">
          <div className="relative z-30 block sm:hidden mobile-competition-container">
            <div
              className="rotate-2 -top-10 left-[5.5%] absolute mobile-competition-background min-h-50 min-w-92 bg-white
                shadow-[8px_8px_5px_-5px_rgba(0,0,0,0.5)]"
            >
              <div className="mobile-competition-content z-25 relative w-full h-full flex flex-col justify-center items-center p-4">
                <Image
                  className="competition-mobile-handle absolute -top-16 left-[45%] w-18 rotate-90"
                  src={"/home/handle-card.png"}
                  width={500}
                  height={500}
                  alt="handle-card"
                />
                <Image
                  className="competition-mobile-star absolute -top-18 right-[-8%] w-30"
                  src={"/home/star-card.png"}
                  width={500}
                  height={500}
                  alt="star-card"
                />
                <div className="image-mobile-container w-full h-22 bg-[url('/home/comp.jpg')] bg-cover bg-no-repeat"></div>
                <h1 className="competition-mobile-title-text font-family-impact text-2xl w-full text-left">
                  TECHNODAY 2025
                </h1>
                <p className="competition-mobile-description-text w-full text-xs">
                  Ready to show off your skills? Technoday kembali hadir di
                  tahun 2025 dengan tema &quot; Stellar Patterns to Real
                  World Solutions!&quot;
                </p>
                <p className="competition-mobile-member-text text-xs text-end w-full">
                  Team: 3 Members
                </p>
              </div>
            </div>
          </div>
          <Image
            className="red-mobile-spinner flex sm:hidden absolute z-2 bottom-[-25%] right-[-22.5%] w-[55%]"
            src={"/home/red-spinner.svg"}
            width={500}
            height={500}
            alt="round-spike"
          />
          <Image
            className="compete-bg relative w-[85%] h-auto"
            src={"/home/compete-bg.svg"}
            width={500}
            height={500}
            alt="background-compete"
          />
          <Image
            className="hidden sm:flex absolute z-10 w-full h-auto top-0 left-5"
            src={"/home/compete.svg"}
            draggable="false"
            width={500}
            height={500}
            alt="competition-left"
          />
          <Image
            className="hidden sm:flex light-bulp absolute z-10 w-[35%] h-auto top-[-60%] left-0"
            src={"/home/light-bulp.webp"}
            draggable="false"
            width={500}
            height={500}
            alt="competition-left"
          />
          <div className="join-now-text-container absolute w-87.5 h-30 bottom-[-5%] left-[47.5%] bg-[#0E54B2] p-4 px-8 rounded-2xl z-2">
            <div className="bg-[#ED427C] flex items-center justify-center w-full h-full absolute left-[5%] top-[-10%] rounded-2xl z-[-1]">
              <h1 className="join-now-text font-family-impact text-6xl text-center text-white">
                <Link href="/competitions">Join Now</Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex relative competition-right-container w-full h-full">
          <div className="competition-right-background relative z-2 rotate-[-2.5deg] w-160 h-110 bg-white flex flex-col gap-4 p-4 shadow-[12px_12px_5px_-5px_rgba(0,0,0,0.25)]">
            <Image
              className="competition-right-handle absolute top-[-25%] right-[40%] w-30 rotate-90"
              src={"/home/handle-card.png"}
              width={500}
              height={500}
              alt="handle-card"
            />
            <Image
              className="competition-star absolute top-[-15%] right-[-8%] w-40"
              src={"/home/star-card.png"}
              width={500}
              height={500}
              alt="star-card"
            />
            <Image
              className="round-spike absolute bottom-[-30%] right-[75%] w-[40%]"
              src={"/home/round-spike.webp"}
              width={500}
              height={500}
              alt="round-spike"
            />
            <div className="image-container bg-gray-300 w-full h-1/2 bg-[url('/home/comp.jpg')] bg-cover bg-no-repeat"></div>
            <h1 className="competition-title-text font-family-impact text-4xl">
              TECHNODAY 2025
            </h1>
            <p className="competition-description-text text-xl">
              Ready to show off your skills? Technoday kembali hadir di
              tahun 2025 dengan tema &quot; Stellar Patterns to Real World
              Solutions!&quot;
            </p>
            <p className="competition-member-text text-xl text-end">
              Team: 3 Members
            </p>
          </div>
          <Image
            className="red-spinner absolute bottom-[-30%] right-[-10%] w-[35%]"
            src={"/home/red-spinner.svg"}
            width={500}
            height={500}
            alt="round-spike"
          />
        </div>
      </div>
      <Image
        src={"/home/green-line.svg"}
        alt="green-line"
        width={900}
        height={900}
        className="green-line absolute right-[-10%] top-[-45%] w-[40%]"
      />
    </div>
  );
}