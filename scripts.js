function initPostHog() {
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))} }(p=t.createElement('script')).type='text/javascript',p.async=!0,p.src=s.api_host.replace('.i.posthog.com','-assets.i.posthog.com')+'/static/array.js',(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a='posthog',u.people=u.people||[],u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e},u.people.toString=function(){return u.toString(1)+'.people (stub)'},o='init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags unregisterForSession etc'.split(' '),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_vcQYMsDjCfOTE2VZUHOsVl2z1ExaBftSfOZhq1bG5mL', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2026-01-30'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initPostHog();

    // Particles.js config for Data Hero effect
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#3498db' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3498db',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');
const navToggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('main-nav-links');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon'); icon.classList.add('fa-sun');
}
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon'); icon.classList.add('fa-sun');
        toggleBtn.setAttribute('aria-label', 'Mode sombre activé');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun'); icon.classList.add('fa-moon');
        toggleBtn.setAttribute('aria-label', 'Mode clair activé');
        localStorage.setItem('theme', 'light');
    }
});

if (navToggleBtn && navLinks) {
    navToggleBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggleBtn.setAttribute('aria-expanded', String(isOpen));
        navToggleBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
        const navIcon = navToggleBtn.querySelector('i');
        if (navIcon) {
            navIcon.classList.toggle('fa-bars', !isOpen);
            navIcon.classList.toggle('fa-xmark', isOpen);
        }
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggleBtn.setAttribute('aria-expanded', 'false');
            navToggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
            const navIcon = navToggleBtn.querySelector('i');
            if (navIcon) {
                navIcon.classList.add('fa-bars');
                navIcon.classList.remove('fa-xmark');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.classList.contains('open')) return;
        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = navToggleBtn.contains(event.target);
        if (!clickedInsideMenu && !clickedToggle) {
            navLinks.classList.remove('open');
            navToggleBtn.setAttribute('aria-expanded', 'false');
            navToggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
            const navIcon = navToggleBtn.querySelector('i');
            if (navIcon) {
                navIcon.classList.add('fa-bars');
                navIcon.classList.remove('fa-xmark');
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('open');
            navToggleBtn.setAttribute('aria-expanded', 'false');
            navToggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
            const navIcon = navToggleBtn.querySelector('i');
            if (navIcon) {
                navIcon.classList.add('fa-bars');
                navIcon.classList.remove('fa-xmark');
            }
        }
    });
}

window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) { backToTop.classList.add('active'); } else { backToTop.classList.remove('active'); }
    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
});

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        document.querySelector('.shape-1').style.marginLeft = `${x * 2}px`;
        document.querySelector('.shape-1').style.marginTop = `${y * 2}px`;
        document.querySelector('.shape-2').style.marginLeft = `${x * -2}px`;
        document.querySelector('.shape-2').style.marginTop = `${y * -2}px`;
        document.querySelector('.shape-3').style.marginLeft = `${x * 1.5}px`;
        document.querySelector('.shape-3').style.marginTop = `${y * 1.5}px`;
    });
}

function copyEmail(e) {
    e.preventDefault();
    navigator.clipboard.writeText("bentaief.youssef@gmail.com");
    var toast = document.getElementById("emailToast");
    toast.classList.add("show");
    setTimeout(function(){ toast.classList.remove("show"); }, 3000);
}

function triggerConfettiAndDownload() {
    var duration = 2000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
    function randomInRange(min, max) { return Math.random() * (max - min) + min; }
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) { return clearInterval(interval); }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    setTimeout(() => { document.getElementById('real-cv-link').click(); }, 500);
}

AOS.init({ once: true, offset: 100, duration: 800 });

var typed = new Typed('#typed-text', {
    strings: ['Science des Données', 'Data Analysis', 'Business Intelligence', 'Pipelines ETL'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
                setTimeout(() => { item.style.display = 'flex'; }, 10);
            } else {
                item.classList.add('hide');
                setTimeout(() => { item.style.display = 'none'; }, 400);
            }
        });
    });
});

// ── Terminal Typewriter ──────────────────────────────────────────────────────
(function () {
    const LINES = [
        { html: '<span class="terminal-prompt">recruteur@youssef-portfolio:~$</span> ', type: 'mysql -u guest -p', delay: 60 },
        { html: 'Enter password: ****', instant: true },
        { html: 'Welcome to the MySQL monitor.', instant: true },
        { html: '', instant: true },
        { html: '<span class="terminal-prompt">mysql&gt;</span> ', type: 'USE portfolio_youssef;', delay: 55 },
        { html: 'Database changed', instant: true },
        { html: '', instant: true },
        { html: '<span class="terminal-prompt">mysql&gt;</span> ', type: 'SELECT skill, proficiency, motivation FROM core_skills ORDER BY proficiency DESC;', delay: 30 },
        { html: '', instant: true },
        { html: '+-----------------------+-------------+------------+', instant: true },
        { html: '| skill                 | proficiency | motivation |', instant: true },
        { html: '+-----------------------+-------------+------------+', instant: true },
        { html: '| Data Cleaning (ETL)   | 95%         | 100%       |', instant: true },
        { html: '| SQL (Requêtage)       | 90%         | 100%       |', instant: true },
        { html: '| Power BI (DataViz)    | 85%         | 100%       |', instant: true },
        { html: '| Python (Pandas)       | 85%         | 100%       |', instant: true },
        { html: '| R Studio (Stats)      | 80%         | 100%       |', instant: true },
        { html: '| Excel (VBA)           | 80%         | 100%       |', instant: true },
        { html: '+-----------------------+-------------+------------+', instant: true },
        { html: '6 rows in set (0.01 sec)', instant: true },
        { html: '', instant: true },
        { html: '<span class="terminal-prompt">mysql&gt;</span> ', type: "SELECT status FROM candidate_status WHERE name = 'Youssef';", delay: 45 },
        { html: '+-----------------------------------+', instant: true },
        { html: '| status                            |', instant: true },
        { html: '+-----------------------------------+', instant: true },
        { html: "| Prêt pour une alternance en 2026-2026 |", instant: true },
        { html: '+-----------------------------------+', instant: true },
        { html: '1 row in set (0.00 sec)', instant: true },
        { html: '', instant: true },
        { html: '<span class="terminal-prompt">mysql&gt;</span> <span class="blink-cursor">_</span>', instant: true },
    ];

    let running = false;
    let timeouts = [];

    function clearTimeouts() {
        timeouts.forEach(t => clearTimeout(t));
        timeouts = [];
    }

    function typeLine(container, prefix, text, charDelay, cb) {
        const span = document.createElement('span');
        container.appendChild(span);
        let i = 0;
        function next() {
            if (i < text.length) {
                span.textContent += text[i++];
                container.scrollTop = container.scrollHeight;
                const t = setTimeout(next, charDelay + Math.random() * 20);
                timeouts.push(t);
            } else {
                cb();
            }
        }
        // insert prefix HTML before span
        const wrapper = document.createElement('div');
        wrapper.innerHTML = prefix;
        wrapper.appendChild(span);
        container.appendChild(wrapper);
        container.lastChild.remove(); // remove the double-appended wrapper trick
        // simpler: rebuild
        const line = document.createElement('div');
        line.innerHTML = prefix;
        const typed = document.createElement('span');
        line.appendChild(typed);
        container.appendChild(line);
        container.scrollTop = container.scrollHeight;
        function type() {
            if (i < text.length) {
                typed.textContent += text[i++];
                container.scrollTop = container.scrollHeight;
                const t = setTimeout(type, charDelay + Math.random() * 15);
                timeouts.push(t);
            } else { cb(); }
        }
        type();
    }

    function runTerminal() {
        if (running) return;
        running = true;
        const output = document.getElementById('terminal-output');
        if (!output) return;
        output.innerHTML = '';
        let lineIndex = 0;
        const LINE_GAP = 80;

        function nextLine() {
            if (lineIndex >= LINES.length) { running = false; return; }
            const l = LINES[lineIndex++];
            if (l.instant) {
                const d = document.createElement('div');
                d.innerHTML = l.html;
                output.appendChild(d);
                output.scrollTop = output.scrollHeight;
                const t = setTimeout(nextLine, LINE_GAP);
                timeouts.push(t);
            } else {
                typeLine(output, l.html, l.type, l.delay, () => {
                    const t = setTimeout(nextLine, LINE_GAP + 200);
                    timeouts.push(t);
                });
            }
        }
        nextLine();
    }

    const modalEl = document.getElementById('modalTerminal');
    if (modalEl) {
        modalEl.addEventListener('show.bs.modal', () => {
            clearTimeouts();
            running = false;
            runTerminal();
        });
        modalEl.addEventListener('hide.bs.modal', () => {
            clearTimeouts();
            running = false;
        });
    }
})();

const sections = ['presentation', 'phares', 'outils', 'competences', 'parcours', 'apport', 'all-projects', 'contact-form'];

function getCurrentSectionIndex() {
    const middle = window.innerHeight / 2;
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= middle) {
            return i;
        }
    }
    return 0;
}

document.getElementById('scroll-down-arrow').addEventListener('click', () => {
    const currentIndex = getCurrentSectionIndex();
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = document.getElementById(sections[nextIndex]);
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

function runAPISimulation() {
    const resultTab = new bootstrap.Tab(document.getElementById('api-result-tab'));
    document.getElementById('api-result-tab').removeAttribute('disabled');
    resultTab.show();

    document.getElementById('api-table').style.display = 'none';
    document.getElementById('api-loader').style.display = 'block';

    setTimeout(() => {
        document.getElementById('api-loader').style.display = 'none';
        document.getElementById('api-table').style.display = 'block';
    }, 2000);
}

function copyCodeSnippet() {
    const codeElement = document.querySelector('#clean-snippet-code code');
    const codeText = codeElement.textContent;
    navigator.clipboard.writeText(codeText).then(() => {
        showToast('Code copié dans le presse-papiers !');
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}

const form = document.querySelector('.form-container form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Envoi en cours...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Form submission failed');
        }

        form.reset();
        const successToast = document.getElementById("successToast");
        successToast.classList.add("show");
        setTimeout(() => { successToast.classList.remove("show"); }, 2000);

    } catch (error) {
        console.error('Form submission error:', error);
        const errorToast = document.getElementById("errorToast");
        errorToast.classList.add("show");
        setTimeout(() => { errorToast.classList.remove("show"); }, 3000);

    } finally {
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 500);
    }
});
