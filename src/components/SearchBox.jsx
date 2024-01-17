"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBox() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [searchTerm, setSearchTerm] = useState(searchParams.get('searchTerm') || '');

	const onSearch = (e) => {
		e.preventDefault();
		
		if (!searchTerm.trim()) return;
		const path = pathname === '/search/web' ? '/search/web' : '/search/image';
		router.push(`${path}?searchTerm=${searchTerm}`);
	};

	return (
		<form
			className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
			onSubmit={onSearch}
		>
			<input
				type="text"
				className="w-full focus:outline-none"
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
			/>
			<RxCross2
				className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
				onClick={() => setSearchTerm('')}
			/>
			<BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
			<AiOutlineSearch
				className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
				onClick={onSearch}
			/>
		</form>
	);
}