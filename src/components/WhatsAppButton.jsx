import './WhatsAppButton.css'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phone = '573001234567'
  const message = 'Hola, quiero más información.'

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  )
}