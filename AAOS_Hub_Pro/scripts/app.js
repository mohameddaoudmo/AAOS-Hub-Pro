const guides = [
    { id: 'vhal', title: 'دليل VHAL الشامل', desc: 'كل ما تحتاجه لفهم وتحسين طبقة تجريد أجهزة السيارة.', icon: '🚗', path: 'vhal-guide-arabic.html' },
    { id: 'compose', title: 'Compose for Automotive', desc: 'بناء واجهات مستخدم حديثة وسلسة لأنظمة السيارات.', icon: '⚛️', path: 'compose_for_automotive_guide.html' },
    { id: 'cicd', title: 'Android CI/CD', desc: 'أتمتة عمليات البناء والاختبار والنشر لتطبيقات السيارات.', icon: '🚀', path: 'android-cicd-guide.html' },
    { id: 'ota', title: 'OTA Updates & A/B', desc: 'فهم تحديثات النظام الهوائية وإدارة تقسيم القرص الصلب.', icon: '📲', path: 'android-ota-updates-guide.html' },
    { id: 'media', title: 'Android Media Session', desc: 'إدارة الوسائط والتحكم فيها في بيئة السيارة.', icon: '🎵', path: 'android_media_vehicle_guide.html' },
    { id: 'ipc', title: 'IPC & Binder & AIDL', desc: 'التواصل المتطور بين العمليات في نظام أندرويد.', icon: '📡', path: 'ipc-binder-aidl-guide.html' },
    { id: 'connectivity', title: 'Connectivity Stack', desc: 'البلوتوث، الواي فاي، وتكامل Android Auto.', icon: '📶', path: 'connectivity-bt-wifi-androidauto.html' },
    { id: 'build', title: 'Android Build System', desc: 'أسرار نظام بناء أندرويد من الصفر.', icon: '🛠️', path: 'android-build-guide.html' },
    { id: 'canbus', title: 'CAN Bus & VHAL', desc: 'ربط نظام أندرويد بناقل البيانات الحقيقي للسيارة.', icon: '🔌', path: 'can_bus_vhal_guide.html' },
    { id: 'career', title: 'Professional Hub', desc: 'نصائح وموارد لتطوير مسارك المهني في السيارات.', icon: '💼', path: 'career-hub.html' }
];

const elements = {
    guideList: document.getElementById('guide-list'),
    dashboardGrid: document.getElementById('dashboard-grid'),
    pageContent: document.getElementById('page-content'),
    progressFill: document.querySelector('.progress-fill'),
    globalSearch: document.getElementById('global-search'),
    searchResults: document.getElementById('search-results')
};

// Initialize App
function init() {
    renderSidebar();
    renderDashboard();
    setupSearch();
    handleNavigation();
}

// Sidebar Rendering
function renderSidebar() {
    elements.guideList.innerHTML = guides.map(guide => `
        <a href="#${guide.id}" class="guide-item" data-id="${guide.id}">
            <span>${guide.icon}</span>
            <span>${guide.title}</span>
        </a>
    `).join('');
}

// Dashboard Rendering
function renderDashboard() {
    elements.dashboardGrid.innerHTML = guides.map((guide, index) => `
        <div class="pro-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="navigateTo('${guide.id}')">
            <span class="icon">${guide.icon}</span>
            <h3>${guide.title}</h3>
            <p>${guide.desc}</p>
        </div>
    `).join('');
}

// Navigation Logic
async function navigateTo(guideId) {
    if (!guideId) {
        renderDashboardView();
        return;
    }

    const guide = guides.find(g => g.id === guideId);
    if (!guide) return;

    // Update active state in sidebar
    document.querySelectorAll('.guide-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === guideId);
    });

    // Fetch and render guide content
    try {
        elements.pageContent.innerHTML = '<div class="loader">جاري تحميل الدليل...</div>';
        const response = await fetch(`guides/${guide.path}`);
        let html = await response.text();

        // Extract body content only
        const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        if (bodyContent && bodyContent[1]) {
            html = bodyContent[1];
        }
        
        // Clean up internal navs from legacy guides
        html = html.replace(/<nav class="guide-nav">[\s\S]*?<\/nav>/i, '');
        
        elements.pageContent.innerHTML = `<div class="guide-container fade-in">${html}</div>`;
        window.scrollTo(0, 0);
        
        // Update URL
        history.pushState({ guideId }, guide.title, `#${guideId}`);
        
    } catch (err) {
        elements.pageContent.innerHTML = `<div class="error">عذراً، تعذر تحميل الدليل. الخطأ: ${err.message}</div>`;
    }
}

function renderDashboardView() {
    elements.pageContent.innerHTML = `
        <div class="welcome-screen fade-in">
            <h1 class="welcome-title">مرحباً بك في <span class="gradient-text">Mastery Hub Pro</span></h1>
            <p class="welcome-sub">استكشف مستقبل تقنيات أندرويد للسيارات مع تجربة تعليمية من الطراز الأول.</p>
            <div class="dashboard-grid"></div>
        </div>
    `;
    // Re-bind dashboard grid after view change
    const newGrid = elements.pageContent.querySelector('.dashboard-grid');
    newGrid.innerHTML = guides.map((guide, index) => `
        <div class="pro-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="location.hash='#${guide.id}'">
            <span class="icon">${guide.icon}</span>
            <h3>${guide.title}</h3>
            <p>${guide.desc}</p>
        </div>
    `).join('');
    
    document.querySelectorAll('.guide-item').forEach(el => el.classList.remove('active'));
}

// Global Event Listeners
window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    navigateTo(id);
});

// Initial Hash Check
function handleNavigation() {
    const initialId = window.location.hash.slice(1);
    if (initialId) navigateTo(initialId);
    else renderDashboardView();
}

// Search Logic
function setupSearch() {
    elements.globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            elements.searchResults.classList.add('hidden');
            return;
        }

        const matches = guides.filter(g => 
            g.title.toLowerCase().includes(query) || 
            g.desc.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            elements.searchResults.innerHTML = matches.map(m => `
                <div class="search-item" onclick="location.hash='#${m.id}'; document.getElementById('global-search').value='';">
                    <strong>${m.title}</strong>
                    <span>${m.desc.slice(0, 50)}...</span>
                </div>
            `).join('');
            elements.searchResults.classList.remove('hidden');
        } else {
            elements.searchResults.classList.add('hidden');
        }
    });

    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (!elements.searchBox?.contains(e.target)) {
            elements.searchResults.classList.add('hidden');
        }
    });
}

// Reading Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    elements.progressFill.style.width = scrolled + "%";
});

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('theme', target);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

init();

// Export for global access if needed
window.navigateTo = (id) => location.hash = `#${id}`;
