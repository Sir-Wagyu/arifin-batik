import ProdukList from './produkList.jsx';

function FilterProduk() {

  return (
<>
<div class=" mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-8">
        <header class="flex items-center justify-between mb-8">
            <h1 class="text-xl font-semibold">batik stamp in arifin batik</h1>
            <nav class="flex gap-6 text-sm">
                <a href="#" class="text-purple-600">Newest</a>
                <a href="#" class="text-gray-600">Highest Rated</a>
                <a href="#" class="text-gray-600">Low Price to High</a>
                <a href="#" class="text-gray-600">High Price to Low</a>
                <div class="flex gap-4">
                    <button class="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </button>
                    <button class="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>

        <div class="flex gap-8">

            <aside class="w-52 flex-shrink-0 mr-4 sticky top-24 h-max">
                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Categories</h2>
                    <ul class="space-y-2">
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Rainbow</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Plain</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Smoke</span>
                        </label>
                    </ul>
                </div>

                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Motif</h2>
                    <div class="space-y-2">
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Lung-lungan</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">flower</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" checked class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">animals</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">abstrak</span>
                        </label>
                        
                    </div>
                </div>

                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Colors</h2>
                    <div class="grid grid-cols-5 gap-2">
                        <button class="w-6 h-6 rounded-full bg-[#f0c781]"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-400"></button>
                        <button class="w-6 h-6 rounded-full bg-green-500"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-600"></button>
                        <button class="w-6 h-6 rounded-full bg-red-600"></button>
                        <button class="w-6 h-6 rounded-full bg-purple-600"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-700"></button>
                    </div>
                </div>

                <div>
                    <button class="px-5 py-3 border bg-arifin-400 rounded-lg text-white border-gray-300 text-sm">Reset Filter</button>
                </div>
            </aside>
            <ProdukList/>
        </div>
    </div>
</>
  );
}

export default FilterProduk;
