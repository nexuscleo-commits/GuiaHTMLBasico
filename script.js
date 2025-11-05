let azul = false;
function mudarTexto() { 
    const div = document.getElementById('minhaDiv');
    if (!azul) {
        div.style.color = 'blue';
        div.textContent = 'Texto alterado para azul';
        azul =true;
    } else {
        div.style.color = 'green';
        div.textContent = 'Olá, DevClub!';
        azul = false;
    }
}

function mudarCorSpan() {
    const span = document.getElementById('meuSpan');
    // Alterna entre azul e vermelho
    if (span.style.color === 'red') {
        span.style.color = 'blue';
    } else {
        span.style.color = 'red';
    }
}

// --- LÓGICA DO TEMA (CLARO/ESCURO) ---

const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Função que aplica o tema (adiciona ou remove a classe 'dark-theme')
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Carrega o tema ao iniciar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Prioridade: 1. Tema salvo, 2. Tema do sistema, 3. Padrão (claro)
    applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
}

// Adiciona o evento de clique ao botão para alternar e salvar o tema
themeSwitcher.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme); // Salva a preferência do usuário
    applyTheme(newTheme);
});

// Lógica para o botão "Voltar ao Topo"
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostra o botão quando o usuário rola para baixo
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Rola suavemente para o topo quando o botão é clicado
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Executa a função para carregar o tema assim que o documento for carregado
document.addEventListener('DOMContentLoaded', loadTheme);