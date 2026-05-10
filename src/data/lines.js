/** REEE — `categoria` = rótulo abaixo da foto; URLs Unsplash com foco no objeto pedido. */

export const linhasReee = [
  {
    id: 'branca',
    nome: 'Linha Branca',
    cor: '#e2e8f0',
    corAccent: '#94a3b8',
    emoji: '🧊',
    resumo: 'Grandes eletrodomésticos de linha branca.',
    exemplos: [
      'Geladeiras e freezers',
      'Máquinas de lavar e secadoras',
      'Fogões e cooktops',
      'Micro-ondas',
    ],
    armazenar: [
      'Mantenha em local seco e arejado, longe de crianças.',
      'Desligue da tomada e, se possível, tape portas de geladeiras para evitar acidentes.',
      'Não desmonte motores ou gases refrigerantes — risco ambiental e à saúde.',
    ],
    descartar: [
      'Leve a ecopontos ou pontos de recebimento credenciados de logística reversa.',
      'Fabricantes e redes costumam retirar no delivery da compra nova — consulte o fabricante.',
      'Nunca abandone na calçada ou em lixo comum.',
    ],
    evitar: [
      'Quebrar isolamento ou perfurar compressor.',
      'Misturar com recicláveis secos (papel/plástico) da coleta comum.',
    ],
    imagens: [
      {
        src: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Geladeiras',
      },
      {
        src: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Máquinas de lavar',
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Fogões e cooktops',
      },
      {
        src: 'https://images.unsplash.com/photo-1585659722983-3a675dab7db2?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Micro-ondas',
      },
    ],
  },
  {
    id: 'marrom',
    nome: 'Linha Marrom',
    cor: '#92400e',
    corAccent: '#ca8a04',
    emoji: '📺',
    resumo: 'Equipamentos de áudio, vídeo e TV.',
    exemplos: [
      'Televisores e monitores',
      'Aparelhos de som e home theater',
      'Câmeras e filmadoras',
      'Rádios e receivers',
    ],
    armazenar: [
      'Proteja telas para evitar trincas; empilhe com cuidado.',
      'Guarde cabos enrolados separadamente para não torcer conectores.',
      'Ambiente seco evita corrosão de circuitos.',
    ],
    descartar: [
      'Monitores e TVs podem conter chumbo em vidros de tubo — destino especializado obrigatório.',
      'Use pontos de coleta de REEE ou campanhas do município.',
      'Apague dados de smart TVs antes do descarte, se aplicável.',
    ],
    evitar: ['Jogar em aterro ou lixo comum.', 'Incinerar ou queimar equipamentos.'],
    imagens: [
      {
        src: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Smart TVs',
      },
      {
        src: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Aparelhos de som',
      },
      {
        src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Câmeras',
      },
      {
        src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Rádios e receivers',
      },
    ],
  },
  {
    id: 'azul',
    nome: 'Linha Azul',
    cor: '#1d4ed8',
    corAccent: '#38bdf8',
    emoji: '🔌',
    resumo: 'Pequenos eletrodomésticos, ferramentas elétricas e brinquedos a pilha.',
    exemplos: [
      'Liquidificadores, batedeiras e cafeteiras',
      'Aspiradores de pó e ferros elétricos',
      'Furadeiras e ferramentas portáteis',
      'Brinquedos eletrônicos',
    ],
    armazenar: [
      'Retire pilhas e baterias soltas (destinem-se à Linha Laranja quando aplicável).',
      'Mantenha cabos identificados; evite umidade na garagem.',
      'Para ferramentas, remova bits e acessórios soltos.',
    ],
    descartar: [
      'Ecopontos e fabricantes com logística reversa aceitam a maioria dos pequenos aparelhos.',
      'Equipamentos médicos podem ter normas específicas — pergunte ao fabricante ou hospital.',
    ],
    evitar: [
      'Descarte de pilhas junto com o aparelho sem separação.',
      'Jogar aparelhos úmidos ou com cabo esgarçado sem isolamento.',
    ],
    imagens: [
      {
        src: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Liquidificadores',
      },
      {
        src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Ferramentas elétricas',
      },
      {
        src: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Aspiradores',
      },
      {
        src: 'https://images.unsplash.com/photo-1566576721346-d285fd6a5048?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Brinquedos eletrônicos',
      },
    ],
  },
  {
    id: 'verde',
    nome: 'Linha Verde',
    cor: '#059669',
    corAccent: '#34d399',
    emoji: '💻',
    resumo: 'Informática, telecomunicações e periféricos.',
    exemplos: [
      'Computadores, notebooks e servidores',
      'Celulares, tablets e roteadores',
      'Impressoras, scanners e monitores LCD',
      'Teclados, mouses e cabos',
    ],
    armazenar: [
      'Faça backup e apague dados (reset de fábrica em celulares/notebooks).',
      'Remova cartões SIM e mídias removíveis.',
      'Guarde em caixa antiestática se tiver placas soltas.',
    ],
    descartar: [
      'Pontos de coleta de REEE, programas de trade-in ou ecopontos.',
      'Impressoras: verifique cartuchos — muitas vezes têm devolução separada.',
      'Baterias de notebook muitas vezes devem ir para recipiente de pilhas no ecoponto.',
    ],
    evitar: [
      'Vender ou doar sem apagar dados pessoais.',
      'Descartar toner/toner a vácuo no lixo comum sem orientação.',
    ],
    imagens: [
      {
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Notebooks',
      },
      {
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Celulares, tablets e roteadores',
      },
      {
        src: 'https://images.unsplash.com/photo-1612815154858-60aa4c43e64e?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Impressoras e scanners',
      },
      {
        src: 'https://images.unsplash.com/photo-1618384887929-2a0284f7edab?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Teclados e mouses',
      },
    ],
  },
  {
    id: 'laranja',
    nome: 'Linha Laranja',
    cor: '#ea580c',
    corAccent: '#fb923c',
    emoji: '🔋',
    resumo: 'Lâmpadas, pilhas e baterias portáteis.',
    exemplos: [
      'Lâmpadas fluorescentes, compactas e tubulares',
      'LEDs com componentes eletrônicos integrados (conforme local)',
      'Pilhas alcalinas e recarregáveis',
      'Baterias de celular, notebook e ferramentas',
    ],
    armazenar: [
      'Use recipiente rígido para pilhas soltas — evite curto-circuito entre terminais.',
      'Não armazene lâmpadas quebradas sem proteção; vidro e vapor de mercúrio são risco.',
      'Mantenha longe de calor e ignição.',
    ],
    descartar: [
      'Recipientes específicos em ecopontos, farmácias parceiras ou campanhas municipais.',
      'Nunca no lixo comum nem em coleta seletiva de papel/plástico.',
    ],
    evitar: ['Esmagar ou perfurar baterias de lítio.', 'Misturar com metal reciclável ou organico.'],
    imagens: [
      {
        src: 'https://images.unsplash.com/photo-1532795986287-34145cb88e90?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Lâmpadas fluorescentes',
      },
      {
        src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3624?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'LEDs com componentes integrados',
      },
      {
        src: 'https://images.unsplash.com/photo-1620799140408-87437e0d42d8?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Baterias de lítio',
      },
      {
        src: 'https://images.unsplash.com/photo-1596521631192-2001e51c3a02?w=900&h=600&fit=crop&q=82&auto=format',
        categoria: 'Baterias de celular, notebook e ferramentas',
      },
    ],
  },
];
