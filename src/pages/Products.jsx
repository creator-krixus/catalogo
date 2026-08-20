import ProductCard from '../components/ProductCard'

export default function Products() {


  const products = [
    {
      title: 'Guadalupe Costillero',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.8,
      reviews: 128,
      oldPrice: 64000,
      price: 35000,
      discount: 45,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/guadalupeCostillero_fgdk9q.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787197275/bodies/guadalupeCostilleroColores_ery0ml.png'
      ]
    },
    {
      title: 'Venecia',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.9,
      reviews: 96,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195004/bodies/venecia_ifmfat.jpg',
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787198059/bodies/veneciaColors_qkn94m.png'
      ]
    },
    {
      title: 'Lupe',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.3,
      reviews: 218,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/lupe_bsckyj.jpg',
      ]
    },
    {
      title: 'Romelia',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.7,
      reviews: 178,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195004/bodies/romelia_pgpjm7.jpg',
      ]
    },
    {
      title: 'Perla',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.5,
      reviews: 88,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195003/bodies/perla_l5rest.jpg',
      ]
    },
    {
      title: 'Alma manga larga',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.5,
      reviews: 178,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/almaMangaLarga_sdjgpt.jpg',
      ]
    },
    {
      title: 'Italiano',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 3.9,
      reviews: 68,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195000/bodies/italiano_c03yot.jpg',
      ]
    },
    {
      title: 'Capeya',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.9,
      reviews: 135,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/capeya_b6ocp4.jpg',
      ]
    },
    {
      title: 'Malaga',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.1,
      reviews: 55,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195000/bodies/malagaMangaCorta_frxunm.jpg',
      ]
    },
    {
      title: 'Cataleya',
      category: 'Body talla única – Comodidad y Estilo en una sola prenda',
      rating: 4.4,
      reviews: 113,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/cataleyaMangaLarga_gqgiqg.jpg',
      ]
    },
    {
      title: 'Blusa atenea',
      category: 'Talla única – Comodidad y Estilo',
      rating: 4.6,
      reviews: 98,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/blusaAtenea_y27gow.jpg',
      ]
    },
    {
      title: 'Paris manga larga',
      category: 'Body talla única – Comodidad y Estilo',
      rating: 4.1,
      reviews: 89,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195002/bodies/parisMangaLarga_vfg8x1.jpg',
      ]
    },
    {
      title: 'Roma Costillero',
      category: 'Body talla única – Comodidad y Estilo',
      rating: 4.6,
      reviews: 98,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787195004/bodies/romaMangaLargaCostillero_dhbrsz.jpg',
      ]
    },
    {
      title: 'Afrodita',
      category: 'Body talla única – Comodidad y Estilo',
      rating: 4.6,
      reviews: 98,
      oldPrice: 64000,
      price: 35000,
      discount: 40,
      images: [
        'https://res.cloudinary.com/desm9h8rk/image/upload/v1787194999/bodies/afroditaSiso_pirifb.jpg',
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