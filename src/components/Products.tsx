const products = [
  { icon: '🔥', name: 'CELL FIRE™',        tagline: 'Cellular energy restoration and metabolic activation formula.',                          badge: 'Herbal Blend' },
  { icon: '⚡', name: 'MITOVIVE™',          tagline: 'Mitochondrial support for sustained energy and cellular health.',                         badge: 'Herbal Blend' },
  { icon: '💧', name: 'LYMPH CLEAR™',       tagline: 'Lymphatic drainage and immune system optimisation.',                                      badge: 'Herbal Blend' },
  { icon: '🌿', name: 'DETOX SOVEREIGN™',   tagline: 'Deep systemic detoxification — organs, blood, and tissue.',                               badge: 'Herbal Blend' },
  { icon: '🍇', name: 'VITIS VITAE™',       tagline: "Nigeria's first fermented grape-based wellness tincture. A category of its own.",         badge: 'Signature Tincture' },
  { icon: '📖', name: 'Digital Protocols',  tagline: 'eBooks, meal plans, and video programmes available on Selar and Gumroad.',                badge: 'Digital Products' },
]

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Herbal &amp; Wellness</span>
          <h2 className="section-title">THP Product Line</h2>
          <span className="gold-rule" />
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card reveal" key={p.name}>
              <span className="product-icon">{p.icon}</span>
              <div className="product-name">{p.name}</div>
              <div className="product-tagline">{p.tagline}</div>
              <span className="product-badge">{p.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
