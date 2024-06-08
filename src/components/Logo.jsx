import Image from "next/image";
import logo from "../images/2.svg"

export function Logo(props) {
  return (
    <Image src={logo} alt="Logo" width={350} height={350} />
  )
}