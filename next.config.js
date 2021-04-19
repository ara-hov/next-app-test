// TODO: доприкручивать переводы
// const nextTranslate = require('next-translate')
// module.exports = nextTranslate()
const path = require('path')

const defaultLocale = 'ru'

module.exports = {
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['ru', 'en', 'catchAll'],
    defaultLocale: 'catchAll',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
    UPLOAD_DIR: '/upload/images/',
    IMAGE_URL: '/api/files/images/'
  },
  async redirects() {
    return [
      {
        source: '/catchAll',
        destination: `/${defaultLocale}`,
        locale: false,
        permanent: false,
      },
      {
        source: '/catchAll/:slug*',
        destination: `/${defaultLocale}/:slug*`,
        locale: false,
        permanent: false,
      },
    ]
  },
}
