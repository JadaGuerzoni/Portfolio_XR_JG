(() => {
  const EMAIL = "jada.guerzoni@icloud.com";
  const PHONE = "+32 475 28 05 44";
  const LINKEDIN = "https://www.linkedin.com/in/jada-guerzoni-0a101541a/";
  const GITHUB = "https://github.com/JadaGuerzoni";

  /* ---------------- Content ---------------- */
  const PROJECTS = {
    fpt: {
      title: "Automatic Construction Progress Monitoring", short: "Construction monitoring · FPT-AI", year: "2026", label: "FPT-AI · Drone scan",
      text: "A computer vision application that analyzes UAV footage and compares it with a 3D structural model to automatically monitor construction progress.",
      tags: ["AI – MASt3R-SLAM", "Point cloud", "Unity", "C#", "BIM models", "HTML", "CSS", "JavaScript"],
      type: "Industry project", stack: ["AI – MASt3R-SLAM", "Point cloud", "Unity", "C#", "BIM models", "HTML", "CSS", "JavaScript"],
      overview: "This project focuses on automating construction progress monitoring using UAV (drone) footage and a 3D structural model. By applying computer vision techniques, the system detects structural elements such as beams and columns, aligns them with the digital 3D model, and estimates the current construction progress. The final result is a visual report showing completed, partially completed, and unfinished structural components, reducing the need for manual on-site inspections.",
      sections: [
        { h: "Pipeline", steps: ["UAV footage is processed through a computer-vision pipeline", "Point cloud data is compared against the BIM / structural model", "MASt3R-SLAM and related AI tooling support the alignment and analysis", "Unity and C# are used to map out the drone flight path"] },
        { h: "Why it matters", p: "The project is about reducing manual progress checking and making site comparison more consistent, especially when construction teams need a quick overview of what has changed." }
      ],
      color: "#4fe3cf",
      icon: '<path d="M4 20h16M6 20V9h6v11M12 12h6v8" /><path d="M9 4h6M12 4v3" /><circle cx="12" cy="7.5" r="1" />'
    },
    car: {
      title: "VR Car Mechanic", short: "VR Car Mechanic", year: "2026", label: "VR Car Mechanic",
      text: "An immersive VR application where users repair vehicles through realistic interactions. Developed in Unity with a focus on learning and usability.",
      tags: ["C#", "Unity", "VR development", "Blender", "XR Interaction Toolkit"],
      type: "VR project", stack: ["C#", "Unity", "Blender", "XR Interaction Toolkit", "VR Development"],
      overview: "Car Mechanic VR is an immersive virtual reality experience where users learn to repair and replace car parts through realistic, interactive tasks. Built in Unity, the project focuses on intuitive VR interactions and hands-on learning.",
      sections: [
        { h: "Interaction mechanics", list: ["Hands-on repair actions with grab, inspect and place interactions", "Unity-based VR controls focused on clarity for new users", "Blender assets integrated into the scene to support the mechanic theme", "XR Interaction Toolkit for the core interaction layer"] },
        { h: "Design focus", p: "The main goal was usability: every interaction needed to be readable enough that someone could understand the repair flow quickly, while still feeling like a VR task rather than a tutorial." }
      ],
      color: "#ff7a5c",
      icon: '<path d="M3 15l2-5h14l2 5v3H3z" /><circle cx="7.5" cy="18" r="1.8" /><circle cx="16.5" cy="18" r="1.8" /><path d="M7 10l1.5-3h7L17 10" />'
    },
    tagrun: {
      title: "TagRun", short: "TagRun", year: "2025", label: "TagRun · RFID",
      text: "TagRun is an interactive RFID-based platform that tracks athletes during parkour and freerunning challenges. It provides real-time results through a connected web application.",
      tags: ["Python", "Figma", "HTML", "CSS", "React", "MySQL", "FastAPI", "Electronics", "Raspberry Pi"],
      type: "Team project", stack: ["Python", "React", "FastAPI", "MySQL", "Raspberry Pi", "Electronics"],
      overview: "TagRun is an RFID-powered training system designed for parkour and freerunning, allowing athletes to complete interactive checkpoint challenges while tracking their performance in real time. It combines IoT, web development, and gamification to create an engaging training and competition experience.",
      sections: [
        { h: "Core flow", steps: ["RFID hardware captures athlete identification at checkpoints", "Raspberry Pi handles the device side and sends data onward", "FastAPI exposes the collected data to the front end", "The React and HTML/CSS interface presents results in a clear dashboard"] },
        { h: "Design focus", p: "The project needed to feel fast and readable, because the main use case is tracking people during physical challenges rather than browsing a traditional app." }
      ],
      color: "#ffb45e",
      icon: '<path d="M5 21V6h14v15" /><path d="M5 9h14" /><circle cx="12" cy="15" r="3" /><path d="M12 13.5v1.5l1 1" />'
    },
    mail: {
      title: "MailMate", short: "MailMate", year: "2025", label: "MailMate · Smart mailbox",
      text: "MailMate is a smart mailbox that uses sensors and a web application to keep users informed about their mail. It combines IoT, automation, and web development to solve a simple everyday problem.",
      tags: ["Python", "Figma", "JavaScript", "HTML", "CSS", "MySQL", "FastAPI", "Electronics", "Raspberry Pi"],
      type: "Project one", stack: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "MySQL", "Raspberry Pi"],
      overview: "MailMate is a smart IoT mailbox that detects new mail, monitors moisture levels, and sends real-time notifications through a web application. It also allows users to remotely open the mailbox, making everyday mail management more convenient.",
      sections: [
        { h: "How it works", list: ["A Raspberry Pi handles the sensor input and system logic", "The backend exposes mailbox state through a FastAPI service", "The front end shows status updates and notifications in a simple web interface", "MySQL stores mailbox events and system records for later review"] }
      ],
      extra: { href: "https://www.instructables.com/Smart-Mailbox-Howest-Mct/", label: "Build guide on Instructables ↗" },
      color: "#6f9bff",
      icon: '<path d="M4 11a4 4 0 018 0v9H4z" /><path d="M8 7h8a4 4 0 014 4v9h-8" /><path d="M16 11V5h3" />'
    },
    tokyo: {
      title: "DAE Rowhomes – Tokyo", short: "Tokyo Rowhomes", year: "2026", label: "Tokyo Rowhomes · 3D",
      text: "A detailed 3D diorama of a Japanese rowhouse on a Tokyo side street, complete with a rusty kei truck, a shop awning and all the small details that make the street feel lived in.",
      tags: ["Blender", "3D modelling", "Texturing", "Environment design", "Sketchfab"],
      type: "3D model", stack: ["Blender", "3D modelling", "Texturing", "Sketchfab"],
      overview: "DAE Rowhomes – Tokyo is a 3D environment piece inspired by the narrow rowhouses found in Tokyo's residential streets. The two-storey house combines a timber frame, a balcony, a garage shutter and a shop entrance with a red awning, set on a small piece of street with a kei truck, traffic cones and road markings.",
      sections: [
        { h: "What's in the scene", list: ["Two-storey rowhouse with timber frame, balcony and corrugated awning", "Garage with a roller shutter and a shop entrance with a red awning", "Weathered kei truck, traffic cones and a utility box on the pavement", "Street with road markings, drain grates and a decorated manhole cover"] },
        { h: "Design focus", p: "The goal was storytelling through detail: rust, stains and small props give the scene character, while the model stays light enough to run smoothly in the browser." }
      ],
      sketchfab: "b1c9e6922f3347b1a9b2b0ea7a3b9f66",
      extra: { href: "https://sketchfab.com/3d-models/dae-rowhomes-tokyo-b1c9e6922f3347b1a9b2b0ea7a3b9f66", label: "Open on Sketchfab ↗" },
      color: "#ff8fb1",
      icon: '<path d="M3 11l9-6 9 6" /><path d="M5 10v10h14V10" /><path d="M5 14h14" /><path d="M9 20v-4h4v4" />'
    }
  };
  const IMG = window.IMG || {};
  const PROJECT_ORDER = ["fpt", "car", "tagrun", "mail", "tokyo"];

  const SKILLS = [
    ["XR & Game Development", ["Unity", "Meta developer", "OpenXR", "XR Interaction Toolkit", "Blender", "VR Development", "UI for VR"]],
    ["Front-end Development", ["HTML", "CSS", "JavaScript", "React", "Fast API"]],
    ["Back-end Development", ["Python", "C#", ".NET", "GraphQL", "Microsoft Azure"]],
    ["Databases", ["MySQL", "PostgreSQL", "MongoDB", "SQL", "NumPy", "Pandas"]],
    ["IoT & Electronics", ["Raspberry Pi", "Arduino", "GPIO", "Sensor Integration", "Bit Operations"]],
    ["Design", ["Adobe Photoshop", "Figma", "UI Design", "UX Design", "Wireframing"]],
    ["Development Tools", ["Git", "GitHub", "Visual Studio Code", "Postman", "Scrum"]],
    ["Soft Skills", ["Teamwork", "Communication", "Creative", "Problem Solving", "Independent", "Time Management", "Responsible", "Attention to Detail"]]
  ];

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const chips = (arr, cls = "") => `<div class="chips">${arr.map(t => `<span class="chip ${cls}">${esc(t)}</span>`).join("")}</div>`;

  const VIEWS = {
    about: {
      label: 'About me',
      eyebrow: 'Avatar · About',
      html: () => `
        <div class="intro">
          <figure class="portrait"><img src="assets/img/jada.jpg" alt="Portrait of Jada Guerzoni" width="440" height="550"></figure>
          <div class="intro-txt">
            <h2>Hi, I'm Jada</h2>
            <span class="role">3D &amp; XR Developer</span>
            <span class="loc">Student MCT XR</span>
          </div>
        </div>
        <p>I'm passionate about building interactive experiences that bring technology and creativity together. As an XR student, I enjoy exploring new ideas, solving challenges, and turning concepts into immersive applications.</p>
        <p>Every project is an opportunity to learn, improve, and create something meaningful.</p>
        <div class="facts">
          <div class="fact"><b>3D &amp; XR</b><span>Developer</span></div>
          <div class="fact"><b>MCT XR</b><span>Student</span></div>
          <div class="fact"><b>${PROJECT_ORDER.length}</b><span>Featured projects</span></div>
          <div class="fact"><b>8</b><span>Skill domains</span></div>
        </div>
        <div class="cta-row">
          <button class="cta" type="button" data-go="projects">See my projects</button>
          <button class="cta ghost" type="button" data-go="skills">View skills</button>
        </div>`,
    },
    skills: {
      label: 'Skills',
      eyebrow: 'Workbench · Skills',
      html: () => `<h2>Skills</h2>` + SKILLS.map(([g, list], i) => `<div class="skill-grp"><h4>${esc(g)}</h4>${chips(list, i === 0 ? 'soft' : '')}</div>`).join(''),
    },
    contact: {
      label: 'Contact',
      eyebrow: 'Neon sign · Contact',
      html: () => `
        <h2>Let's build visions together.</h2>
        <p>Have an idea for an XR experience, a project, or an internship? Send me a message.</p>
        <div class="contact-line"><div><small>Email</small><b>${EMAIL}</b></div><button class="copy" type="button" data-copy="${EMAIL}">Copy</button></div>
        <div class="contact-line"><div><small>Phone</small><b>${PHONE}</b></div><button class="copy" type="button" data-copy="${PHONE}">Copy</button></div>
        <div class="cta-row">
          <a class="cta" href="mailto:${EMAIL}">Send an email</a>
          <a class="cta ghost" href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a class="cta ghost" href="${GITHUB}" target="_blank" rel="noopener">GitHub ↗</a>
        </div>`,
    },
  };
  PROJECT_ORDER.forEach(k => {
    const p = PROJECTS[k];
    const i = PROJECT_ORDER.indexOf(k), n = PROJECT_ORDER.length;
    const prev = PROJECT_ORDER[(i - 1 + n) % n], next = PROJECT_ORDER[(i + 1) % n];
    VIEWS[k] = {
      label: p.label, eyebrow: `Project · ${p.year}`,
      html: () => `
        <h2>${esc(p.title)}</h2>
        <p>${esc(p.text)}</p>
        <h3>Built with</h3>
        ${chips(p.tags)}
        <div class="cta-row">
          <button class="cta" type="button" data-go="detail">View project →</button>
          <button class="cta ghost" type="button" data-go="projects">All projects</button>
        </div>`,
      detail: () => `
        <button class="back-link" type="button" data-go="summary">← Back to summary</button>
        <h2>${esc(p.title)}</h2>
        <div class="meta">
          <div><small>Year</small><b>${p.year}</b></div>
          <div><small>Type</small><b>${esc(p.type)}</b></div>
          <div><small>Stack</small>${chips(p.stack)}</div>
        </div>
        ${p.sketchfab ? `<figure class="figure model3d"><iframe title="${esc(p.title)} – interactive 3D model" src="https://sketchfab.com/models/${p.sketchfab}/embed?autostart=1&autospin=0.25&ui_theme=dark&ui_infos=0&ui_hint=2&ui_settings=0&ui_help=0&ui_vr=0&ui_inspector=0&ui_annotations=0&ui_stop=0&dnt=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen loading="lazy"></iframe><figcaption>Drag to rotate · scroll to zoom</figcaption></figure>`
          : IMG[k] ? `<figure class="figure${k === "fpt" ? " square" : ""}"><img src="${IMG[k].src}" alt="${esc(IMG[k].alt)}"></figure>` : ""}
        <h3>Overview</h3>
        <p>${esc(p.overview)}</p>
        ${p.sections.map(sec => `<h3>${esc(sec.h)}</h3>` +
          (sec.p ? `<p>${esc(sec.p)}</p>` : `<ol class="steps${sec.list ? " plain" : ""}">${(sec.steps || sec.list).map(li => `<li>${esc(li)}</li>`).join("")}</ol>`)).join("")}
        ${p.extra ? `<div class="cta-row"><a class="cta ghost" href="${p.extra.href}" target="_blank" rel="noopener">${esc(p.extra.label)}</a></div>` : ""}
        <div class="proj-nav">
          <button type="button" data-detail="${prev}"><small>← Previous</small><b>${esc(PROJECTS[prev].short)}</b></button>
          <button type="button" data-detail="${next}"><small>Next →</small><b>${esc(PROJECTS[next].short)}</b></button>
        </div>`
    };
  });
  VIEWS.board = { label: 'All projects' }; // opens the projects overview instead of a panel
  const TOUR = ["about", "fpt", "car", "tagrun", "mail", "tokyo", "skills", "contact"];

  /* ---------------- UI helpers ---------------- */
  const $ = id => document.getElementById(id);
  const panel = $("panel"), pBody = $("p-body"), pEyebrow = $("p-eyebrow");
  const modal = $("modal");
  const toastEl = $("toast");
  let toastT;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 1800);
  }

  $("m-list").innerHTML = PROJECT_ORDER.map(k => {
    const p = PROJECTS[k];
    return `<button class="pcard" type="button" data-key="${k}">
      <span class="thumb" style="background:${p.color}22;border:1px solid ${p.color}55">
        ${IMG[k] ? `<img src="${IMG[k].src}" alt="">` : `<svg viewBox="0 0 24 24" fill="none" stroke="${p.color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${p.icon}</svg>`}
      </span>
      <span><h3>${esc(p.title)} <em>${p.year}</em></h3><p>${esc(p.text)}</p></span>
    </button>`;
  }).join("");

  function openModal() { modal.hidden = false; $("m-close").focus(); }
  function closeModal() { modal.hidden = true; }
  $("btn-all").onclick = openModal;
  $("m-close").onclick = closeModal;
  modal.addEventListener("click", e => {
    if (e.target === modal) return closeModal();
    const c = e.target.closest(".pcard");
    if (c) { closeModal(); focusOn(c.dataset.key); }
  });
  $("btn-skills").onclick = () => focusOn("skills");
  $("btn-contact").onclick = () => focusOn("contact");
  $("p-close").onclick = () => unfocus();
  $("p-prev").onclick = () => step(-1);
  $("p-next").onclick = () => step(1);
  pBody.addEventListener("click", e => {
    const go = e.target.closest("[data-go]");
    if (go) {
      if (go.dataset.go === "projects") { unfocus(); openModal(); }
      else if (go.dataset.go === "detail") focusOn(current, true);
      else if (go.dataset.go === "summary") focusOn(current, false);
      else focusOn(go.dataset.go);
    }
    const dj = e.target.closest("[data-detail]");
    if (dj) focusOn(dj.dataset.detail, true);
    const cp = e.target.closest("[data-copy]");
    if (cp) {
      const val = cp.dataset.copy;
      const done = () => toast("Copied " + val);
      try {
        navigator.clipboard.writeText(val).then(done, () => selectText(cp));
      } catch (_) { selectText(cp); }
    }
  });
  function selectText(btn) {
    const b = btn.parentElement.querySelector("b");
    const r = document.createRange(); r.selectNodeContents(b);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    toast("Selected — press Ctrl+C to copy");
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (!modal.hidden) closeModal(); else unfocus(); }
    if (current && (e.key === "ArrowRight" || e.key === "ArrowLeft") && !e.target.closest("input,textarea")) step(e.key === "ArrowRight" ? 1 : -1);
  });

  let current = null, detailMode = false;
  function step(d) {
    const i = TOUR.indexOf(current);
    if (detailMode) {
      const j = PROJECT_ORDER.indexOf(current), n = PROJECT_ORDER.length;
      return focusOn(PROJECT_ORDER[(j + d + n) % n], true);
    }
    focusOn(TOUR[(i + d + TOUR.length) % TOUR.length]);
  }

  /* ---------------- Three.js ---------------- */
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = $("scene");
  let renderer, noGL = false;
  try {
    if (!window.THREE) throw new Error("no three");
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (err) {
    $("loader").classList.add("done");
    const d = document.createElement("div"); d.id = "nogl";
    d.innerHTML = "<p>3D isn't available in this browser — use the buttons below to explore.</p>";
    document.body.appendChild(d);
    noGL = true;
    return;
  }

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x160d26, 28, 60);
  const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.1, 200);

  const M = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, flatShading: true, roughness: 0.82, metalness: 0.05 }, o));
  const E = (color, intensity = 1) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, flatShading: true });
  function add(geo, mat, parent, x = 0, y = 0, z = 0, shadow = true) {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
    m.castShadow = shadow; m.receiveShadow = true; parent.add(m); return m;
  }
  const box = (w, h, d, mat, p, x, y, z) => add(new THREE.BoxGeometry(w, h, d), mat, p, x, y, z);
  const cyl = (rt, rb, h, seg, mat, p, x, y, z) => add(new THREE.CylinderGeometry(rt, rb, h, seg), mat, p, x, y, z);

  function canvasTex(w, h, draw) {
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const ctx = c.getContext("2d"); draw(ctx, w, h);
    const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.anisotropy = 4;
    t.userData = { ctx, draw }; return t;
  }

  /* Lights */
  scene.add(new THREE.HemisphereLight(0x7a64d0, 0x1a0c14, 0.32));
  const key = new THREE.SpotLight(0xffb870, 1.05, 60, 0.75, 0.7, 1);
  key.position.set(2, 16, 9); key.target.position.set(0, 0, -0.5);
  key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0005; key.shadow.normalBias = 0.02; key.shadow.camera.near = 5; key.shadow.camera.far = 40;
  scene.add(key, key.target);
  const lampLight = new THREE.PointLight(0xffa04a, 1.6, 16, 1.6); lampLight.position.set(-0.3, 4.4, -0.8); scene.add(lampLight);
  const tealLight = new THREE.PointLight(0x3fe0d0, 1.1, 14, 1.6); tealLight.position.set(6.5, 3.5, 2.5); scene.add(tealLight);
  const neonLight = new THREE.PointLight(0xd65cff, 1.3, 12, 1.6); neonLight.position.set(0.8, 3.9, -4.6); scene.add(neonLight);
  const coolFill = new THREE.DirectionalLight(0x6d7bff, 0.35); coolFill.position.set(-10, 6, 8); scene.add(coolFill);

  /* Island: floor + rock underside */
  const world = new THREE.Group(); scene.add(world);
  const floorTex = canvasTex(512, 512, (c, w, h) => {
    c.fillStyle = "#2e2440"; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 1800; i++) { c.fillStyle = `rgba(${200 + Math.random() * 55},${180 + Math.random() * 60},255,${Math.random() * .05})`; c.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
    c.strokeStyle = "rgba(20,12,30,.55)"; c.lineWidth = 3;
    for (let i = 0; i <= 8; i++) { c.beginPath(); c.moveTo(i * w / 8, 0); c.lineTo(i * w / 8, h); c.stroke(); c.beginPath(); c.moveTo(0, i * h / 8); c.lineTo(w, i * h / 8); c.stroke(); }
  });
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(2.2, 1.5);
  const floor = box(18, 0.5, 12, new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.9 }), world, 0, -0.25, 0);
  const rockMat = M(0x241c30, { roughness: 1 });
  const under = add(new THREE.CylinderGeometry(8.9, 2.3, 7, 9, 3), rockMat, world, 0, -4.0, 0, false);
  under.scale.set(1, 1, 0.66);
  { // jitter underside vertices for a rocky look
    const pos = under.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      if (pos.getY(i) < 3.4) { pos.setX(i, pos.getX(i) * (0.85 + Math.random() * 0.3)); pos.setZ(i, pos.getZ(i) * (0.85 + Math.random() * 0.3)); pos.setY(i, pos.getY(i) + (Math.random() - .5) * .8); }
    }
    under.geometry.computeVertexNormals();
  }
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const rr = 0.6 + Math.random() * 0.9; // keep every rock fully below the floor top (y = 0)
    const r = add(new THREE.DodecahedronGeometry(rr, 0), M(i % 3 ? 0x2c2239 : 0x221a2d), world,
      Math.cos(a) * (8.9 - rr * 0.8), -rr - 0.08 - Math.random() * 0.5, Math.sin(a) * (5.9 - rr * 0.8), false);
    r.rotation.set(Math.random() * 3, Math.random() * 3, 0);
  }
  // floating mini rocks
  const floaters = [];
  for (let i = 0; i < 7; i++) {
    const a = Math.PI * 1.1 + Math.random() * Math.PI * 0.8, d = 12 + Math.random() * 5;
    const r = add(new THREE.DodecahedronGeometry(0.3 + Math.random() * 0.6, 0), M(0x3a2e4d), scene, Math.cos(a) * d, -3 + Math.random() * 7, Math.sin(a) * d * 0.6 - 3, false);
    r.userData.base = r.position.y; r.userData.ph = Math.random() * 6; floaters.push(r);
  }

  /* Walls */
  const wallMat = M(0x2a1d3f);
  box(18, 6.5, 0.4, wallMat, world, 0, 3.25, -6.2);
  box(0.4, 6.5, 12.4, wallMat, world, -9.2, 3.25, 0);
  // wall trim
  box(18, 0.25, 0.5, M(0x3d2f57), world, 0, 6.55, -6.2);
  box(0.5, 0.25, 12.4, M(0x3d2f57), world, -9.2, 6.55, 0);
  // window with night sky
  const skyTex = canvasTex(256, 256, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, "#1a2a6a"); g.addColorStop(1, "#6b3b8e");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) { c.fillStyle = `rgba(255,255,255,${.3 + Math.random() * .7})`; c.fillRect(Math.random() * w, Math.random() * h * .8, 1.6, 1.6); }
    c.fillStyle = "#fff4d8"; c.beginPath(); c.arc(w * .72, h * .28, 22, 0, 7); c.fill();
    c.fillStyle = "#1a2a6a"; c.beginPath(); c.arc(w * .75, h * .25, 20, 0, 7); c.fill();
  });
  const win = add(new THREE.PlaneGeometry(3.2, 2.2), new THREE.MeshBasicMaterial({ map: skyTex }), world, -5.2, 4.2, -5.98, false);
  box(3.5, 0.15, 0.25, M(0x4a3b66), world, -5.2, 5.35, -5.95);
  box(3.5, 0.15, 0.25, M(0x4a3b66), world, -5.2, 3.05, -5.95);
  box(0.12, 2.2, 0.2, M(0x4a3b66), world, -5.2, 4.2, -5.95);
  box(0.12, 2.2, 0.2, M(0x4a3b66), world, -6.9, 4.2, -5.95);
  box(0.12, 2.2, 0.2, M(0x4a3b66), world, -3.5, 4.2, -5.95);
  // hanging lamp
  const lamp = new THREE.Group(); lamp.position.set(-0.3, 6.2, -0.8); world.add(lamp);
  add(new THREE.CylinderGeometry(0.015, 0.015, 1.6, 4), M(0x111111), lamp, 0, 0.8, 0, false).position.y = 0.2;
  add(new THREE.ConeGeometry(0.55, 0.5, 10, 1, true), M(0x2c6b63, { side: THREE.DoubleSide }), lamp, 0, -0.8, 0, false);
  add(new THREE.SphereGeometry(0.16, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe0a8 }), lamp, 0, -1.05, 0, false);

  /* ---------------- Interactive objects ---------------- */
  const interactive = {}; // key -> {group, anchor, focus:{target, offset}}
  function reg(k, group, anchor, target, offset) {
    group.traverse(o => { o.userData.key = k; });
    interactive[k] = { group, anchor: new THREE.Vector3(...anchor), target: new THREE.Vector3(...target), offset: new THREE.Vector3(...offset) };
  }
  const animators = [];

  /* Car on lift — VR Car Mechanic */
  {
    const g = new THREE.Group(); g.position.set(-1.4, 0, -2.0); g.rotation.y = 0.28 - Math.PI / 4; world.add(g);
    const post = M(0xd9a441, { metalness: .3 });
    [-1.15].forEach(z => {
      box(0.3, 3.2, 0.3, post, g, 0, 1.6, z);
      box(0.7, 0.08, 0.7, M(0x3a3044), g, 0, 0.04, z);
      box(1.6, 0.08, 0.1, M(0x555063, { metalness: .5 }), g, 0, 0.62, z * 0.72);
    });
    // lift pads between the arm and the sill
    [-0.7, 0.7].forEach(x => box(0.14, 0.2, 0.14, M(0x2a2533), g, x, 0.76, -0.83));
    const car = new THREE.Group(); car.position.y = 0.72; g.add(car);
    const paint = M(0xff6a4d, { roughness: .45, metalness: .25 });
    const glass = M(0x1c2440, { roughness: .15, metalness: .4 });
    const trimM = M(0x1b1722, { roughness: .6 });
    // body: low-poly side profile (front = +x) with wheel arches, extruded across the width
    const HW = 0.78; // half width of the extrusion (bevel adds 0.06)
    const prof = new THREE.Shape();
    prof.moveTo(-1.72, 0.2);
    prof.lineTo(-1.54, 0.2); prof.absarc(-1.1, 0.2, 0.44, Math.PI, 0, true);
    prof.lineTo(0.61, 0.2); prof.absarc(1.05, 0.2, 0.44, Math.PI, 0, true);
    prof.lineTo(1.68, 0.2); prof.lineTo(1.8, 0.3); prof.lineTo(1.78, 0.6);
    prof.lineTo(1.55, 0.68); prof.lineTo(0.62, 0.74); // open engine bay
    prof.lineTo(0.6, 0.86); prof.lineTo(0.05, 1.3); // windscreen
    prof.lineTo(-1.0, 1.34); prof.lineTo(-1.55, 0.98); // roof + rear window
    prof.lineTo(-1.78, 0.78); prof.lineTo(-1.76, 0.3); prof.lineTo(-1.72, 0.2);
    const bodyGeo = new THREE.ExtrudeGeometry(prof, { depth: HW * 2, curveSegments: 4, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 1 });
    bodyGeo.translate(0, 0, -HW);
    add(bodyGeo, paint, car);
    // side windows (one slab poking out on both sides) + pillar
    const winShape = new THREE.Shape();
    winShape.moveTo(0.5, 0.92); winShape.lineTo(0.03, 1.26); winShape.lineTo(-0.95, 1.29); winShape.lineTo(-1.42, 0.98); winShape.lineTo(0.5, 0.92);
    const winGeo = new THREE.ExtrudeGeometry(winShape, { depth: HW * 2 + 0.14, bevelEnabled: false });
    winGeo.translate(0, 0, -HW - 0.07);
    add(winGeo, glass, car, 0, 0, 0, false);
    box(0.05, 0.4, HW * 2 + 0.15, paint, car, -0.35, 1.12, 0).rotation.z = -0.1;
    // windscreen + rear window laid on the slopes
    const pane = (x1, y1, x2, y2) => {
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
      const p = box(len, 0.02, HW * 2 - 0.02, glass, car, (x1 + x2) / 2 + nx * 0.06, (y1 + y2) / 2 + ny * 0.06, 0);
      p.rotation.z = Math.atan2(dy, dx); p.castShadow = false;
    };
    pane(0.6, 0.86, 0.05, 1.3); pane(-1.0, 1.34, -1.55, 0.98);
    // door seam, handle and mirror per side
    [-1, 1].forEach(s => {
      const zs = s * (HW + 0.061);
      box(0.015, 0.6, 0.004, trimM, car, -0.35, 0.55, zs);
      box(0.16, 0.035, 0.03, trimM, car, 0.05, 0.78, zs + s * 0.01);
      box(0.12, 0.1, 0.18, paint, car, 0.5, 1.0, s * (HW + 0.14));
    });
    // bumpers, grille, lights
    box(0.14, 0.16, HW * 2 + 0.1, trimM, car, 1.84, 0.28, 0);
    box(0.14, 0.16, HW * 2 + 0.1, trimM, car, -1.84, 0.28, 0);
    box(0.04, 0.14, 0.8, M(0x0d0a12), car, 1.86, 0.46, 0);
    [0.5, -0.5].forEach(z => {
      box(0.05, 0.08, 0.38, E(0xfff1c8, 1.6), car, 1.83, 0.6, z);
      box(0.05, 0.1, 0.34, E(0xff3355, 1.3), car, -1.84, 0.72, z);
    });
    // engine bay under the open hood
    const metal = M(0x3b3b44, { metalness: .6, roughness: .4 });
    box(0.55, 0.2, 0.7, metal, car, 1.1, 0.82, 0);
    cyl(0.16, 0.16, 0.08, 8, M(0x222028), car, 1.2, 0.96, -0.1);
    box(0.22, 0.18, 0.16, trimM, car, 0.85, 0.84, 0.52);
    // hood hinged at the cowl, held by a prop rod
    const hood = new THREE.Group(); hood.position.set(0.61, 0.76, 0); hood.rotation.z = 0.95; car.add(hood);
    box(1.08, 0.05, HW * 2 + 0.1, paint, hood, 0.54, 0.02, 0);
    box(0.02, 0.8, 0.02, M(0xc9c3d6, { metalness: .7 }), car, 1.28, 1.06, 0.55).rotation.z = 0.575;
    // wheels: tyre + rim with a spoke cross
    const wheelMat = M(0x17141c), rimMat = M(0xcfc8d8, { metalness: .7, roughness: .3 });
    [[1.05, 1], [1.05, -1], [-1.1, 1], [-1.1, -1]].forEach(([x, s]) => {
      const w = cyl(0.36, 0.36, 0.26, 12, wheelMat, car, x, 0.2, s * 0.72); w.rotation.x = Math.PI / 2;
      const r = cyl(0.22, 0.22, 0.28, 8, rimMat, car, x, 0.2, s * 0.72); r.rotation.x = Math.PI / 2;
      const zf = s * 0.87;
      box(0.36, 0.05, 0.02, trimM, car, x, 0.2, zf).rotation.z = Math.PI / 4;
      box(0.36, 0.05, 0.02, trimM, car, x, 0.2, zf).rotation.z = -Math.PI / 4;
    });
    // floating wrench (VR grab)
    const wrench = new THREE.Group(); wrench.position.set(1.1, 2.2, 1.45); g.add(wrench);
    // combination wrench: open end + ring end, flat in its own XY plane
    const steel = new THREE.MeshStandardMaterial({ color: 0xd9d5e2, metalness: 0.85, roughness: 0.28 });
    const wr = new THREE.Group(); wr.rotation.set(-0.35, 0, 0.25); wrench.add(wr);
    add(new THREE.BoxGeometry(0.72, 0.085, 0.035), steel, wr, 0, 0, 0);
    const openEnd = add(new THREE.TorusGeometry(0.075, 0.035, 10, 20, Math.PI * 1.4), steel, wr, 0.43, 0, 0); openEnd.rotation.z = Math.PI * 0.3;
    add(new THREE.TorusGeometry(0.066, 0.03, 10, 24), steel, wr, -0.43, 0, 0);
    const halo = add(new THREE.TorusGeometry(0.6, 0.02, 6, 48), E(0x4fe3cf, 2), wrench, 0, 0, 0, false);
    halo.rotation.x = Math.PI / 2;
    animators.push(t => { wrench.position.y = 2.2 + Math.sin(t * 1.6) * 0.12; wrench.rotation.y = t * 0.8; halo.scale.setScalar(1 + Math.sin(t * 3) * 0.06); });
    reg("car", g, [-1.4, 3.8, -2.0], [-1.4, 1.4, -2.0], [2.3, 1.8, 5.0]);
  }

  /* TagRun — parkour boxes + RFID gate */
  let timerTex, tagrun = { sec: 0, cp: 0 };
  {
    const g = new THREE.Group(); g.position.set(-6.5, 0, -1.8); g.rotation.y = 0.45; world.add(g);
    const ply = M(0xc99a62), ply2 = M(0xa97a48);
    box(1.3, 0.9, 1.3, ply, g, 0.7, 0.45, -0.3);
    box(1.0, 1.6, 1.0, ply2, g, -0.7, 0.8, -0.7);
    box(0.8, 0.45, 0.8, ply, g, 1.6, 0.225, 0.9);
    box(2.4, 0.12, 0.3, M(0x6d5a8f), g, -0.2, 1.7, 0.2).rotation.z = 0.02;
    box(0.12, 1.7, 0.12, M(0x6d5a8f), g, -1.3, 0.85, 0.2);
    box(0.12, 1.7, 0.12, M(0x6d5a8f), g, 0.9, 0.85, 0.2);
    // finish gate
    const gateMat = M(0x241c33);
    const gate = new THREE.Group(); gate.position.set(0, 0, 2.0); gate.scale.setScalar(0.7); g.add(gate);
    box(0.18, 2.6, 0.18, gateMat, gate, -1.1, 1.3, 0);
    box(0.18, 2.6, 0.18, gateMat, gate, 1.1, 1.3, 0);
    box(2.4, 0.26, 0.26, gateMat, gate, 0, 2.62, 0);
    const gateBar = box(2.1, 0.05, 0.05, E(0x4fe3cf, 2.2), gate, 0, 2.47, 0);
    box(0.05, 2.2, 0.05, E(0xffb45e, 1.8), gate, -1.0, 1.25, 0.1);
    box(0.05, 2.2, 0.05, E(0xffb45e, 1.8), gate, 1.0, 1.25, 0.1);
    timerTex = canvasTex(512, 160, drawTimer.bind(null, 0, 0));
    box(1.8, 0.62, 0.14, M(0x120d1c), gate, 0, 3.1, 0);
    add(new THREE.PlaneGeometry(1.7, 0.53), new THREE.MeshBasicMaterial({ map: timerTex }), gate, 0, 3.1, 0.08, false);
    // RFID checkpoint pads on the boxes; the gate is the last checkpoint
    const pads = [[0.9, 0.915, -0.3], [1.6, 0.465, 0.9]].map(([x, y, z]) => {
      const pad = box(0.5, 0.03, 0.5, E(0x4fe3cf, 0.3), g, x, y, z);
      const ring = add(new THREE.RingGeometry(0.2, 0.26, 20), new THREE.MeshBasicMaterial({ color: 0x4fe3cf, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }), g, x, y + 0.03, z, false);
      ring.rotation.x = -Math.PI / 2;
      return { pad, ring };
    });
    // runner with a glowing wristband
    const runner = new THREE.Group(); g.add(runner);
    const skin = M(0xe0b08a), kit = M(0x2c6b63), dark = M(0x241c33);
    box(0.26, 0.34, 0.16, kit, runner, 0, 0.62, 0);
    add(new THREE.SphereGeometry(0.1, 8, 6), skin, runner, 0, 0.9, 0);
    const legs = [-1, 1].map(s => {
      const hip = new THREE.Group(); hip.position.set(s * 0.07, 0.45, 0); runner.add(hip);
      box(0.09, 0.42, 0.1, dark, hip, 0, -0.21, 0);
      return hip;
    });
    const arms = [-1, 1].map(s => {
      const sh = new THREE.Group(); sh.position.set(s * 0.17, 0.76, 0); runner.add(sh);
      box(0.07, 0.32, 0.08, skin, sh, 0, -0.16, 0);
      return sh;
    });
    add(new THREE.TorusGeometry(0.05, 0.018, 6, 12), E(0x4fe3cf, 2), arms[1], 0, -0.26, 0, false).rotation.x = Math.PI / 2;
    // route: [from, to, duration, jump height, checkpoint reached at the end]
    const pts = [[2.0, 0, -1.6], [0.9, 0.93, -0.3], [1.6, 0.48, 0.9], [0, 0, 1.4], [0, 0, 2.8]];
    const segs = [[0, 1, 1.1, 0.45, 0], [1, 2, 0.9, 0.35, 1], [2, 3, 0.8, 0.2, -1], [3, 4, 0.9, 0, 2]];
    const runTime = segs.reduce((a, s) => a + s[2], 0), cycle = runTime + 2.6;
    const cpTimes = []; // time at which each checkpoint is reached
    segs.reduce((acc, s) => { acc += s[2]; if (s[4] >= 0) cpTimes[s[4]] = acc; return acc; }, 0);
    animators.push(t => {
      const lt = t % cycle, run = Math.min(lt, runTime);
      let acc = 0, seg = segs[segs.length - 1], u = 1;
      for (const s of segs) { if (run < acc + s[2]) { seg = s; u = (run - acc) / s[2]; break; } acc += s[2]; }
      const a = pts[seg[0]], b = pts[seg[1]];
      runner.position.set(a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u + seg[3] * 4 * u * (1 - u), a[2] + (b[2] - a[2]) * u);
      runner.rotation.y = Math.atan2(b[0] - a[0], b[2] - a[2]);
      const moving = lt < runTime, airborne = seg[3] > 0;
      const swing = moving ? Math.sin(t * 16) * (airborne ? 0.25 : 0.8) : 0;
      legs[0].rotation.x = airborne && moving ? -0.7 : swing; legs[1].rotation.x = airborne && moving ? 0.3 : -swing;
      arms[0].rotation.x = -swing; arms[1].rotation.x = moving ? swing : -1.2; // raises the wristband at the finish
      runner.visible = lt < cycle - 0.4;
      // checkpoints fire as the runner lands on them
      tagrun.sec = run; tagrun.cp = cpTimes.filter(c => run >= c).length;
      pads.forEach((p, i) => {
        const since = lt - cpTimes[i];
        const on = since >= 0 && since < 0.9;
        p.pad.material.emissiveIntensity = on ? 2.2 - since * 2 : (since >= 0 && moving ? 0.9 : 0.3);
        p.ring.material.opacity = on ? 0.9 * (1 - since / 0.9) : 0;
        p.ring.scale.setScalar(1 + (on ? since * 2.2 : 0));
      });
      const fin = lt - runTime;
      gateBar.material.emissiveIntensity = fin >= 0 ? 2.2 + Math.max(0, 3 * (1 - fin)) * (Math.sin(t * 30) > 0 ? 1 : 0.4) : 2.2;
    });
    reg("tagrun", g, [-6.5, 3.2, -1.8], [-6.4, 1.6, -1.3], [2.8, 2.0, 5.2]);
  }
  function drawTimer(sec, cp, c, w, h) {
    c.fillStyle = "#0c0814"; c.fillRect(0, 0, w, h);
    c.font = "600 26px 'JetBrains Mono', monospace"; c.fillStyle = "#ffb45e"; c.fillText("TAGRUN · LANE 1", 20, 38);
    c.textAlign = "right"; c.fillStyle = cp === 3 ? "#4fe3cf" : "#ffb45e"; c.fillText(cp === 3 ? "FINISH" : `CP ${cp}/3`, w - 20, 38); c.textAlign = "left";
    const m = Math.floor(sec / 60), s = Math.floor(sec % 60), cs = Math.floor((sec % 1) * 100);
    c.font = "700 84px 'JetBrains Mono', monospace"; c.fillStyle = "#4fe3cf";
    c.shadowColor = "#4fe3cf"; c.shadowBlur = 16;
    c.fillText(`${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`, 20, 132);
    c.shadowBlur = 0;
  }

  /* Workbench desk — Skills */
  {
    const g = new THREE.Group(); g.position.set(3.7, 0, -4.4); g.rotation.y = -0.18; world.add(g);
    const wood = M(0x8b5a3c);
    box(3.4, 0.14, 1.3, wood, g, 0, 1.05, 0);
    [[-1.55, -.5], [1.55, -.5], [-1.55, .5], [1.55, .5]].forEach(([x, z]) => box(0.12, 1.0, 0.12, M(0x2b2336), g, x, 0.5, z));
    box(3.2, 0.08, 1.1, M(0x2b2336), g, 0, 0.3, 0);
    // monitor
    box(0.12, 0.5, 0.12, M(0x2b2336), g, 0, 1.35, -0.35);
    box(1.9, 1.1, 0.1, M(0x17121f), g, 0, 2.05, -0.38);
    const codeTex = canvasTex(640, 360, (c, w, h) => {
      c.fillStyle = "#120d22"; c.fillRect(0, 0, w, h);
      c.fillStyle = "#1e1636"; c.fillRect(0, 0, w, 34);
      c.font = "500 17px 'JetBrains Mono', monospace"; c.fillStyle = "#bdb2c9"; c.fillText("WheelBolt.cs   ·   Unity 6   ·   XR Interaction Toolkit", 16, 23);
      const lines = [
        [["#a97dff", "using "], ["#f4ede5", "UnityEngine.XR.Interaction.Toolkit;"]],
        [],
        [["#a97dff", "public class "], ["#4fe3cf", "WheelBolt "], ["#f4ede5", ": "], ["#4fe3cf", "XRGrabInteractable"]],
        [["#f4ede5", "{"]],
        [["#bdb2c9", "    [SerializeField] "], ["#a97dff", "float "], ["#f4ede5", "torque = "], ["#ffb45e", "120f"], ["#f4ede5", ";"]],
        [["#a97dff", "    bool "], ["#f4ede5", "isTightened;"]],
        [],
        [["#a97dff", "    void "], ["#ffb45e", "OnSelectExited"], ["#f4ede5", "(SelectExitEventArgs args)"]],
        [["#f4ede5", "    {"]],
        [["#f4ede5", "        isTightened = "], ["#ffb45e", "Snap"], ["#f4ede5", "(args.interactorObject);"]],
        [["#7d7290", "        // haptic feedback on the controller"]],
        [["#f4ede5", "    }"]],
        [["#f4ede5", "}"]]
      ];
      c.font = "500 19px 'JetBrains Mono', monospace";
      lines.forEach((ln, i) => {
        let x = 52; c.fillStyle = "#5a4f70"; c.fillText(String(i + 1).padStart(2, " "), 12, 64 + i * 23);
        ln.forEach(([col, txt]) => { c.fillStyle = col; c.fillText(txt, x, 64 + i * 23); x += c.measureText(txt).width; });
      });
    });
    add(new THREE.PlaneGeometry(1.8, 1.0), new THREE.MeshBasicMaterial({ map: codeTex }), g, 0, 2.05, -0.325, false);
    box(1.1, 0.05, 0.34, M(0x2b2336), g, 0, 1.14, 0.2);
    // Raspberry Pi + Arduino
    box(0.5, 0.03, 0.34, M(0x1f8a4c), g, 1.2, 1.14, 0.15);
    box(0.14, 0.05, 0.14, M(0x222222), g, 1.12, 1.18, 0.12);
    box(0.1, 0.08, 0.12, M(0xc9c3d6, { metalness: .6 }), g, 1.4, 1.19, 0.2);
    const led = box(0.04, 0.04, 0.04, E(0xff3355, 2), g, 1.02, 1.18, 0.28);
    box(0.46, 0.03, 0.32, M(0x1b64b8), g, -1.2, 1.14, 0.15);
    box(0.16, 0.05, 0.08, M(0x222222), g, -1.2, 1.18, 0.1);
    // mug + figma-ish sketch paper
    cyl(0.1, 0.09, 0.2, 10, M(0xf4ede5), g, 0.85, 1.22, -0.05);
    const paper = box(0.5, 0.01, 0.36, M(0xfaf5ee), g, -0.8, 1.13, -0.2); paper.rotation.y = 0.3;
    // chair
    cyl(0.05, 0.05, 0.5, 6, M(0x2b2336), g, 0, 0.3, 1.0);
    box(0.8, 0.12, 0.8, M(0x5a3f86), g, 0, 0.6, 1.0);
    box(0.8, 0.8, 0.12, M(0x5a3f86), g, 0, 1.05, 1.42);
    animators.push(t => { led.material.emissiveIntensity = Math.sin(t * 5) > 0 ? 2.2 : 0.2; });
    reg("skills", g, [3.7, 3.1, -4.4], [3.6, 1.7, -4.2], [-0.3, 1.3, 4.3]);
  }

  /* Construction + drone — FPT-AI */
  {
    const g = new THREE.Group(); g.position.set(6.4, 0, 1.9); g.rotation.y = -0.35; world.add(g);
    const conc = M(0x9b93a8);
    box(2.8, 0.15, 2.8, M(0x6d6579), g, 0, 0.075, 0);
    [-1, 0, 1].forEach(x => [-1, 0, 1].forEach(z => box(0.16, 1.8, 0.16, conc, g, x, 1.0, z)));
    box(2.3, 0.12, 2.3, conc, g, 0, 1.0, 0);
    box(2.3, 0.12, 2.3, conc, g, 0, 1.9, 0);
    box(1.2, 0.8, 0.12, M(0xb8aec4), g, -0.5, 0.5, -1.05);
    // planned BIM floors as wireframe
    const bim = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.3, 1.8, 2.3, 2, 2, 2)),
      new THREE.LineBasicMaterial({ color: 0x4fe3cf, transparent: true, opacity: 0.8 }));
    bim.position.set(0, 2.85, 0); g.add(bim);
    // point cloud
    const N = 900, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    const cA = new THREE.Color(0xd65cff), cB = new THREE.Color(0xffb45e), tmp = new THREE.Color();
    for (let i = 0; i < N; i++) {
      const face = Math.floor(Math.random() * 4);
      let x = (Math.random() - .5) * 2.3, z = (Math.random() - .5) * 2.3; const y = Math.random() * 1.95 + 0.1;
      if (face === 0) x = -1.15; else if (face === 1) x = 1.15; else if (face === 2) z = -1.15; else z = 1.15;
      pos.set([x + (Math.random() - .5) * .06, y, z + (Math.random() - .5) * .06], i * 3);
      tmp.copy(cA).lerp(cB, y / 2); col.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3)); pg.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const cloud = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: .9, depthWrite: false }));
    g.add(cloud);
    // drone
    const drone = new THREE.Group(); drone.position.set(0.4, 5.0, 0.4); g.add(drone);
    const dm = M(0x1d1829, { roughness: .4 });
    box(0.46, 0.14, 0.46, dm, drone, 0, 0, 0);
    const arm1 = box(1.2, 0.04, 0.07, dm, drone, 0, 0, 0); arm1.rotation.y = Math.PI / 4;
    const arm2 = box(1.2, 0.04, 0.07, dm, drone, 0, 0, 0); arm2.rotation.y = -Math.PI / 4;
    const props = [];
    [[.42, .42], [-.42, .42], [.42, -.42], [-.42, -.42]].forEach(([x, z]) => {
      cyl(0.04, 0.04, 0.08, 6, dm, drone, x, 0.05, z);
      const p = box(0.5, 0.01, 0.06, M(0xe9e1f0), drone, x, 0.1, z); props.push(p);
    });
    add(new THREE.SphereGeometry(0.08, 8, 6), E(0x4fe3cf, 2), drone, 0, -0.12, 0.18);
    const cone = add(new THREE.ConeGeometry(1.35, 3.0, 20, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x4fe3cf, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
      drone, 0, -1.6, 0, false);
    cone.castShadow = false;
    const scanLine = add(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ color: 0x4fe3cf, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }), g, 0, 1, 0, false);
    scanLine.rotation.x = -Math.PI / 2; scanLine.castShadow = false;
    animators.push((t, dt) => {
      props.forEach((p, i) => p.rotation.y += dt * (i % 2 ? 40 : -40));
      drone.position.y = 5.0 + Math.sin(t * 1.3) * 0.18;
      drone.position.x = 0.4 + Math.sin(t * 0.5) * 0.35;
      drone.rotation.z = Math.cos(t * 0.5) * 0.08;
      scanLine.position.y = 0.2 + ((t * 0.6) % 1) * 3.6;
      scanLine.material.opacity = 0.14 * (1 - ((t * 0.6) % 1));
      bim.material.opacity = 0.5 + Math.sin(t * 2) * 0.3;
    });
    reg("fpt", g, [6.4, 6.1, 1.9], [6.4, 2.6, 1.9], [-2.2, 2.0, 6.3]);
  }

  /* Stylised avatar of Jada — About */
  {
    const g = new THREE.Group(); g.position.set(1.45, 0, 3.3); g.rotation.y = 0.12; world.add(g);
    const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
    const smooth = (geo, mat, p, x = 0, y = 0, z = 0) => add(geo, mat, p, x, y, z);
    let seed = 23;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    // platform
    cyl(0.75, 0.85, 0.16, 40, M(0x3b3050, { flatShading: false }), g, 0, 0.08, 0);
    const ring = add(new THREE.TorusGeometry(0.77, 0.03, 8, 64), E(0x4fe3cf, 1.8), g, 0, 0.17, 0, false); ring.rotation.x = Math.PI / 2;
    const faceLight = new THREE.PointLight(0xffd9bd, 0.8, 4.5, 2); faceLight.position.set(1.95, 2.7, 5.0); world.add(faceLight);

    /* materials */
    const skin = new THREE.MeshPhysicalMaterial({ color: 0xf0b28e, roughness: 0.5, clearcoat: 0.12, clearcoatRoughness: 0.6, emissive: 0x4a1a0c, emissiveIntensity: 0.3, sheen: new THREE.Color(0x8a3a2a) });
    const skinDeep = skin.clone(); skinDeep.color = new THREE.Color(0xe79f7e);
    const blazer = new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.62 });
    const lapelM = new THREE.MeshStandardMaterial({ color: 0x2a2833, roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    const shirt = new THREE.MeshStandardMaterial({ color: 0xf7f5f2, roughness: 0.55, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    const jeans = new THREE.MeshStandardMaterial({ color: 0x2c3550, roughness: 0.75 });
    const shoeM = new THREE.MeshStandardMaterial({ color: 0xf4f1ec, roughness: 0.5 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xe8b650, metalness: 0.85, roughness: 0.28 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1a0d08, roughness: 0.5 });

    const body = new THREE.Group(); body.position.y = 0.16; g.add(body);

    /* legs & shoes */
    [-1, 1].forEach(s => {
      smooth(new THREE.CylinderGeometry(0.098, 0.09, 0.7, 28), jeans, body, s * 0.115, 0.45, 0);
      const sh = smooth(new THREE.SphereGeometry(0.12, 28, 18), shoeM, body, s * 0.115, 0.07, 0.07); sh.scale.set(0.85, 0.6, 1.5);
      const sole = smooth(new THREE.CylinderGeometry(0.1, 0.1, 0.03, 24), new THREE.MeshStandardMaterial({ color: 0xd9d4cc }), body, s * 0.115, 0.015, 0.07); sole.scale.set(0.85, 1, 1.75);
    });
    const hips = smooth(new THREE.SphereGeometry(0.3, 32, 20), jeans, body, 0, 0.84, 0); hips.scale.set(0.82, 0.45, 0.62);

    /* torso: lathe profile, slightly flattened front-to-back */
    const prof = [[0.0, 0.78], [0.235, 0.8], [0.26, 0.92], [0.255, 1.08], [0.29, 1.28], [0.3, 1.4], [0.25, 1.5], [0.15, 1.57], [0.09, 1.59], [0.0, 1.6]]
      .map(([r, y]) => new THREE.Vector2(r, y));
    const torsoGeo = new THREE.LatheGeometry(prof, 48); torsoGeo.scale(1, 1, 0.68); torsoGeo.computeVertexNormals();
    const torso = smooth(torsoGeo, blazer, body);
    [-1, 1].forEach(s => { const sh = smooth(new THREE.SphereGeometry(0.12, 32, 20), blazer, body, s * 0.27, 1.43, 0); sh.scale.set(1.05, 0.85, 0.9); });
    // project flat shapes onto the torso front
    const torsoProbe = new THREE.Mesh(torsoGeo);
    const rc = new THREE.Raycaster();
    const surf = (probe, x, y) => { rc.set(V3(x, y, 3), V3(0, 0, -1)); const h = rc.intersectObject(probe)[0]; return h ? h.point.z : 0; };
    const wrap = (geo, probe, lift) => {
      const p = geo.attributes.position;
      for (let i = 0; i < p.count; i++) p.setZ(i, surf(probe, p.getX(i), p.getY(i)) + lift);
      geo.computeVertexNormals(); return geo;
    };
    // white shirt V (triangulated finely via a grid clipped to the V)
    const vGeo = (() => {
      const pts = [], idx = [], N = 14;
      for (let j = 0; j <= N; j++) {
        const y = 1.575 - j * (0.4 / N), half = 0.12 * (1 - j / N);
        for (let i = 0; i <= N; i++) pts.push(-half + (2 * half) * (i / N), y, 0);
      }
      for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
        const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
      const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3)); geo.setIndex(idx);
      return geo;
    })();
    smooth(wrap(vGeo, torsoProbe, 0.012), shirt, body).castShadow = false;
    // lapels + collar tips + buttons
    [-1, 1].forEach(s => {
      const pts = [0, 1, 2, 3, 4, 5].map(k => { const t = k / 5, x = s * (0.13 - 0.12 * t), y = 1.575 - 0.4 * t; return V3(x, y, surf(torsoProbe, x, y) + 0.018); });
      smooth(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.024, 8, false), lapelM, body);
      const cpts = [V3(s * 0.03, 1.575, 0), V3(s * 0.105, 1.56, 0), V3(s * 0.09, 1.48, 0)].map(v => V3(v.x, v.y, surf(torsoProbe, v.x, v.y) + 0.022));
      const cg = new THREE.BufferGeometry().setFromPoints(cpts); cg.setIndex(s > 0 ? [0, 2, 1] : [0, 1, 2]); cg.computeVertexNormals();
      smooth(cg, new THREE.MeshStandardMaterial({ color: 0xf7f5f2, roughness: 0.55, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), body).castShadow = false;
    });
    [1.08, 0.94].forEach(y => smooth(new THREE.SphereGeometry(0.02, 12, 8), dark, body, 0, y, surf(torsoProbe, 0, y) + 0.012));

    /* neck + necklace */
    smooth(new THREE.CylinderGeometry(0.1, 0.115, 0.26, 28), skin, body, 0, 1.64, 0.02);
    const nk = smooth(new THREE.TorusGeometry(0.118, 0.008, 8, 48), gold, body, 0, 1.585, 0.035); nk.rotation.x = Math.PI / 2 - 0.4;

    /* arms: upper + forearm with elbow pivot */
    const mkArm = side => {
      const sh = new THREE.Group(); sh.position.set(side * 0.3, 1.44, 0); body.add(sh);
      smooth(new THREE.TubeGeometry(new THREE.LineCurve3(V3(0, 0, 0), V3(0, -0.3, 0)), 4, 0.07, 20, false), blazer, sh);
      smooth(new THREE.SphereGeometry(0.07, 20, 14), blazer, sh, 0, -0.3, 0);
      const el = new THREE.Group(); el.position.y = -0.3; sh.add(el);
      smooth(new THREE.TubeGeometry(new THREE.LineCurve3(V3(0, 0, 0), V3(0, -0.27, 0)), 4, 0.064, 20, false), blazer, el);
      const cuff = smooth(new THREE.TorusGeometry(0.058, 0.016, 10, 24), shirt, el, 0, -0.27, 0); cuff.rotation.x = Math.PI / 2;
      const hand = smooth(new THREE.SphereGeometry(0.07, 24, 16), skin, el, 0, -0.34, 0); hand.scale.set(0.9, 1.15, 0.75);
      smooth(new THREE.SphereGeometry(0.028, 16, 10), skin, el, side * -0.055, -0.31, 0.03);
      return { sh, el };
    };
    const armR = mkArm(1), armL = mkArm(-1);
    armL.sh.rotation.set(0.05, 0, -0.1); armL.el.rotation.set(-0.25, 0, 0);

    /* ---------- head ---------- */
    const head = new THREE.Group(); head.position.set(0, 2.08, 0.03); head.scale.setScalar(0.96); body.add(head);
    const headGeo = new THREE.SphereGeometry(0.5, 72, 54);
    {
      const hp = headGeo.attributes.position;
      for (let i = 0; i < hp.count; i++) {
        let x = hp.getX(i), y = hp.getY(i), z = hp.getZ(i);
        if (y < 0) { const k = Math.pow(-y / 0.5, 1.7); x *= 1 - 0.2 * k; z *= 1 - 0.08 * k; if (z > 0) z += 0.035 * k * (z / 0.5); }
        if (y > -0.25 && y < 0.05) x *= 1.02;
        hp.setXYZ(i, x, y * 1.04, z * 0.96);
      }
      headGeo.computeVertexNormals();
    }
    smooth(headGeo, skin, head);
    const hProbe = new THREE.Mesh(headGeo);
    const hz = (x, y) => surf(hProbe, x, y);

    // eyes with painted iris, glossy
    const irisTex = canvasTex(512, 256, (c, w, h) => {
      c.fillStyle = "#fbf7f2"; c.fillRect(0, 0, w, h);
      const cx = 128, cy = 128, R = 47;
      const gr = c.createRadialGradient(cx, cy, 6, cx, cy, R);
      gr.addColorStop(0, "#2a1307"); gr.addColorStop(0.45, "#6e3a18"); gr.addColorStop(0.8, "#4a240e"); gr.addColorStop(1, "#1d0d05");
      c.fillStyle = gr; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill();
      c.strokeStyle = "rgba(190,120,60,.35)"; c.lineWidth = 1.5;
      for (let i = 0; i < 60; i++) { const a = i / 60 * 6.283; c.beginPath(); c.moveTo(cx + Math.cos(a) * 20, cy + Math.sin(a) * 20); c.lineTo(cx + Math.cos(a) * (R - 6), cy + Math.sin(a) * (R - 6)); c.stroke(); }
      c.lineWidth = 5; c.strokeStyle = "#140803"; c.beginPath(); c.arc(cx, cy, R - 2, 0, 7); c.stroke();
      c.fillStyle = "#050201"; c.beginPath(); c.arc(cx, cy, 18, 0, 7); c.fill();
      c.fillStyle = "#fff"; c.beginPath(); c.arc(cx + 14, cy - 15, 8, 0, 7); c.fill();
      c.globalAlpha = .7; c.beginPath(); c.arc(cx - 16, cy + 16, 4, 0, 7); c.fill(); c.globalAlpha = 1;
    });
    const eyeM = new THREE.MeshPhysicalMaterial({ map: irisTex, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 });
    const lids = [];
    const blushTex = canvasTex(128, 128, (c, w) => { const gr = c.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, "rgba(238,112,112,.6)"); gr.addColorStop(1, "rgba(238,112,112,0)"); c.fillStyle = gr; c.fillRect(0, 0, w, w); });
    [-1, 1].forEach(s => {
      const ex = s * 0.175, ey = 0.035, ez = hz(ex, ey) - 0.06;
      const eye = smooth(new THREE.SphereGeometry(0.098, 40, 28), eyeM, head, ex, ey, ez);
      eye.rotation.y = -s * 0.08;
      // upper lid + lash line (rotates to blink)
      const lid = new THREE.Group(); lid.position.set(ex, ey, ez); head.add(lid); lids.push(lid);
      smooth(new THREE.SphereGeometry(0.105, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), skin, lid);
      const lash = smooth(new THREE.TorusGeometry(0.105, 0.012, 8, 32, Math.PI), dark, lid); lash.rotation.x = Math.PI / 2;
      const flick = smooth(new THREE.ConeGeometry(0.012, 0.05, 8), dark, lid, s * 0.108, 0.012, 0.02); flick.rotation.z = -s * 1.1;
      lid.rotation.x = -0.72;
      // lower lash hint
      const low = smooth(new THREE.TorusGeometry(0.1, 0.004, 6, 24, Math.PI * 0.7), skinDeep, head, ex, ey - 0.005, ez); low.rotation.set(-Math.PI / 2 + 0.25, 0, Math.PI + Math.PI * 0.15);
      // brow
      const bp = [[0.075, 0.16], [0.17, 0.195], [0.265, 0.16]].map(([x, y]) => V3(s * x, y, hz(s * x, y) + 0.01));
      smooth(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bp), 20, 0.016, 8, false), dark, head);
      // blush
      const bl = wrap(new THREE.CircleGeometry(0.08, 28).translate(s * 0.27, -0.1, 0), hProbe, 0.009);
      smooth(bl, new THREE.MeshBasicMaterial({ map: blushTex, transparent: true, depthWrite: false }), head).castShadow = false;
      // ear + drop earring
      const ear = smooth(new THREE.SphereGeometry(0.07, 20, 14), skin, head, s * 0.44, -0.03, 0.0); ear.scale.set(0.5, 1, 0.8);
      smooth(new THREE.CylinderGeometry(0.005, 0.005, 0.13, 6), gold, head, s * 0.45, -0.16, 0.02);
      smooth(new THREE.SphereGeometry(0.022, 14, 10), gold, head, s * 0.45, -0.24, 0.02);
    });
    // nose
    const nz = hz(0, -0.075);
    const nose = smooth(new THREE.SphereGeometry(0.048, 28, 20), skin, head, 0, -0.07, nz - 0.012); nose.scale.set(1, 0.85, 0.95);
    [-1, 1].forEach(s => { const w = smooth(new THREE.SphereGeometry(0.026, 16, 12), skin, head, s * 0.036, -0.088, hz(s * 0.036, -0.088) - 0.004); w.scale.set(1, 0.8, 0.8); });
    // big smile: mouth, teeth, lips
    const mouthShape = new THREE.Shape(); mouthShape.moveTo(-0.115, -0.168); mouthShape.quadraticCurveTo(0, -0.198, 0.115, -0.168); mouthShape.quadraticCurveTo(0, -0.322, -0.115, -0.168);
    const teethShape = new THREE.Shape(); teethShape.moveTo(-0.098, -0.174); teethShape.quadraticCurveTo(0, -0.198, 0.098, -0.174); teethShape.quadraticCurveTo(0, -0.262, -0.098, -0.174);
    const tongueShape = new THREE.Shape(); tongueShape.moveTo(-0.045, -0.232); tongueShape.quadraticCurveTo(0, -0.222, 0.045, -0.232); tongueShape.quadraticCurveTo(0, -0.255, -0.045, -0.232);
    smooth(wrap(new THREE.ShapeGeometry(mouthShape, 24), hProbe, 0.013), new THREE.MeshStandardMaterial({ color: 0x5e1c26, roughness: 0.6 }), head).castShadow = false;
    smooth(wrap(new THREE.ShapeGeometry(tongueShape, 16), hProbe, 0.015), new THREE.MeshStandardMaterial({ color: 0xc8606a, roughness: 0.5 }), head).castShadow = false;
    smooth(wrap(new THREE.ShapeGeometry(teethShape, 24), hProbe, 0.017), new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.25, clearcoat: 0.6 }), head).castShadow = false;
    const lipM = new THREE.MeshPhysicalMaterial({ color: 0xd06a6e, roughness: 0.35, clearcoat: 0.5 });
    const curvePts = (p0, c, p2, n) => Array.from({ length: n + 1 }, (_, i) => { const t = i / n, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, d = t * t; const x = a * p0[0] + b * c[0] + d * p2[0], y = a * p0[1] + b * c[1] + d * p2[1]; return V3(x, y, hz(x, y) + 0.018); });
    smooth(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curvePts([-0.115, -0.168], [0, -0.328], [0.115, -0.168], 16)), 40, 0.014, 10, false), lipM, head);
    smooth(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curvePts([-0.115, -0.168], [0, -0.196], [0.115, -0.168], 12)), 30, 0.009, 8, false), lipM, head);
    [-1, 1].forEach(s => smooth(new THREE.SphereGeometry(0.014, 12, 8), lipM, head, s * 0.117, -0.166, hz(s * 0.117, -0.166) + 0.014));

    /* ---------- VR headset worn over the eyes ---------- */
    {
      const shell = new THREE.MeshPhysicalMaterial({ color: 0xf1eef6, roughness: 0.28, clearcoat: 0.7, clearcoatRoughness: 0.2 });
      const glass = new THREE.MeshPhysicalMaterial({ color: 0x0d0a18, roughness: 0.05, metalness: 0.35, clearcoat: 1, clearcoatRoughness: 0.02 });
      const strapM = new THREE.MeshStandardMaterial({ color: 0x2a2436, roughness: 0.6 });
      const vr = new THREE.Group(); vr.position.set(0, 0.05, 0.43); head.add(vr);
      const shellMesh = smooth(new THREE.SphereGeometry(1, 48, 32), shell, vr); shellMesh.scale.set(0.45, 0.2, 0.2);
      const visor = smooth(new THREE.SphereGeometry(1, 48, 32, 0, Math.PI, 0.18, Math.PI - 0.36), glass, vr, 0, 0, 0.018); visor.scale.set(0.43, 0.185, 0.2);
      smooth(new THREE.BoxGeometry(0.34, 0.018, 0.01), E(0xa97dff, 2.4), vr, 0, -0.07, 0.205);
      [-1, 1].forEach(s => {
        smooth(new THREE.SphereGeometry(0.014, 12, 8), E(0x4fe3cf, 2.2), vr, s * 0.3, 0.08, 0.155);
        smooth(new THREE.SphereGeometry(0.02, 12, 8), glass, vr, s * 0.36, -0.06, 0.12);
      });
      // soft face cushion where it meets the face
      const pad = smooth(new THREE.TorusGeometry(1, 0.12, 12, 48), strapM, vr, 0, 0, -0.14); pad.scale.set(0.4, 0.17, 0.17);
      // head straps: around the back and over the top
      const band = smooth(new THREE.TorusGeometry(0.585, 0.028, 10, 64), strapM, head, 0, 0.06, -0.03); band.rotation.x = Math.PI / 2; band.scale.set(1, 0.98, 1);
      const top = smooth(new THREE.TorusGeometry(0.585, 0.024, 10, 48, Math.PI), strapM, head, 0, 0.06, -0.03); top.rotation.y = Math.PI / 2;
    }

    /* ---------- hair ---------- */
    const hairRoot = new THREE.Color(0x0c0502), hairTip = new THREE.Color(0x351a0c);
    // envelope radius of the hair volume at height y (head-local)
    const env = y => y >= 0 ? Math.sqrt(Math.max(0, 0.55 * 0.55 - y * y)) + 0.045 : 0.595 + Math.min(1, -y / 0.9) * 0.14;
    const envPt = (a, y) => {
      let R = env(y);
      if (y < -0.3) R *= 1 - 0.28 * Math.min(1, (-y - 0.3) / 0.4) * Math.pow(Math.cos(a), 2);
      return V3(Math.sin(a) * R, y, Math.cos(a) * R - 0.03);
    };
    const faceGap = y => (y > 0.28 ? 0 : y > -0.5 ? 62 : 34) * Math.PI / 180;
    // filler mass behind the curls
    {
      const NU = 64, NV = 44, pts = [], idx = [], y0 = 0.32, y1 = -0.98;
      for (let j = 0; j <= NV; j++) {
        const y = y0 + (y1 - y0) * (j / NV), gap = Math.max(faceGap(y), 0.5);
        for (let i = 0; i <= NU; i++) {
          const a = gap + (Math.PI * 2 - 2 * gap) * (i / NU);
          const p = envPt(a, y).multiplyScalar(0.94); p.y = y; pts.push(p.x, p.y, p.z);
        }
      }
      for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) { const a = j * (NU + 1) + i, b = a + 1, c = a + NU + 1, d = c + 1; idx.push(a, b, c, b, d, c); }
      const mg = new THREE.BufferGeometry(); mg.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3)); mg.setIndex(idx); mg.computeVertexNormals();
      const strandTex = canvasTex(512, 256, (c, w, h) => {
        const gr = c.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#0b0402"); gr.addColorStop(1, "#140803");
        c.fillStyle = gr; c.fillRect(0, 0, w, h);
        for (let i = 0; i < 260; i++) {
          const x = Math.random() * w, amp = 3 + Math.random() * 5, ph = Math.random() * 6;
          c.strokeStyle = Math.random() < 0.5 ? "rgba(60,28,14,.45)" : "rgba(4,2,1,.5)"; c.lineWidth = 1 + Math.random() * 2;
          c.beginPath(); c.moveTo(x, 0);
          for (let y = 0; y <= h; y += 8) c.lineTo(x + Math.sin(y / 14 + ph) * amp * (y / h + 0.2), y);
          c.stroke();
        }
      });
      [-1, 1].forEach(s => {
        const cap = smooth(new THREE.SphereGeometry(0.545, 48, 24, s > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI, 0, Math.PI * 0.53), new THREE.MeshStandardMaterial({ map: strandTex, roughness: 0.85 }), head, 0, 0.02, -0.01);
        cap.rotation.set(-0.6, 0, 0);
      });
      // side-swept curtains from the middle part, framing the face
      const capMat = new THREE.MeshStandardMaterial({ map: strandTex, roughness: 0.85, side: THREE.DoubleSide });
      [-1, 1].forEach(s => {
        const NU = 28, NV = 36, t0 = 0.12, t1 = 1.55, pos = [], uv = [], idx = [];
        for (let j = 0; j <= NV; j++) {
          const t = t0 + (t1 - t0) * (j / NV);
          const p0 = Math.max(0, t - 0.4) * 0.95, p1 = 1.95;
          for (let i = 0; i <= NU; i++) {
            const u = i / NU, off = p0 + (p1 - p0) * u, phi = Math.PI / 2 + s * off;
            const R = 0.548 + 0.035 * u + 0.012 * Math.sin(u * 9 + j * 0.3);
            pos.push(-R * Math.cos(phi) * Math.sin(t), R * Math.cos(t) * 1.02 + 0.02, R * Math.sin(phi) * Math.sin(t) * 0.97 - 0.01);
            uv.push(u, 1 - j / NV);
          }
        }
        for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) { const a = j * (NU + 1) + i, b = a + 1, c = a + NU + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
        const cg = new THREE.BufferGeometry();
        cg.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); cg.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
        cg.setIndex(idx); cg.computeVertexNormals();
        smooth(cg, capMat, head);
      });
    }
    // helix ringlets, merged into one geometry
    class Ringlet extends THREE.Curve {
      constructor(root, dir, out, len, rad, turns, phase) { super(); Object.assign(this, { root, dir, out, len, rad, turns, phase }); this.side = new THREE.Vector3().crossVectors(dir, out).normalize(); }
      getPoint(t, target = new THREE.Vector3()) {
        const th = t * this.turns * Math.PI * 2 + this.phase, r = this.rad * (0.55 + 0.6 * t);
        return target.copy(this.root).addScaledVector(this.dir, t * this.len).addScaledVector(this.out, Math.cos(th) * r + t * t * 0.04).addScaledVector(this.side, Math.sin(th) * r);
      }
    }
    const geos = [];
    let made = 0, guard = 0;
    while (made < 1150 && guard++ < 60000) {
      const y = 0.56 - rnd() * 1.52;
      const a = (rnd() * 2 - 1) * Math.PI;
      if (Math.abs(a) < faceGap(y)) continue;
      const R0 = env(y);
      const root = envPt(a, y).multiplyScalar(0.97); root.y = y;
      const out = V3(Math.sin(a), 0, Math.cos(a));
      let dir;
      if (y > 0.2) {
        // lie the curls flat over the crown, falling sideways and back
        const n = root.clone().normalize(), sd = Math.abs(Math.sin(a)) > 0.12 ? Math.sign(Math.sin(a)) : (rnd() < 0.5 ? -1 : 1);
        const base = V3(sd, -0.45, -0.25);
        dir = base.addScaledVector(n, -base.dot(n)).normalize();
      }
      else dir = envPt(a, y - 0.08).sub(envPt(a, y)).normalize();
      dir.add(V3((rnd() - 0.5) * 0.2, 0, (rnd() - 0.5) * 0.2)).normalize();
      const o2 = out.clone().addScaledVector(dir, -out.dot(dir)).normalize();
      const len = Math.min(0.5, Math.max(0.14, (y + 1.3) * 0.4)) * (0.8 + rnd() * 0.4) * (y > 0.2 ? 0.45 : 1);
      const curve = new Ringlet(root, dir, o2, len, 0.026 + rnd() * 0.018, len / (0.07 + rnd() * 0.02), rnd() * 6.28);
      const tub = Math.max(14, Math.round(len * 90)), rad = 5;
      const tg = new THREE.TubeGeometry(curve, tub, 0.016 + rnd() * 0.008, rad, false);
      const n = tg.attributes.position.count, col = new Float32Array(n * 3), tint = 0.85 + rnd() * 0.3, cc = new THREE.Color();
      for (let v = 0; v < n; v++) {
        const t = Math.floor(v / (rad + 1)) / tub;
        cc.copy(hairRoot).lerp(hairTip, Math.pow(t, 1.5) * (0.5 + Math.max(0, -y) * 0.35)).multiplyScalar(tint);
        col.set([cc.r, cc.g, cc.b], v * 3);
      }
      tg.setAttribute("color", new THREE.BufferAttribute(col, 3));
      geos.push(tg); made++;
    }
    {
      let vc = 0, ic = 0; geos.forEach(q => { vc += q.attributes.position.count; ic += q.index.count; });
      const P = new Float32Array(vc * 3), N = new Float32Array(vc * 3), C = new Float32Array(vc * 3), I = new Uint32Array(ic);
      let vo = 0, io = 0;
      geos.forEach(q => {
        P.set(q.attributes.position.array, vo * 3); N.set(q.attributes.normal.array, vo * 3); C.set(q.attributes.color.array, vo * 3);
        const ix = q.index.array; for (let i = 0; i < ix.length; i++) I[io + i] = ix[i] + vo;
        vo += q.attributes.position.count; io += ix.length; q.dispose();
      });
      const hg = new THREE.BufferGeometry();
      hg.setAttribute("position", new THREE.BufferAttribute(P, 3)); hg.setAttribute("normal", new THREE.BufferAttribute(N, 3)); hg.setAttribute("color", new THREE.BufferAttribute(C, 3));
      hg.setIndex(new THREE.BufferAttribute(I, 1));
      smooth(hg, new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.5, clearcoat: 0.25, clearcoatRoughness: 0.4 }), head);
    }

    animators.push(t => {
      ring.material.emissiveIntensity = 1.4 + Math.sin(t * 2.4) * 0.6;
      torso.scale.y = 1 + Math.sin(t * 2) * 0.006;
      body.rotation.z = Math.sin(t * 1.1) * 0.015;
      head.rotation.y = Math.sin(t * 0.7) * 0.14;
      head.rotation.z = Math.sin(t * 0.9) * 0.035;
      head.rotation.x = Math.sin(t * 0.5) * 0.03;
      const c = t % 7;
      const up = c < 2.6 ? Math.min(1, c * 2.5) : Math.max(0, 1 - (c - 2.6) * 2);
      armR.sh.rotation.set(0, 0, 0.12 + up * 1.05);
      armR.el.rotation.set(0, 0, up * (1.35 + Math.sin(t * 8) * 0.28));
      const b = (t % 3.9) < 0.14;
      lids.forEach(l => { l.rotation.x = b ? 0.55 : -0.72; });
    });
    reg("about", g, [1.45, 3.25, 3.3], [1.45, 1.95, 3.3], [1.1, 0.9, 6.2]);
  }

  /* Smart mailbox — MailMate */
  {
    const g = new THREE.Group(); g.position.set(-1.3, 0, 3.6); g.rotation.y = 0.25; world.add(g);
    box(0.2, 1.1, 0.2, M(0x6b4a34), g, 0, 0.55, 0);
    const blue = M(0x3d6ef0, { roughness: .45, metalness: .2 });
    box(0.6, 0.5, 1.05, blue, g, 0, 1.35, 0);
    const top = add(new THREE.CylinderGeometry(0.3, 0.3, 1.05, 14, 1, false, Math.PI / 2, Math.PI), blue, g, 0, 1.6, 0);
    top.rotation.x = Math.PI / 2;
    box(0.5, 0.06, 0.02, M(0x151022), g, 0, 1.55, 0.53);
    const env = box(0.36, 0.02, 0.26, M(0xfaf5ee), g, 0, 1.56, 0.62); env.rotation.x = -0.25;
    const led = add(new THREE.SphereGeometry(0.045, 8, 6), E(0x4dff9a, 2), g, 0.2, 1.3, 0.54, false);
    box(0.14, 0.06, 0.14, M(0x1d1829), g, 0, 1.92, 0.25);
    // flag
    // side flag: pivots on the side wall, lies back along the box when down, stands up when mail arrives
    const flag = new THREE.Group(); flag.position.set(0.33, 1.32, 0.05); g.add(flag);
    const pin = cyl(0.035, 0.035, 0.04, 12, M(0x2b2336), flag, 0, 0, 0); pin.rotation.z = Math.PI / 2;
    box(0.03, 0.5, 0.045, M(0xff5d4a), flag, 0, 0.25, 0);
    box(0.03, 0.17, 0.24, M(0xff5d4a), flag, 0, 0.41, 0.1);
    // floating notification bubble
    const bubTex = canvasTex(256, 128, (c, w, h) => {
      c.fillStyle = "#f4ede5"; c.beginPath(); c.roundRect ? c.roundRect(8, 8, w - 16, h - 36, 26) : c.rect(8, 8, w - 16, h - 36); c.fill();
      c.beginPath(); c.moveTo(w / 2 - 14, h - 29); c.lineTo(w / 2, h - 8); c.lineTo(w / 2 + 14, h - 29); c.fill();
      c.fillStyle = "#3d6ef0"; c.font = "700 34px 'DM Sans', sans-serif"; c.textAlign = "center"; c.fillText("1 new letter", w / 2, 64);
    });
    const bub = new THREE.Sprite(new THREE.SpriteMaterial({ map: bubTex, transparent: true, depthWrite: false }));
    bub.scale.set(1.1, 0.55, 1); bub.position.set(0, 2.55, 0); g.add(bub);
    animators.push(t => {
      const cyc = (t % 6) / 6;
      const raise = cyc > 0.3 ? Math.min(1, (cyc - 0.3) * 8) : 0;
      flag.rotation.x = -Math.PI / 2 * (1 - raise);
      led.material.emissiveIntensity = cyc > 0.3 ? (Math.sin(t * 8) > 0 ? 2.4 : 0.3) : 0.3;
      bub.material.opacity = cyc > 0.3 ? Math.min(1, (cyc - 0.3) * 6) : 0;
      bub.position.y = 2.55 + Math.sin(t * 2) * 0.05;
    });
    reg("mail", g, [-1.3, 3.1, 3.6], [-1.3, 1.5, 3.6], [-0.9, 1.4, 4.2]);
  }

  /* Miniature diorama on a turntable plinth — DAE Rowhomes Tokyo */
  {
    const g = new THREE.Group(); g.position.set(-6.3, 0, 3.9); g.rotation.y = 0.35; world.add(g);
    // plinth with a glowing sakura-pink rim, like a museum exhibit
    cyl(1.5, 1.6, 0.5, 32, M(0x2b2238, { flatShading: false }), g, 0, 0.25, 0);
    cyl(1.52, 1.52, 0.06, 32, M(0x3d2f57, { flatShading: false }), g, 0, 0.53, 0);
    const rim = add(new THREE.TorusGeometry(1.53, 0.018, 6, 64), E(0xff8fb1, 1.6), g, 0, 0.565, 0, false);
    rim.rotation.x = Math.PI / 2;
    const plaqueTex = canvasTex(512, 128, (c, w, h) => {
      c.fillStyle = "#17111f"; c.fillRect(0, 0, w, h);
      c.strokeStyle = "#ff8fb1"; c.lineWidth = 4; c.strokeRect(6, 6, w - 12, h - 12);
      c.textAlign = "center"; c.fillStyle = "#ffc6d8"; c.font = "600 40px 'Fraunces', Georgia, serif"; c.fillText("東京 · Tokyo Rowhomes", w / 2, 62);
      c.fillStyle = "#bdb2c9"; c.font = "500 20px 'JetBrains Mono', monospace"; c.fillText("3D MODEL · BLENDER · 2026", w / 2, 98);
    });
    const plaque = add(new THREE.PlaneGeometry(0.9, 0.225), new THREE.MeshBasicMaterial({ map: plaqueTex }), g, 0, 0.27, 1.585, false);
    plaque.rotation.x = -0.06;

    // the diorama itself spins slowly on the turntable (front = +z)
    const tt = new THREE.Group(); tt.position.y = 0.59; g.add(tt);
    const d = new THREE.Group(); d.scale.setScalar(1.18); tt.add(d);
    const asphalt = M(0x3a3740), concrete = M(0x9a969c), timber = M(0x4a3226), plaster = M(0xcfc2b3), white = M(0xf2efe8);
    box(1.8, 0.1, 1.8, asphalt, d, 0, 0.05, 0);
    box(1.8, 0.02, 1.8, M(0x2a2533), d, 0, -0.005, 0); // dark edge under the street
    // road markings, manhole and drain grates
    [[-0.5, 0.35], [0.5, 0.35]].forEach(([x, w]) => box(w, 0.005, 0.03, white, d, x, 0.102, 0.42));
    const diamond = add(new THREE.TorusGeometry(0.09, 0.012, 3, 4), white, d, -0.05, 0.103, 0.7, false); diamond.rotation.x = -Math.PI / 2;
    cyl(0.085, 0.085, 0.006, 16, M(0xd9a441, { metalness: .5 }), d, 0.45, 0.103, 0.72);
    [-0.25, 0.1].forEach(x => box(0.14, 0.006, 0.06, M(0x6b6570, { metalness: .5 }), d, x, 0.103, 0.3));
    // pavement
    box(1.3, 0.06, 0.62, concrete, d, 0, 0.13, -0.08);
    box(1.3, 0.02, 0.03, M(0xb4b0b6), d, 0, 0.16, 0.225);

    // rowhouse: plaster walls with a dark timber frame
    const H = new THREE.Group(); H.position.set(0, 0.16, -0.62); d.add(H);
    box(1.1, 1.12, 0.5, plaster, H, 0, 0.56, 0);
    [-0.56, 0.56].forEach(x => box(0.05, 1.16, 0.05, timber, H, x, 0.58, 0.25));
    box(0.04, 0.56, 0.04, timber, H, 0.02, 0.28, 0.25);
    box(1.16, 0.05, 0.05, timber, H, 0, 0.58, 0.26);
    box(1.16, 0.05, 0.05, timber, H, 0, 1.14, 0.26);
    box(1.2, 0.06, 0.56, M(0x5b4a44), H, 0, 1.17, 0);
    box(0.2, 0.12, 0.14, M(0xd8d4cc), H, -0.3, 1.26, -0.1); // AC unit on the roof
    // garage with a roller shutter
    const shutterTex = canvasTex(128, 128, (c, w, h) => {
      c.fillStyle = "#8d8a90"; c.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 8) { c.fillStyle = "rgba(0,0,0,.28)"; c.fillRect(0, y, w, 2); c.fillStyle = "rgba(255,255,255,.12)"; c.fillRect(0, y + 2, w, 1); }
      c.fillStyle = "rgba(120,60,30,.35)"; c.fillRect(0, h - 22, w, 22); // rust at the bottom
    });
    add(new THREE.PlaneGeometry(0.48, 0.4), new THREE.MeshStandardMaterial({ map: shutterTex, roughness: .6, metalness: .3 }), H, -0.27, 0.34, 0.253, false);
    add(new THREE.PlaneGeometry(0.48, 0.12), M(0x1a1620), H, -0.27, 0.07, 0.253, false); // half-open gap
    // shop entrance: lattice door, red awning and a paper lantern
    const doorTex = canvasTex(64, 128, (c, w, h) => {
      c.fillStyle = "#ffcf8a"; c.fillRect(0, 0, w, h);
      c.strokeStyle = "#4a3226"; c.lineWidth = 5; c.strokeRect(0, 0, w, h);
      c.lineWidth = 2; for (let x = 8; x < w; x += 8) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, h * .7); c.stroke(); }
      c.fillStyle = "#4a3226"; c.fillRect(0, h * .7, w, h * .3);
    });
    add(new THREE.PlaneGeometry(0.28, 0.4), new THREE.MeshStandardMaterial({ map: doorTex, emissive: 0xffb060, emissiveIntensity: .35, emissiveMap: doorTex }), H, 0.29, 0.2, 0.253, false);
    const awningTex = canvasTex(256, 96, (c, w, h) => {
      c.fillStyle = "#c8453d"; c.fillRect(0, 0, w, h);
      c.fillStyle = "rgba(60,10,10,.35)"; for (let x = 0; x < w; x += 14) c.fillRect(x, 0, 3, h * (.3 + Math.random() * .5)); // weathered streaks
      c.fillStyle = "#fff4ea"; c.font = "700 30px sans-serif"; c.fillText("お誕生日", 18, 40); c.fillText("おめでとう", 96, 78);
    });
    const awning = add(new THREE.BoxGeometry(0.5, 0.16, 0.14), [M(0xa8362f), M(0xa8362f), M(0xa8362f), M(0xa8362f), new THREE.MeshStandardMaterial({ map: awningTex, roughness: .8 }), M(0xa8362f)], H, 0.29, 0.5, 0.32);
    awning.rotation.x = 0.12;
    const lantern = add(new THREE.SphereGeometry(0.045, 12, 8), E(0xff5a3c, 1.4), H, 0.5, 0.36, 0.33, false); lantern.scale.y = 1.35;
    box(0.05, 0.012, 0.05, M(0x1a1620), H, 0.5, 0.425, 0.33);
    // upper floor: warm lit window, balcony and a corrugated awning
    add(new THREE.PlaneGeometry(0.62, 0.34), E(0xffc27a, 0.75), H, 0, 0.84, 0.253, false);
    box(0.66, 0.03, 0.03, timber, H, 0, 1.02, 0.26); box(0.66, 0.03, 0.03, timber, H, 0, 0.66, 0.26);
    box(0.02, 0.36, 0.03, timber, H, 0, 0.84, 0.26);
    box(0.74, 0.03, 0.14, timber, H, 0, 0.66, 0.32);
    box(0.74, 0.02, 0.02, timber, H, 0, 0.8, 0.385);
    for (let i = 0; i <= 12; i++) box(0.012, 0.13, 0.012, timber, H, -0.36 + i * 0.06, 0.73, 0.385);
    const tin = box(0.82, 0.02, 0.2, M(0x9fb2c0, { metalness: .5, roughness: .4 }), H, 0, 1.08, 0.33); tin.rotation.x = 0.18;
    // kei truck (white, a bit rusty) parked in front of the garage
    const truck = new THREE.Group(); truck.position.set(-0.24, 0.16, -0.02); truck.rotation.y = 0.12; d.add(truck);
    const kei = M(0xd8d6cf, { roughness: .6 }), rust = M(0x8a5a3a);
    box(0.24, 0.16, 0.14, kei, truck, 0, 0.14, 0.12);
    box(0.25, 0.05, 0.36, kei, truck, 0, 0.07, 0.0);
    box(0.24, 0.05, 0.22, rust, truck, 0, 0.12, -0.07);
    [-0.12, 0.12].forEach(x => box(0.012, 0.06, 0.22, kei, truck, x, 0.14, -0.07));
    add(new THREE.PlaneGeometry(0.2, 0.08), M(0x1c2440, { roughness: .15, metalness: .4 }), truck, 0, 0.18, 0.192, false);
    [-0.08, 0.08].forEach(x => add(new THREE.SphereGeometry(0.016, 8, 6), E(0xfff1c8, 1.4), truck, x, 0.09, 0.18, false));
    [[-0.12, 0.1], [0.12, 0.1], [-0.12, -0.12], [0.12, -0.12]].forEach(([x, z]) => { const w = cyl(0.04, 0.04, 0.03, 10, M(0x17141c), truck, x, 0.04, z); w.rotation.z = Math.PI / 2; });
    // traffic cones, utility box and a glowing vending machine
    const coneM = M(0xff7a3c);
    [[0.04, 0.15], [0.13, 0.08], [0.2, 0.36], [0.3, 0.46]].forEach(([x, z]) => {
      cyl(0.001, 0.035, 0.1, 8, coneM, d, x, (z > 0.3 ? 0.1 : 0.16) + 0.05, z);
      cyl(0.024, 0.028, 0.018, 8, white, d, x, (z > 0.3 ? 0.1 : 0.16) + 0.055, z);
    });
    box(0.14, 0.16, 0.1, M(0x9da0a4, { metalness: .4 }), d, -0.56, 0.24, -0.12);
    const vend = new THREE.Group(); vend.position.set(0.58, 0.16, -0.28); vend.rotation.y = -0.35; d.add(vend);
    box(0.17, 0.32, 0.13, M(0xe8e4ea), vend, 0, 0.16, 0);
    add(new THREE.PlaneGeometry(0.13, 0.16), E(0xbfe8ff, 1.3), vend, 0, 0.21, 0.066, false);
    for (let i = 0; i < 4; i++) add(new THREE.PlaneGeometry(0.022, 0.035), E([0xff5a3c, 0x4fe3cf, 0xffb45e, 0xa97dff][i], 1.2), vend, -0.045 + i * 0.03, 0.25, 0.067, false);
    // utility pole with sagging wires into the house
    const pole = new THREE.Group(); pole.position.set(-0.6, 0.16, 0.16); d.add(pole);
    cyl(0.025, 0.03, 1.55, 8, M(0x8e8a86), pole, 0, 0.775, 0);
    box(0.36, 0.03, 0.03, M(0x5b5752), pole, 0, 1.42, 0);
    cyl(0.05, 0.05, 0.12, 8, M(0x6b6762), pole, 0.08, 1.28, 0.04);
    const wireM = new THREE.LineBasicMaterial({ color: 0x14101a });
    [[-0.16, 0.1], [0.16, 0.08]].forEach(([x, sag]) => {
      const a = new THREE.Vector3(-0.6 + x, 1.58, 0.16), b = new THREE.Vector3(-0.3 + x, 1.22, -0.37);
      const mid = a.clone().lerp(b, 0.5); mid.y -= sag;
      d.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(16)), wireM));
    });
    // little sakura tree beside the house
    const tree = new THREE.Group(); tree.position.set(-0.74, 0.1, -0.56); d.add(tree);
    cyl(0.02, 0.03, 0.4, 6, M(0x4a3226), tree, 0, 0.2, 0);
    [[0, 0.46, 0, 0.16], [-0.1, 0.4, 0.05, 0.11], [0.09, 0.42, -0.04, 0.12]].forEach(([x, y, z, r], i) =>
      add(new THREE.IcosahedronGeometry(r, 0), M(i ? 0xffb3cf : 0xff9cc0), tree, x, y, z));
    // warm light from the shop, so the diorama glows at night
    const shopLight = new THREE.PointLight(0xffa860, 0.9, 3.2, 1.8); shopLight.position.set(0.3, 0.55, -0.15); d.add(shopLight);
    // falling sakura petals around the turntable
    const petN = 60, petPos = new Float32Array(petN * 3), petPh = [];
    for (let i = 0; i < petN; i++) { petPos.set([(Math.random() - .5) * 2.2, Math.random() * 2.4, (Math.random() - .5) * 2.2], i * 3); petPh.push(Math.random() * 6); }
    const petalTex = canvasTex(64, 64, (c, w) => {
      c.fillStyle = "#fff"; c.beginPath(); c.ellipse(w / 2, w / 2, w * .42, w * .22, 0.6, 0, 7); c.fill();
    });
    const petGeo = new THREE.BufferGeometry(); petGeo.setAttribute("position", new THREE.BufferAttribute(petPos, 3));
    g.add(new THREE.Points(petGeo, new THREE.PointsMaterial({ size: 0.08, map: petalTex, alphaTest: 0.3, color: 0xffa8c8, transparent: true, opacity: .9, depthWrite: false })));
    animators.push((t, dt) => {
      tt.rotation.y = Math.sin(t * 0.3) * 0.45;
      lantern.material.emissiveIntensity = 1.2 + Math.sin(t * 2.3) * 0.25 + (Math.sin(t * 17) > 0.95 ? 0.4 : 0);
      rim.material.emissiveIntensity = 1.3 + Math.sin(t * 1.4) * 0.4;
      const p = petGeo.attributes.position;
      for (let i = 0; i < petN; i++) {
        let y = p.getY(i) - dt * 0.18;
        if (y < 0.6) y = 2.4;
        p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t * 1.2 + petPh[i]) * dt * 0.12); p.setZ(i, p.getZ(i) + Math.cos(t * 0.9 + petPh[i]) * dt * 0.06);
      }
      p.needsUpdate = true;
    });
    reg("tokyo", g, [-6.3, 3.0, 3.9], [-6.3, 1.35, 3.9], [2.5, 2.1, 6.0]);
  }

  /* Project board on the left wall — opens the projects overview */
  {
    const g = new THREE.Group(); g.position.set(-8.97, 3.4, 0.8); g.rotation.y = Math.PI / 2; world.add(g);
    box(3.3, 2.1, 0.06, M(0xb88a5a, { roughness: .95 }), g, 0, 0, 0);
    const trim = M(0x4a3b66);
    box(3.5, 0.12, 0.12, trim, g, 0, 1.11, 0.02); box(3.5, 0.12, 0.12, trim, g, 0, -1.11, 0.02);
    box(0.12, 2.1, 0.12, trim, g, -1.71, 0, 0.02); box(0.12, 2.1, 0.12, trim, g, 1.71, 0, 0.02);
    const hex = c => parseInt(c.slice(1), 16);
    const cardX = i => (i - (PROJECT_ORDER.length - 1) / 2) * Math.min(0.8, 2.9 / PROJECT_ORDER.length);
    PROJECT_ORDER.forEach((k, i) => {
      const p = PROJECTS[k];
      const tex = canvasTex(256, 320, (c, w, h) => {
        c.fillStyle = "#f3ecdf"; c.fillRect(0, 0, w, h);
        c.fillStyle = p.color; c.fillRect(0, 0, w, 64);
        c.font = "600 22px 'JetBrains Mono', monospace"; c.fillStyle = "#1a1326"; c.fillText(`PROJECT · ${p.year}`, 16, 42);
        c.font = "700 30px sans-serif"; c.fillStyle = "#1a1326";
        let line = "", y = 112;
        p.title.split(" ").forEach(word => {
          if (c.measureText(line + word).width > w - 32 && line) { c.fillText(line.trim(), 16, y); line = ""; y += 36; }
          line += word + " ";
        });
        c.fillText(line.trim(), 16, y);
        c.font = "500 18px 'JetBrains Mono', monospace"; c.fillStyle = "#5a4d6e";
        p.stack.slice(0, 3).forEach((s, j) => c.fillText("• " + s, 16, h - 84 + j * 26));
      });
      const x = cardX(i), y = i % 2 ? -0.12 : 0.1;
      const card = add(new THREE.PlaneGeometry(0.56, 0.7), new THREE.MeshStandardMaterial({ map: tex, roughness: .9 }), g, x, y, 0.04, false);
      card.rotation.z = [0.05, -0.04, 0.03, -0.06, 0.04][i % 5];
      add(new THREE.SphereGeometry(0.045, 8, 6), E(hex(p.color), 0.6), g, x, y + 0.31, 0.07, false);
    });
    // string linking the pins
    const pinPts = PROJECT_ORDER.map((_, i) => new THREE.Vector3(cardX(i), (i % 2 ? -0.12 : 0.1) + 0.31, 0.075));
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pinPts), new THREE.LineBasicMaterial({ color: 0xd84a4a })));
    // header strip
    const headTex = canvasTex(512, 64, (c, w, h) => {
      c.fillStyle = "#241c33"; c.fillRect(0, 0, w, h);
      c.font = "600 30px 'JetBrains Mono', monospace"; c.fillStyle = "#ffb45e"; c.textAlign = "center"; c.fillText("MY PROJECTS", w / 2, 43);
    });
    add(new THREE.PlaneGeometry(1.4, 0.18), new THREE.MeshBasicMaterial({ map: headTex }), g, 0, 0.8, 0.04, false);
    reg("board", g, [-8.9, 4.75, 1], [-8.9, 3.4, 1], [4.5, 0.3, 0]);
  }

  /* Neon sign — Contact */
  {
    const g = new THREE.Group(); g.position.set(1.2, 4.0, -5.95); world.add(g);
    box(3.0, 1.55, 0.1, M(0x17111f), g, 0, 0, 0);
    const neonTex = canvasTex(600, 300, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      c.textAlign = "center";
      c.font = "italic 600 150px 'Fraunces', Georgia, serif";
      c.shadowColor = "#e070ff"; c.shadowBlur = 30; c.fillStyle = "#f7d6ff";
      c.fillText("JG.", w / 2 + 10, 170);
      c.font = "500 34px 'JetBrains Mono', monospace";
      c.shadowColor = "#ffb45e"; c.shadowBlur = 18; c.fillStyle = "#ffd9a8";
      c.fillText("let's build visions together", w / 2, 250);
    });
    const neon = add(new THREE.PlaneGeometry(2.9, 1.45), new THREE.MeshBasicMaterial({ map: neonTex, transparent: true }), g, 0, 0, 0.07, false);
    animators.push(t => { const f = (Math.sin(t * 13) > 0.97) ? 0.55 : 1; neon.material.opacity = f; neonLight.intensity = 1.3 * f; });
    reg("contact", g, [1.2, 5.0, -5.9], [1.2, 3.9, -5.9], [0, 0.3, 6.2]);
  }

  /* Dust particles */
  const dustN = 320, dustPos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) dustPos.set([(Math.random() - .5) * 20, Math.random() * 8, (Math.random() - .5) * 14], i * 3);
  const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
  const dotTex = canvasTex(64, 64, (c, w) => { const gr = c.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(1, "rgba(255,255,255,0)"); c.fillStyle = gr; c.fillRect(0, 0, w, w); });
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.09, map: dotTex, color: 0xffd6a0, transparent: true, opacity: .75, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(dust);
  // distant stars
  const starN = 500, starPos = new Float32Array(starN * 3);
  for (let i = 0; i < starN; i++) {
    const v = new THREE.Vector3().randomDirection ? new THREE.Vector3().randomDirection() : new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize();
    v.multiplyScalar(70 + Math.random() * 30); starPos.set([v.x, v.y * 0.7 + 10, v.z], i * 3);
  }
  const starGeo = new THREE.BufferGeometry(); starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.5, map: dotTex, color: 0xcfc4ff, transparent: true, opacity: .8, depthWrite: false, fog: false })));

  /* ---------------- Camera & focus ---------------- */
  const homeTarget = new THREE.Vector3(0, 1.3, 0);
  const homeOffset = new THREE.Vector3(3.5, 9.5, 19);
  const camPos = new THREE.Vector3(), camTarget = new THREE.Vector3();
  let tween = null;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  // drag to slide the camera over the room / pinch or wheel to zoom (home view only)
  const orbit = { pan: new THREE.Vector3(), tPan: new THREE.Vector3(), zoom: 1, tZoom: 1 };
  const clampOrbit = () => {
    orbit.tPan.x = THREE.MathUtils.clamp(orbit.tPan.x, -6.5, 6.5);
    orbit.tPan.z = THREE.MathUtils.clamp(orbit.tPan.z, -4, 4);
    orbit.tZoom = THREE.MathUtils.clamp(orbit.tZoom, 0.55, 1.35);
  };
  const panRight = new THREE.Vector3(), panFwd = new THREE.Vector3();
  const touchScreen = matchMedia("(pointer: coarse)");
  const canPan = () => touchScreen.matches && innerWidth <= 1750; // phones/tablets only; laptops and desktops keep the fixed view

  function homeView() {
    const a = innerWidth / innerHeight;
    const k = a < 1 ? 1 + (1 - a) * 1.25 : 1;
    return { pos: homeTarget.clone().add(homeOffset.clone().multiplyScalar(k)), target: homeTarget.clone() };
  }
  function focusView(k) {
    const it = interactive[k];
    const target = it.target.clone();
    const a = innerWidth / innerHeight;
    let off = it.offset.clone();
    if (detailMode && innerWidth > 760) off.multiplyScalar(1.45);
    if (a < 1) off.multiplyScalar(1 + (1 - a) * 0.9);
    const pos = target.clone().add(off);
    // shift so the object sits beside/above the panel
    const dist = off.length();
    const visH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), visW = visH * a;
    const fwd = target.clone().sub(pos).normalize();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    let shift;
    if (innerWidth > 760) { const frac = Math.min(detailMode ? 716 : 446, innerWidth - 32) / innerWidth; shift = right.multiplyScalar(frac / 2 * visW); }
    else { shift = up.multiplyScalar(-(detailMode ? 0.86 : 0.58) / 2 * visH); }
    pos.add(shift); target.add(shift);
    return { pos, target };
  }
  function flyTo(v, dur = 1.3) {
    if (reduceMotion) { camPos.copy(v.pos); camTarget.copy(v.target); tween = null; return; }
    tween = { fromP: camPos.clone(), fromT: camTarget.clone(), toP: v.pos, toT: v.target, t: 0, dur };
  }
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function showPanel(k, detail) {
    const v = VIEWS[k];
    detailMode = !!(detail && v.detail);
    panel.classList.toggle("wide", detailMode);
    pBody.classList.toggle("detail", detailMode);
    pEyebrow.textContent = detailMode ? `Case study · ${PROJECTS[k].year}` : v.eyebrow;
    pBody.innerHTML = detailMode ? v.detail() : v.html();
    pBody.scrollTop = 0;
    panel.classList.add("open"); panel.setAttribute("aria-hidden", "false");
  }
  function focusOn(k, detail = false) {
    if (noGL) { current = k; return showPanel(k, detail); }
    if (!interactive[k]) return;
    current = k; document.body.classList.add("focused");
    showPanel(k, detail);
    flyTo(focusView(k));
    setHover(null);
    try { history.replaceState(null, "", "#" + k); } catch (_) {}
  }
  // the project board opens the overview modal; everything else focuses the camera
  function activate(k) { if (k === "board") { unfocus(); openModal(); } else focusOn(k); }
  function unfocus() {
    if (!current) return;
    if (noGL) { current = null; panel.classList.remove("open"); return; }
    current = null; document.body.classList.remove("focused");
    panel.classList.remove("open", "wide"); panel.setAttribute("aria-hidden", "true"); detailMode = false;
    flyTo(homeView(), 1.1);
    try { history.replaceState(null, "", location.pathname + location.search); } catch (_) {}
  }

  /* Hotspot buttons */
  const hsLayer = $("hotspots");
  const hsEls = {};
  Object.keys(interactive).forEach(k => {
    const b = document.createElement("button");
    b.className = "hs"; b.type = "button";
    b.innerHTML = `<span class="dot"></span><span class="lbl">${esc(VIEWS[k].label)}</span>`;
    b.setAttribute("aria-label", VIEWS[k].label);
    b.onclick = () => activate(k);
    b.onmouseenter = () => setHover(k); b.onmouseleave = () => setHover(null);
    hsLayer.appendChild(b); hsEls[k] = b;
  });

  /* Hover & click via raycast */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const pickables = []; Object.values(interactive).forEach(it => it.group.traverse(o => { if (o.isMesh) pickables.push(o); }));
  let hovered = null;
  function setHover(k) {
    if (hovered === k) return;
    if (hovered) { interactive[hovered].group.userData.hover = false; hsEls[hovered].classList.remove("hot"); }
    hovered = k;
    if (k && !current) { interactive[k].group.userData.hover = true; hsEls[k].classList.add("hot"); }
    canvas.style.cursor = k && !current ? "pointer" : "default";
  }
  function pick(e) {
    ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData.key : null;
  }
  let downAt = null, dragging = false, pinchD = 0;
  const pointers = new Map();
  const pinchDist = () => { const [a, b] = [...pointers.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
  canvas.addEventListener("pointermove", e => {
    if (e.pointerType === "mouse") { mouse.x = e.clientX / innerWidth - .5; mouse.y = e.clientY / innerHeight - .5; }
    const prev = pointers.get(e.pointerId);
    if (prev && !current && canPan()) {
      if (pointers.size === 2) {
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        const d = pinchDist(); orbit.tZoom *= pinchD / d; pinchD = d; clampOrbit();
        return;
      }
      if (!dragging && downAt && Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 8) { dragging = true; setHover(null); }
      if (dragging) {
        // move the camera so the room follows the finger, along the floor plane
        const perPx = 2 * camera.position.distanceTo(camTarget) * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) / innerHeight;
        camera.getWorldDirection(panFwd); panFwd.y = 0; panFwd.normalize();
        panRight.crossVectors(panFwd, camera.up).normalize();
        orbit.tPan.addScaledVector(panRight, -(e.clientX - prev.x) * perPx).addScaledVector(panFwd, (e.clientY - prev.y) * perPx * 1.6);
        clampOrbit();
        canvas.style.cursor = "grabbing";
      }
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (dragging) return;
    }
    if (e.pointerType === "mouse" && !current) setHover(pick(e));
  });
  canvas.addEventListener("pointerdown", e => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    if (pointers.size === 2) { pinchD = pinchDist(); downAt = null; dragging = true; }
    else { downAt = [e.clientX, e.clientY]; dragging = false; }
  });
  const endPointer = e => {
    pointers.delete(e.pointerId);
    if (!pointers.size) { dragging = false; canvas.style.cursor = "default"; }
  };
  canvas.addEventListener("pointercancel", endPointer);
  canvas.addEventListener("wheel", e => {
    if (current || !canPan()) return;
    e.preventDefault(); orbit.tZoom *= 1 + Math.sign(e.deltaY) * 0.08; clampOrbit();
  }, { passive: false });
  canvas.addEventListener("pointerup", e => {
    const wasDrag = dragging; endPointer(e);
    if (wasDrag || !downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 8) return;
    const k = pick(e);
    if (k) activate(k); else if (current) unfocus();
  });

  /* Resize */
  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    const v = current ? focusView(current) : homeView();
    tween = null; camPos.copy(v.pos); camTarget.copy(v.target);
  });

  /* Init camera */
  {
    const v = homeView();
    camPos.copy(v.pos).add(new THREE.Vector3(-6, 5, 8)); camTarget.copy(v.target);
    flyTo(v, 2.4);
  }

  /* Loop */
  const clock = new THREE.Clock();
  const tmpV = new THREE.Vector3(), sph = new THREE.Spherical();
  let timerAcc = 0, first = true;
  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    if (tween) {
      tween.t += dt / tween.dur; const e = ease(Math.min(1, tween.t));
      camPos.lerpVectors(tween.fromP, tween.toP, e); camTarget.lerpVectors(tween.fromT, tween.toT, e);
      if (tween.t >= 1) tween = null;
    }
    // soft parallax
    mouse.sx += (mouse.x - mouse.sx) * 0.05; mouse.sy += (mouse.y - mouse.sy) * 0.05;
    const par = current ? 0.25 : 1.2;
    if (current || !canPan()) { orbit.tPan.set(0, 0, 0); orbit.tZoom = 1; }
    const oe = reduceMotion ? 1 : 0.14;
    orbit.pan.lerp(orbit.tPan, oe); orbit.zoom += (orbit.tZoom - orbit.zoom) * oe;
    sph.setFromVector3(tmpV.copy(camPos).sub(camTarget)); sph.radius *= orbit.zoom;
    scene.fog.near = 28 * orbit.zoom; scene.fog.far = 60 * orbit.zoom; // keep the room equally bright when zoomed out
    camera.position.setFromSpherical(sph).add(camTarget).add(orbit.pan).add(tmpV.set(mouse.sx * par * 1.6, -mouse.sy * par * 0.8, 0));
    camera.lookAt(tmpV.copy(camTarget).add(orbit.pan));

    if (!reduceMotion) animators.forEach(f => f(t, dt));

    // hover scale
    Object.values(interactive).forEach(it => {
      const s = it.group.userData.hover ? 1.035 : 1;
      it.group.scale.x += (s - it.group.scale.x) * 0.2; it.group.scale.y = it.group.scale.z = it.group.scale.x;
    });

    // timer screen
    timerAcc += dt;
    if (timerAcc > 0.07) { timerAcc = 0; const { sec, cp } = tagrun; timerTex.userData.draw = drawTimer.bind(null, sec, cp); drawTimer(sec, cp, timerTex.userData.ctx, 512, 160); timerTex.needsUpdate = true; }

    // dust drift
    if (!reduceMotion) {
      const p = dustGeo.attributes.position;
      for (let i = 0; i < dustN; i++) { let y = p.getY(i) + dt * 0.12; if (y > 8) y = 0; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(t + i) * dt * 0.05); }
      p.needsUpdate = true;
      floaters.forEach(r => { r.position.y = r.userData.base + Math.sin(t * 0.6 + r.userData.ph) * 0.4; r.rotation.y += dt * 0.1; });
    }

    renderer.render(scene, camera);

    // hotspot positions
    Object.entries(interactive).forEach(([k, it]) => {
      tmpV.copy(it.anchor).project(camera);
      const el = hsEls[k];
      const vis = tmpV.z < 1;
      el.style.transform = `translate(${(tmpV.x * .5 + .5) * innerWidth - 9}px, ${(-tmpV.y * .5 + .5) * innerHeight - 9}px)`;
      el.style.visibility = vis ? "visible" : "hidden";
    });

    if (first) {
      first = false; setTimeout(() => $("loader").classList.add("done"), 250);
      if (canPan()) setTimeout(() => toast("Drag to move around · pinch to zoom"), 2600);
    }
    requestAnimationFrame(frame);
  }
  // re-render canvas textures once fonts are ready so they use the right faces
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    scene.traverse(o => {
      const m = o.material && o.material.map;
      if (m && m.userData && m.userData.draw && m.userData.ctx) { const c = m.userData.ctx.canvas; m.userData.ctx.clearRect(0, 0, c.width, c.height); m.userData.draw(m.userData.ctx, c.width, c.height); m.needsUpdate = true; }
    });
  });
  requestAnimationFrame(frame);

  // deep link
  const h = (location.hash || "").slice(1);
  if (VIEWS[h]) setTimeout(() => activate(h), 900);
})();
