import Image from "next/image";
import Link from "next/link";
import { useWidth } from "@/hooks/useWidth";

const Logo = () => {
  const { isLargeScreen } = useWidth();

  return (
    <Link href="/" className="flex w-full items-center justify-center xl:justify-start">
      {isLargeScreen ? (
        <Image
          src="/images/header/logo_md.svg"
          alt="로고"
          width={0}
          height={0}
          className="h-[34px] w-[108px]"
          priority={true}
        />
      ) : (
        <Image
          src="/images/header/logo.svg"
          alt="로고"
          width={0}
          height={0}
          className="h-[28px] w-[24px]"
          priority={true}
        />
      )}
    </Link>
  );
};
export default Logo;