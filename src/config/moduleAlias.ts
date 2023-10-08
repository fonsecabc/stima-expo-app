import { addAliases } from 'module-alias'
import { join } from 'path'

addAliases({
  '@': join(__dirname, '/@/'),
  '@components': join(__dirname, '/../app/components'),
  '@styles': join(__dirname, '/../app/styles'),
  '@screens': join(__dirname, '/../app/screens'),
  '@forms': join(__dirname, '/../modules/_forms'),
  '@helpers': join(__dirname, '/../modules/_helpers'),
  '@requests': join(__dirname, '/../modules/_requests'),
  '@validations': join(__dirname, '/../modules/_validations'),
  '@entities': join(__dirname, '/../types/entities'),
  '@enums': join(__dirname, '/../types/enums'),
  '@errors': join(__dirname, '/../types/errors'),
  '@config': join(__dirname, '/../config'),
})
