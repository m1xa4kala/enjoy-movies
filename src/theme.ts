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
      bg: mode('#f0e7db', '#000')(props),
    },
  }),
}

const colors = {
  deepLemon: '#f5c518',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const components: Record<string, ComponentStyleConfig> = {
  Button: {
    baseStyle: {},
  },
}

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
})

export default theme
