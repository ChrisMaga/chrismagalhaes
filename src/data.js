// ─────────────────────────────────────────────────────────────
// CONTEÚDO DO SITE — textos, links e projetos.
// ─────────────────────────────────────────────────────────────
import detonaRalph from './assets/detonaRalph.jpg'
import jogoMemoria from './assets/jogoMemoria.jpg'
import spiderMan from './assets/spiderManMultiversos.jpg'
import identidade from './assets/identidade-avatar.jpg'
import macedoFaria from './assets/macedofaria.png'
import gatoStampado from './assets/gatostampado.png'

export const WHATSAPP_NUMBER = '5511982783096'
export const WHATSAPP_MSG = 'Olá, Christiane! Vi seu site e quero conversar sobre um projeto.'
export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`

export const contato = {
  email: 'contato@chrismagalhaes.com.br',
  instagram: { label: '@chrismagalhaes.digital', url: 'https://www.instagram.com/chrismagalhaes.digital/' },
  linkedin: { label: 'christiane-magalhaes', url: 'https://www.linkedin.com/in/christiane-magalhaes/' },
  github: { label: 'ChrisMaga', url: 'https://github.com/ChrisMaga' },
}

export const servicos = [
  {
    cor: 'violet',
    titulo: 'Social Media',
    texto: 'Planejamento, calendário editorial e criação de posts para Instagram e Facebook, com legendas na voz da sua marca.',
    itens: ['Calendário editorial mensal', 'Feed, carrosséis e stories', 'Legendas e hashtags', 'Agendamento das publicações'],
  },
  {
    cor: 'aqua',
    titulo: 'Landing Pages & Sites',
    texto: 'Páginas rápidas, responsivas e pensadas para converter: apresentam o seu trabalho e levam o cliente até o contato.',
    itens: ['Layout com a sua identidade', 'Responsivo para celular', 'Botão de WhatsApp e formulários', 'Domínio próprio e publicação'],
  },
  {
    cor: 'navy',
    titulo: 'Estratégia Digital',
    texto: 'Posicionamento e organização da presença digital para que conteúdo, perfil e site falem a mesma língua.',
    itens: ['Diagnóstico do perfil', 'Pilares de conteúdo', 'Otimização da bio e destaques', 'Integração Instagram + site'],
  },
]

export const processo = [
  { n: '01', titulo: 'Conversa', texto: 'Entendo o seu negócio, o seu público e onde você quer chegar.' },
  { n: '02', titulo: 'Plano', texto: 'Organizo estratégia, conteúdo e estrutura do site em etapas claras.' },
  { n: '03', titulo: 'Criação', texto: 'Desenvolvo posts e páginas com a sua identidade, com você acompanhando.' },
  { n: '04', titulo: 'No ar', texto: 'Publico, acompanho os resultados e ajusto o que for preciso.' },
]

export const projetos = [
  {
    titulo: 'Macedo Faria Advogados',
    tipo: ['web', 'social'],
    destaque: true,
    resumo: 'Site institucional e gestão das redes sociais de um escritório de advocacia em Santo André, especializado em Direito Previdenciário, Trabalhista e Isenções Fiscais.',
    tags: ['Site institucional', 'Social media', 'WhatsApp integrado'],
    site: 'https://www.macedofaria.com.br/',
    dominio: 'macedofaria.com.br',
    imagem: macedoFaria,
  },
  {
    titulo: 'Ateliê Gato Stampado',
    tipo: ['web', 'social'],
    destaque: true,
    resumo: 'Site e redes sociais do meu próprio ateliê — da identidade da loja à vitrine on-line e ao conteúdo do Instagram.',
    tags: ['Site', 'Social media', 'Marca própria'],
    site: 'https://www.gatostampado.com.br/',
    dominio: 'gatostampado.com.br',
    imagem: gatoStampado,
  },
  {
    titulo: 'Identidade Visual Christiane Magalhães',
    tipo: ['social'],
    resumo: 'Sistema de marca completo: monograma, paleta, tipografia, linguagem gráfica de blocos e pontos e templates para Instagram.',
    tags: ['Identidade visual', 'Manual de marca', 'Templates'],
    imagem: identidade,
  },
  {
    titulo: 'Spider-Man Multiversos',
    tipo: ['dev'],
    resumo: 'Página que apresenta os atores de todos os filmes do Homem-Aranha, com carrossel, vídeo de fundo e menu interativo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imagem: spiderMan,
    site: 'https://chrismaga.github.io/spider-man-multiverse-DIO/',
    repo: 'https://github.com/ChrisMaga/spider-man-multiverse-DIO',
  },
  {
    titulo: 'Game Detona Ralph',
    tipo: ['dev'],
    resumo: 'Jogo inspirado no filme, com sistema de pontuação e tempo. Desenvolvido no bootcamp Ri Happy + DIO.',
    tags: ['JavaScript', 'Lógica de jogo'],
    imagem: detonaRalph,
    site: 'https://chrismaga.github.io/detona-ralph/',
    repo: 'https://github.com/ChrisMaga/detona-ralph',
  },
  {
    titulo: 'Jogo da Memória',
    tipo: ['dev'],
    resumo: 'Jogo da memória com cronômetro e pontuação: começa com 100 pontos e perde 5 a cada erro. Bootcamp Ri Happy + DIO.',
    tags: ['JavaScript', 'DOM'],
    imagem: jogoMemoria,
    site: 'https://chrismaga.github.io/jogo-da-memoria-DIO/',
    repo: 'https://github.com/ChrisMaga/jogo-da-memoria-DIO',
  },
]

export const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web design' },
  { id: 'social', label: 'Social media' },
  { id: 'dev', label: 'Front-end' },
]

export const ferramentas = ['Figma', 'Canva', 'React', 'Tailwind', 'JavaScript', 'HTML & CSS', 'Meta Business Suite']
