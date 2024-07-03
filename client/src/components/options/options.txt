import React from 'react';
import Image from 'next/image';

const TestOptions: React.FC = () => {
  return (
	  <div className="rounded-xl px-4 bg-zinc-800 text-gray-400 py-2 flex flex-row justify-	 gap-8 w-[80%]">
		  <div className='flex flex-row items-center  gap-4'>
			  <button className='flex flex-row items-center gap-2'>
				  <span className='text-gray-400 hover:text-white'>@</span>
				  <span className='text-gray-400 hover:text-white'>punctuation</span>
			  </button>
			  <button className='flex flex-row items-center gap-2'>
				  <span className='text-gray-400'>#</span>
				  <span className='text-gray-400 hover:text-white'>numbers</span>
			  </button>
		  </div>

		  <div id='mode' className='flex flex-row items-center gap-4'>
			  <div className='flex flex-row items-center gap-2'>
			  	<Image src='/images/clock.svg' alt='clock' className="h-[18px]" width={24} height={24} />
				  <span className='text-gray-400 hover:text-white'>time</span>
			  </div>
			  <div className='flex flex-row items-center gap-2'>
				  <span className='text-gray-400 hover:text-white text-xl'>A</span>
				  <span className='text-gray-400 hover:text-white'>words</span>
			  </div>
			  <div className='flex flex-row items-center gap-2'>
			  	<Image src='/images/quote.svg' alt='quote' className="h-[18px]" width={24} height={24} />
				  <span className='text-gray-400 hover:text-white'>quote</span>
			  </div>
			  <div className='flex flex-row items-center gap-2'>
			  	<Image src='/images/wrench.svg' alt='wrench' className="h-[18px]" width={24} height={24} />
				  <span className='text-gray-400 hover:text-white'>custom</span>
			  </div>
		  </div>

		  <div id='numbers' className='flex flex-row items-center gap-4'>
			  <span className='text-gray-400 hover:text-white'>15</span>
			  <span className='text-gray-400 hover:text-white'>30</span>
			  <span className='text-gray-400 hover:text-white'>60</span>
			  <span className='text-gray-400 hover:text-white'>120</span>
			  <Image src='/images/setup.svg' alt='setup' className="h-[18px]" width={24} height={24} />
		  </div>
    </div>
  );
};

export default TestOptions;