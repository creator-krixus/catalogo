import { useState } from 'react'
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw
} from 'lucide-react'

import './ProductCard.css'

export default function ProductCard({ product }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [favorite, setFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImage(prev =>
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage(prev =>
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="product-card">

      <div className="product-card__gallery">

        {/* <span className="product-card__badge">
          ✨ Fashion
        </span> */}

        <button
          className="product-card__favorite"
          onClick={() => setFavorite(!favorite)}
        >
          <Heart
            size={28}
            fill={favorite ? '#6941ff' : 'none'}
          />
        </button>

        <div className="product-card__discount">
          <span>{product.discount}%</span>
          <small>OFF</small>
        </div>

        <img
          src={product.images[currentImage]}
          alt={product.title}
          className="product-card__image"
        />

        <button
          className="gallery-arrow left"
          onClick={prevImage}
        >
          <ChevronLeft />
        </button>

        <button
          className="gallery-arrow right"
          onClick={nextImage}
        >
          <ChevronRight />
        </button>

        {/* <div className="gallery-counter">
          {currentImage + 1} / {product.images.length}
        </div> */}
      </div>

      <div className="product-card__thumbs">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={
              currentImage === index
                ? 'thumb active'
                : 'thumb'
            }
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      <div className="product-card__info">
        <h1>{product.title}</h1>

        <span className="category">
          {product.category}
        </span>

        <div className="rating">
          <Star fill="#ffb400" size={18} />
          <span>{product.rating}</span>
          <span>|</span>
          <span>{product.reviews} reseñas</span>
        </div>

        <div className="price-box">

          <div>
            <span>Antes</span>
            <p className="old-price">
              $
              {product.oldPrice.toLocaleString(
                'es-CO'
              )}
            </p>
          </div>

          <div>
            <span>Ahora</span>
            <p className="new-price">
              $
              {product.price.toLocaleString(
                'es-CO'
              )}
            </p>
          </div>

          <div className="discount-tag">
            -{product.discount}%
          </div>

        </div>

        <div className="benefits">

          <div>
            <ShieldCheck />
            Compra segura
          </div>

          <div>
            <Truck />
            Envío rápido
          </div>

          <div>
            <RefreshCw />
            Cambios fáciles
          </div>

        </div>

        <a
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          Comprar por WhatsApp
        </a>

      </div>
    </div>
  )
}