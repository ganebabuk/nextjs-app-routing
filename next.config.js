module.exports = {
    // async redirects() {
    //   return [
    //     // Basic redirect
    //     {
    //       source: '/about',
    //       destination: '/',
    //       permanent: true,
    //     },
    //     // Wildcard path matching
    //     {
    //       source: '/blog/:slug',
    //       destination: '/news/:slug',
    //       permanent: true,
    //     },
    //   ]
    // },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    env: {
        // for development, please create .env file under the root and add MONGODB_URI=CONNECTION_STRING
        MONGODB_URI: process.env.MONGODB_URI,
    },
    api: {
        bodyParser: {
          sizeLimit: '500kb',
          responseLimit: '8mb',
        //   responseLimit: false,
        }
    },
    experimental: {
        turbo: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nextjs-app-routing.vercel.app',
            pathname: '/images/**',
          },
        ],
    },
  }