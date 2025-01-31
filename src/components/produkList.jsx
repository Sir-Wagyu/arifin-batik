import "../App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList() {

    const [products, setProducts] = useState([]);

    // let base_url = "http://localhost:8888/arifinbatikbackend/";
    let base_url = "http://localhost/arifinbatikbackend/";

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
            <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6  font-raleway text-arifin-500">
                {products.length > 0 ? (
                products.map((product, index) => (
                <a key={index} href={`/detail/${product.id}`} className="group">
                    <div className=" bg-arifin-100 rounded-lg shadow-md transition-transform duration-300">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={`${base_url}image/${product.gambar}`} // Default placeholder if image is not available
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-all transform duration-300"
                                />
                        </div>
                        <div className="p-4 text-sm md:text-base">
                            <p className=" text-gray-600">
                                <span className="font-semibold">Pattern:</span> {product.motif || "Not available"}
                            </p>
                            <p className=" text-gray-600">
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
        </>
    );
}

export default ProdukList;
