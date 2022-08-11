/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const API_KEY = "672369773038d49a3a148c71ba3a215e";

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: "/old-blog/:path", //:path or :path*
        destination: "/new-blog/:path",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      },
      {
        source: "/api/movies/:id",
        destination: `http://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      },
    ]
  }
}
