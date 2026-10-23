import { useEffect, useState } from 'react'
import monograma from './assets/monograma.png'
import avatar from './assets/avatar.jpg'
import {
  contato, servicos, processo, projetos, filtros, ferramentas, whatsappLink,
} from './data'

/* ───────── Ícones (SVG inline, sem dependências) ───────── */
const Icon = {
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.21-4.24 9.44-9.44 9.44m8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.69L.57 23.7l6.08-1.6a11.3 11.3 0 0 0 5.4 1.38h.01c6.27 0 11.37-5.1 11.38-11.37 0-3.04-1.18-5.9-3.34-8.05" /></svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
  ),
  github: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" /></svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  ext: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}><path d="m5 12 5 5 9-10" /></svg>
  ),
}

const corBg = { violet: 'bg-violet', aqua: 'bg-aqua', navy: 'bg-navy' }

/* Elemento-assinatura da marca: ponto + duas cápsulas */
function Blocos({ className = '', a = 'bg-violet', b = 'bg-aqua', c = 'bg-navy' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`} aria-hidden="true">
      <span className={`size-4 rounded-full ${a}`} />
      <span className={`h-3 w-16 rounded-full ${b}`} />
      <span className={`h-3 w-16 rounded-full ${c}`} />
    </div>
  )
}

function Capsula({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full bg-lilac px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-violet uppercase ${className}`}>
      <span className="size-1.5 rounded-full bg-aqua" />
      {children}
    </span>
  )
}

function Titulo({ kicker, children, sub, center }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Capsula>{kicker}</Capsula>
      <h2 className="mt-5 text-3xl leading-tight font-bold text-balance sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  )
}

/* ───────── Header ───────── */
const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  useEffect(() => {
    const on = () => setRolou(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${rolou || aberto ? 'bg-white/90 shadow-[0_1px_0_#18243A14] backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Christiane Magalhães — início">
          <img src={monograma} alt="" className="h-9 w-auto" />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold">Christiane Magalhães</span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-ink-soft">SOCIAL MEDIA & WEB DESIGN</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm font-medium text-ink-soft transition hover:text-violet">{l.label}</a></li>
          ))}
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet">
              Vamos conversar
            </a>
          </li>
        </ul>

        <button
          className="grid size-11 place-items-center rounded-full md:hidden"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto} aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-[3px] w-6 rounded-full bg-navy transition ${aberto ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-[3px] rounded-full bg-aqua transition ${aberto ? 'top-1.5 w-6 -rotate-45 bg-navy' : 'top-3 w-4'}`} />
          </span>
        </button>
      </nav>

      {aberto && (
        <ul className="border-t border-navy/10 bg-white px-4 pt-2 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAberto(false)} className="block py-3 font-display text-lg font-semibold">{l.label}</a>
            </li>
          ))}
          <li className="pt-3">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block rounded-full bg-navy py-3 text-center font-semibold text-white">Vamos conversar</a>
          </li>
        </ul>
      )}
    </header>
  )
}

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-lilac to-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Capsula className="bg-white">Social media & web design</Capsula>
          <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Do conteúdo ao site, sua marca <span className="text-violet">organizada</span> no digital.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Ajudo profissionais e pequenos negócios a transformar ideias em uma presença digital clara, profissional e coerente — com estratégia, conteúdo e páginas que funcionam.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white transition hover:bg-violet">
              Ver portfólio <Icon.arrow className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white px-7 py-3.5 font-semibold transition hover:border-aqua">
              <Icon.whatsapp className="size-5 text-[#25D366]" /> Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Composição visual: foto + blocos da marca */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -top-6 -right-4 size-24 rounded-full bg-aqua/30 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-navy shadow-2xl shadow-navy/20">
            <img src={avatar} alt="Christiane Magalhães" className="aspect-[4/5] w-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl shadow-navy/10 sm:-left-10">
            <div className="flex items-center gap-3">
              <Blocos className="scale-75" />
              <div>
                <p className="font-display text-sm font-semibold">Estratégia + Conteúdo + Web</p>
                <p className="text-xs text-ink-soft">tudo no mesmo lugar</p>
              </div>
            </div>
          </div>
          <span className="absolute top-8 -left-3 size-6 rounded-full bg-violet ring-8 ring-white" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

/* ───────── Serviços ───────── */
function Servicos() {
  return (
    <section id="servicos" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Titulo kicker="Serviços" sub="Você pode contratar cada frente separadamente ou tudo junto — o importante é que a sua comunicação fique coerente do post ao site.">
          Como eu posso ajudar a sua marca
        </Titulo>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {servicos.map((s) => (
            <article key={s.titulo} className="group flex flex-col rounded-3xl border border-navy/8 bg-snow p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-navy/8">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className={`size-3 rounded-full ${corBg[s.cor]}`} />
                <span className={`h-3 w-12 rounded-full ${corBg[s.cor]} opacity-40`} />
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.titulo}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.texto}</p>
              <ul className="mt-6 space-y-2.5 border-t border-navy/8 pt-6">
                {s.itens.map((i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <Icon.check className="mt-0.5 size-4 shrink-0 text-aqua" /> {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Processo */}
        <div className="mt-20 rounded-[2rem] bg-navy p-8 text-white sm:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-bold sm:text-3xl">Como funciona</h3>
            <p className="text-white/60">Clareza em cada etapa.</p>
          </div>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processo.map((p, i) => (
              <li key={p.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className={`grid size-10 place-items-center rounded-full font-display text-sm font-bold ${i % 2 ? 'bg-aqua text-navy' : 'bg-violet'}`}>{p.n}</span>
                  {i < processo.length - 1 && <span className="hidden h-px flex-1 bg-white/20 lg:block" aria-hidden="true" />}
                </div>
                <h4 className="mt-5 font-display text-lg font-semibold">{p.titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ───────── Portfólio ───────── */
/* Moldura de navegador; com `imagem`, mostra o print do site dentro da tela */
function MolduraSite({ dominio, titulo, imagem }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col bg-lilac p-4">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-lg shadow-navy/10">
        <div className="flex items-center gap-1.5 border-b border-navy/8 px-3 py-2">
          <span className="size-2 rounded-full bg-navy/20" /><span className="size-2 rounded-full bg-navy/20" /><span className="size-2 rounded-full bg-navy/20" />
          <span className="ml-2 truncate rounded-full bg-snow px-3 py-0.5 text-[10px] text-ink-soft">{dominio}</span>
        </div>
        {imagem ? (
          <div className="min-h-0 flex-1 overflow-hidden">
            <img src={imagem} alt={`Prévia do site ${titulo}`} loading="lazy" className="size-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
        ) : (
        <div className="flex flex-1 flex-col justify-center gap-3 px-6">
          <span className="h-2 w-14 rounded-full bg-aqua" />
          <p className="font-display text-lg leading-tight font-bold sm:text-xl">{titulo}</p>
          <span className="h-2 w-3/4 rounded-full bg-navy/10" />
          <span className="h-2 w-1/2 rounded-full bg-navy/10" />
          <span className="mt-1 h-6 w-24 rounded-full bg-violet" />
        </div>
        )}
      </div>
    </div>
  )
}

const tipoLabel = { web: 'Web design', social: 'Social media', dev: 'Front-end' }

function Portfolio() {
  const [filtro, setFiltro] = useState('todos')
  const lista = projetos.filter((p) => filtro === 'todos' || p.tipo.includes(filtro))

  return (
    <section id="portfolio" className="bg-snow py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Titulo kicker="Portfólio" sub="Sites, redes sociais e projetos de front-end que mostram como eu penso e construo.">
            Projetos que apresentam e conectam
          </Titulo>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar projetos">
            {filtros.map((f) => (
              <button
                key={f.id} role="tab" aria-selected={filtro === f.id} onClick={() => setFiltro(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filtro === f.id ? 'bg-navy text-white' : 'bg-white text-ink-soft hover:text-navy'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lista.map((p) => (
            <article key={p.titulo} className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-navy/6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 ${p.destaque && filtro === 'todos' ? 'lg:col-span-1' : ''}`}>
              <div className="overflow-hidden">
                {p.dominio
                  ? <MolduraSite dominio={p.dominio} titulo={p.titulo} imagem={p.imagem} />
                  : p.imagem
                  ? <img src={p.imagem} alt={`Prévia do projeto ${p.titulo}`} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                  : <MolduraSite dominio={p.dominio} titulo={p.titulo} />}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap gap-2">
                  {p.tipo.map((t) => (
                    <span key={t} className={`rounded-full px-3 py-1 text-[11px] font-semibold ${t === 'social' ? 'bg-violet/10 text-violet' : t === 'web' ? 'bg-aqua/15 text-[#2A8A80]' : 'bg-navy/8 text-navy'}`}>{tipoLabel[t]}</span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.resumo}</p>
                <p className="mt-4 text-xs text-ink-soft/80">{p.tags.join(' · ')}</p>
                {(p.site || p.repo) && (
                  <div className="mt-5 flex gap-4 border-t border-navy/8 pt-5 text-sm font-semibold">
                    {p.site && <a href={p.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-violet hover:underline">Ver site <Icon.ext className="size-3.5" /></a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink-soft hover:text-navy">Código <Icon.github className="size-3.5" /></a>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Sobre ───────── */
function Sobre() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-aqua" aria-hidden="true" />
          <img src={avatar} alt="Retrato de Christiane Magalhães" loading="lazy" className="relative aspect-square w-full rounded-[2rem] object-cover object-top" />
          <Blocos className="absolute -top-5 right-2 rounded-2xl bg-white p-4 shadow-lg sm:-right-5" />
        </div>

        <div>
          <Titulo kicker="Sobre mim">Estratégia, criatividade e código no mesmo projeto</Titulo>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              Sou a Christiane, de Santo André/SP. Meu primeiro contato com HTML foi personalizando o código do meu Tumblr na adolescência — e a vontade de criar no digital nunca foi embora.
            </p>
            <p>
              Formada em Administração, decidi mudar de carreira depois da pandemia e me formei em Análise e Desenvolvimento de Sistemas pelo Senac. Hoje uno essa visão de negócio com design e tecnologia para cuidar das redes sociais e dos sites de profissionais e pequenos negócios.
            </p>
            <p>
              Gosto de comunicação clara, próxima e sem promessas exageradas: você entende o que está sendo feito e por quê.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-lilac p-5">
              <dt className="text-xs font-semibold tracking-[0.12em] text-violet uppercase">Formação</dt>
              <dd className="mt-2 text-sm leading-relaxed">Análise e Desenvolvimento de Sistemas — Senac SP<br />Administração de Empresas — FSA</dd>
            </div>
            <div className="rounded-2xl bg-lilac p-5">
              <dt className="text-xs font-semibold tracking-[0.12em] text-violet uppercase">Atendimento</dt>
              <dd className="mt-2 text-sm leading-relaxed">Santo André / Grande ABC e clientes em todo o Brasil, on-line</dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Ferramentas">
            {ferramentas.map((f) => (
              <li key={f} className="rounded-full border border-navy/12 px-4 py-1.5 text-sm">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ───────── Contato ───────── */
function Contato() {
  const canais = [
    { icon: Icon.mail, label: 'E-mail', valor: contato.email, url: `mailto:${contato.email}` },
    { icon: Icon.instagram, label: 'Instagram', valor: contato.instagram.label, url: contato.instagram.url },
    { icon: Icon.linkedin, label: 'LinkedIn', valor: contato.linkedin.label, url: contato.linkedin.url },
  ]
  return (
    <section id="contato" className="px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-white sm:px-14 sm:py-20">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-violet/40 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-10 size-60 rounded-full bg-aqua/25 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-aqua uppercase">
              <span className="size-1.5 rounded-full bg-aqua" /> Contato
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-bold text-balance sm:text-5xl">Vamos organizar a sua marca no digital?</h2>
            <p className="mt-5 max-w-md text-lg text-white/70">Me conte sobre o seu negócio. Eu respondo com os próximos passos e uma proposta clara.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-aqua px-8 py-4 font-semibold text-navy transition hover:bg-white">
              <Icon.whatsapp className="size-5" /> Chamar no WhatsApp
            </a>
          </div>
          <ul className="space-y-3">
            {canais.map((c) => (
              <li key={c.label}>
                <a href={c.url} target={c.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/6 p-5 ring-1 ring-white/10 transition hover:bg-white/12">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10"><c.icon className="size-5" /></span>
                  <span className="min-w-0">
                    <span className="block text-xs tracking-[0.12em] text-white/50 uppercase">{c.label}</span>
                    <span className="block truncate font-medium">{c.valor}</span>
                  </span>
                  <Icon.arrow className="ml-auto size-4 shrink-0 text-white/40" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-navy/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-ink-soft sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <img src={monograma} alt="" className="h-7 w-auto" />
          <span>© {new Date().getFullYear()} Christiane Magalhães · Social Media & Web Design</span>
        </div>
        <div className="flex gap-4">
          <a href={contato.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-violet"><Icon.instagram className="size-5" /></a>
          <a href={contato.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-violet"><Icon.linkedin className="size-5" /></a>
          <a href={contato.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-violet"><Icon.github className="size-5" /></a>
        </div>
      </div>
    </footer>
  )
}

function WhatsFlutuante() {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/20 transition hover:scale-105">
      <Icon.whatsapp className="size-7" />
    </a>
  )
}

/* Botão "voltar ao topo": aparece depois que o usuário rola a página */
function VoltarTopo() {
  const [visivel, setVisivel] = useState(false)
  useEffect(() => {
    const on = () => setVisivel(window.scrollY > 400)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Voltar ao topo"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      className={`fixed right-6 bottom-23 z-50 grid size-12 place-items-center rounded-full bg-navy text-white shadow-lg shadow-navy/20 transition hover:bg-violet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <Icon.arrow className="size-5 -rotate-90" />
    </button>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Portfolio />
        <Sobre />
        <Contato />
      </main>
      <Footer />
      <VoltarTopo />
      <WhatsFlutuante />
    </>
  )
}

