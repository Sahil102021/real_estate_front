import Link from "next/link";
import "../../styles/globals.css";
export default function page({title , href }) {
  return (
    <div className="flex justify-center mt-10">
      <Link href={href || "#"}>
        <button className="px-6 py-3 bg-[#578E7E] text-white font-semibold rounded-lg shadow-md hover:bg-[#123524] transition duration-300">
          {title}
        </button>
      </Link>
    </div>
  );
}
