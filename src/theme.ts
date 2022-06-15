import {
  ComponentStyleConfig,
  extendTheme,
  ThemeComponentProps,
  ThemeConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: ThemeComponentProps) => ({
    body: {
      bg: mode('eggshell', 'black')(props),
      color: mode('blackAlpha.800', 'white')(props),
    },
    h1: {
      color: mode('blackAlpha.800', 'eggshell')(props),
    },
    h2: {
      color: mode('blackAlpha.800', 'deepLemon')(props),
    },
    h3: {
      color: mode('blackAlpha.800', 'eggshell')(props),
    },
  }),
}

const colors = {
  deepLemon: '#f5c518',
  eggshell: '#f0e7db',
  raisinBlack: '#212121'
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const components: Record<string, ComponentStyleConfig> = {
  
}

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
})

export default theme
