import "../App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList() {

    const [products, setProducts] = useState([]);

    let base_url = "http://localhost:8888/arifinbatikbackend/";

    const getProduct = async () => {
        try{
            let url = `${base_url}api/produk.php?request=filter&page=2&limit=25`;
            const response = await axios.get(url);
            setProducts(response.data.data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getProduct();
    },[])

    return (
        <>
           <div className="p-6">        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length > 0 ? (
                products.map((product, index) => (
                   <a href={`/detail/${product.id}`}>
                     <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                    {/* Gambar Produk */}
                    <img
                        src={`${base_url}image/${product.gambar}`} // Default placeholder jika gambar tidak ada
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                       
                        <p className="text-sm text-gray-600">
                        <span className="font-medium">Color:</span> {product.color || "Tidak tersedia"}
                        </p>
                        {/* Motif */}
                        <p className="text-sm text-gray-600">
                        <span className="font-medium">Motif:</span> {product.motif || "Tidak tersedia"}
                        </p>
                    </div>
                    </div>
                   </a>
                ))
                ) : (
                <p className="text-center text-gray-500 col-span-full">
                    Tidak ada produk yang ditemukan.
                </p>
                )}
            </div>
            </div>
        </>
    );
}

export default ProdukList;
