"use client"

import Image from "next/image"
import { useState } from "react"
import { CSSProperties } from "react"

interface ImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  style?: CSSProperties
}

export default function ImageLoader({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  style,
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 animate-pulse rounded-lg" />
      )}
      {error && (
        <div className="absolute inset-0 bg-purple-100 flex items-center justify-center rounded-lg">
          <span className="text-purple-600">Image not found</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
          ${error ? "hidden" : ""}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setError(true)
        }}
        priority={priority}
        fill={fill}
        sizes={sizes}
        style={style}
      />
    </div>
  )
} 