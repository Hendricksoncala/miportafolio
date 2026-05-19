import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as createAstro, d as renderSlot, h as renderComponent } from '../astro_Ck7ycVT5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Badge, a as $$SocialPill, b as $$LinkedIn, c as $$SectionContainer, d as $$Layout } from './components_CG1pg-K6.mjs';
import 'clsx';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Hendrickson";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-[#ebcda2] [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Me llamo Hendrickson Alexander. Comencé en el mundo de la programación a los 16 años, con una simple calculadora. Hoy en día, estoy <strong>Explorando nuevas tecnologías para mejorar mi capacidad de crear e innovar en cualquier proyecto que se presente..</strong>.
</p> <p>
Algunos de mis éxitos incluyen <strong> Desarrollar una página web para gestionar un cine</strong>. si bien fue un proyecto simple, me permitió experimentar con nuevas tecnologías y descubrir formas más eficientes de organizar mis proyectos.
</p> </div> <img width="200" height="200" src="/me.png"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/AboutMe.astro", void 0);

const $$Astro$a = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/Briefcase.astro", void 0);

const $$Astro$9 = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/Code.astro", void 0);

const $$Astro$8 = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/LinkInline.astro", void 0);

const $$Astro$7 = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${void 0} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></svg> ` })}`} </div> </div>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/ExperienceItem.astro", void 0);

const $$Astro$6 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCE = [
    {
      date: "",
      title: "Frontend",
      company: "JavaScript,  React, Astro, Lit, HTML y CSS",
      description: "el pepe"
    },
    {
      date: "",
      title: "Backend",
      company: "MongoDB, MySQL, Express, NodeJS",
      description: "el pepe1"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/Experience.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$4 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/GitHub.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/LinkButton.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    JAVASCRIPT: {
      name: "JavaScript",
      class: "bg-[#f3ba2f] text-white",
      icon: "dd"
    },
    LIT: {
      name: "LIT",
      class: "bg-[#003159] text-white",
      icon: "dd"
    },
    HTML: {
      name: "HTML",
      class: "bg-[#e84c24] text-white",
      icon: "dd"
    },
    CSS: {
      name: "css",
      class: "bg-[#003159] text-white",
      icon: "dd"
    },
    EXPRESS: {
      name: "Express",
      class: "bg-black text-white",
      icon: "dd"
    },
    NODEJS: {
      name: "NodeJS",
      class: "bg-black text-white",
      icon: "dd"
    },
    MONGODB: {
      name: "MongoDB",
      class: "bg-[#09603c] text-white",
      icon: "dd"
    },
    REACT: {
      name: "React",
      class: "bg-[#003159] text-white",
      icon: "dd"
    }
  };
  const PROJECTS = [
    {
      title: "JS Proyectos",
      description: "Creacion de una pagina web hecha con tecnologias como JavaScript, Lit, HTML y CSS que permitia guardar sus datos en el LocalHost ",
      github: "https://github.com/Hendricksoncala/ProyectoWeb-viejo-.git",
      image: "/projects/webViejo.png",
      tags: [TAGS.JAVASCRIPT, TAGS.LIT]
    },
    {
      title: "ProyectoMongoDB - plataforma de peliculas",
      description: "Plataforma funcional para la administracion de asientos, carteleras y facturas de un cine, hecha con React, JavaScript, MongoDB, Express",
      link: "https://github.com/Hendricksoncala/proyectoMongoDB",
      image: "/projects/cinefigma.png",
      tags: [TAGS.JAVASCRIPT, TAGS.EXPRESS, TAGS.REACT, TAGS.MONGODB, TAGS.NODEJS]
    },
    {
      title: "SpaceX - plataforma de informacion de SpaceX",
      description: "Plataforma funcional para visualizar la informacion de lanzamientos de SpaceX y sus cohetes",
      link: "https://github.com/Hendricksoncala/Space-X-Web2.git",
      image: "/projects/spacex.png",
      tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS]
    },
    {
      title: "DeadConsole - Videojuego",
      description: "Videojuego hecho con javascript simulando una consola en el que podras tener un entorno arcade.",
      link: "https://github.com/Hendricksoncala/Ejemplo-POO-juego",
      image: "/projects/deadconsole.png",
      tags: [TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/icons/Mail.astro", void 0);

const HojaDeVidaHendrickson = "/_astro/HojaDeVidaHendrickson.2ZBD66qL.pdf";

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="./me2.png"${addAttribute(personalImageAlt, "alt")}> <a href="https://linkedin.com/in/HendricksonCala" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hey, soy Hendrickson
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300"> <strong>Espiritu emprendedor y un constante interes por la tecnologia</strong> de Bucaramanga, Santander. Con ganas de trabajar en equipo y impactar positivamente con mis habilidades.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:hendricksoncala@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/hendrickson-alexander-58b9942b7/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": HojaDeVidaHendrickson, "download": "HojaDeVidaHendrickson" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
HojaDeVida
` })} </nav> </div>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/components/TitleSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Hendrickson - Programador ", "description": "Contrata a hendrickson para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web. Especializado en crear aplicaciones \xFAnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Briefcase", $$Briefcase, { "class": "size-8" })}
Habilidades Tecnicas
` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
` })} ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
` })} ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/pages/index.astro", void 0);

const $$file = "/home/hendrickson/NUEVOPORFOLIO/porfolio.dev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
