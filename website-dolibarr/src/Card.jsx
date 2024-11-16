import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.url}
        alt={product.label}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
      />
      <div className="m-3 flex items-center justify-between">
        <Typography color="blue-gray" className="text-base sm:text-base md:text-lg font-medium text-gray-800">
          {product.label}
        </Typography>
        <Typography color="blue-gray" className="text-base sm:text-base md:text-lg font-medium text-gray-700">
        ${product.price}
        </Typography>
      </div>
      <div className="m-4">
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
        {product.description}
        </Typography>
        <button className="w-full bg-yellow-400 text-white rounded-lg py-2 mt-4 hover:bg-yellow-700htji">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
