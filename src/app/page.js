import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/assets/TealLogo.png"
        width={300}
        height={360}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </>
  );
}
