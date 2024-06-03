import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Soluciones de Ciberseguridad a tu medida',
  description:
    'Entendemos que cada empresa tiene necesidades únicas en ciberseguridad, por eso ofrecemos planes adaptados a diferentes niveles de requerimiento y escalabilidad.',
  plans: [
    {
      id: 'basic',
      title: 'Básico',
      description: 'Ideal para startups y pequeñas empresas que buscan protección fundamental.',
      price: '€150/mes',
      features: [
        {
          title: 'Certificación ISO 27001',
        },
        {
          title: 'Autenticación básica y segura',
        },
        {
          title: 'Monitoreo y detección de vulnerabilidades básicas',
        },
        {
          title: 'Informes de seguridad mensuales',
        },
        {
          title: 'Soporte técnico limitado',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'professional',
      title: 'Profesional',
      description: 'Para equipos y empresas en crecimiento que requieren protección avanzada y cumplimiento de normativas.',
      price: '€350/mes',
      isRecommended: true,
      features: [
        {
          title: 'Certificación ISO 27001 y ISO 13485',
        },
        {
          title: 'Gestión avanzada de autenticaciones y accesos',
        },
        {
          title: 'Detección proactiva de vulnerabilidades y amenazas',
        },
        {
          title: 'Respuesta a incidentes y asistencia prioritaria',
        },
        {
          title: 'Acceso a comunidad privada y webinars exclusivos',
        },
        {
          title: 'Actualizaciones y mejoras continuas',
        },
      ],
      action: {
        href: 'https://tuempresa.com/professional-plan',
      },
    },
    {
      id: 'enterprise',
      title: 'Empresarial',
      description: 'Soluciones completas para grandes organizaciones que necesitan la máxima seguridad y personalización.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €2000,-
          </Text>
          <Text>€1500,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Certificación ISO completa para ciberseguridad',
        },
        {
          title: 'Análisis de seguridad a medida y auditorías regulares',
        },
        {
          title: 'Monitoreo en tiempo real y respuesta avanzada a incidentes',
        },
        {
          title: 'Formación personalizada en ciberseguridad para equipos',
        },
        {
          title: 'Soporte dedicado 24/7',
        },
        {
          title: 'Acceso a todas las funciones y actualizaciones premium',
        },
      ],
      action: {
        href: 'https://tuempresa.com/enterprise-plan',
      },
    },
    {
      id: 'contact',
      title: 'Contacto Directo',
      description: 'Para necesidades específicas o proyectos de gran envergadura, contáctanos para una solución personalizada.',
      price: 'Consultar',
      features: [
        {
          title: 'Soluciones a medida',
        },
        {
          title: 'Evaluación de necesidades específicas',
        },
        {
          title: 'Presupuesto personalizado',
        },
      ],
      action: {
        href: 'https://tuempresa.com/contact',
      },
    },
  ],
}