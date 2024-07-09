import Image from "next/image";
import greetingsIllustration from "../../../public/assets/illustrations/greetings.png";
import questionMark from "../../../public/assets/icons/question-mark.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Greetings() {
  return (
    <div className="relative mx-auto flex justify-center items-center w-screen h-auto py-12 lg:p-0">
      <div className="w-full overflow-x-hidden flex flex-col-reverse lg:flex-row justify-around items-center h-full">
        <div className="flex flex-col items-center justify-center p-8 lg:p-24 w-full lg:w-1/2 h-full overflow-x-hidden text-wrap break-words">
          <h1
            className="text-[70px] max-w-[500px] font-bold text-gray-900 leading-tight text-center "
            style={{ fontVariationSettings: "'wght' 900" }}
          >
            Success!
            <br />
            <span className="text-primary">You&apos;re All Set!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Thank you for installing our extension. <br />
            Happy browsing!
          </p>
          <div className="py-8">
            <Button
              className="px-6 py-6 gap-2 bg-primary hover:bg-[#fc9c26] font-bold text-base"
              asChild
            >
              <Link href="/docs" target="_blank">
                <Image
                  src={questionMark}
                  alt="Question Mark"
                  width={24}
                  height={24}
                />
                Read Docs
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={greetingsIllustration}
            alt="hero"
            className="max-w-none w-3/4 lg:w-[70vw] relative lg:transform drop-shadow-md select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
