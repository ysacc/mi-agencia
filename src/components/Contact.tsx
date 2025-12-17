import React, { useEffect, useState } from 'react';
import { translations, type Lang } from '../translations';

interface ContactProps {
  lang: Lang;
  selectedService?: string | null;
  selectedCase?: string | null; // NUEVO
  onClearSelectedService?: () => void;
  onClearSelectedCase?: () => void; // NUEVO
}

const Contact: React.FC<ContactProps> = ({
  lang,
  selectedService,
  selectedCase,
  onClearSelectedService,
  onClearSelectedCase,
}) => {
  const t = translations[lang].contact;

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  // Prefill: Servicio seleccionado
  useEffect(() => {
    if (!selectedService) return;

    setForm(prev => {
      const marker = `Paquete: ${selectedService}`;
      if (prev.mensaje.includes(marker)) return prev;

      const next = prev.mensaje
        ? `${marker}\n${prev.mensaje}`
        : `${marker}\nQuiero información (precio, tiempos y próximos pasos).`;

      return { ...prev, mensaje: next };
    });
  }, [selectedService]);

  // Prefill: Caso seleccionado
  useEffect(() => {
    if (!selectedCase) return;

    setForm(prev => {
      const marker = `Caso: ${selectedCase}`;
      if (prev.mensaje.includes(marker)) return prev;

      const next = prev.mensaje
        ? `${marker}\n${prev.mensaje}`
        : `${marker}\nQuiero algo similar. ¿Qué propuesta me recomiendan?`;

      return { ...prev, mensaje: next };
    });
  }, [selectedCase]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form enviado:', form);
    alert('Gracias, nos pondremos en contacto contigo pronto.');
    setForm({ nombre: '', email: '', mensaje: '' });
    onClearSelectedService?.();
    onClearSelectedCase?.();
  };

  const sendWhatsAppMessage = (message: string) => {
    const text = encodeURIComponent(message);
    const url = `https://wa.me/51928577224?text=${text}`;
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
  };

  const buildContextParts = () => {
    const parts: string[] = [];
    if (form.nombre) parts.push(`Nombre: ${form.nombre}`);
    if (form.email) parts.push(`Email: ${form.email}`);
    if (selectedService) parts.push(`Paquete: ${selectedService}`);
    if (selectedCase) parts.push(`Caso: ${selectedCase}`);
    if (form.mensaje) parts.push(`Mensaje: ${form.mensaje}`);
    return parts;
  };

  const handleWhatsAppCatalog = () => {
    const parts = buildContextParts();
    parts.push(
      'Solicito el catálogo de servicios y paquetes disponibles. Por favor envíen precios y tiempos estimados.'
    );
    sendWhatsAppMessage(parts.join(' | '));
  };

  const handleWhatsAppAppointment = () => {
    const parts = buildContextParts();
    parts.push(
      'Quisiera reservar una cita para hablar sobre un proyecto. Indiquen por favor disponibilidad para llamada o reunión.'
    );
    sendWhatsAppMessage(parts.join(' | '));
  };

  return (
    <>
      <div className="section-heading">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="contact-layout">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">{t.formName}</label>
            <input
              type="text"
              name="nombre"
              className="form-input"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">{t.formEmail}</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">{t.formMessage}</label>
            <textarea
              name="mensaje"
              className="form-textarea"
              value={form.mensaje}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {t.submit}
          </button>
        </form>

        <div>
          <p className="contact-side-text">{t.sideText}</p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-outline btn-wsp" onClick={handleWhatsAppCatalog}>
              Pedir catálogo
            </button>
            <button
              type="button"
              className="btn btn-outline btn-wsp"
              onClick={handleWhatsAppAppointment}
            >
              Reservar cita
            </button>
          </div>
          <p className="contact-side-note">{t.sideSub}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
