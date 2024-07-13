import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Shinra Ciberseguridad"
        description="La ciberseguridad de tu empresa, sin costos extra"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                La seguridad de tu empresa
                <Br /> a suscripción
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Shinra ciberseguridad <Em>te ayuda con la ciberseguridad</Em>
                <Br /> de tu empresa para que no te preocupes <Br />{" "}
                de nada mas de que tu negocio crezca.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://jysbctn2wk1.typeform.com/to/SsnKJVKD"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Contacta con nosotros
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/security-key.svg"
                  layout="fixed"
                  width={700}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Facil",
            icon: FiSmile,
            description: "Te explicamos cada uno de los pasos que realizaremos y guiaremos en el proceso.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Seguro",
            icon: FiSliders,
            description:
              "Haremos que tu web o empresa este segura de posibles ataques.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Pentesting",
            icon: FiGrid,
            description:
              "Te haremos un estudio de pentesting personalizado segun tu caso.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Test de vulnerabilidad",
            icon: FiThumbsUp,
            description:
              "Que tan vulnerable es tu web/empresa, te hacemos un informe detallado.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Pentesting">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            ¿Necesitas un informe de seguridad <Em>Pentesting?</Em>.
            No te preocupes, sabemos lo que es. Nosotros te ayudaremos con todos los pasos necesarios
            y con todas las vulnerabilidades que encontremos
            .
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                informe pentesting 
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @menendez
              </Text>
            </Box>
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Informe de vulnerablidad">
        <Text color="muted" fontSize="lg">
          El informe de vulnerabilidad es pedido por muchas empresas actualmente
          nosotros te sacaremos un informe completo ademas con la ayuda del Ministerio de España.
          con ayudas de hasta 2000 euros.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Shinra ciberseguridad nos ayudó en un momento crítico en nuestra empresa
        ya habiamos recibido varios ciberataques que nos hicieron perder mucho dinero
        nos hicieron sentir muy seguros en todo momento y lo recomendariamos sin dudarlo.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Cuentanos tu problema y como podemos ayudarte"
      >
        <Text color="muted" fontSize="lg">
          Nuestra forma de trabajar siempre será que nos reuniremos contigo para que
          nos cuentes tu problema y te ayudaremos a ver la mejor solucion.
        </Text>
        <Wrap mt="8">
            {[
              "ciberseguridad",
              "Seguridad de la información",
              "ISO 13485",
              "ISO 27001",
              "Auditoría de seguridad",
              "ciberdelincuentes",
              "robo-de-información",
              "Ciberataques",
              "Malware",
              "Phishing",
              "Ransomware",
              "Ingeniería social",
              "Seguridad en la nube",
              "Firewall",
              "VPN (Virtual Private Network)",
              "Seguridad de endpoint",
              "Backup y recuperación de datos",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          No somos la típica empresa
          <Br /> de ciberseguridad.
        </Heading>
      }
      description={
        <>
          Shinra Ciberseguridad hablamos tu idioma
          <Br />
          en ocasiones la ciberseguridad puede ser complicada, por eso te la hacemos simple.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Premium.",
          icon: FiBox,
          description:
            "Todos los servicios que ofrecemos son dados por los profesionales top en el sector con mas de 5 años de experiencia.",
          variant: "inline",
        },
        {
          title: "Rápido.",
          icon: FiLock,
          description:
            "Te ayudamos de forma rápida para que no tengas que estar esperando a ver que es lo que puede estar pasando y ya sea demasiado tarde.",
          variant: "inline",
        },
        {
          title: "Documentado.",
          icon: FiSearch,
          description:
            "Te daremos toda la documentación que realicemos para que, una vez este en tu poder, puedas actuar de forma efectiva",
          variant: "inline",
        },
        {
          title: "Bienvenida.",
          icon: FiUserPlus,
          description:
            "Sabemos que muchas veces nos contactan personas que no son técnicas, por ello, hablamos en un lenguaje fácil de entender para gente que no tiene experiencia.",
          variant: "inline",
        },
        {
          title: "Avisos.",
          icon: FiFlag,
          description:
            "Te vamos a ayudar a marcar aquellas cosas que no son seguras en tu empresa ademas de decirte posibles vulnerabilidades que puedes llegar a tener.",
          variant: "inline",
        },
        {
          title: "Cambio de tarifa.",
          icon: FiTrendingUp,
          description:
            "¿Tu empresa crece y quieres contratar otro servicio? Sin problema, tenemos la solucion para ti",
          variant: "inline",
        },
        {
          title: "Certificado.",
          icon: FiToggleLeft,
          description:
            "Todos nuestros planes estan certificados para con los controles de seguridad del mismo.",
          variant: "inline",
        },
        {
          title: "Generators.",
          icon: FiTerminal,
          description:
            "Extiende tu sistema de diseño manteniendo la calidad y consistencia del código con generadores incorporados, enfocados en la seguridad.",
          variant: "inline",
        },
        
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
