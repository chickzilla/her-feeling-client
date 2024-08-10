/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/board/text',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  