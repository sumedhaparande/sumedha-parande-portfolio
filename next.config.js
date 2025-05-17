/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sumedha-parande-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sumedha-parande-portfolio/' : '',
}

module.exports = nextConfig 