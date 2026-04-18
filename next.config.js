/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/health-practitioners/free-guide',
        destination: '/health-practitioners/guides/website-mistakes',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
