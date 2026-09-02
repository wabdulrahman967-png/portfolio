// ============ Mobile nav toggle ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Reduced motion check ============
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============ Role typewriter ============
const roles = [
  'Cybersecurity Student',
  'Red Team Trainee',
  'Penetration Testing'
];

function typeRoles(el, words, opts = {}) {
  const typeSpeed = opts.typeSpeed || 55;
  const deleteSpeed = opts.deleteSpeed || 30;
  const holdTime = opts.holdTime || 1400;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = words[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, holdTime);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }
  tick();
}

const typedTextEl = document.getElementById('typedText');
if (typedTextEl) {
  if (prefersReducedMotion) {
    typedTextEl.textContent = roles[0];
  } else {
    typeRoles(typedTextEl, roles);
  }
}

// ============ Terminal boot sequence (one orchestrated load animation) ============
const terminalBody = document.getElementById('terminalBody');

const terminalScript = [
  { type: 'prompt', text: 'whoami' },
  { type: 'out', text: 'abdulrahman_wael_nabil' },
  { type: 'gap' },
  { type: 'prompt', text: 'cat role.txt' },
  { type: 'out', text: 'Cybersecurity Student — Hit Academy' },
  { type: 'out', text: 'Red Team Trainee — EDUX Academy (60h)' },
  { type: 'gap' },
  { type: 'prompt', text: 'cat focus.txt' },
  { type: 'out', text: 'Penetration Testing' },
  { type: 'out', text: 'Red Team Operations' },
  { type: 'out', text: 'Web Application Security' },
  { type: 'out', text: 'Network Security' },
  { type: 'gap' },
  { type: 'prompt', text: 'status --internship' },
  { type: 'dim', text: 'open to cybersecurity / pentest internships' },
];

function renderStatic(body, script) {
  body.innerHTML = script.map(line => {
    if (line.type === 'gap') return '';
    if (line.type === 'prompt') return `<div><span class="t-prompt">guest@cairo:~$</span> ${line.text}</div>`;
    if (line.type === 'dim') return `<div class="t-dim">${line.text}</div>`;
    return `<div class="t-out">${line.text}</div>`;
  }).join('');
}

function typeTerminal(body, script) {
  let i = 0;
  body.innerHTML = '';

  function nextLine() {
    if (i >= script.length) {
      const cursor = document.createElement('span');
      cursor.className = 'term-cursor';
      body.appendChild(cursor);
      return;
    }
    const line = script[i];
    i++;

    if (line.type === 'gap') {
      body.appendChild(document.createElement('br'));
      nextLine();
      return;
    }

    const row = document.createElement('div');
    if (line.type === 'dim') row.className = 't-dim';
    body.appendChild(row);

    if (line.type === 'prompt') {
      const prompt = document.createElement('span');
      prompt.className = 't-prompt';
      prompt.textContent = 'guest@cairo:~$ ';
      row.appendChild(prompt);
    }

    const textNode = document.createElement('span');
    if (line.type === 'out') textNode.className = 't-out';
    row.appendChild(textNode);

    let charIndex = 0;
    const speed = line.type === 'prompt' ? 45 : 12;

    function typeChar() {
      charIndex++;
      textNode.textContent = line.text.slice(0, charIndex);
      if (charIndex < line.text.length) {
        setTimeout(typeChar, speed);
      } else {
        setTimeout(nextLine, line.type === 'prompt' ? 150 : 90);
      }
    }
    typeChar();
  }

  nextLine();
}

if (terminalBody) {
  if (prefersReducedMotion) {
    renderStatic(terminalBody, terminalScript);
  } else {
    // Trigger once the terminal scrolls into view (or immediately on load for hero)
    typeTerminal(terminalBody, terminalScript);
  }
}

// ============ Active nav link on scroll ============
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent-cyan)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));
