import Image from "next/image";
import logo from "../images/1.svg"

export function Logo(props) {
  return (
    <Image src={logo} alt="Logo" width={230} height={230} />
  )
}