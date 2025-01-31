import ProdukList from './produkList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function FilterProduk() {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Default');
  
    const handleSortToggle = () => {
      setIsSortOpen(!isSortOpen);
      setIsFilterOpen(false);
    };
  
    const handleFilterToggle = () => {
      setIsFilterOpen(!isFilterOpen);
      setIsSortOpen(false);
    };

    const handleClose = () => {
        setIsSortOpen(false);
        setIsFilterOpen(false);
    }

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
    };

  return (
    <>
        <div className=" mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-8 font-raleway text-arifin-500">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-semibold">All Products</h1>
                <div className="hidden md:flex gap-6 text-sm font-medium">
                {["Default", "Newest", "Highest Rated", "Low Price to High", "High Price to Low"].map((item, index) => (
                    <label key={index}>
                        <input type="radio" name="sortDesktop" value={item} checked={item === selectedSort} onChange={handleSortChange} className="hidden peer" />
                        <div className="peer-checked:text-arifin-400 cursor-pointer transition-all">
                            {item}
                        </div>
                  </label>
                ))}
                </div>

                {/* button navbar mobile */}
                <div className='md:hidden flex gap-4'>
                    <button className=' w-11 aspect-square rounded-xl bg-arifin-100 text-arifin-500 shadow' onClick={handleSortToggle}>
                        <FontAwesomeIcon icon={faFilter} />
                    </button>
                    <button className='w-11 aspect-square rounded-xl bg-arifin-100 text-arifin-500 shadow'  onClick={handleFilterToggle}>
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
                </div>

                {/* Sort */}
                <div className={`fixed bottom-0 left-0 right-0 h-[60%] bg-arifin-100 text-arifin-500 z-40 transition-transform duration-300 ${isSortOpen ? "translate-y-0" : "translate-y-full"}`}>
                    <div className=" h-full overflow-y-auto">
                        <div className='sticky top-0 flex items-center gap-3 bg-arifin-100 w-full py-3 px-6'>
                            <button className="text-arifin-500 text-2xl" onClick={handleSortToggle}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <h2 className="text-lg font-bold">Sort By</h2>
                        </div>
                        <div className="mb-6 px-6 py-5">
                            {["Default", "Newest", "Highest Rated", "Low Price to High", "High Price to Low"].map((item, index) => (
                                <div key={index} className="mb-6 border-b pb-3">
                                    <label className="flex items-center justify-between">
                                        <span>{item}</span>
                                        <input
                                            type="radio"
                                            name="sort"
                                            value={item}
                                            className="mr-2 accent-arifin-400"
                                            checked={selectedSort === item}
                                            onChange={handleSortChange}
                                        />
                                    </label>
                                </div>
                            ))}
                            {selectedSort && (
                            <button className="w-full bg-arifin-400 text-white py-2 rounded-md active:scale-95 transition-all">Apply</button>)}
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div id="filterDiv" className={`fixed bottom-0 left-0 right-0 h-[80%] bg-arifin-100 z-40 transition-transform duration-300 ${isFilterOpen ? "translate-y-0" : "translate-y-full"}`} >
                    <div className="h-full overflow-y-auto">
                        <div className='sticky top-0 flex items-center gap-3 bg-arifin-100 w-full py-3 px-6'>
                            <button className="text-arifin-500 text-2xl font-bold" onClick={handleFilterToggle}>
                            <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <h2 className="text-lg font-bold">Filter By</h2>
                        </div>
                        <div className="mb-6 px-6 py-5">
                            <div className='mt-2'>
                                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {["Rainbow", "Plain", "Smoke"].map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <label className="flex items-center">
                                                <input type="checkbox" name="categories" className="hidden peer"/>
                                                <div className='bg-arifin-200 text-arifin-500 peer-checked:bg-arifin-400 peer-checked:text-white px-5 py-2 rounded-lg transition-all'>{item}</div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h3 className="text-lg font-semibold mb-4">Motif</h3>
                                <div className='flex flex-wrap gap-2'>
                                    {["Lung-lungan", "Flower", "Animals", "Abstrak"].map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <label className="flex items-center">
                                                <input type="checkbox" name="motif" className="hidden peer"/>
                                                <div className='bg-arifin-200 text-arifin-500 peer-checked:bg-arifin-400 peer-checked:text-white px-5 py-2 rounded-lg transition-all'>{item}</div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h3 className='text-lg font-semibold mb-4'>Colors</h3>
                                <div className='flex flex-wrap gap-8'>
                                    {["[#f0c781]", "yellow-400", "green-500", "blue-600", "red-600", "purple-600", "yellow-700"].map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <label>
                                                <input type="checkbox" name="colors" className="hidden peer"/>
                                                <div className={`w-7 aspect-square rounded-full bg-${item} peer-checked:outline-arifin-400 peer-checked:outline peer-checked:outline-offset-4 transition-all `}></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button className='mt-10 w-full bg-arifin-400 text-white py-2 rounded-md active:scale-95 transition-all'>Apply</button>
                        </div>
                    </div>
                </div>

                {(isSortOpen || isFilterOpen) && <div className="fixed inset-0 bg-black opacity-40 z-30 transition-all duration-300" onClick={handleClose}></div>}
            </header>

            <div className="md:flex md:gap-8">
                <aside className="hidden md:block w-[20%] flex-shrink-0 mr-4 sticky top-24 h-max">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Categories</h2>
                        {(["Rainbow", "Plain", "Smoke"]).map((item, index) => (
                            <div key={index} className="mb-2">
                                <label className="flex items-center">
                                    <input type="checkbox" name="categories" className="accent-arifin-400"/>
                                    <span className="ml-2 text-gray-600">{item}</span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Motif</h2>
                        {(["Lung-lungan", "Flower", "Animals", "Abstrak"]).map((item, index) => (
                            <div key={index} className="mb-2">
                                <label className="flex items-center">
                                    <input type="checkbox" name="motif" className="accent-arifin-400"/>
                                    <span className="ml-2 text-gray-600">{item}</span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Colors</h2>

                        <div className="grid grid-cols-4 gap-2">
                            {["[#f0c781]", "yellow-400", "green-500", "blue-600", "red-600", "purple-600", "yellow-700"].map((item, index) => (
                                <div key={index} className="mb-2">
                                    <label>
                                        <input type="checkbox" name="colors" className="hidden peer"/>
                                        <div className={`w-7 aspect-square rounded-full bg-${item} transition-all peer-checked:outline-arifin-400 peer-checked:outline peer-checked:outline-offset-4`}></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <button className="w-full py-3 border bg-arifin-400 rounded-lg text-white border-gray-300 text-sm font-medium transition-all hover:bg-arifin-500 active:scale-95">Reset Filter</button>
                    </div>
                </aside>
                <div className='md:w-[80%]'>
                    <ProdukList/>
                </div>
            </div>
        </div>
    </>
  );
}

export default FilterProduk;
