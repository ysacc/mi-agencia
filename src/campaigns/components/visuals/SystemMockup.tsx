import React from "react";
import Icon from "../Icon";

/**
 * Composición del hero de "Sistemas a Medida": panel de control con módulos,
 * indicadores y tabla operativa.
 *
 * Los valores se representan como barras/placeholders: no se muestran cifras
 * porque serían datos inventados.
 */
const SystemMockup: React.FC = () => (
  <div
    className="cmp-mock cmp-mock-system"
    role="img"
    aria-label="Panel de control a medida con módulos, indicadores y tabla de operaciones"
  >
    <div className="cmp-window cmp-window-wide">
      <div className="cmp-window-bar">
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-dot" />
        <span className="cmp-window-url">panel.tuempresa.com</span>
      </div>

      <div className="cmp-window-body cmp-dash">
        <aside className="cmp-dash-side">
          <span className="cmp-dash-side-item is-active">
            <Icon name="dashboard" size={16} />
            <em>Resumen</em>
          </span>
          <span className="cmp-dash-side-item">
            <Icon name="users" size={16} />
            <em>Clientes</em>
          </span>
          <span className="cmp-dash-side-item">
            <Icon name="box" size={16} />
            <em>Operaciones</em>
          </span>
          <span className="cmp-dash-side-item">
            <Icon name="shield" size={16} />
            <em>Permisos</em>
          </span>
        </aside>

        <div className="cmp-dash-main">
          <div className="cmp-dash-kpis">
            {["Pendientes", "En proceso", "Completado"].map((label) => (
              <div className="cmp-kpi" key={label}>
                <span className="cmp-kpi-label">{label}</span>
                <span className="cmp-line cmp-line-sm" />
                <span className="cmp-kpi-bar">
                  <em />
                </span>
              </div>
            ))}
          </div>

          <div className="cmp-dash-chart" aria-hidden="true">
            {[38, 62, 45, 78, 56, 88, 70].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>

          <div className="cmp-dash-table">
            {[0, 1, 2].map((row) => (
              <div className="cmp-dash-row" key={row}>
                <span className="cmp-line cmp-line-xs" />
                <span className="cmp-line cmp-line-xs" />
                <span className="cmp-dash-state" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="cmp-auto-card">
      <Icon name="plug" size={18} />
      <div>
        <p className="cmp-auto-title">Tarea automática</p>
        <p className="cmp-auto-text">Se ejecuta sin intervención manual</p>
      </div>
    </div>
  </div>
);

export default SystemMockup;
