const guides = [
    // Android Core
    { id: 'act-life', title: 'Activity Lifecycle Masterclass', desc: 'دورة حياة الأكتيفيتي والحالات المتعددة وأسئلة المقابلات.', icon: '📱', path: 'activity_lifecycle_guide.html' },
    { id: 'components', title: 'Core Components Masterclass', desc: 'مكونات أندرويد الأساسية Architectural Masterclass.', icon: '🧱', path: 'android_components_masterclass.html' },
    { id: 'life-master', title: 'Android Lifecycle Masterclass', desc: 'إدارة State وViewModel والمحافظة على البيانات.', icon: '🔄', path: 'android_lifecycle_masterclass.html' },
    { id: 'sec-master', title: 'Android Security Masterclass', desc: 'أمان أندرويد — الثغرات والتشفير والتأمين.', icon: '🛡️', path: 'android_security_masterclass.html' },
    { id: 'fintech-master', title: 'Fintech Android Masterclass', desc: 'المرجع الهندسي الشامل لبناء وتأمين تطبيقات البنوك والدفع الإلكتروني.', icon: '🏦', path: 'fintech_android_masterclass.html' },
    { id: 'fintech-sec', title: 'Fintech Android Security Guide', desc: 'حماية وتأمين تطبيقات البنوك والدفع الإلكتروني.', icon: '💳', path: 'fintech_android_security_guide.html' },
    { id: 'kmp-cmp', title: 'KMP & CMP Interview Guide', desc: 'دليل المقابلات لـ Kotlin & Compose Multiplatform.', icon: '🚀', path: 'kmp_cmp_interview_guide.html' },
    { id: 'kt-coll', title: 'Kotlin Collections & Sequences', desc: 'Collections vs Sequences في كوتلن لتحسين الأداء.', icon: '📦', path: 'kotlin_collections_sequence_guide.html' },
    { id: 'pagination', title: 'Modern Pagination Guide', desc: 'معمارية التصفح والتحميل اللانهائي العصري.', icon: '📄', path: 'pagination_guide.html' },
    { id: 'frag-nav', title: 'Fragment & Navigation Guide', desc: 'إدارة الفراجمينت والتنقل الشامل مع Navigation Component.', icon: '🧩', path: 'fragment_navigation_guide.html' },
    { id: 'detekt-cicd', title: 'CI/CD with Git & Detekt', desc: 'أتمتة جودة الكود والتفتيش الساكن Detekt.', icon: '⚙️', path: 'cicd_git_detekt_android.html' },
    { id: 'design-patterns-kt', title: 'Kotlin Design Patterns & SOLID', desc: 'أنماط التصميم ومبادئ SOLID في كوتلن — دليل شامل.', icon: '🎨', path: 'design_patterns_kotlin_guide.html' },
    { id: 'oop-master', title: 'OOP & Design Patterns Masterclass', desc: 'البرمجة الكائنية المتقدمة وأنماط التصميم لأندرويد.', icon: '💎', path: 'oop_masterclass.html' },
    { id: 'oop-chal', title: 'OOP Interview Challenges', desc: 'أصعب أسئلة البرمجة كائنية التوجه وتحديات المقابلات.', icon: '🎯', path: 'oop_interview_challenges.html' },
    { id: 'rn-sheet', title: 'React Native Interview Sheet', desc: 'دليل المقابلات المعماري لـ React Native.', icon: '⚛️', path: 'react_native_interview_sheet.html' },

    // AAOS Automotive
    { id: 'vhal', title: 'دليل VHAL الشامل', desc: 'كل ما تحتاجه لفهم وتحسين طبقة تجريد أجهزة السيارة.', icon: '🚗', path: 'vhal-guide-arabic.html' },
    { id: 'compose', title: 'Compose for Automotive', desc: 'بناء واجهات مستخدم حديثة وسلسة لأنظمة السيارات.', icon: '⚛️', path: 'compose_for_automotive_guide.html' },
    { id: 'cicd', title: 'Android CI/CD for AAOS', desc: 'أتمتة عمليات البناء والاختبار والنشر لتطبيقات السيارات.', icon: '🚀', path: 'android-cicd-guide.html' },
    { id: 'ota', title: 'OTA Updates & A/B', desc: 'فهم تحديثات النظام الهوائية وإدارة تقسيم القرص الصلب.', icon: '📲', path: 'android-ota-updates-guide.html' },
    { id: 'media', title: 'Android Media Session', desc: 'إدارة الوسائط والتحكم فيها في بيئة السيارة.', icon: '🎵', path: 'android_media_vehicle_guide.html' },
    { id: 'ipc', title: 'IPC & Binder & AIDL', desc: 'التواصل المتطور بين العمليات في نظام أندرويد.', icon: '📡', path: 'ipc-binder-aidl-guide.html' },
    { id: 'connectivity', title: 'Connectivity Stack', desc: 'البلوتوث، الواي فاي، وتكامل Android Auto.', icon: '📶', path: 'connectivity-bt-wifi-androidauto.html' },
    { id: 'build', title: 'Android Build System', desc: 'أسرار نظام بناء أندرويد من الصفر.', icon: '🛠️', path: 'android-build-guide.html' },
    { id: 'canbus', title: 'CAN Bus & VHAL', desc: 'ربط نظام أندرويد بناقل البيانات الحقيقي للسيارة.', icon: '🔌', path: 'can_bus_vhal_guide.html' },
    { id: 'carui', title: 'CarUI Library Deep Dive', desc: 'مكتبة CarUI لإنشاء واجهات القيادة ذات الأمان العالي.', icon: '🖥️', path: 'caruilib_driving_deep_dive.html' },
    { id: 'aaos-deep', title: 'AAOS Deep Dive', desc: 'الغوص العميق في معمارية Android Automotive OS.', icon: '🤖', path: 'aaos_deep_arabic.html' },
    { id: 'selinux', title: 'SELinux for Automotive', desc: 'إدارة أمان النظام والصلاحيات في أندرويد السيارات.', icon: '🛡️', path: 'selinux-guide.html' },
    { id: 'career', title: 'Professional Hub', desc: 'نصائح وموارد لتطوير مسارك المهني في السيارات.', icon: '💼', path: 'career-hub.html' },
    { id: 'ndk', title: 'دليل NDK & JNI الشامل', desc: 'احتراف البرمجة بلغة C++ والتواصل عبر JNI.', icon: '⚡', path: 'ndk_jni_guide.html' },
    { id: 'adb', title: 'دليل ADB الشامل', desc: 'أوامر وتشخيص ADB الشامل من A إلى Z.', icon: '📟', path: 'adb_guide.html' },

    // Problem Solving
    { id: 'dsa', title: 'DSA Mastery Guide', desc: 'الدليل الشامل للـ Data Structures & Algorithms.', icon: '🧠', path: 'dsa_guide.html' },
    { id: 'linkedlist', title: 'Linked Lists Deep Dive', desc: 'شرح وتطبيقات القوائم المترابطة بلغة C++.', icon: '🔗', path: 'linked_lists_guide.html' },
    { id: 'hashmaps', title: 'HashMaps & Sets Guide', desc: 'احتراف الجداول التجميعية وتطبيقات O(1).', icon: '🗺️', path: 'hashmaps_sets_guide.html' },
    { id: 'dsahub', title: 'DSA Dashboard Hub', desc: 'لوحة تفاعلية لمتابعة تعلم الخوارزميات.', icon: '📊', path: 'dsa_dashboard.html' }
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
