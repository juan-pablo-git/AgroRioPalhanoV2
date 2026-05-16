import { useEffect, useRef, useState } from 'react'

function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  )
}

export default FadeInSection