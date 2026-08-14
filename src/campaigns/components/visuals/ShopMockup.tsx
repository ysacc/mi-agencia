import React from "react";
import Icon from "../Icon";

/**
 * Composición del hero de "Tienda Online": catálogo con categorías,
 * carrito y confirmación de pedido. Sin precios (política de las landings).
 */
const ShopMockup: React.FC = () => (
  <div
    className="cmp-mock cmp-mock-shop"
    role="img"
    aria-label="Vista de una tienda online con catálogo por categorías, carrito de compras y confirmación de pedido"
  >
    <div className="cmp-window">
      <div className="cmp-window-bar">
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-window-url">tutienda.com/catalogo</span>
      </div>

      <div className="cmp-window-body">
        <div className="cmp-shop-cats">
          <span className="cmp-chip is-active">Todos</span>
          <span className="cmp-chip">Novedades</span>
          <span className="cmp-chip">Más pedidos</span>
          <span className="cmp-chip">Ofertas</span>
          <span className="cmp-cart">
            <Icon name="cart" size={18} />
            <em className="cmp-cart-badge">3</em>
          </span>
        </div>

        <div className="cmp-shop-grid">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div className="cmp-product" key={i}>
              <div className="cmp-product-img" />
              <span className="cmp-line cmp-line-sm" />
              <span className="cmp-line cmp-line-xs" />
              <span className="cmp-product-btn">
                <Icon name="cart" size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="cmp-order-card">
      <div className="cmp-order-head">
        <Icon name="box" size={18} />
        <span>Nuevo pedido</span>
      </div>
      <ul className="cmp-order-lines">
        <li>
          <span className="cmp-order-qty">2×</span>
          <span className="cmp-line cmp-line-sm" />
        </li>
        <li>
          <span className="cmp-order-qty">1×</span>
          <span className="cmp-line cmp-line-xs" />
        </li>
      </ul>
      <div className="cmp-order-foot">
        <Icon name="check" size={16} />
        <span>Confirmado y registrado</span>
      </div>
    </div>
  </div>
);

export default ShopMockup;
