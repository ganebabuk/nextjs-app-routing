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
    env: {
        // for development, please create .env file under the root and add MONGODB_URI=CONNECTION_STRING
        MONGODB_URI: process.env.MONGODB_URI,
    }
  }