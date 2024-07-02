import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

	return(
		<div className="py-2 px-[6.5%] border-b border-gray-500">
			<div className="flex flex-row justify-between items-center">
				<div className="flex flex-row items-center gap-4">
					<Link href='/'>
						<span className="text-2xl text-white self-center">Type.ai</span>
					</Link>
					<Image src='/images/keyboard.svg' alt='keyboard' className="h-12 pt-2" width={24} height={24} />
				</div>
				<span className="text-md text-white">contact</span> 
			</div>
		</div>
	)
}

export default Navbar;