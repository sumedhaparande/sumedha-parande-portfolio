"use client"

import Image from "next/image"

// Add base path for images
const basePath = process.env.NODE_ENV === 'production' ? '/sumedha-parande-portfolio' : ''

export default function ProfileImage() {
  return (
    <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
      <Image
        src={`${basePath}/sumedha_profile_pic.png`}
        alt="Sumedha Parande"
        fill
        sizes="(max-width: 768px) 256px, 320px"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        priority
        onError={(e) => {
          console.error('Error loading image:', e);
        }}
        onLoadingComplete={() => {
          console.log('Image loaded successfully');
        }}
      />
    </div>
  )
} 