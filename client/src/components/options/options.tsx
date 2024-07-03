import { useState } from 'react';

const Option = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="container text-white mt-5 ml-30 text-0.5">
                <div className="md:hidden flex justify-center items-center">
                    <button onClick={toggleMenu} className="focus:outline-none text-xs px-2 py-1 rounded bg-blue-500 hover:bg-blue-600">
                        Settings
                    </button>
                </div>

                <div className={`mt-2 p-4 bg-gray-800 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2 md:justify-evenly w-full">
                        {['Punctuations', 'Numbers', 'Time', 'Words', 'Quote', 'Zen', 'Custom', '15', '30', '160', '120', 'Tools'].map((item) => (
                            <li key={item} className="w-full md:w-auto flex justify-center">
                                <button className="w-11/12 md:w-auto text-xs px-4 py-2 rounded bg-blue-500 hover:bg-blue-600">
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Option;
