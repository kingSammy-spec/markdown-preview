const inputArea = document.getElementById('markdown-input');
const outputArea = document.getElementById('markdown-output');

function parseMarkdown(text) {
    if (!text) return '';
    let html = text
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>')
        .replace(/\n$/gim, '<br />');
    
    // Clean up adjacent ul blocks
    html = html.replace(/<\/ul><ul>/gim, '');
    return html;
}

if (inputArea && outputArea) {
    inputArea.addEventListener('input', () => {
        outputArea.innerHTML = parseMarkdown(inputArea.value);
    });
}

// Help Button config in Header
const actionsContainer = document.querySelector('.actions');
const helpBtn = document.createElement('button');
helpBtn.innerText = 'Syntax Guide';
helpBtn.addEventListener('click', () => {
    openDetail();
});
if (actionsContainer) {
    actionsContainer.prepend(helpBtn);
}

const DEV_CAMPAIGNS = [
    {
        title: 'JetBrains: Coder IDE Suite',
        desc: 'Experience intelligent coding assistance for Markdown and 50+ other languages.',
        promo: 'CODE "DEVELOPER99" FOR 90% DISCOUNT',
        img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Docs-Host: Instant Deploy',
        desc: 'Deploy your markdown folders to a beautiful, hosted documentation site in seconds.',
        promo: 'CODE "FREEDOCSHOST" FOR FREE SITE',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Cursor AI: Code Faster',
        desc: 'Autotype complex markdown, compile documentation, and edit files using inline context models.',
        promo: 'CLAIM FREE CURSOR PRO MONTH: CURSORFREE',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Grammarly Coder: Clear Prose',
        desc: 'Scan technical markdown files for style, tone, passive voice, and mechanical grammar bugs.',
        promo: 'CLAIM CODER PREMIUM TONAL SCAN: CLEARPROSE',
        img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Notion Knowledge Base Pro',
        desc: 'Organize project markdown workspaces, tasks, calendars, and templates in unified workspaces.',
        promo: 'SAVE 20% NOTION TEAM SPACES: NOTIONPRO20',
        img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=200&q=80'
    },
    {
        title: 'Lucidchart Diagram Sync',
        desc: 'Embed diagrams, workflows, and mockups directly inside project documentation files.',
        promo: 'DIAGRAMS EXPORT ACCESS CODE: LUCIDFREE',
        img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=200&h=200&q=80'
    }
];

let adsDisabled = false;
let interactionCount = 0;

// Inspect markdown syntax guide detailed modal popup
function openDetail() {
    const modal = document.getElementById('detailModal');
    const body = document.getElementById('modalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-hero" style="background:url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80') center/cover; height:260px; border-radius:16px; margin-bottom:2rem; box-shadow:0 10px 25px rgba(0,0,0,0.05); border:1px solid var(--border);"></div>
        <h2 style="font-size:2.2rem; font-family:'Space Grotesk',sans-serif; font-weight:700; margin:1rem 0; color:#090b0e; letter-spacing:-0.5px;">Markdown Syntax</h2>
        <p style="font-size:1.05rem; color:#444; line-height:1.6; margin-bottom:2rem;">Markdown compiles instantly to HTML. Standard structural syntax allows for headers, codes, and blockquotes.</p>
        
        <div class="extensive-info" style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-bottom:2rem;">
            <div style="background:#fafafa; border:1px solid rgba(0,0,0,0.06); padding:1.8rem; border-radius:16px;">
                <h3 style="margin-bottom:0.8rem; font-size:1.1rem; color:#090b0e; font-family:'Space Grotesk',sans-serif;">Basic Syntax</h3>
                <pre style="font-size:0.85rem; color:var(--primary-dark); font-family:monospace; line-height:1.4;"># Heading 1
## Heading 2
**Bold Text**
*Italic Text*
> Blockquote</pre>
            </div>
            <div style="background:#fafafa; border:1px solid rgba(0,0,0,0.06); padding:1.8rem; border-radius:16px;">
                <h3 style="margin-bottom:0.8rem; font-size:1.1rem; color:#090b0e; font-family:'Space Grotesk',sans-serif;">Advanced Syntax</h3>
                <p style="font-size:0.88rem; color:#444; line-height:1.5;">Use backticks for inline <code>code</code> block captures. List rows are compiled using dashes.</p>
            </div>
        </div>
    `;
    
    // Choose details modal sponsor campaign
    const detailCampaign = DEV_CAMPAIGNS[0];
    const detailImg = document.getElementById('detail-ad-img');
    const detailTitle = document.getElementById('detail-ad-title');
    const detailDesc = document.getElementById('detail-ad-desc');
    
    if (detailImg) detailImg.src = detailCampaign.img;
    if (detailTitle) detailTitle.innerText = detailCampaign.title;
    if (detailDesc) detailDesc.innerText = detailCampaign.desc;

    modal.style.display = 'flex';
}

document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('detailModal').style.display = 'none';
});

window.onclick = (event) => {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// --- 2. Custom Markdown Template Selector ---
const templateModal = document.getElementById('templateModal');
const btnOpenTemplateModal = document.getElementById('btn-open-template-modal');
const btnCloseTemplateModal = document.getElementById('btn-close-template-modal');

if (btnOpenTemplateModal) {
    btnOpenTemplateModal.addEventListener('click', () => {
        if (templateModal) templateModal.style.display = 'flex';
    });
}

if (btnCloseTemplateModal) {
    btnCloseTemplateModal.addEventListener('click', () => {
        if (templateModal) templateModal.style.display = 'none';
    });
}

const TEMPLATE_DATABASE = {
    readme: `# Project Title

This is a beautiful project README.

## Features
- Modular decoupled architecture
- Fast response adapters
- Frosted glass UI

## Tech Stack
- HTML5 / CSS3
- Pure JS logic
`,
    api: `# Corporate API Reference

## Base URL
\`https://api.myproject.com/v1\`

## Endpoints

### GET /users
- Parameters: none
- Response: JSON list array
`,
    release: `# Release Notes Changelog

## Version 1.2.0 (May 2026)
- Configured dynamic price tracking indicators
- Decoupled strategic sponsor arrays
- Notch status safe adapters
`
};

function submitCustomTemplate() {
    const select = document.getElementById('template-type-select');
    const templateKey = select.value;
    const templateContent = TEMPLATE_DATABASE[templateKey];

    if (!templateContent) return;

    if (templateModal) templateModal.style.display = 'none';

    // Trigger interstitial skip-ad overlay before updating
    showSessionInterstitialAd(() => {
        if (inputArea) inputArea.value = templateContent;
        if (outputArea) outputArea.innerHTML = parseMarkdown(templateContent);
    });
}


// --- 3. Programmatic Rotating Sponsor Banner ---
let bannerIndex = 0;
function startRotatingBanner() {
    const banner = document.getElementById('floating-ad-banner');
    if (!banner || adsDisabled) return;

    const campaign = DEV_CAMPAIGNS[bannerIndex];
    bannerIndex = (bannerIndex + 1) % DEV_CAMPAIGNS.length;

    banner.innerHTML = `
        <div class="ad-sponsor-container">
            <img src="${campaign.img}" alt="${campaign.title}">
            <div class="banner-content">
                <p>Curated Campaign Sponsor</p>
                <strong>${campaign.title}</strong>
            </div>
        </div>
        <div class="banner-actions">
            <button class="btn-banner-action" id="btn-banner-claim">Claim Resource</button>
            <button class="btn-banner-close" id="btn-banner-close">×</button>
        </div>
    `;

    banner.style.display = 'flex';

    // Hook listeners
    document.getElementById('btn-banner-claim')?.addEventListener('click', () => {
        alert(`🎉 Copied coupon code: "${campaign.promo.split('"')[1] || 'DEVELOPER99'}" to clipboard!`);
        window.open('#', '_blank');
    });

    document.getElementById('btn-banner-close')?.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

// Initial banner launch and rotate every 10 seconds
setTimeout(() => {
    startRotatingBanner();
    setInterval(startRotatingBanner, 10000);
}, 2000);


// --- 4. Decoupled Timed Interstitial Countdown System ---
let interstitialCallback = null;
let interstitialTimer = null;
const interstitialModal = document.getElementById('interstitialModal');
const btnSkipAd = document.getElementById('btn-skip-ad');
const btnClaimAd = document.getElementById('btn-claim-ad');

function showSessionInterstitialAd(onClosed) {
    if (adsDisabled || !interstitialModal) {
        onClosed();
        return;
    }
    
    interstitialCallback = onClosed;
    
    // Choose a random campaign
    const campaign = DEV_CAMPAIGNS[Math.floor(Math.random() * DEV_CAMPAIGNS.length)];
    const imgEl = document.getElementById('interstitial-ad-img');
    const titleEl = document.getElementById('interstitial-ad-title');
    const descEl = document.getElementById('interstitial-ad-desc');
    const promoEl = document.getElementById('interstitial-ad-promo');
    
    if (imgEl) imgEl.src = campaign.img;
    if (titleEl) titleEl.innerText = campaign.title;
    if (descEl) descEl.innerText = campaign.desc;
    if (promoEl) promoEl.innerText = campaign.promo;

    interstitialModal.style.display = 'flex';
    
    btnSkipAd.disabled = true;
    btnSkipAd.style.opacity = '0.4';
    btnSkipAd.style.cursor = 'not-allowed';
    btnSkipAd.innerText = 'Skip Ad in 5s';
    
    let count = 5;
    if (interstitialTimer) clearInterval(interstitialTimer);
    
    interstitialTimer = setInterval(() => {
        count--;
        if (count > 0) {
            btnSkipAd.innerText = `Skip Ad in ${count}s`;
        } else {
            clearInterval(interstitialTimer);
            btnSkipAd.innerText = 'Skip Ad';
            btnSkipAd.disabled = false;
            btnSkipAd.style.opacity = '1';
            btnSkipAd.style.cursor = 'pointer';
        }
    }, 1000);
}

if (btnSkipAd) {
    btnSkipAd.addEventListener('click', () => {
        interstitialModal.style.display = 'none';
        
        // Trigger success synchronization celebration modal!
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

if (btnClaimAd) {
    btnClaimAd.addEventListener('click', () => {
        alert('🎉 Coder discount whitelisted to active session!');
        interstitialModal.style.display = 'none';
        
        const celebrationModal = document.getElementById('celebrationModal');
        if (celebrationModal) {
            celebrationModal.style.display = 'flex';
        } else if (interstitialCallback) {
            interstitialCallback();
        }
    });
}

// Celebration close handler
const btnCloseCelebrationModal = document.getElementById('btn-close-celebration');
if (btnCloseCelebrationModal) {
    btnCloseCelebrationModal.addEventListener('click', () => {
        document.getElementById('celebrationModal').style.display = 'none';
        if (interstitialCallback) {
            interstitialCallback();
            interstitialCallback = null;
        }
    });
}


// --- 5. Scarcity Upgrade Tier & Timer Engine ---
let upgradeTimer = null;
const premiumUpgradeModal = document.getElementById('premiumUpgradeModal');

function triggerUpgradeModal() {
    if (adsDisabled || !premiumUpgradeModal) return;
    
    premiumUpgradeModal.style.display = 'flex';
    let duration = 600; // 10 minutes
    const countdownEl = document.getElementById('scarcity-countdown');

    if (upgradeTimer) clearInterval(upgradeTimer);

    upgradeTimer = setInterval(() => {
        duration--;
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        if (countdownEl) {
            countdownEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        if (duration <= 0) {
            clearInterval(upgradeTimer);
            premiumUpgradeModal.style.display = 'none';
        }
    }, 1000);
}

// Trigger upgrade modal after 40 seconds of active editor compilations
setTimeout(triggerUpgradeModal, 40000);

document.getElementById('btn-skip-upgrade')?.addEventListener('click', () => {
    premiumUpgradeModal.style.display = 'none';
    clearInterval(upgradeTimer);
});

// Acknowledge upgrade purchase (disable ads)
document.getElementById('btn-upgrade-now')?.addEventListener('click', () => {
    alert('🏆 Welcome to DocuMark Pro! PDF Exports unlocked, developer sponsors deactivated.');
    adsDisabled = true;
    premiumUpgradeModal.style.display = 'none';
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
    clearInterval(upgradeTimer);
});


// --- 6. Exit Intent & Mock Ad-Blocker Overlays ---
let exitIntentShown = false;
document.addEventListener("mouseout", (e) => {
    if (e.clientY < 0 && !exitIntentShown && !adsDisabled) {
        exitIntentShown = true;
        const exitModal = document.getElementById("exitIntentModal");
        if (exitModal) exitModal.style.display = "flex";
    }
});

document.getElementById("closeExitIntent")?.addEventListener("click", () => {
    document.getElementById("exitIntentModal").style.display = "none";
});
document.getElementById("declineExitIntent")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("exitIntentModal").style.display = "none";
});

// Trigger Mock ad blocker Whitelist popups after 5 seconds
setTimeout(() => {
    if (adsDisabled) return;
    const isAdBlockerActive = Math.random() < 0.15; // 15% simulation chance
    if (isAdBlockerActive) {
        const adBlockModal = document.getElementById("adBlockModal");
        if (adBlockModal) adBlockModal.style.display = "flex";
    }
}, 5000);

document.getElementById('btn-adblock-premium')?.addEventListener('click', () => {
    alert('🏆 Pro Activated! Ad banners disabled.');
    adsDisabled = true;
    document.getElementById("adBlockModal").style.display = "none";
    const banner = document.getElementById('floating-ad-banner');
    if (banner) banner.style.display = 'none';
});

// Initial compile
window.onload = () => {
    const baseMarkdown = `# Hello World

This is a **real-time** markdown previewer.

## Features
- Fast performance
- Clean UI
- Side-by-side editing

> "The best way to predict the future is to invent it."
`;
    if (inputArea) inputArea.value = baseMarkdown;
    if (outputArea) outputArea.innerHTML = parseMarkdown(baseMarkdown);
};
exportBtn = document.getElementById('download-btn');
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        alert('🎉 Downloading document as formatted markdown file!');
    });
}
