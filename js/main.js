/* Funções do site: menu no celular, barra de progresso, tempo de leitura,
   compartilhar e botão de voltar ao topo. */
(function () {
  var d = document;

  // Menu no celular
  var toggle = d.querySelector('.menu-toggle'), menu = d.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', aberto);
    });
  }

  // Barra de progresso e botão de topo
  var barra = d.getElementById('progresso'), topo = d.querySelector('.topo-btn');
  function rolar() {
    var h = d.documentElement, max = h.scrollHeight - h.clientHeight;
    if (barra && max > 0) barra.style.width = (h.scrollTop / max * 100) + '%';
    if (topo) topo.classList.toggle('visivel', h.scrollTop > 600);
  }
  addEventListener('scroll', rolar, { passive: true });
  rolar();
  if (topo) topo.addEventListener('click', function () {
    var reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollTo({ top: 0, behavior: reduz ? 'auto' : 'smooth' });
  });

  // Tempo de leitura (calculado pelo texto da página, ~200 palavras por minuto)
  var artigo = d.querySelector('.artigo'), tempos = d.querySelectorAll('[data-tempo]');
  if (artigo && tempos.length) {
    var min = Math.max(1, Math.round(artigo.innerText.trim().split(/\s+/).length / 200));
    tempos.forEach(function (e) { e.textContent = min + ' min de leitura'; });
  }

  // Compartilhar
  var url = encodeURIComponent(location.href), titulo = encodeURIComponent(d.title);
  var zap = d.querySelector('[data-compartilhar="whatsapp"]');
  if (zap) zap.href = 'https://wa.me/?text=' + titulo + '%20' + url;
  var mail = d.querySelector('[data-compartilhar="email"]');
  if (mail) mail.href = 'mailto:?subject=' + titulo + '&body=' + url;
  var copiar = d.querySelector('[data-compartilhar="copiar"]');
  if (copiar) copiar.addEventListener('click', function () {
    var ok = function () { copiar.textContent = 'Link copiado!'; };
    var falha = function () { copiar.textContent = 'Copie pelo endereço do navegador'; };
    if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(ok, falha); else falha();
  });
})();
