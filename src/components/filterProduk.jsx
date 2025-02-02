import ProdukList from './produkList.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function FilterProduk({searchQuery}) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
 

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedMotif, setSelectedMotif] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);


    const resetFilter = () => {
        setSelectedCategories([]); // Mengatur ulang kategori yang dipilih
        setSelectedColors([]);   
        setSelectedMotif([]);   // Mengatur ulang warna yang dipilih
        // Tambahkan reset untuk state lain yang Anda miliki
    };
  
   
  
    const handleFilterToggle = () => {
      setIsFilterOpen(!isFilterOpen);
     
    };

    const handleClose = () => {
        setIsFilterOpen(false);
    }

  

    const handleCategoryChange = (categoryValue) => {
        setSelectedCategories([categoryValue]); // Hanya satu yang dipilih
    };
    
    const handleMotifChange = (motif) => {
        setSelectedMotif([motif]); // Hanya satu yang dipilih
    };
    
    const handleColorChange = (color) => {
        setSelectedColors([color]); // Hanya satu yang dipilih
    };
    
  

  return (
    <>
        <div className=" mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-8 font-raleway text-arifin-500">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-xl font-semibold">All Products</h1>
              

                {/* button navbar mobile */}
                <div className='md:hidden flex gap-4'>
                    <button className='w-11 aspect-square rounded-xl bg-arifin-100 text-arifin-500 shadow'  onClick={handleFilterToggle}>
                        <FontAwesomeIcon icon={faSliders} />
                    </button>
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
                            <div className="mt-2">
                                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Rainbow", "Plain", "Smoke"].map((item, index) => {
                                    const categoryValue = index + 1; // Memberikan nilai 1 untuk Rainbow, 2 untuk Plain, 3 untuk Smoke
                                    return (
                                        <div key={index} className="mb-2">
                                        <label className="flex items-center">
                                            <input
                                            type="radio"
                                            name="category"
                                            value={categoryValue}
                                            onClick={handleFilterToggle}
                                            checked={selectedCategories === categoryValue} // Mengecek apakah kategori yang dipilih sesuai dengan nilai
                                            onChange={() => handleCategoryChange(categoryValue)} // Mengubah nilai state saat kategori dipilih
                                            className="hidden peer" // Menggunakan peer untuk mengontrol elemen terhubung
                                            />
                                            <div className={`  px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer ${selectedCategories.includes(categoryValue) ? 'bg-arifin-400 text-arifin-100 ' : 'bg-arifin-100 text-arifin-500'}`}>
                                            {item}
                                            </div>
                                        </label>
                                        </div>
                                    );
                                    })}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4">Motif</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Lung-lungan", "Flower", "Animal", "Abstrak"].map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="motif" // Pastikan nama sama untuk grup radio
                                                    checked={selectedMotif.includes(item)}
                                                    onChange={() => handleMotifChange(item)}
                                                    className="hidden peer"
                                                    onClick={handleFilterToggle}
                                                />
                                                <div className={` px-5 py-2 rounded-lg transition-all duration-300 cursor-pointer ${selectedMotif.includes(item) ? 'bg-arifin-400 text-arifin-100' : 'bg-arifin-100 text-arifin-500'}`}>{item}</div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 mb-10">
                            <h2 className="text-lg font-semibold mb-4">Colors</h2>
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    { colorClass: "bg-[#f0c781]", label: "Creame" },
                                    { colorClass: "bg-yellow-400", label: "Yellow" },
                                    { colorClass: "bg-green-500", label: "Green" },
                                    { colorClass: "bg-blue-600", label: "Blue" },
                                    { colorClass: "bg-orange-600", label: "Orange" },
                                    { colorClass: "bg-red-600", label: "Red" },
                                    { colorClass: "bg-purple-600", label: "Purple" },
                                    { colorClass: "bg-yellow-700", label: "Brown" },
                                    { colorClass: "bg-black", label: "Black" }
                                ].map((item, index) => (
                                    <div key={index} className="mb-2">
                                        <label className={`relative ${selectedColors.includes(item.label) ? '' : ''}`}>
                                            <input
                                                type="radio"
                                                name="colors"
                                                checked={selectedColors.includes(item.label)}
                                                onChange={() => handleColorChange(item.label)}
                                                onClick={handleFilterToggle}    
                                                className="hidden peer"
                                            />
                                            <div
                                                className={`w-7 aspect-square rounded-full ${item.colorClass} transition-all  ${selectedColors.includes(item.label) ? 'outline outline-arifin-400 outline-offset-2' : ''}`}
                                            ></div>
                                        
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button  
                            onClick={() => {
                                handleFilterToggle();
                                resetFilter();
                            }} 
                            className="w-full py-3 border bg-arifin-400 rounded-lg text-white border-gray-300 text-sm font-medium transition-all hover:bg-arifin-500 active:scale-95">
                            Reset Filter
                        </button>

                        </div>
                    </div>
                </div>

                {(isFilterOpen) && <div className="fixed inset-0 bg-black opacity-40 z-30 transition-all duration-300" onClick={handleClose}></div>}
            </header>

            <div className="md:flex md:gap-8">
                <aside className="hidden md:block w-[20%] flex-shrink-0 mr-4 sticky top-24 h-max">
                <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                {["Rainbow", "Plain", "Smoke"].map((item, index) => {
                    const categoryValue = index + 1; // Nilai kategori: Rainbow = 1, Plain = 2, Smoke = 3
                    return (
                        <div key={index} className="mb-2">
                            <label className={`flex items-center hover:font-semibold hover:text-arifin-400 ${selectedCategories.includes(categoryValue) ? 'font-semibold ' : ''}`}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={categoryValue}
                                    checked={selectedCategories.includes(categoryValue)} // Cek apakah kategori terpilih
                                    onChange={() => handleCategoryChange(categoryValue)} // Mengubah kategori terpilih
                                    className="accent-arifin-400 hidden peer"
                                />
                                <span className={`  ${selectedCategories.includes(categoryValue) ? 'text-arifin-400 ' : ''}`}>{item}</span>
                            </label>
                        </div>
                    );
                })}
            </div>

            {/* yang ingin saya edit */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Motif</h2>
                    {["Lung-lungan", "Flower", "Animal", "Abstrak"].map((item, index) => {

                        return (
                            <div key={index} className="mb-2 group">
                                <label className={`w-full flex items-center  ${selectedMotif.includes(item) ? '' : ''}`}>
                                    <input  
                                        type="radio"
                                        name="motif"
                                        checked={selectedMotif === item}
                                        onChange={() => handleMotifChange(item)}
                                        className="accent-arifin-400 hidden peer"
                                    />
                                    <span className={`w-full  ${selectedMotif.includes(item) ? 'text-arifin-400 font-semibold' : ''}`}>{item}</span>
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Colors</h2>
                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { colorClass: "bg-[#f0c781]", label: "Creame" },
                            { colorClass: "bg-yellow-400", label: "Yellow" },
                            { colorClass: "bg-green-500", label: "Green" },
                            { colorClass: "bg-blue-600", label: "Blue" },
                            { colorClass: "bg-orange-600", label: "Orange" },
                            { colorClass: "bg-red-600", label: "Red" },
                            { colorClass: "bg-purple-600", label: "Purple" },
                            { colorClass: "bg-yellow-700", label: "Brown" },
                            { colorClass: "bg-black", label: "Black" }
                        ].map((item, index) => (
                            <div key={index} className="mb-2">
                                <label className={` ${selectedColors.includes(item.label) ? '' : ''}`}>
                                    <input
                                        type="radio"
                                        name="colors"
                                        value={item.label}
                                        checked={selectedColors === item.label}
                                        onChange={() => handleColorChange(item.label)}
                                        className="hidden peer"
                                    />
                                    <div
                                        className={`w-7 aspect-square rounded-full  ${item.colorClass} transition-all ${selectedColors.includes(item.label) ? 'outline outline-arifin-400 outline-offset-2' : ''}`}
                                    ></div>
                                   
                                </label>
                            </div>
                        ))}
                    </div>
                </div>



                    <div>
                        <button  onClick={resetFilter} className="w-full py-3 border bg-arifin-400 rounded-lg text-white border-gray-300 text-sm font-medium transition-all hover:bg-arifin-500 active:scale-95">Reset Filter</button>
                    </div>
                </aside>
                <div className='md:w-[80%]'>
                <ProdukList 
                        filters={{ categories: selectedCategories, motif: selectedMotif, colors: selectedColors }}
                        searchQuery={searchQuery} 
                    />
                </div>
            </div>
        </div>
    </>
  );
}

export default FilterProduk;
