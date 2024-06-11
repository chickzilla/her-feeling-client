import Link from "next/link";

export default function NavbarDropdownItem({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="hover:cursor-pointer text-start p-4 hover:bg-zinc-700 rounded-2xl"
    >
      <div className="text-base">{name}</div>
      <div className="w-[15vw] text-[#C2CFD9] text-sm">{description}</div>
    </Link>
  );
}
