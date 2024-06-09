import Image from "next/image";
import logo from "../images/6.svg";

export function Logo(props) {
  return <Image src={logo} alt="Logo" width={200} height={200} />;
}
