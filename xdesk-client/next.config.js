/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  // serverRuntimeConfig: {
  //   // Will only be available on the server side
  //   mySecret: 'secret',
  //   secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  // },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    apiUrl: 'http://localhost:3333'
  },
}

module.exports = nextConfig
