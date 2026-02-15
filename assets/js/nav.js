<script>
class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ul class="links">
        <li><a href="culture_communication.html">Communication & Culture</a></li>
        <li><a href="visual_storytelling.html">Visual Storytelling</a></li>
        <li><a href="brand_commercial.html">Brand & Commercial</a></li>
        <li><a href="playful_instruments.html">Percussion & Play</a></li>
        <li><a href="digital_web_interfaces.html">Interfaces</a></li>
        <li><a href="ai_concepts.html">AI Concepts</a></li>
      </ul>`;
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    this.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href').split('/').pop().toLowerCase();
      if (href === current) a.parentElement.classList.add('active');
    });
  }
}
customElements.define('site-nav', SiteNav);
</script>
