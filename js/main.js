document.addEventListener("DOMContentLoaded", () => {
    initCommonComponents();
    initAccessibility();
});

// Функция генерации Шапки, Меню и Подвала с умным расчетом путей
function initCommonComponents() {
    // Проверяем, находится ли пользователь внутри папки food
    // Учитываем разные варианты написания в строке браузера
    const currentPath = window.location.pathname;
    const isSubFolder = currentPath.includes('/food/') || currentPath.endsWith('food') || currentPath.includes('\\food\\');
    
    // Если мы в подпапке, для возврата на главную нужно подняться выше: ../
    const prefix = isSubFolder ? '../' : '';

    const headerHtml = `
        <header class="site-header">
            <div class="container header-top">
                <div class="logo-zone">
                    <a href="${prefix}index.html" class="logo-link">
                        <strong>МАОУ "СОШ № 14" НГО</strong>
                        <span>г. Находка</span>
                    </a>
                </div>
                <div class="header-actions">
                    <button id="accessibility-toggle" class="btn-alt">👁 Версия для слабовидящих</button>
                </div>
            </div>
            <nav class="site-nav">
                <div class="container">
                                        <ul class="menu-list">
                        <li><a href="${prefix}index.html">Главная</a></li>
                        <li class="dropdown">
                            <a href="#">Сведения об ОО 👇</a>
                            <ul class="dropdown-menu">
                                <li><a href="${prefix}about-basic.html">Основные сведения</a></li>
                                <li><a href="${prefix}about-docs.html">Документы</a></li>
                                <li><a href="${prefix}about-management.html">Руководство и педсостав</a></li>
                                <li><a href="${prefix}food/index.html">Организация питания</a></li>
                            </ul>
                        </li>
                        <li><a href="${prefix}for-students.html">Учащимся</a></li>
                        <li><a href="${prefix}for-parents.html">Родителям</a></li>
                        <li><a href="${prefix}contacts.html">Контакты</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;

    const footerHtml = `
        <footer class="site-footer">
            <div class="container footer-grid">
                <div class="footer-info">
                    <p>© 2026 МАОУ "СОШ № 14" НГО. Официальный сайт.</p>
                    <p>Адрес: Приморский край, г. Находка</p>
                </div>
                <div class="footer-links">
                    <h4>Полезные ссылки</h4>
                    <ul>
                        <li><a href="https://primedu.ru" target="_blank">Сетевой Город. Образование</a></li>
                        <li><a href="https://ucoz.net" target="_blank">Архивный сайт (uCoz)</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    `;

    if(document.getElementById('header-component')) {
        document.getElementById('header-component').innerHTML = headerHtml;
    }
    if(document.getElementById('footer-component')) {
        document.getElementById('footer-component').innerHTML = footerHtml;
    }
}

// Логика версии для слабовидящих (ГОСТ)
function initAccessibility() {
    const toggleBtn = document.getElementById('accessibility-toggle');
    if (!toggleBtn) return;

    if (localStorage.getItem('accessibility-mode') === 'true') {
        document.body.classList.add('visual-impaired');
    }

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('visual-impaired');
        
        if (document.body.classList.contains('visual-impaired')) {
            localStorage.setItem('accessibility-mode', 'true');
        } else {
            localStorage.setItem('accessibility-mode', 'false');
        }
    });
}
