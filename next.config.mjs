/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
  
    let afterFiles = [
        {
          source: "/success/:path*",
          has: [
            {
              type: "query",
              key: "uid",
              value: "(?<uid>.*)",
            },
          ],
          destination: "/booking/:uid/:path*",
        },
    ];

    return {
      afterFiles,
    };
  },
};

export default nextConfig;
