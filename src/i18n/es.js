export const es = {
  translation: {
    selfReportingTitle: 'Auto Reporte',
    beta: 'beta',
    yes: 'Sí',
    no: 'No',
    warnDisclaimer:
      'Esta herramienta es utilizada meramente con fines informativos.<br/>No provee una asesoría médica.<br/>No la uses para reemplazar a una consulta, diagnóstico o tratamiento con un profesional.'
  },
  home: {
    leadTitle:
      'Autoreporte de Coronavirus en Paraguay ¿Tenés síntomas? Decinos cuáles y te ayudamos',
    leadSecondary:
      '¿Fiebre? ¿Tos Seca? ¿Dificultad para respirar? ¿Otro síntoma? Completá el formulario.',
    ctaCheckSymptoms: 'Revisar mis síntomas',
    alertTestTitle: 'Versión de Prueba',
    alertTestMessage:
      'Esta no es la versión oficial de la app. Esta app se encuentra en <1>modo de prueba</1> para ajustar los últimos detalles. Apenas esté lista, todos los colaboradores lo estaremos lanzando por nuestros canales oficiales. ¡Muchas gracias por ayudar a hacerla mejor!'
  },
  navbar: {
    home: 'Inicio',
    selfReporting: '$t(selfReportingTitle)',
    trivia: 'Trivia',
    aboutUs: 'Quiénes somos'
  },
  footer: {
    followAndContribute: 'Seguinos y contribuye',
    shareText:
      'Nos encantaría escuchar su opinión. Por favor, no duden en compartir con nosotros, lo que podemos mejorar',
    aboutUs: 'Sobre nosotros',
    aboutUsText:
      'Somos un grupo de personas y empresas comprometidas con el Paraguay construyendo tecnología para suavizar el impacto máximo de la pandemia en el sistema de salud paraguayo.',
    madeWithLove: 'Hecho con<1></1>en Paraguay'
  },
  about: {
    leadText:
      'Este proyecto es un sistema de notificación automática, que permite a cualquier persona acceder a él e informar de sus síntomas y obtener una rápida retroalimentación de los pasos a seguir, además de permitir generar datos sobre la situación.',
    contributeTitle: 'Contribuir a CovPy',
    contributeText:
      'CovPy es libre y de código abierto. Puedes encontrar el código en GitHub. Las contribuciones son bienvenidas! También puedes simplemente <1>informar de un error</1> o solicitar una característica allí. report a bug or request a feature there.',
    learnMore: 'Aprende más',
    goodCompanyTitle: 'You are in good company',
    goodCompanyText1:
      'Este proyecto fue creado como una iniciativa de Penguin Academy para crear tecnología para suavizar el impacto máximo de la pandemia COVID-19 en el Sistema de Salud de Paraguay.',
    goodCompanyText2:
      'CovPy es desarrollado y mantenido por Penguin Academy, UCOM, la Facultad Politécnica UNA, the Product Lab, Web Paraguay, Okimo, y otras organizaciones así como muchos otros contribuyentes asombrosos'
  },
  formStart: {
    'Antes de empezar': 'Antes de empezar',
    agreeTOSMessage:
      'Al continuar, usted está de acuerdo con nuestros <1>términos de servicio</1>.',
    howDoYouFeel: 'En general, ¿Cómo te sentís en este momento?',
    good: 'Bien',
    bad: 'Mal',
    justTesting: 'Sólo estoy probando la aplicación'
  },
  form: {
    gender: {
      question: '¿Cuál es su sexo?',
      options: {
        male: 'Hombre',
        female: 'Mujer'
      }
    },
    pregnant: {
      question: '¿Estás embarazada?'
    },
    age: {
      question: '¿Cuántos años tenés?'
    },
    breath: {
      question: '¿Tenés síntomas respiratorios como tos o dolor de garganta?',
      subtitle: 'Si solo te chorrea la nariz, indicá NO.'
    },
    fever: {
      question: 'En las últimas 24 horas, ¿Tuviste fiebre de 38°C o más?'
    },
    alarmSigns: {
      question: '¿Tenés alguno de estos signos?',
      subtitle:
        'Grave dificultad respiratoria, sensación de ahogo, dolor de pecho, fiebre persistente mas de 72 horas, confusión o somnolencia, dolor de cabeza intenso, visión borrosa.'
    },
    riskGroup: {
      question: '¿Pertenecés a un grupo de riesgo?',
      subtitle:
        'Mayores de 65 años, diabetes, hipertensión, obesidad mórbida, cáncer, diálisis, asma, problemas pulmonares crónicos, problemas del corazón, uso prolongado de corticoides.'
    },
    healthProfessional: {
      question:
        '¿Sos un profesional de la salud y tenés contacto con pacientes o residentes de asilos?'
    },
    professionalExposure: {
      question:
        'En el curso de tu trabajo sin equipo de protección, ¿tuviste contacto directo con uno en el caso confirmado?'
    },
    familyExposure: {
      question:
        'En los últimos 15 días, ¿tuviste contacto con un algún caso confirmado en su entorno cercano (familia o personas del mismo hogar)?'
    },
    submit: 'Enviar',
    errorSubmitting:
      'Se ha producido un error. Sus entradas no se han guardado. Por favor, inténtelo de nuevo o póngase en contacto con nosotros.'
  },
  formSuccess: {
    alarm: {
      title: 'Busque atención médica inmediatamente.',
      message:
        'Signos de alarma, llame al 911 inmediatamente y pida ayuda. Si está en condiciones vaya al hospital para atención médica inmediata.'
    },
    symptoms: {
      title: '',
      message:
        '¿Fiebre y Dificultades Respiratorias? Usted tiene síntomas y puede ser contagioso. Aislate e informa a tu entorno para que tomen las precauciones necesarias. Por favor llama al 154 para informar que cuentas con estos síntomas.'
    },
    exposure: {
      title: '',
      message:
        'Estuviste expuesto/a o tuviste contacto con un caso confirmado de COVID19, el protocolo recomendado es que te aisles por 7 a 14 días.'
    },
    noSymptoms: {
      title: '',
      message:
        'Sin síntomas. En este momento no muestras síntomas de COVID19, sin embargo, existen casos asintomáticos. Lo ideal es que mantengas tus contactos al mínimo y tengas todas las precauciones durante esta etapa de emergencia sanitaria.'
    },
    medical: {
      title: '',
      message:
        'Una mascarilla quirúrgica (tipo II o IIR) está indicada para el personal médico: Examinar a un paciente con tos o fiebre si el cuidador experimenta síntomas respiratorios o generales como fatiga, dolor muscular o dolores de cabeza. Una mascarilla de ultrafiltración (FFP2 3) sólo se requiere para el personal hospitalario expuesto a actividades de alto riesgo.'
    },
    evaluationResult: {
      title: 'Los resultados de tu evaluación'
    },
    workAdvice: 'Consejos para su práctica profesional',
    tips: {
      title: 'Consejos generales a seguir en todo momento',
      measures:
        'Respetar las medidas de higiene. Limitar las visitas a conocidos en el hospital o que residan en residencias de ancianos/cuidados tanto como sea posible. Si no se puede evitar esta visita, póngase en contacto con el personal de enfermería y siga sus recomendaciones. Cuando espere en la parada del bús, manténgase lo más alejado posible de otras personas',
      travel:
        'Reduzca sus viajes de placer. Si es posible, evite viajar durante la hora pico.',
      distancing:
        'Manténgase lo más alejado posible de otras personas en el transporte público y aplique las normas de higiene y las recomendaciones de comportamiento mencionadas anteriormente.',
      publicTransportation:
        'Si tiene síntomas de enfermedades respiratorias (por ejemplo, una tos leve), evite utilizar el transporte público si es posible.',
      mask:
        'Se utilizan mascarillas para proteger a los trabajadores sanitarios que tratan los casos sospechosos, así como a las personas especialmente vulnerables.'
    }
  },
  SelectQuestion: {
    placeholder: 'Seleccionar...',
    default: 'Seleccione',
    pleaseChoose: 'Por favor, seleccione una opción.'
  }
}
