module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['transform-inline-environment-variables'],
      ['module-resolver', {
        'alias': {
          '@/*': './src/*' ,
          '@components/*': './src/app/components/*' ,
          '@components': './src/app/components' ,
          '@styles': './src/app/styles' ,
          '@screens/*': './src/app/screens/*' ,
          '@screens': './src/app/screens' ,
          '@contexts': './src/app/contexts' ,
          '@forms': './src/modules/_forms' ,
          '@helpers': './src/modules/_helpers' ,
          '@requests': './src/modules/_requests' ,
          '@validations': './src/modules/_validations' ,
          '@entities': './src/types/entities' ,
          '@enums': './src/types/enums' ,
          '@errors': './src/types/errors' ,
          '@config': './src/config' ,
        }
      }]
    ],
  }
}