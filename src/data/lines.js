/** REEE — `categoria` = rótulo abaixo da foto; URLs Unsplash com foco no objeto pedido. */

const BASE = import.meta.env.BASE_URL;

export const linhasReee = [
  {
    id: 'branca',
    nome: 'Linha Branca',
    cor: '#e2e8f0',
    corAccent: '#94a3b8',
    emoji: '🧊',
    resumo: 'Geladeiras, fogões e grandes eletrodomésticos. ',
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
        src: `${BASE}images/img-fogao.jpg`,
        categoria: 'Fogões e cooktops',
      },
      {
        src: `${BASE}images/img-micro-ondas.webp`,
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
    resumo: 'TVs, monitores e equipamentos de áudio e vídeo.',
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
        src: `${BASE}images/img-radio-recivers.jpeg`,
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
    resumo: 'Pequenos eletrodomésticos e ferramentas elétricas. ',
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
        src: `${BASE}images/img-brinquedo-eletronico.webp`,
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
    resumo: 'Computadores, celulares e dispositivos de informática. ',
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
        src: `${BASE}images/img-impressoras.jpeg`,
        categoria: 'Impressoras e scanners',
      },
      {
        src: `${BASE}images/img-teclado-mouse.webp`,
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
    resumo: 'Resíduos com componentes químicos que exigem descarte especial.',
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
        src: `${BASE}images/img-lampadas.webp`,
        categoria: 'Lâmpadas fluorescentes',
      },
      {
        src: `${BASE}images/img-led.jpg`,
        categoria: 'LEDs com componentes integrados',
      },
      {
        src: `${BASE}images/img-pilhas.webp`,
        categoria: 'Baterias de lítio',
      },
      {
        src: `${BASE}images/img-baterias.webp`,
        categoria: 'Baterias de celular, notebook e ferramentas',
      },
    ],
  },
];
