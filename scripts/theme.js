// Universal Theme Manager — يشتغل في كل الصفحات
(function () {
    const STORAGE_KEY = 'aaos_theme';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        // Update any toggle buttons on the page
        document.querySelectorAll('.theme-toggle-btn, #theme-btn').forEach(btn => {
            btn.textContent = theme === 'light' ? '🌙' : '☀️';
            btn.title = theme === 'light' ? 'الوضع الليلي' : 'الوضع النهاري';
        });
    }

    function toggle() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    // Apply saved theme immediately (before DOM paint to avoid flash)
    const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    // Bind toggle buttons after DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        applyTheme(saved); // update button icons
        document.querySelectorAll('.theme-toggle-btn, #theme-btn').forEach(btn => {
            btn.addEventListener('click', toggle);
        });
    });

    // Expose globally so inline onclick can call it
    window.aaosToggleTheme = toggle;
})();
