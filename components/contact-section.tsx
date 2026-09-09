'use client';
import React, { useState } from 'react';
import { CONTACT_EMAIL, buildProjectBriefMailtoUrl } from '../src/contact/project-brief-mailto';

type ProfileLink = {
  label: string;
  href: string;
  handle: string;
};

const PROFILE_LINKS: ProfileLink[] = [
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, handle: CONTACT_EMAIL },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/', handle: 'jaime-emanuel-lucero' },
  { label: 'GitHub', href: 'https://github.com/JaimeLucero', handle: 'JaimeLucero' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share', handle: 'Freelancer profile' },
];

const FIELD_CLASS_NAME =
  'w-full border-0 border-b border-panel-rule/30 bg-transparent px-0 py-2 text-base text-panel-ink placeholder:text-panel-ink/40 focus:border-accent focus:ring-0';
const LABEL_CLASS_NAME = 'block font-mono text-xs uppercase tracking-[0.12em] text-panel-ink/60';

export default function ContactSection() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildProjectBriefMailtoUrl({ senderName, senderEmail, projectDescription });
  };

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-7 lg:col-span-3">
        <label className={LABEL_CLASS_NAME}>
          Your name
          <input
            name="senderName"
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            required
            autoComplete="name"
            className={FIELD_CLASS_NAME}
          />
        </label>
        <label className={LABEL_CLASS_NAME}>
          Your email
          <input
            name="senderEmail"
            type="email"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
            required
            autoComplete="email"
            className={FIELD_CLASS_NAME}
          />
        </label>
        <label className={LABEL_CLASS_NAME}>
          What do you need built?
          <textarea
            name="projectDescription"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
            required
            rows={5}
            className={`${FIELD_CLASS_NAME} resize-y`}
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded bg-accent px-6 py-3 font-medium text-paper transition-all hover:-translate-y-0.5 hover:bg-accent-strong">
            Send Project Brief
          </button>
          <span className="text-sm text-panel-ink/60">Opens your email app with the message filled in.</span>
        </div>
      </form>

      <div className="lg:col-span-2">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">Or reach me directly</p>
        <ul data-testid="profile-links" className="mt-3 divide-y divide-panel-rule/15 border-y border-panel-rule/15">
          {PROFILE_LINKS.map((profileLink) => (
            <li key={profileLink.label}>
              <a
                href={profileLink.href}
                target={profileLink.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-3">
                <span className="font-display text-base font-bold text-panel-ink">{profileLink.label}</span>
                <span className="text-right font-mono text-xs text-panel-ink/60 [overflow-wrap:anywhere] group-hover:text-panel-ink">{profileLink.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
