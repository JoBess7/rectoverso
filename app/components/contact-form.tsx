"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Nom : ${fields.get("name") ?? ""}`,
      `Courriel : ${fields.get("email") ?? ""}`,
      `Téléphone : ${fields.get("phone") || "Non indiqué"}`,
      `Préférence de contact : ${fields.get("preference") ?? ""}`,
      `Service : ${fields.get("service") ?? ""}`,
      "",
      `Message : ${fields.get("message") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:info@cliniquerectoverso.ca?subject=${encodeURIComponent("Demande d’information — Clinique Recto Verso")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <p className="section-index">Écrivez-nous</p>
        <h2>Comment pouvons-nous<br /><span>vous aider?</span></h2>
      </div>
      <div className="contact-form-fields">
        <label>Votre nom<input name="name" autoComplete="name" required /></label>
        <label>Votre courriel<input name="email" type="email" autoComplete="email" required /></label>
        <label><span className="contact-label">Téléphone <span>(facultatif)</span></span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Service souhaité
          <select name="service" defaultValue="Question générale">
            <option>Question générale</option>
            <option>Ergothérapie</option>
            <option>Orthophonie</option>
            <option>Éducation spécialisée</option>
            <option>Psychoéducation</option>
            <option>Offres de groupes</option>
          </select>
        </label>
        <label className="contact-form-wide">Votre message<textarea name="message" rows={5} required /></label>
        <label>Préférence de contact
          <select name="preference" defaultValue="Par courriel">
            <option>Par courriel</option>
            <option>Par téléphone</option>
          </select>
        </label>
      </div>
      <p className="contact-privacy-note">En cliquant sur « Préparer le courriel », votre application de messagerie s’ouvrira. N’y incluez pas de renseignements médicaux.</p>
      <button className="button button-dark" type="submit">Préparer le courriel <span aria-hidden="true">↗</span></button>
    </form>
  );
}
