// import * as React from 'react'

// import {
//   Box,
//   BoxProps,
//   Container,
//   Flex,
//   useColorModeValue,
// } from '@chakra-ui/react'
// // import Navigation from './navigation'
// import { Logo } from './logo'
// import { useScroll } from 'framer-motion'

// export interface HeaderProps extends Omit<BoxProps, 'children'> {}

// export const Header = (props: HeaderProps) => {
//   const ref = React.useRef<HTMLHeadingElement>(null)
//   const [y, setY] = React.useState(0)
//   const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

//   const { scrollY } = useScroll()
//   React.useEffect(() => {
//     return scrollY.onChange(() => setY(scrollY.get()))
//   }, [scrollY])

//   const bg = useColorModeValue('whiteAlpha.700', 'rgba(29, 32, 37, 0.7)')

//   return (
    
       
//   )
// }
