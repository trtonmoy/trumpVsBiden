import Image from "next/image";
import Link from "next/link";
import dextool from "../public/dextools.svg";
import telegram from "../public/telegram.png";
import twitter from "../public/twitter.png";
import Biden from "./components/Biden";
import Trump from "./components/Trump";
import VoteDetails from "./components/VoteDetails";

export default function Home() {
  return (
    <main>
      <VoteDetails />

      <div className="flex gap-5 justify-center h-[300px] items-center">
        <Trump />
        <Biden />
      </div>

      <div className="flex justify-center gap-5 mt-5">
        <Link href="tglink">
          <Image
            className="w-[50px] h-[50px] "
            src={telegram}
            alt="telegram icon"
          />
        </Link>
        <Link href="ttlink">
          <Image
            className="w-[50px] h-[50px] "
            src={twitter}
            alt="twitter icon"
          />
        </Link>
        <Link href="chartlink">
          <Image
            className="w-[50px] h-[50px] "
            src={dextool}
            alt="dextool icon"
          />
        </Link>
      </div>
    </main>
  );
}
