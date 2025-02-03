import "../App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList({ filters, searchQuery}) {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };    
    
    let base_url = "https://api.arifinbatik.com/";
    //  let base_url = "http://localhost/arifinbatikbackend/";


    const getProduct = async (page) => {
        try {
            let url = `${base_url}api/produk.php?request=filter&page=${page}&limit=26`;

            // Append filters to the URL
            if (filters.categories) {
                url += `&category=${filters.categories.join(',')}`;
            }
            if (filters.motif) {
                url += `&motif=${filters.motif.join(',')}`;
            }
            if (filters.colors) {
                url += `&color=${filters.colors.join(',')}`;
            }

            if (searchQuery && searchQuery.trim() !== "") {
                url += `&search=${encodeURIComponent(searchQuery)}`;
            }
    

            const response = await axios.get(url);
            setProducts(response.data.data);
            setTotalPages(response.data.total_pages || 1);
        } catch (error) {
            console.log(error);
        }
    };

    const getVisiblePages = () => {
        let startPage = Math.max(1, currentPage - 1); // Halaman sebelum currentPage
        let endPage = Math.min(totalPages, startPage + 3); // Ambil 3 halaman
    
        // Jika di ujung akhir, pastikan tetap 3 angka
        startPage = Math.max(1, endPage - 3);
    
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    useEffect(() => {
        getProduct(currentPage);
    }, [currentPage, filters, searchQuery]);

    return (
        <>      
            <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 font-raleway text-arifin-500">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <a key={index} href={`/detail/${product.id}`} className="group">
                            <div className="bg-arifin-100 rounded-lg shadow-md transition-transform duration-300">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={`${base_url}image/${product.gambar}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all transform duration-300"
                                    />
                                </div>
                                <div className="p-4 text-sm md:text-base">
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Pattern:</span> {product.motif || "Not available"}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Color:</span> {product.color || "Not available"}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No products found.
                    </p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 gap-2">
    {/* Tombol Previous */}
    <button
        onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            scrollToTop();
        }}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg shadow-md transition-all 
            ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-arifin-400 text-white hover:bg-arifin-500"}
        `}
    >
        Prev
    </button>

    {/* Nomor Halaman */}
    {getVisiblePages().map((page) => (
        <button
            key={page}
            onClick={() => {
                setCurrentPage(page);
                scrollToTop();
            }}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all shadow-md
                ${currentPage === page ? "bg-arifin-400 text-white" : "bg-gray-100 text-gray-800 hover:bg-arifin-500 hover:text-white"}
            `}
        >
            {page}
        </button>
    ))}



    {/* Tombol Next */}
    <button
        onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            scrollToTop();
        }}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg shadow-md transition-all 
            ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-arifin-400 text-white hover:bg-arifin-500"}
        `}
    >
        Next
    </button>
</div>

        </>
    );
}

export default ProdukList;
