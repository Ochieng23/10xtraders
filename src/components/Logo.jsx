import Image from "next/image";
import Link from "next/link";
import logo from "../images/6.svg";

export function Logo(props) {
  return (
    <Link href="https://10xtraders.ai/home/ ">
      <Image src={logo} alt="Logo" width={200} height={200} />
    </Link>
  );
}
