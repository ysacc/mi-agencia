import React, { useState } from 'react';
import { translations, type Lang } from '../translations';

interface ContactProps {
  lang: Lang;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form enviado:', form);
    alert('Gracias, nos pondremos en contacto contigo pronto.');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola, soy ${
        form.nombre || 'un interesado'
      } y quiero más información sobre sus servicios.`
    );
    // Cambia el número por el tuyo
    window.open(`https://wa.me/51XXXXXXXXX?text=${text}`, '_blank');
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
          <button
            type="button"
            className="btn btn-outline btn-wsp"
            onClick={handleWhatsApp}
          >
            {t.whatsappCta}
          </button>
          <p className="contact-side-note">{t.sideSub}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
