'use client';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../data/supabase';
import Image from 'next/image';
import { Session } from '@supabase/supabase-js';

type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
};

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  // Listen for auth changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => listener.subscription.unsubscribe();
  }, []);

  async function fetchProjects() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from<Project>('projects').select('*');
      if (error) throw error;
      setProjects(data ?? []);
    } catch (err) {
      console.error('fetchProjects error', err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (session) fetchProjects();
  }, [session]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setEmail('');
      setPassword('');
    } catch (err: any) {
      console.error('signIn error', err);
      alert(err.message || 'Sign in failed');
    } finally {
      setAuthLoading(false);
    }
  }

  async function logout() {
    try {
      await supabase.auth.signOut();
      setSession(null);
      setProjects([]);
      cancelEdit();
    } catch (err) {
      console.error('signOut error', err);
    }
  }

  function startEdit(p: Project) {
    setEditingId(p.id);
    setTitle(p.title);
    setDescription(p.description);
    setLink(p.link ?? '');
    setThumbnail(p.thumbnail ?? '');
  }

  function cancelEdit() {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setLink('');
    setThumbnail('');
  }

  async function saveProject(e?: React.FormEvent) {
    e?.preventDefault();
    if (!title.trim()) return alert('Title required');

    const payload = { title, description, link: link || null, thumbnail: thumbnail || null };

    try {
      if (editingId) {
        const { error } = await supabase.from('projects').update(payload).eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('projects').insert([payload]);
        if (error) throw error;
      }
      await fetchProjects();
      cancelEdit();
    } catch (err) {
      console.error('saveProject error', err);
      alert('Failed to save project');
    }
  }

  async function deleteProject(id: string) {
    if (!confirm('Delete this project?')) return;
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      setProjects(prev => prev.filter(p => p.id !== id));
      if (editingId === id) cancelEdit();
    } catch (err) {
      console.error('deleteProject error', err);
      alert('Failed to delete project');
    }
  }

  if (!session) {
    return (
      <div style={styles.container}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} required />
          <button type="submit" style={styles.button} disabled={authLoading}>{authLoading ? 'Signing in…' : 'Sign in'}</button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <h2>Projects Admin</h2>
        <button onClick={logout} style={styles.buttonAlt}>Logout</button>
      </div>

      <section style={styles.card}>
        <h3>{editingId ? 'Edit Project' : 'New Project'}</h3>
        <form onSubmit={saveProject} style={styles.formColumn}>
          {thumbnail && (
            <div style={{ marginBottom: 8, position: 'relative', width: 200, height: 120 }}>
              <Image src={thumbnail} alt="Thumbnail preview" fill style={{ objectFit: 'cover', borderRadius: 6 }} />
            </div>
          )}
          <input placeholder="Thumbnail URL (optional)" value={thumbnail} onChange={e => setThumbnail(e.target.value)} style={styles.input} />
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} />
          <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={styles.textarea} />
          <input placeholder="Link (optional)" value={link} onChange={e => setLink(e.target.value)} style={styles.input} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="submit" style={styles.button}>{editingId ? 'Save' : 'Create'}</button>
            {editingId && <button type="button" onClick={cancelEdit} style={styles.buttonAlt}>Cancel</button>}
          </div>
        </form>
      </section>

      <section style={styles.card}>
        <h3>Existing Projects ({projects.length})</h3>
        {loading ? <p style={{ color: '#666' }}>Loading…</p> : projects.length === 0 ? <p style={{ color: '#666' }}>No projects yet.</p> :
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {projects.map(p => (
              <li key={p.id} style={styles.projectRow}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flex: 1 }}>
                  {p.thumbnail && <div style={{ position: 'relative', width: 120, height: 80 }}>
                    <Image src={p.thumbnail} alt={`${p.title} thumbnail`} fill style={{ objectFit: 'cover', borderRadius: 6 }} />
                  </div>}
                  <div style={{ flex: 1 }}>
                    <strong>{p.title}</strong>
                    <p style={{ margin: '4px 0', color: '#333' }}>{p.description}</p>
                    {p.link && <a href={p.link} target="_blank" rel="noreferrer" style={{ color: '#0366d6' }}>{p.link}</a>}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={() => startEdit(p)} style={styles.smallButton}>Edit</button>
                  <button onClick={() => deleteProject(p.id)} style={styles.deleteButton}>Delete</button>
                </div>
              </li>
            ))}
          </ul>}
      </section>
    </div>
  );
}

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: { maxWidth: 900, margin: '32px auto', padding: 16, fontFamily: 'Inter, ui-sans-serif, system-ui' },
  form: { display: 'flex', gap: 8, flexDirection: 'column', alignItems: 'center' },
  formColumn: { display: 'flex', gap: 8, flexDirection: 'column' },
  input: { padding: '8px 10px', borderRadius: 6, border: '1px solid #ddd', minWidth: 240 },
  textarea: { padding: 10, borderRadius: 6, border: '1px solid #ddd', minHeight: 80, resize: 'vertical' },
  button: { padding: '8px 12px', borderRadius: 6, border: 'none', background: '#0366d6', color: 'white', cursor: 'pointer' },
  buttonAlt: { padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', background: 'white', cursor: 'pointer' },
  card: { marginTop: 16, padding: 16, borderRadius: 8, border: '1px solid #eee', background: 'white' },
  projectRow: { display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid #f3f3f3', alignItems: 'center' },
  smallButton: { padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', background: 'white', cursor: 'pointer' },
  deleteButton: { padding: '6px 8px', borderRadius: 6, border: 'none', background: '#e55353', color: 'white', cursor: 'pointer' },
};
