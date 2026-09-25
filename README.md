# tebkids.github.io
<!doctype html>
<html lang="es"><head><script>window["__codeletBootstrap__"]=JSON.parse('{"A":"A","B":"20260925-05-46ec85d","C":{"Abril Fatface":"YACgEZbkUVE,0","Alfa Slab One":"YACgEYS9sJU,0","Anton":"YACgEcYqQ-A,0","Archivo":"YACgEZulLoA,0","Arial Narrow":"YAGyDvJ_4Ts,0","Arial Rounded MT Bold":"YAFcfoaHu-s,0","Arial":"YAGyDvJ_4Ts,0","Avenir Next":"YAFcfmNq6UY,0","Baloo 2":"YADK30bC6HQ,0","Bebas Neue":"YACgESME5ew,0","Bricolage Grotesque":"YAFyMcdwzpc,0","Broken Glyph":"YADZ-exUkv0,0","Canva Sans":"YAFdJjTk5UU,1","Caveat":"YALBs2ploWQ,0","Comic Sans MS":"YAFcfvtOAUY,1","Cormorant Garamond":"YAFdJhX-538,0","Courier New":"YAGzXiGs0_8,0","Courier Prime":"YAD1aFjegN8,0","DM Sans":"YAD1aU3sLnI,0","DM Serif Display":"YAD1aYG82rc,0","Forum":"YACgEcnnqB4,0","Fraunces":"YAFdJpU7Kkk,0","Georgia":"YAGzXkO0pEM,0","Ghost Mono":"YAHQutsX00Q,0","Hanken Grotesk":"YAFcfhwp99E,0","Helvetica Neue":"YAFcf6CtJfI,0","Helvetica":"YAFcf6CtJfI,0","IBM Plex Mono":"YAFdJkmvhGI,0","Impact":"YAFcfnjI7Vk,0","Instrument Serif":"YAHFeOnZNEk,0","Inter":"YAFdJvSyp_k,3","Iowan Old Style":"YAGNIFa8j9o,0","Jacques Francois":"YADK3zbC6RM,0","JetBrains Mono":"YAFdJksXcAk,0","Josefin Sans":"YAFdJjvw9Ps,0","Lato":"YAFdJuFCnaw,0","Libre Baskerville":"YACgEUFdPdA,0","Lobster":"YAD8SnSjSFI,0","Lora":"YACgEXvxf8Q,0","Merriweather":"YACgEXvHxxs,0","Montserrat":"YAFdtQi73Xs,0","Nunito":"YAFdJoNRMmU,1","Oleo Script":"YACgEQQ14jI,0","Oswald":"YACgEQY10lw,0","Pacifico":"YADLjORQ1u4,0","Phantom Sans":"YAFdJvgJ5TU,0","Playfair Display":"YAFdJhem5V8,1","Plus Jakarta Sans":"YAGvf3_u0_Q,0","Poppins":"YAFdJjbTu24,1","Press Start 2P":"YAFyGr-8pmQ,0","Quicksand":"YAFdJpYtCxE,1","Raleway":"YAFdJhmxbVQ,1","Roboto Slab":"YAFdJswIKAg,0","Rockwell":"YAFcfyVZnN0,0","Rye":"YACgEdQP21k,0","Segoe UI":"YAHNdRD1Klw,0","Source Sans 3":"YAG4lO1Mj10,0","Source Serif 4":"YACgEfdj394,0","Space Grotesk":"YADZ-dYEmhg,0","Space Mono":"YADW1-vpsoc,0","Times New Roman":"YAGzXW3gftg,0","Times":"YAGzXW3gftg,0","Trebuchet MS":"YAFcfrglpVA,0","UV Display":"YAEdVfSSpYo,0","UV Sans":"YAFdJvgJ5TU,0","Ubuntu":"YACgERDU--Q,0","Verdana":"YAGzXTctYtQ,0","Work Sans":"YAGXhLOKv44,0","Yellowtail":"YACgEYG4kG4,0","ui-monospace":"YAD1aFjegN8,0","ui-sans-serif":"YACkoD1yZN0,0"}}');</script><script src="/_sdk/6542d56fbfe7a3eb.telemetry_sdk.js" integrity="sha512-ECdM0nK7EkwDuOqho2qxgyRQXyBHk9hZqRKMBr+Xsu6zjeHlt+qkO2N2YRiHN7Kg4e1fEHDhjIp4bGJYVypv1g=="></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TEB KITS | Tu primer robot</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.577.0/dist/umd/lucide.min.js"></script>
  <script src="/_sdk/6c2ecc939521f244.data_sdk.js" integrity="sha512-gRx8s+XsZDN6mSIQu2sivLZysbV0WHhb5kXNUWlgVb5lCMU1foJYukyMEDPv8Tnoocb8iwqB4XdRrWc7oEGzIQ=="></script>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&amp;family=Fredoka:wght@500;600;700&amp;display=swap" rel="stylesheet">
  <style>
    :root { --yellow:#ffc328; --teal:#16aabc; --coral:#e2576e; --ink:#252126; --cream:#fffaf1; --orange:#f37b2b; }
    * { scroll-behavior:smooth; }
    body { font-family:"DM Sans",sans-serif; color:var(--ink); overflow-x:hidden; }
    .display { font-family:"Fredoka",sans-serif; letter-spacing:-.035em; }
    .outline { box-shadow:5px 5px 0 var(--ink); border:3px solid var(--ink); }
    .dot-grid { background-image:radial-gradient(#e2576e 1.5px,transparent 1.5px); background-size:15px 15px; }
    .circuit { background-image:linear-gradient(90deg,transparent 48%,#16aabc22 48%,#16aabc22 52%,transparent 52%),linear-gradient(0deg,transparent 48%,#16aabc22 48%,#16aabc22 52%,transparent 52%); background-size:42px 42px; }
    .robot-head { width:112px;height:86px;background:var(--teal);border:4px solid var(--ink);border-radius:18px;position:relative;transform:rotate(-3deg); }
    .robot-head:before,.robot-head:after { content:"";position:absolute;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--ink);top:22px; }
    .robot-head:before { left:20px; }.robot-head:after { right:20px; }
    .robot-smile { position:absolute;width:35px;height:16px;border-bottom:4px solid var(--ink);border-radius:0 0 40px 40px;bottom:14px;left:35px; }
    .robot-body { width:120px;height:110px;background:var(--coral);border:4px solid var(--ink);border-radius:16px;position:relative; }
    .robot-body:before { content:"";position:absolute;width:58px;height:28px;background:#fffaf1;border:3px solid var(--ink);left:27px;top:34px; }
    .arm { width:52px;height:12px;border:4px solid var(--ink);border-radius:20px;background:var(--yellow); }
    .pulse { animation:pulse 2s infinite; }
    @keyframes pulse { 50% { transform:translateY(-7px) rotate(-3deg); } }
    .reveal { animation:rise .65s both; }
    @keyframes rise { from { opacity:0;transform:translateY(22px) } to { opacity:1;transform:none } }
    .filter-btn.active { background:var(--ink);color:#fff; }
    .part.active { background:var(--yellow); transform:translateY(-4px); }
    .step.active { background:var(--teal); color:#fff; border-color:var(--ink); }
    .project-card.hidden-card { display:none; }
    @media(max-width:900px){ .desktop-nav{display:none} }
  </style>
  <script src="/_sdk/ddcab3e45959c817.resizing_sdk.js" type="text/javascript" integrity="sha512-VAviUKfZVzugWBSeULYjSljTX+nb84wc6Zzbx5GQaQgh6X2ISSjXi8eIiCDGdwDh10esJMY0+QFQgUy9NcrTlQ=="></script>
 </head>
 <body data-template-id="__page-root" class="w-full bg-[#fffaf1]" style="background: rgb(255, 250, 241);">
  <header class="sticky top-0 z-50 border-b-[3px] border-[#252126] bg-[#fffaf1]/95 backdrop-blur">
   <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"><a href="#inicio" class="display text-2xl font-bold text-[#16aabc]">TEB <span class="text-[#e2576e]">KITS</span></a>
    <div class="desktop-nav flex items-center gap-5 text-sm font-bold"><a href="#inicio">INICIO</a><a href="#kit">TEB KIT</a><a href="#aprende">APRENDE</a><a href="#maestros">MAESTROS</a><a href="#impacto">IMPACTO</a><a href="#nosotros">SOBRE NOSOTROS</a><a href="#contacto">CONTACTO</a>
    </div><button data-template-id="nav-buy-button" class="canva-button outline rounded-full px-4 py-2 text-sm font-bold" type="button" onclick="goContact('Comprar TEB KIT')" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">COMPRAR KIT</button>
   </nav>
  </header>
  <main>
   <section id="inicio" class="relative overflow-hidden bg-[#ffc328]">
    <div class="dot-grid absolute right-6 top-12 h-40 w-40 opacity-60"></div>
    <div class="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
     <div class="reveal">
      <p data-template-id="hero-kicker" class="canva-tag mb-5 inline-block rounded-full bg-[#16aabc] px-4 py-2 font-bold text-white" style="background: rgb(22, 170, 188); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">TEB KIT · TU PRIMER ROBOT</p>
      <h1 data-template-id="hero-title" class="canva-text display max-w-xl text-5xl font-bold leading-[.95] md:text-7xl" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 32px;">Tu primer robot empieza con tus manos.</h1>
      <p data-template-id="hero-copy" class="canva-text mt-6 max-w-xl text-lg leading-relaxed" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 18px;">Aprende robótica, electrónica y programación creando tus propios proyectos. Sin depender de internet ni de equipos costosos.</p>
      <div class="mt-8 flex flex-wrap gap-4"><button data-template-id="hero-buy-button" class="canva-button outline rounded-full px-6 py-4 font-bold" type="button" onclick="goContact('Comprar TEB KIT')" style="background: rgb(226, 87, 110); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">QUIERO MI TEB KIT</button> <button data-template-id="hero-donate-button" class="canva-button rounded-full border-[3px] border-[#252126] bg-white px-6 py-4 font-bold hover:bg-[#e2576e] hover:text-white" type="button" onclick="goContact('Donar un TEB KIT')" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">QUIERO DONAR UN KIT</button>
      </div>
      <p data-template-id="hero-motto" class="canva-text display mt-10 text-xl font-bold tracking-wide text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">CONSTRUYE. CONECTA. PROGRAMA.</p>
     </div>
     <div class="relative mx-auto w-full max-w-lg">
      <div class="absolute -inset-5 rounded-[42px] bg-[#e2576e] rotate-3"></div><img data-template-id="hero-image" loading="lazy" class="canva-image outline relative h-[410px] w-full rounded-[36px] object-cover" src="https://images.pexels.com/photos/7868829/pexels-photo-7868829.jpeg" alt="Niño sonriente sosteniendo un proyecto de robótica hecho a mano en un aula.">
      <div class="pulse outline absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white p-3">
       <div class="robot-head scale-50 origin-left"></div><span data-template-id="hero-sticker" class="canva-text -ml-12 max-w-[130px] font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">¿Listo para construir?</span>
      </div>
     </div>
    </div>
   </section>
   <section id="kit" class="circuit py-20">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.85fr_1.15fr]">
     <div class="rounded-[32px] bg-[#16aabc] p-7 text-white outline">
      <div class="robot-head mx-auto mb-7 bg-[#ffc328]"></div>
      <h2 data-template-id="kit-title" class="canva-text display text-4xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">TEB KIT</h2>
      <p data-template-id="kit-copy" class="canva-text mt-4 leading-relaxed" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Tecnología física, creativa y accesible para aprender haciendo.</p>
     </div>
     <div>
      <p data-template-id="kit-label" class="canva-tag font-bold text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">¿QUÉ ES TEB KIT?</p>
      <h2 data-template-id="kit-heading" class="canva-text display mt-2 text-4xl font-bold md:text-5xl" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 24px;">Tecnología que puedes construir con tus propias manos.</h2>
      <div class="mt-7 grid gap-3 sm:grid-cols-2">
       <div class="rounded-2xl bg-white p-4 shadow-sm">
        <i data-lucide="wifi-off" class="mb-2 text-[#16aabc]"></i><span data-template-id="benefit-1" class="canva-text block font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">No necesitas internet para comenzar.</span>
       </div>
       <div class="rounded-2xl bg-white p-4 shadow-sm">
        <i data-lucide="school" class="mb-2 text-[#e2576e]"></i><span data-template-id="benefit-2" class="canva-text block font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">No necesitas un laboratorio tecnológico.</span>
       </div>
       <div class="rounded-2xl bg-white p-4 shadow-sm">
        <i data-lucide="recycle" class="mb-2 text-[#f37b2b]"></i><span data-template-id="benefit-3" class="canva-text block font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Puedes utilizar materiales reciclados.</span>
       </div>
       <div class="rounded-2xl bg-white p-4 shadow-sm">
        <i data-lucide="book-open" class="mb-2 text-[#16aabc]"></i><span data-template-id="benefit-4" class="canva-text block font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Incluye materiales educativos y retos.</span>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section class="bg-[#252126] py-20 text-white">
    <div class="mx-auto max-w-7xl px-6">
     <p data-template-id="levels-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">TRES CAMINOS, UN GRAN COMIENZO</p>
     <h2 data-template-id="levels-title" class="canva-text display mt-2 text-4xl font-bold md:text-5xl" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">Construye. Conecta. Programa.</h2>
     <div class="mt-10 grid gap-6 md:grid-cols-3">
      <article data-template-id="level-blocks" class="canva-card rounded-[28px] p-6 text-[#252126] outline" style="background: rgb(255, 195, 40);"><span class="display text-5xl text-[#e2576e]">01</span>
       <h3 data-template-id="blocks-title" class="canva-text display mt-3 text-3xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">TEBEBLOCKS · CONSTRUYE</h3>
       <p data-template-id="blocks-copy" class="canva-text mt-3" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Comienza creando mecanismos con piezas modulares y materiales de tu entorno.</p>
       <p data-template-id="blocks-list" class="canva-text mt-5 rounded-xl bg-white p-3 text-sm font-semibold" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Cartón · Tapitas · Palitos · Piezas 3D · Soportes para motor</p><button data-template-id="blocks-button" class="canva-button mt-6 rounded-full bg-[#252126] px-4 py-3 text-sm font-bold text-white" type="button" onclick="document.getElementById('aprende').scrollIntoView()" style="background: rgb(37, 33, 38); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">DESCUBRIR TEBEBLOCKS</button>
      </article>
      <article data-template-id="level-totics" class="canva-card rounded-[28px] p-6 text-[#252126] outline" style="background: rgb(22, 170, 188);"><span class="display text-5xl text-[#16aabc]">02</span>
       <h3 data-template-id="totics-title" class="canva-text display mt-3 text-3xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">TEBOTICS · CONECTA</h3>
       <p data-template-id="totics-copy" class="canva-text mt-3" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Descubre cómo funcionan los circuitos, motores, LEDs, botones y componentes electrónicos.</p>
       <p data-template-id="totics-list" class="canva-text mt-5 rounded-xl bg-white p-3 text-sm font-semibold" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Arduino · Motor DC · LEDs · Resistencias · Buzzer · Bluetooth</p><button data-template-id="totics-button" class="canva-button mt-6 rounded-full bg-[#252126] px-4 py-3 text-sm font-bold text-white" type="button" onclick="document.getElementById('aprende').scrollIntoView()" style="background: rgb(37, 33, 38); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">EXPLORAR TEBOTICS</button>
      </article>
      <article data-template-id="level-brix" class="canva-card rounded-[28px] p-6 text-[#252126] outline" style="background: rgb(226, 87, 110);"><span class="display text-5xl text-[#ffc328]">03</span>
       <h3 data-template-id="brix-title" class="canva-text display mt-3 text-3xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">TEBRIX · PROGRAMA</h3>
       <p data-template-id="brix-copy" class="canva-text mt-3" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Aprende instrucciones sencillas y mira cómo cambian el comportamiento de tu prototipo.</p>
       <p data-template-id="brix-list" class="canva-text mt-5 rounded-xl bg-white p-3 text-sm font-semibold" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Mini computadora · LCD · Teclado · Botones · Pilas o energía solar</p><button data-template-id="brix-button" class="canva-button mt-6 rounded-full bg-[#252126] px-4 py-3 text-sm font-bold text-white" type="button" onclick="document.getElementById('aprende').scrollIntoView()" style="background: rgb(37, 33, 38); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">CONOCER TEBRIX</button>
      </article>
     </div>
    </div>
   </section>
   <section id="aprende" class="py-20">
    <div class="mx-auto max-w-7xl px-6">
     <p data-template-id="projects-label" class="canva-tag font-bold text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">APRENDE HACIENDO</p>
     <h2 data-template-id="projects-title" class="canva-text display mt-2 text-4xl font-bold md:text-5xl" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 24px;">¿Qué puedes hacer con tu TEB KIT?</h2>
     <div class="mt-7 flex flex-wrap gap-2" aria-label="Filtros de recursos"><button class="filter-btn active rounded-full border-2 border-[#252126] px-4 py-2 text-sm font-bold" type="button" data-filter="all">Todos</button> <button class="filter-btn rounded-full border-2 border-[#252126] px-4 py-2 text-sm font-bold" type="button" data-filter="blocks">TEBEBLOCKS</button> <button class="filter-btn rounded-full border-2 border-[#252126] px-4 py-2 text-sm font-bold" type="button" data-filter="totics">TEBOTICS</button> <button class="filter-btn rounded-full border-2 border-[#252126] px-4 py-2 text-sm font-bold" type="button" data-filter="brix">TEBRIX</button>
     </div>
     <div id="project-grid" class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <article class="project-card overflow-hidden rounded-[25px] bg-white outline" data-category="blocks">
       <img data-template-id="project-car-image" loading="lazy" class="canva-image h-40 w-full object-cover" src="https://images.pexels.com/photos/35652402/pexels-photo-35652402.jpeg" alt="Piezas de robótica con motor y ruedas sobre una mesa.">
       <div class="p-5">
        <h3 data-template-id="project-car-title" class="canva-text display text-xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">Autito reciclado</h3>
        <p data-template-id="project-car-info" class="canva-text mt-2 text-sm" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Principiante · 45 min · Cartón, tapitas y motor.</p><button data-template-id="tutorial-car" class="canva-button mt-4 rounded-full bg-[#ffc328] px-4 py-2 text-sm font-bold" type="button" onclick="document.getElementById('robot-builder').scrollIntoView()" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">VER TUTORIAL</button>
       </div>
      </article>
      <article class="project-card overflow-hidden rounded-[25px] bg-white outline" data-category="totics">
       <img data-template-id="project-light-image" loading="lazy" class="canva-image h-40 w-full object-cover" src="https://images.pexels.com/photos/21905/pexels-photo.jpg" alt="Arduino sobre una protoboard con luces LED encendidas.">
       <div class="p-5">
        <h3 data-template-id="project-light-title" class="canva-text display text-xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">Luces que obedecen</h3>
        <p data-template-id="project-light-info" class="canva-text mt-2 text-sm" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Principiante · 30 min · LEDs, cables y protoboard.</p><button data-template-id="tutorial-light" class="canva-button mt-4 rounded-full bg-[#16aabc] px-4 py-2 text-sm font-bold text-white" type="button" onclick="document.getElementById('robot-builder').scrollIntoView()" style="background: rgb(22, 170, 188); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">VER TUTORIAL</button>
       </div>
      </article>
      <article class="project-card overflow-hidden rounded-[25px] bg-white outline" data-category="blocks">
       <img data-template-id="project-mechanism-image" loading="lazy" class="canva-image h-40 w-full object-cover" src="https://images.pexels.com/photos/7508784/pexels-photo-7508784.jpeg" alt="Manos creando un mecanismo de cartón.">
       <div class="p-5">
        <h3 data-template-id="project-mechanism-title" class="canva-text display text-xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">Mecanismo en movimiento</h3>
        <p data-template-id="project-mechanism-info" class="canva-text mt-2 text-sm" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Intermedio · 60 min · Palitos, cartón y piezas.</p><button data-template-id="tutorial-mechanism" class="canva-button mt-4 rounded-full bg-[#e2576e] px-4 py-2 text-sm font-bold text-white" type="button" onclick="document.getElementById('robot-builder').scrollIntoView()" style="background: rgb(226, 87, 110); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">VER TUTORIAL</button>
       </div>
      </article>
      <article class="project-card overflow-hidden rounded-[25px] bg-white outline" data-category="brix">
       <img data-template-id="project-phone-image" loading="lazy" class="canva-image h-40 w-full object-cover" src="https://images.pexels.com/photos/7868890/pexels-photo-7868890.jpeg" alt="Niños colaborando mientras construyen un pequeño auto robótico.">
       <div class="p-5">
        <h3 data-template-id="project-phone-title" class="canva-text display text-xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">Control Bluetooth</h3>
        <p data-template-id="project-phone-info" class="canva-text mt-2 text-sm" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">Intermedio · 50 min · Celular, Arduino y Bluetooth.</p><button data-template-id="tutorial-phone" class="canva-button mt-4 rounded-full bg-[#252126] px-4 py-2 text-sm font-bold text-white" type="button" onclick="document.getElementById('robot-builder').scrollIntoView()" style="background: rgb(37, 33, 38); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">VER TUTORIAL</button>
       </div>
      </article>
     </div>
    </div>
   </section>
   <section id="robot-builder" class="bg-[#16aabc] py-20">
    <div class="mx-auto max-w-6xl px-6">
     <div class="text-center">
      <p data-template-id="builder-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">EXPERIENCIA INTERACTIVA</p>
      <h2 data-template-id="builder-title" class="canva-text display mt-2 text-4xl font-bold text-white md:text-5xl" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">Arma tu primer robot</h2>
      <p data-template-id="builder-copy" class="canva-text mt-3 text-white" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Elige las piezas y descubre cómo tu idea cobra vida.</p>
     </div>
     <div class="mt-8 grid gap-8 rounded-[32px] bg-[#fffaf1] p-6 outline md:grid-cols-2">
      <div class="flex flex-col items-center justify-center rounded-[25px] bg-[#ffc328] p-8">
       <div id="robot-preview" class="relative flex flex-col items-center">
        <div id="preview-antenna" class="hidden h-10 w-1 bg-[#252126]"></div>
        <div id="preview-head" class="robot-head opacity-30">
         <span class="robot-smile"></span>
        </div>
        <div id="preview-body" class="robot-body mt-2 opacity-30"></div>
        <div id="preview-wheels" class="mt-3 flex gap-12 opacity-30">
         <span class="h-10 w-10 rounded-full border-4 border-[#252126] bg-[#252126]"></span><span class="h-10 w-10 rounded-full border-4 border-[#252126] bg-[#252126]"></span>
        </div>
       </div>
      </div>
      <div>
       <div class="grid grid-cols-4 gap-2 text-center text-xs font-bold"><span class="step active rounded-xl border-2 border-[#252126] p-2">1<br>
         Construye</span><span class="step rounded-xl border-2 border-[#252126] p-2">2<br>
         Conecta</span><span class="step rounded-xl border-2 border-[#252126] p-2">3<br>
         Programa</span><span class="step rounded-xl border-2 border-[#252126] p-2">4<br>
         Funciona</span>
       </div>
       <h3 data-template-id="builder-choose" class="canva-text display mt-7 text-2xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 19px;">1. Elige tus piezas</h3>
       <div class="mt-4 grid gap-3 sm:grid-cols-2"><button class="part rounded-2xl border-2 border-[#252126] bg-white p-4 text-left font-bold" type="button" data-part="head">🧱 Base y cabeza</button> <button class="part rounded-2xl border-2 border-[#252126] bg-white p-4 text-left font-bold" type="button" data-part="motor">⚙️ Motor y ruedas</button> <button class="part rounded-2xl border-2 border-[#252126] bg-white p-4 text-left font-bold" type="button" data-part="lights">💡 Luces LED</button> <button class="part rounded-2xl border-2 border-[#252126] bg-white p-4 text-left font-bold" type="button" data-part="code">⌨️ Código</button>
       </div>
       <p id="builder-message" class="mt-5 rounded-xl bg-white p-4 font-bold" aria-live="polite">Elige una pieza para empezar.</p><button id="restart-builder" data-template-id="builder-reset" class="canva-button mt-4 hidden rounded-full bg-[#e2576e] px-5 py-3 font-bold text-white" type="button" style="background: rgb(226, 87, 110); color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 16px;">ARMAR OTRO ROBOT</button>
      </div>
     </div>
    </div>
   </section>
   <section class="bg-[#252126] py-20 text-white">
    <div class="mx-auto max-w-7xl px-6">
     <div class="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
      <div>
       <p data-template-id="offline-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">APRENDIZAJE OFFLINE</p>
       <h2 data-template-id="offline-title" class="canva-text display mt-2 text-4xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">La tecnología no debería depender de tener internet.</h2>
       <p data-template-id="offline-copy" class="canva-text mt-5 max-w-xl leading-relaxed text-white/80" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">TEB KIT combina materiales físicos, manuales impresos y recursos descargables para aprender incluso cuando la conexión es limitada.</p>
      </div>
      <div class="grid gap-3">
       <div class="rounded-2xl bg-white p-4 text-[#252126]">
        <i data-lucide="book-open" class="inline text-[#e2576e]"></i> <span data-template-id="offline-item-1" class="canva-text ml-2 font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">MANUALES IMPRESOS · Guías paso a paso.</span>
       </div>
       <div class="rounded-2xl bg-white p-4 text-[#252126]">
        <i data-lucide="puzzle" class="inline text-[#ffc328]"></i> <span data-template-id="offline-item-2" class="canva-text ml-2 font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">RETOS EDUCATIVOS · Experimenta y resuelve.</span>
       </div>
       <div class="rounded-2xl bg-white p-4 text-[#252126]">
        <i data-lucide="download" class="inline text-[#16aabc]"></i> <span data-template-id="offline-item-3" class="canva-text ml-2 font-bold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">RECURSOS DESCARGABLES · Aprende cuando haya conexión.</span>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section id="maestros" class="py-20">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2"><img data-template-id="teachers-image" loading="lazy" class="canva-image outline h-full min-h-[330px] w-full rounded-[30px] object-cover" src="https://images.pexels.com/photos/37758114/pexels-photo-37758114.jpeg" alt="Docente enseñando frente a una pizarra en un aula.">
     <div class="rounded-[30px] bg-[#e2576e] p-8 text-white outline">
      <p data-template-id="teachers-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">PARA MAESTROS</p>
      <h2 data-template-id="teachers-title" class="canva-text display mt-2 text-4xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">También enseñamos a quienes enseñan.</h2>
      <p data-template-id="teachers-copy" class="canva-text mt-5 leading-relaxed" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Queremos que los maestros tengan herramientas sencillas para acompañar a sus estudiantes en el aprendizaje de robótica y tecnología.</p>
      <p data-template-id="teachers-benefits" class="canva-text mt-6 rounded-2xl bg-white p-4 font-semibold text-[#252126]" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">✓ Material adaptado · ✓ Guías paso a paso · ✓ Actividades prácticas · ✓ Recursos offline · ✓ Ideas para talleres.</p><button data-template-id="teachers-button" class="canva-button mt-6 rounded-full bg-[#ffc328] px-5 py-4 font-bold text-[#252126] outline" type="button" onclick="goContact('Capacitación para maestros')" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">CAPACITACIÓN GRATUITA PARA MAESTROS</button>
     </div>
    </div>
   </section>
   <section id="impacto" class="bg-[#ffc328] py-20">
    <div class="mx-auto max-w-7xl px-6 text-center">
     <p data-template-id="impact-label" class="canva-tag font-bold text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">NUESTRO IMPACTO</p>
     <h2 data-template-id="impact-title" class="canva-text display mt-2 text-4xl font-bold md:text-5xl" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 24px;">Tecnología que genera oportunidades.</h2>
     <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div class="outline rounded-3xl bg-white p-6">
       <strong data-template-id="impact-number-1" class="canva-text display block text-4xl text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">+1.000</strong><span data-template-id="impact-copy-1" class="canva-text mt-2 block font-semibold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">niños y niñas como objetivo inicial.</span>
      </div>
      <div class="outline rounded-3xl bg-white p-6">
       <strong data-template-id="impact-number-2" class="canva-text display block text-4xl text-[#16aabc]" style="color: rgb(22, 170, 188); font-weight: 700; font-style: normal; font-size: 16px;">3 ÁREAS</strong><span data-template-id="impact-copy-2" class="canva-text mt-2 block font-semibold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">robótica + electrónica + programación.</span>
      </div>
      <div class="outline rounded-3xl bg-white p-6">
       <strong data-template-id="impact-number-3" class="canva-text display block text-4xl text-[#f37b2b]" style="color: rgb(243, 123, 43); font-weight: 700; font-style: normal; font-size: 16px;">OFFLINE</strong><span data-template-id="impact-copy-3" class="canva-text mt-2 block font-semibold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">diseñado para conectividad limitada.</span>
      </div>
      <div class="outline rounded-3xl bg-white p-6">
       <strong data-template-id="impact-number-4" class="canva-text display block text-4xl text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">♻</strong><span data-template-id="impact-copy-4" class="canva-text mt-2 block font-semibold" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">aprendizaje sostenible con reciclaje.</span>
      </div>
     </div>
    </div>
   </section>
   <section class="py-20">
    <div class="mx-auto max-w-7xl px-6">
     <h2 data-template-id="shop-title" class="canva-text display text-4xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 24px;">Empieza a construir.</h2>
     <div class="mt-8 grid overflow-hidden rounded-[35px] bg-[#252126] text-white outline md:grid-cols-2"><img data-template-id="product-image" loading="lazy" class="canva-image h-full min-h-[340px] w-full object-cover" src="https://images.pexels.com/photos/35673072/pexels-photo-35673072.jpeg" alt="Kit de robótica DIY con engranajes y piezas sobre fondo amarillo.">
      <div class="p-8">
       <p data-template-id="product-name" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">TEB KIT · DESDE 7 AÑOS</p>
       <h3 data-template-id="product-price" class="canva-text display mt-2 text-5xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 19px;">210 Bs</h3>
       <p data-template-id="product-details" class="canva-text mt-5 leading-relaxed text-white/85" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Incluye piezas modulares, componentes electrónicos, motor, control Arduino, manuales impresos, retos y proyectos para aprender creando.</p><button data-template-id="product-button" class="canva-button mt-7 rounded-full bg-[#ffc328] px-6 py-4 font-bold text-[#252126] outline" type="button" onclick="goContact('Comprar TEB KIT')" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">COMPRAR TEB KIT</button>
      </div>
     </div>
    </div>
   </section>
   <section class="bg-[#e2576e] py-20 text-white">
    <div class="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
     <div>
      <p data-template-id="donation-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">MODELO DE APOYO 2x1</p>
      <h2 data-template-id="donation-title" class="canva-text display mt-2 text-4xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">Tu kit puede convertirse en la oportunidad de otro niño.</h2>
      <p data-template-id="donation-copy" class="canva-text mt-5 leading-relaxed" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Por cada kit adquirido mediante el programa de apoyo, buscamos facilitar la entrega de otro kit a estudiantes o comunidades con mayores dificultades de acceso.</p><button data-template-id="donation-button" class="canva-button mt-6 rounded-full bg-white px-6 py-4 font-bold text-[#252126] outline" type="button" onclick="goContact('Donar un TEB KIT')" style="background: rgb(255, 255, 255); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">QUIERO DONAR</button>
     </div>
     <div class="flex justify-center gap-4">
      <div class="outline rounded-2xl bg-[#ffc328] p-8 text-center text-[#252126]">
       <i data-lucide="package" size="58"></i>
       <p class="mt-3 font-bold">TU KIT</p>
      </div>
      <div class="outline rounded-2xl bg-white p-8 text-center text-[#252126]">
       <i data-lucide="heart-handshake" size="58"></i>
       <p class="mt-3 font-bold">OTRA OPORTUNIDAD</p>
      </div>
     </div>
    </div>
   </section>
   <section id="nosotros" class="py-20">
    <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
     <div>
      <p data-template-id="about-label" class="canva-tag font-bold text-[#e2576e]" style="color: rgb(226, 87, 110); font-weight: 700; font-style: normal; font-size: 16px;">SOBRE NOSOTROS</p>
      <h2 data-template-id="about-title" class="canva-text display mt-2 text-4xl font-bold" style="color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 24px;">Una idea que comenzó en una Hackatón.</h2>
      <p data-template-id="about-copy" class="canva-text mt-5 leading-relaxed" style="color: rgb(37, 33, 38); font-weight: 400; font-style: normal; font-size: 16px;">TEB KITS nació gracias al equipo Innova Girls durante la Hackatón del Bicentenario 2025. Desde entonces, seguimos creando una alternativa simple, accesible y sostenible para acercar la tecnología a más niños y niñas.</p>
      <div class="mt-7 grid grid-cols-3 gap-3">
       <div class="rounded-2xl bg-[#ffc328] p-4 font-bold">
        ODS 4<br><span class="text-sm font-normal">Educación</span>
       </div>
       <div class="rounded-2xl bg-[#16aabc] p-4 font-bold text-white">
        ODS 9<br><span class="text-sm font-normal">Innovación</span>
       </div>
       <div class="rounded-2xl bg-[#e2576e] p-4 font-bold text-white">
        ODS 12<br><span class="text-sm font-normal">Reciclaje</span>
       </div>
      </div>
     </div><img data-template-id="team-image" loading="lazy" class="canva-image outline h-full min-h-[330px] w-full rounded-[30px] object-cover" src="https://images.pexels.com/photos/9242832/pexels-photo-9242832.jpeg" alt="Equipo de jóvenes ingenieras colaborando en un proyecto de robótica.">
    </div>
   </section>
   <section id="contacto" class="bg-[#16aabc] py-20">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.8fr_1.2fr]">
     <div class="text-white">
      <p data-template-id="contact-label" class="canva-tag font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">HABLEMOS</p>
      <h2 data-template-id="contact-title" class="canva-text display mt-2 text-4xl font-bold" style="color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">¿Quieres llevar TEB KIT a tu escuela?</h2>
      <p data-template-id="contact-copy" class="canva-text mt-5 leading-relaxed" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Escríbenos para comprar un kit, apoyar una donación, organizar un taller o crear una alianza educativa.</p>
      <p data-template-id="contact-address" class="canva-text mt-7 rounded-2xl border-2 border-white p-4 font-semibold" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">TEB KITS – TEBEBLOCKS · La Paz, Bolivia · Zona San Pedro · C. Luis Lara #696 · 75254767</p>
     </div>
     <form id="contact-form" class="rounded-[30px] bg-[#fffaf1] p-6 outline">
      <div class="grid gap-4 sm:grid-cols-2">
       <div>
        <label for="nombre">Nombre *</label><input id="nombre" required="" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3">
       </div>
       <div>
        <label for="correo">Correo *</label><input id="correo" type="email" required="" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3">
       </div>
       <div>
        <label for="telefono">Teléfono</label><input id="telefono" type="tel" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3">
       </div>
       <div>
        <label for="organizacion">Organización / escuela</label><input id="organizacion" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3">
       </div>
       <div>
        <label for="ciudad">Ciudad / comunidad</label><input id="ciudad" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3">
       </div>
       <div>
        <label for="motivo">Motivo *</label><select id="motivo" required="" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3"><option value="">Elige una opción</option><option>Comprar TEB KIT</option><option>Donar un TEB KIT</option><option>Capacitación para maestros</option><option>Alianza educativa</option><option>Otro</option></select>
       </div>
      </div>
      <div class="mt-4">
       <label for="mensaje">Mensaje *</label><textarea id="mensaje" required="" rows="4" class="mt-1 w-full rounded-xl border-2 border-[#252126] bg-white p-3"></textarea>
      </div><button id="submit-button" data-template-id="contact-button" class="canva-button mt-5 rounded-full bg-[#ffc328] px-6 py-4 font-bold outline" type="submit" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38); font-weight: 700; font-style: normal; font-size: 16px;">ENVIAR MENSAJE</button>
      <p id="form-status" class="mt-4 font-semibold" aria-live="polite"></p>
     </form>
    </div>
   </section>
  </main><a data-template-id="whatsapp-button" class="canva-button outline fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full" href="https://wa.me/59175254767" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" style="background: rgb(255, 195, 40); color: rgb(37, 33, 38);"><i data-lucide="message-circle"></i></a>
  <footer class="bg-[#252126] px-6 py-10 text-white">
   <div class="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
    <div>
     <p data-template-id="footer-brand" class="canva-text display text-3xl font-bold text-[#ffc328]" style="color: rgb(255, 195, 40); font-weight: 700; font-style: normal; font-size: 16px;">TEB KITS</p>
     <p data-template-id="footer-copy" class="canva-text mt-2 text-white/70" style="color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-size: 16px;">Construye. Conecta. Programa. · Tu primer robot.</p>
    </div>
    <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
     <a href="#inicio">Inicio</a><a href="#kit">TEB KIT</a><a href="#aprende">Recursos</a><a href="#maestros">Maestros</a><a href="#impacto">Impacto</a><a href="#contacto">Contacto</a>
    </div>
   </div>
  </footer>
  <script src="/_sdk/ef0304cb8c7ed696.editing_sdk.js" integrity="sha512-kmL9L5Yuj57MQaequKbMA3aGpT/5lBUp10iGA3e3qnmMLs2ZZQ0poCcIfdd5rTgrhEvNPe4HK0ohePW7ZpgAFg=="></script>
  <script>
    const filters = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    filters.forEach(button => button.addEventListener('click', () => {
      filters.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      cards.forEach(card => card.classList.toggle('hidden-card', filter !== 'all' && card.dataset.category !== filter));
    }));

    const activeParts = new Set();
    const pieces = document.querySelectorAll('.part');
    const message = document.getElementById('builder-message');
    const reset = document.getElementById('restart-builder');
    const steps = document.querySelectorAll('.step');
    function refreshRobot() {
      document.getElementById('preview-head').classList.toggle('opacity-30', !activeParts.has('head'));
      document.getElementById('preview-body').classList.toggle('opacity-30', !activeParts.has('head'));
      document.getElementById('preview-wheels').classList.toggle('opacity-30', !activeParts.has('motor'));
      document.getElementById('preview-antenna').classList.toggle('hidden', !activeParts.has('code'));
      steps.forEach((step, index) => step.classList.toggle('active', index < activeParts.size));
      if (activeParts.size === 4) { message.textContent = '¡Felicidades! Acabas de construir tu primer robot.'; reset.classList.remove('hidden'); }
      else message.textContent = '¡Muy bien! Ya tienes ' + activeParts.size + ' de 4 piezas listas.';
    }
    pieces.forEach(piece => piece.addEventListener('click', () => {
      activeParts.add(piece.dataset.part); piece.classList.add('active'); refreshRobot();
    }));
    reset.addEventListener('click', () => { activeParts.clear(); pieces.forEach(p => p.classList.remove('active')); reset.classList.add('hidden'); refreshRobot(); message.textContent='Elige una pieza para empezar.'; });

    function goContact(reason) {
      document.getElementById('motivo').value = reason;
      document.getElementById('contacto').scrollIntoView({behavior:'smooth'});
    }

    let sdkReady = false;
    const handler = { onDataChanged() {} };
    async function initData() {
      const result = await window.dataSdk.init(handler);
      sdkReady = result.isOk;
      if (!result.isOk) document.getElementById('form-status').textContent = 'No pudimos preparar el formulario. Inténtalo nuevamente.';
    }
    initData();

    document.getElementById('contact-form').addEventListener('submit', async event => {
      event.preventDefault();
      const status = document.getElementById('form-status');
      const button = document.getElementById('submit-button');
      if (!sdkReady) { status.textContent = 'El formulario aún se está preparando. Inténtalo en unos segundos.'; return; }
      button.disabled = true; button.classList.add('opacity-60'); status.textContent = 'Enviando tu mensaje…';
      const record = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        organizacion: document.getElementById('organizacion').value.trim(),
        ciudad: document.getElementById('ciudad').value.trim(),
        motivo: document.getElementById('motivo').value,
        mensaje: document.getElementById('mensaje').value.trim(),
        tipo_registro: 'contacto_web',
        fecha_creacion: new Date().toISOString()
      };
      const result = await window.dataSdk.create(record);
      button.disabled = false; button.classList.remove('opacity-60');
      if (result.isOk) { event.target.reset(); status.textContent = '¡Gracias! Recibimos tu mensaje y nos comunicaremos contigo pronto.'; }
      else status.textContent = 'No pudimos enviar tu mensaje. Por favor, vuelve a intentarlo.';
    });
    lucide.createIcons();
  </script>
 
</body></html>
