import React, { useState } from 'react';

function FilterProduk() {
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [motif, setMotif] = useState('');

  // Data filter (misalnya, data kategori, warna, motif)
  const categories = ['Batik', 'Kain', 'Aksesoris'];
  const colors = ['Merah', 'Biru', 'Hijau', 'Kuning'];
  const motifs = ['Floral', 'Geometris', 'Polkadot'];

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handleMotifChange = (e) => setMotif(e.target.value);

  const handleFilter = () => {
    // Logika untuk filter produk berdasarkan kategori, warna, dan motif
    console.log('Filter applied:', { category, color, motif });
  };

  return (
<>
<div class=" mx-auto px-6 md:px-12 lg:px-14 xl:px-28 py-8">
       
        <header class="flex items-center justify-between mb-8">
            <h1 class="text-xl font-semibold">Mens Shoes & Sneakers</h1>
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
          
            <aside class="w-64 flex-shrink-0 mr-4">
                
                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Categories</h2>
                    <ul class="space-y-2">
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Lifestyle</a>
                            <span class="text-gray-400">387</span>
                        </li>
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Running</a>
                            <span class="text-gray-400">76</span>
                        </li>
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Basketball</a>
                            <span class="text-gray-400">43</span>
                        </li>
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Football</a>
                            <span class="text-gray-400">21</span>
                        </li>
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Soccer</a>
                            <span class="text-gray-400">12</span>
                        </li>
                        <li class="flex justify-between">
                            <a href="#" class="text-gray-600">Training & Gym</a>
                            <span class="text-gray-400">54</span>
                        </li>
                    </ul>
                </div>

               
                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Price</h2>
                    <div class="space-y-2">
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Under 50</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">50 to 100</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" checked class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">100 to 150</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">150 to 200</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="price" class="form-radio text-purple-600"/>
                            <span class="ml-2 text-gray-600">Over 200</span>
                        </label>
                    </div>
                </div>

              
                <div class="mb-8">
                    <h2 class="text-lg font-semibold mb-4">Colors</h2>
                    <div class="grid grid-cols-6 gap-2">
                        <button class="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
                        <button class="w-6 h-6 rounded-full bg-gray-200"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-200"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-400"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500"></button>
                        <button class="w-6 h-6 rounded-full bg-green-500"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-600"></button>
                        <button class="w-6 h-6 rounded-full bg-gray-500"></button>
                        <button class="w-6 h-6 rounded-full bg-pink-500"></button>
                        <button class="w-6 h-6 rounded-full bg-red-600"></button>
                        <button class="w-6 h-6 rounded-full bg-purple-600"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-700"></button>
                    </div>
                </div>

              
                <div>
                    <h2 class="text-lg font-semibold mb-4">Size</h2>
                    <div class="grid grid-cols-5 gap-2">
                        <button class="px-3 py-2 border border-gray-300 rounded text-sm">4</button>
                        <button class="px-3 py-2 border border-gray-300 rounded text-sm">4.5</button>
                        <button class="px-3 py-2 border border-gray-300 rounded text-sm">5</button>
                        <button class="px-3 py-2 border border-gray-300 rounded text-sm">5.5</button>
                        <button class="px-3 py-2 border border-gray-300 rounded text-sm">6</button>
                    </div>
                </div>
            </aside>

           <div className="grid grid-cols-3 gap-7" id="produk">
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
                <div>
                    <img src="./1.png" alt="" />
                </div>
           </div>
            
        </div>
    </div>
</>
  );
}

export default FilterProduk;
