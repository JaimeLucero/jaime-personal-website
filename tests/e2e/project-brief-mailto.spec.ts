import { test, expect } from '@playwright/test';
import { buildProjectBriefMailtoUrl, CONTACT_EMAIL } from '../../src/contact/project-brief-mailto';

test('project brief mailto url encodes subject and body', () => {
  const mailtoUrl = buildProjectBriefMailtoUrl({
    senderName: 'Ada Lovelace',
    senderEmail: 'ada@example.com',
    projectDescription: 'Automate our invoice intake & reporting.',
  });

  const parsedUrl = new URL(mailtoUrl);
  expect(parsedUrl.protocol).toBe('mailto:');
  expect(parsedUrl.pathname).toBe(CONTACT_EMAIL);
  expect(parsedUrl.searchParams.get('subject')).toBe('Project inquiry from Ada Lovelace');
  expect(parsedUrl.searchParams.get('body')).toBe(
    'Name: Ada Lovelace\nEmail: ada@example.com\n\nAutomate our invoice intake & reporting.'
  );
});
