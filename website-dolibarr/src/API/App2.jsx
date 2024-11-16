const App = () => {
    const products = [
      { id: 1, name: 'Producto 1', price: 20.0, imageUrl: 'http://localhost/dolibarr/document.php?modulepart=produit&entity=1&file=lapicero%2Flapicero-lapiceros_pelikan.jpg', description: 'Descripcion del producto 1' },
      { id: 2, name: 'Producto 2', price: 25.0, imageUrl: 'https://via.placeholder.com/150', description: 'Descripcion del producto 2' },
      { id: 3, name: 'Producto 3', price: 30.0, imageUrl: 'https://via.placeholder.com/150', description: 'Descripcion del producto 3' },
      { id: 4, name: 'Producto 4', price: 35.0, imageUrl: 'https://via.placeholder.com/150', description: 'Descripcion del producto 4' },
      { id: 5, name: 'Producto 5', price: 40.0, imageUrl: 'https://via.placeholder.com/150', description: 'Descripcion del producto 5' },
    ]
  
    return (
      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  };
  