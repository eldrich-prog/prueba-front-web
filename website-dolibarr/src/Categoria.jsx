import React from 'react';
import Navbar from './Navbar';

// Datos de ejemplo para las categorías
const categories = [

    { id: 1, name: 'Papeleria', image: 'https://via.placeholder.com/150x150?text=Electrónica' },
    { id: 2, name: 'Oficina', image: 'https://via.placeholder.com/150x150?text=Ropa' },
    { id: 3, name: 'Escolar', image: 'https://via.placeholder.com/150x150?text=Hogar' },
    { id: 4, name: 'Computo', image: 'https://via.placeholder.com/150x150?text=Deportes' },
    { id: 5, name: 'Arte y Diseño', image: 'https://via.placeholder.com/150x150?text=Juguetes' },

];

const CategoryList = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-12'>
                <div className='container m-10 p-4 w-1/4 bg-gray-50 border-2'>
                    <h2 className="text-2xl font-semibold text-center mb-6">Categorías de Productos</h2>
                    <div className='flex flex-col w-full space-y-6'>
                        {categories.map((category) => (
                            <div key={category.id} className='flex justify-center rounded-md '>
                                <button className=' bg-gray-200 shadow-lg min-w-full py-5 rounded-md'>
                                    <h1 className='font-semibold'>{category.name}</h1>
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
};


export default CategoryList;
