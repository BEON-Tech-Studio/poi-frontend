/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const withTM = require('next-transpile-modules')([
  'native-base',
  'react-native-web',
  'react-native-svg',
  'react-native-safe-area-context',
  '@react-aria/visually-hidden',
  '@react-native-aria/button',
  '@react-native-aria/checkbox',
  '@react-native-aria/combobox',
  '@react-native-aria/focus',
  '@react-native-aria/interactions',
  '@react-native-aria/listbox',
  '@react-native-aria/overlays',
  '@react-native-aria/radio',
  '@react-native-aria/slider',
  '@react-native-aria/tabs',
  '@react-native-aria/utils',
  '@react-stately/combobox',
  '@react-stately/radio',
])

/** @type {import('next').NextConfig} */
module.exports = withPlugins(
  [
    withTM,
    [
      withOptimizedImages,
      { handleImages: ['png'], imagesFolder: 'assets/images' },
    ],
    // your plugins go here.
  ],
  {
    webpack: (config) => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      }
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]
      config.module.rules.push({
        test: /\.svg$/,
        use: ['url-loader'],
      })

      return config
    },
    env: {},
    images: { disableStaticImages: true, domains: ['picsum.photos'] },
  }
)
