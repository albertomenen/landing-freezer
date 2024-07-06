import { HStack, Text, Button } from '@chakra-ui/react'
import { loadStripe } from '@stripe/stripe-js'
import { Stripe } from '@stripe/stripe-js'

const stripePromise: Promise<Stripe | null> = loadStripe('pk_test_51MnsC2IzTEr3BZIaH6ub4XcUzVzApm3wZ8ufLhA6WJlRiSPQeqfcfWeaRwuwsNW9WCBArpaJT5Apb92X3ryDu93Y00YvTyxTk5')

export default {
  title: 'Soluciones de Ciberseguridad a tu medida',
  description: 'Entendemos que cada empresa tiene necesidades únicas en ciberseguridad, por eso ofrecemos planes adaptados a diferentes niveles de requerimiento y escalabilidad.',
  plans: [
    {
      id: 'prod_QOywIZ72umIpGg',
      title: 'Básico',
      description: 'Ideal para startups y pequeñas empresas que buscan protección fundamental.',
      price: '€150/mes',
      features: [
        { title: 'Certificación ISO 27001' },
        { title: 'Autenticación básica y segura' },
        { title: 'Monitoreo y detección de vulnerabilidades básicas' },
        { title: 'Informes de seguridad mensuales' },
        { title: 'Soporte técnico limitado' },
      ],
      action: {
        href: 'https://buy.stripe.com/test_7sIbKU4uOgNnaHubIJ',
      },
    },
    {
      id: 'prod_QOyxbYgXk1SGVg',
      title: 'Profesional',
      description: 'Para equipos y empresas en crecimiento que requieren protección avanzada y cumplimiento de normativas.',
      price: '€350/mes',
      isRecommended: true,
      features: [
        { title: 'Certificación ISO 27001 y ISO 13485' },
        { title: 'Gestión avanzada de autenticaciones y accesos' },
        { title: 'Detección proactiva de vulnerabilidades y amenazas' },
        { title: 'Respuesta a incidentes y asistencia prioritaria' },
        { title: 'Acceso a comunidad privada y webinars exclusivos' },
        { title: 'Actualizaciones y mejoras continuas' },
      ],
      action: {
        href: 'https://buy.stripe.com/test_7sIeX69P868J8zm5kn',
      },
    },
    {
      id: 'prod_QOyy0Ppi1dhp61',
      title: 'Empresarial',
      description: 'Soluciones completas para grandes organizaciones que necesitan la máxima seguridad y personalización.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">€2000,-</Text>
          <Text>€1500,-</Text>
        </HStack>
      ),
      features: [
        { title: 'Certificación ISO completa para ciberseguridad' },
        { title: 'Análisis de seguridad a medida y auditorías regulares' },
        { title: 'Monitoreo en tiempo real y respuesta avanzada a incidentes' },
        { title: 'Formación personalizada en ciberseguridad para equipos' },
        { title: 'Soporte dedicado 24/7' },
        { title: 'Acceso a todas las funciones y actualizaciones premium' },
      ],
      action: {
        href: 'https://buy.stripe.com/test_5kA4is3qK9kV02Q004',
      },
    },
    {
      id: 'contact',
      title: 'Contacto Directo',
      description: 'Para necesidades específicas o proyectos de gran envergadura, contáctanos para una solución personalizada.',
      price: 'Consultar',
      features: [
        { title: 'Soluciones a medida' },
        { title: 'Evaluación de necesidades específicas' },
        { title: 'Presupuesto personalizado' },
      ],
      action: {
        href: 'mailto:shinraciberseguridad@gmail.com',
      },
    },
  ],
}

const redirectToStripe = async (priceId: string) => {
  const stripe = await stripePromise
  if (stripe) {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      successUrl: 'https://civerseguridad.com',
      cancelUrl: 'https://civerseguridad.com',
    })
    if (error) {
      console.error('Error redireccionando a Stripe:', error)
    }
  }
}

// Añade esta función al renderizado del botón correspondiente
const SignUpButton: React.FC<{ priceId: string }> = ({ priceId }) => {
  return (
    <Button colorScheme="teal" onClick={() => redirectToStripe(priceId)}>
      Sign Up
    </Button>
  )
}

// Asegúrate de utilizar SignUpButton en los lugares apropiados dentro del componente de renderizado de planes
