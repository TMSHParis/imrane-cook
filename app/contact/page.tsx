"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          Contact
        </h1>
        <p className="jp-divider text-warm text-sm mb-4">お問い合わせ</p>
        <p className="text-text-muted">
          Une question, une suggestion ou simplement envie de partager votre
          amour de la cuisine japonaise ? Écrivez-nous.
        </p>
      </div>

      {submitted ? (
        <div className="bg-bg-white rounded-2xl p-12 border border-border text-center">
          <span className="text-6xl block mb-4">🙏</span>
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            Merci !
          </h2>
          <p className="text-text-muted">
            Votre message a bien été envoyé. Nous vous répondrons dans les
            meilleurs délais.
          </p>
          <p
            className="text-warm text-sm mt-4"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            ありがとうございます
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-bg-white rounded-2xl p-8 sm:p-10 border border-border space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-text mb-2"
            >
              Sujet
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
            >
              <option value="question">Question sur une recette</option>
              <option value="suggestion">Suggestion de recette</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm resize-none"
              placeholder="Votre message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-full text-sm uppercase tracking-widest transition-colors duration-300 font-medium"
          >
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}
