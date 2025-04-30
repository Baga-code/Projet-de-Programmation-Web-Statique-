/************************************************
 * Chargement des fichiers HTML (Header, Footer, Modals)
 ************************************************/
function includeHTML() {
  const includes = [
    { selector: "#includer-header", url: "base/header.html" },
    { selector: "#includer-footer", url: "base/footer.html" },
    { selector: "#includer-modal", url: "modal/modal.html" },
  ];
  
  // On attend que tous les fichiers soient chargés
  const promises = includes.map(({ selector, url }) =>
    fetch(url)
      .then(res => res.ok ? res.text() : Promise.reject(res.status))
      .then(html => document.querySelector(selector).innerHTML = html)
      .catch(err => console.error(`Erreur lors du chargement de ${url}:`, err))
  );

  return Promise.all(promises); // On retourne une promesse globale
}

/************************************************
 * Mise à jour de la Date en Temps Réel
 ************************************************/
function initDate() {
  const dateEl = document.getElementById('date');
  if (dateEl) {
    const now = new Date();
    dateEl.textContent = `Date : ${now.toLocaleDateString('fr-FR')}`;
  }
}

/************************************************
 * Gestion du Marquee (Messages d'annonces défilants)
 ************************************************/
function initMarquee() {
  const messages = [
    "Inscriptions ouvertes pour la rentrée 2025 !",
    "Webinaire sur la cybersécurité le 15 mai.",
    "Publication des résultats L3 prévue le 20 avril."
  ];
  
  const container = document.getElementById("marquee");
  if (!container) return;
  
  let idx = 0;
  function showNext() {
    container.innerHTML = `<p>${messages[idx]}</p>`;
    idx = (idx + 1) % messages.length;
  }
  showNext();
  setInterval(showNext, 6000); // Changer tous les 6 secondes
}

/************************************************
 * Initialisation de la Section Traitement
 ************************************************/
function initTraitement() {
  const ops = {
    factorielle: n => { if (n < 0) return 'Erreur'; let f = 1; for (let i = 2; i <= n; i++) f *= i; return f; },
    fibonacci: n => { let a = 0, b = 1; for (let i = 2; i <= n; i++) [a, b] = [b, a + b]; return n ? b : 0; },
    somme: (a, b) => a + b,
    difference: (a, b) => a - b,
    produit: (a, b) => a * b,
    division: (a, b) => b ? (a / b).toFixed(4) : '∞',
    puissance: (a, b) => Math.pow(a, b),
    pgcd: (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; },
    moyenne3: (a, b, c) => ((a + b + c) / 3).toFixed(2),
    volumeCuboid: (l, w, h) => l * w * h,
    racines2ndDegre: (a, b, c) => {
      const D = b * b - 4 * a * c;
      if (a === 0) return 'a ≠ 0';
      if (D < 0) return 'Complexes';
      const r1 = (-b + Math.sqrt(D)) / (2 * a);
      const r2 = (-b - Math.sqrt(D)) / (2 * a);
      return `x₁=${r1.toFixed(2)}, x₂=${r2.toFixed(2)}`;
    },
    det2x2: (a, b, c, d) => a * d - b * c
  };

  const sel = document.getElementById('fonctionSelect');
  const params = document.getElementById('parametres');
  const btn = document.getElementById('calculerBtn');
  const out = document.getElementById('resultat');
  
  if (!sel || !params || !btn || !out) return; // Sécurité si éléments manquent

  const configChamps = {
    factorielle: ['n'],
    fibonacci: ['n'],
    somme: ['a', 'b'],
    difference: ['a', 'b'],
    produit: ['a', 'b'],
    division: ['a', 'b'],
    puissance: ['a', 'b'],
    pgcd: ['a', 'b'],
    moyenne3: ['a', 'b', 'c'],
    volumeCuboid: ['l', 'w', 'h'],
    racines2ndDegre: ['a', 'b', 'c'],
    det2x2: ['a', 'b', 'c', 'd']
  };

  // Lorsque l'utilisateur change de fonction
  sel.addEventListener('change', () => {
    const fn = sel.value;
    params.innerHTML = '';
    btn.disabled = !fn;
    out.classList.add('d-none');
    if (!fn) return;

    configChamps[fn].forEach(key => {
      const input = document.createElement('input');
      input.type = 'number';
      input.id = key;
      input.className = 'form-control mb-2';
      input.placeholder = key;
      params.appendChild(input);
    });
  });

  // Lorsque l'utilisateur clique sur Calculer
  btn.addEventListener('click', () => {
    const fn = sel.value;
    const keys = params.querySelectorAll('input');
    const values = Array.from(keys).map(i => parseFloat(i.value));

    // Validation des entrées
    if (!values.every(Number.isFinite)) {
      out.textContent = "Erreur : Merci de remplir tous les champs correctement.";
      out.classList.remove('d-none');
      return;
    }

    const result = ops[fn](...values);
    out.textContent = `Résultat : ${result}`;
    out.classList.remove('d-none');
  });
}

/************************************************
 * Initialisation du Slider de Partenaires
 ************************************************/
function initPartenairesSlider() {
  const partenaires = [
    { name: "AVU", logo: "images/partenaires/avu.png", url: "https://www.avu.org" },
    { name: "FUN MOOC", logo: "images/partenaires/fun.png", url: "https://www.fun-mooc.fr" },
    { name: "UNESCO", logo: "images/partenaires/unesco.png", url: "https://www.unesco.org" },
    { name: "HCR", logo: "images/partenaires/unhcr.png", url: "https://www.unhcr.org" },
    { name: "AUF", logo: "images/partenaires/auf.png", url: "https://www.auf.org" },
    { name: "Musée National", logo: "images/partenaires/musee-national.png", url: "https://www.museenational.gov.bf" },
  ];

  const slider = document.getElementById("sliderPartenaires");
  if (!slider) return;

  partenaires.forEach(p => {
    const a = document.createElement("a");
    a.href = p.url;
    a.target = "_blank";
    a.className = "m-3 text-center text-decoration-none";
    a.innerHTML = `
      <img src="${p.logo}" alt="Logo ${p.name}" style="max-height:60px;"><br>
      <small>${p.name}</small>
    `;
    slider.appendChild(a);
  });

  // Défilement automatique horizontal
  let pos = 0;
  setInterval(() => {
    pos = (pos + 1) % (slider.scrollWidth - slider.clientWidth + 1);
    slider.scrollTo({ left: pos, behavior: 'smooth' });
  }, 80);
}



/**********************************************************
 * Fonction pour activer automatiquement l'onglet basé sur l'URL
 ***********************************************************/
function activerOngletSelonHash() {
  const hash = window.location.hash;
  if (hash) {
    const tabButton = document.querySelector(`[data-bs-target="${hash}"]`);
    if (tabButton) {
      const tab = new bootstrap.Tab(tabButton);
      tab.show();
    }
  }
}


/************************************************
 * Initialisation Générale après chargement
 ************************************************/
document.addEventListener('DOMContentLoaded', () => {
  includeHTML().then(() => {
    initDate();
    initMarquee();
    initTraitement();
    initPartenairesSlider();
    activerOngletSelonHash(); 
  });
});
