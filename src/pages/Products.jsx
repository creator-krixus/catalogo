// import ProductCard from '../components/ProductCard'

// export default function Products() {
//   return (
//     <div>
//       <ProductCard />
//     </div>
//   )
// }
import ProductCard from '../components/ProductCard'

export default function Products() {


  const products = [
    {
      title: 'Body Beige',
      category: 'Body',
      rating: 4.8,
      reviews: 128,
      oldPrice: 64000,
      price: 35000,
      discount: 45,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279336/shop/body_cafe_j180em.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279336/shop/body_beige_iy5qxh.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279337/shop/body_blanco_okz8np.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780295253/shop/Adobe_Express_-_file_rh9cgc.jpg'
      ]
    },
    {
      title: 'Body cafe',
      category: 'Body',
      rating: 4.9,
      reviews: 108,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279336/shop/body_cafe_j180em.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279336/shop/body_beige_iy5qxh.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279337/shop/body_blanco_okz8np.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1780279336/shop/body_cafe_j180em.jpg'
      ]
    }
  ]

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}