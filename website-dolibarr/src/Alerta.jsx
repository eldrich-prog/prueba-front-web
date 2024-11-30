function AlertProduct({ product }) {
    console.log(product.label)
    return (
        <div>
            <div className="fixed top-16 right-0.5 transform -translate-x-1/4 bg-gray-100 text-black p-4 rounded-xl shadow-xl flex items-center space-x-4 transition-all duration-500 border-2 border-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div className="font-roboto text-base">
                    <h3 className="text-xl font-semibold">Producto agregado al carrito</h3>
                    <p>{String(product.label).charAt(0).toUpperCase() + String(product.label).slice(1)}</p>
                    <p>Precio: ${parseInt(product.price, 10).toFixed(2)}</p>
                </div>
            </div>
            <div className="fixed top-14 transform -translate-x-1/4 bottom-1 right-28 w-0 h-0 border-l-8 border-r-8 border-b-8   border-transparent border-b-green-500"></div>
        </div>
    );
};

export default AlertProduct;