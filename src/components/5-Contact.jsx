import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const EMAILJS_SERVICE_ID  = "service_8y4yajg";
const EMAILJS_TEMPLATE_ID = "template_lku3fga";
const EMAILJS_PUBLIC_KEY  = "ZaI08qENAXMzmYxRR";

const CONTACT_INFO = [
  { icon: MdEmail,      title: "Email",    value: "essammoussamahmoud1@gmail.com", link: "mailto:essammoussamahmoud1@gmail.com" },
  { icon: MdPhone,      title: "Phone",    value: "+20 1025343475",               link: "tel:+201025343475" },
  { icon: MdLocationOn, title: "Location", value: "Alexandria, Egypt",            link: "#" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/essam-moussa-8424572a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    platform: "linkedin",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    color: "rgba(10,102,194,0.6)",
    glow: "rgba(10,102,194,0.3)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1FbHiTN3wX/?mibextid=wwXIfr",
    platform: "facebook",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    color: "rgba(24,119,242,0.6)",
    glow: "rgba(24,119,242,0.3)",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/201025343475",
    platform: "whatsapp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "rgba(37, 211, 102, 0.6)",
    glow: "rgba(37, 211, 102, 0.3)",
  },
  {
    label: "GitHub",
    href: "https://github.com/essammoussa",
    platform: "github",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>,
    color: "rgba(255,255,255,0.3)",
    glow: "rgba(255,255,255,0.15)",
  },
];

export default function Contact() {
  const [formData, setFormData]           = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]               = useState({ name: "", email: "", message: "" });
  const [status, setStatus]               = useState("idle");
  const [honeypot, setHoneypot]           = useState("");
  const [lastSent, setLastSent]           = useState(null);
  const [cooldownModal, setCooldownModal] = useState({ show: false, remaining: 0 });


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p)    => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim())    newErrors.name    = "Please fill out this field.";
    if (!formData.email.trim())   newErrors.email   = "Please fill out this field.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) newErrors.message = "Please fill out this field.";
    if (Object.values(newErrors).some(Boolean)) { setErrors(newErrors); return; }

    if (lastSent && Date.now() - lastSent < 120000) {
      const remaining = Math.ceil((120000 - (Date.now() - lastSent)) / 1000);
      setCooldownModal({ show: true, remaining });
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name: formData.name, email: formData.email, message: formData.message }, EMAILJS_PUBLIC_KEY);
      setStatus("sent");
      setLastSent(Date.now());
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const isSending = status === "sending";
  const isSent    = status === "sent";
  const isError   = status === "error";

  return (
    <section id="contact">

      {/* Header */}
      <div className="c-header">
        <div>
          <div className="c-tag"><span className="c-tag-dot" />Let's Talk</div>
          <h2 className="c-title">Get In<br /><span className="c-title-ghost">Touch</span></h2>
        </div>
        <p className="c-desc">Have a project in mind or want to work together? Drop me a message and I'll get back to you.</p>
      </div>

      <div className="c-divider"><hr /></div>

      {/* Body */}
      <div className="c-body">

        {/* LEFT: Form */}
        <div className="c-form-side">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} noValidate>

            <div className="c-field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleInputChange} aria-label="Your name" disabled={isSending} />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="c-field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} aria-label="Your email" disabled={isSending} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="c-field">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" name="message" placeholder="Tell me about your project…" value={formData.message} onChange={handleInputChange} aria-label="Your message" disabled={isSending} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            {/* Honeypot */}
            <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
              <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex="-1" autoComplete="off" />
            </div>

            {isSent  && <p className="form-status form-status--success">✓ Message sent! I'll get back to you soon.</p>}
            {isError && <p className="form-status form-status--error">✕ Something went wrong. Please try again.</p>}

            <div className="c-submit">
              <span className="c-submit-note">Usually reply within 24h</span>
              <button className={`send-btn${isSent ? " sent" : ""}${isError ? " error" : ""}`} type="submit" disabled={isSending}>
                <span className="btn-icon">
                  {isSending ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{ animation: "spin 1s linear infinite" }}><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity=".3"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8z"/></svg>
                  ) : isSent ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>
                  ) : isError ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414L12 10.586z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/></svg>
                  )}
                </span>
                <span>{isSending ? "Sending…" : isSent ? "Sent!" : isError ? "Try Again" : "Send Message"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT: Info */}
        <div className="c-info-side">
          <div className="c-available">
            <span className="c-available-dot" />
            Available for new projects
          </div>

          <p className="c-section-label">Contact Details</p>

          <div className="c-info-list">
            {CONTACT_INFO.map(({ icon: Icon, title, value, link }, idx) => (
              <a key={idx} href={link} className="contact-info-item" target={link.startsWith("http") ? "_blank" : "_self"} rel={link.startsWith("http") ? "noopener noreferrer" : ""}>
                <div className="contact-icon"><Icon size={18} /></div>
                <div className="contact-info-text">
                  <h4>{title}</h4>
                  <p>{value}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="c-section-label">Follow Me</p>
          <div className="contact-socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                style={{ "--hover-color": s.color, "--hover-glow": s.glow }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Cooldown Modal */}
      {cooldownModal.show && (
        <div className="modal-overlay" onClick={() => setCooldownModal({ show: false, remaining: 0 })}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="modal-icon">⏳</span>
            <p className="modal-message">Please wait <strong>{cooldownModal.remaining}s</strong> before sending another message.</p>
            <button className="modal-btn" onClick={() => setCooldownModal({ show: false, remaining: 0 })}>Got it</button>
          </div>
        </div>
      )}

    </section>
  );
}