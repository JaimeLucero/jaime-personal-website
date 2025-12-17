'use client'
import React, { useEffect, useMemo, useState } from "react"
import Header from "../../components/header"
import Image from "next/image"
import ProjectCard from "../../components/project-card"
import Footer from "../../components/footer"
import { useWindowSize } from '../hooks/windowContextProvider';
import { supabase } from '../data/supabase';

type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
};

export default function Page() {
  const skillsIcon = useMemo(() => [
    "git.svg",
    "figma.svg",
    "next.svg",
    "python.svg",
    "java.svg",
    "typescript.svg"
  ], []); 

  const contactIcon = useMemo(() => [
    "mail.svg",
    "instagram.svg",
    "linkedin.svg",
    "upwork.svg",
    "github.svg"
  ], []); 

  const contactLink = useMemo(() => [
    "jaimeemanuellucero@gmail.com",
    "https://www.instagram.com/je_smuty/",
    "https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/",
    "https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share",
    "https://github.com/JaimeLucero"
  ], []); 

  const isMobile = useWindowSize(); 

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const handleIconClick = (index: number) => {
    if (index === 0) {
      navigator.clipboard.writeText(contactLink[index]);
      alert("Email address copied to clipboard!");
    } else {
      window.open(contactLink[index], '_blank');
    }
  };

  async function fetchProjects() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from<'projects', Project>('projects').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      console.error('fetchProjects error', err);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div
    style={{
      display: "flex",
      flexDirection: 'column',
      alignContent: "center"
    }}>
      <Header/>
      <section id="home">
        <div
        style={{
          paddingTop: '100px',
          background: '#1E1E1E',
          minHeight: '80vh',
          width: '100%',
          borderBottomLeftRadius: '30%',
          borderBottomRightRadius: '30%',
          justifyItems: "center",
          position: 'relative', 
        }}>
          <div
          className="responsive-container"
          style={{
            paddingTop: '10vh',
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            width: '70%',
            margin: '0 auto' // Center the container
          }}>
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: isMobile ? '100%' : '30vw'
            }}>
              <h1
              style={{
                font: 'Poppins',
                fontSize: isMobile ? '1.5rem' : '2rem',
                color: 'white',
                fontWeight: '900'
              }}
              >
                Jaime Emanuel
              </h1>
              <h1
              style={{
                font: 'Poppins',
                fontSize: isMobile ? '2rem' : '2.5rem',
                color: '#38502C',
                fontWeight: '900'
              }}>
                Lucero
              </h1>
              <h3
              style={{
                textAlign: 'center',
                font: 'Poppins',
                fontSize: isMobile ? '1.2rem' : '1.5rem',
                fontWeight: 'normal'
              }}>
                I am a software developer and currently studying Computer Science and Data Science at University of Southeastern Philippines.
              </h3>
            </div>
            <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '30vh',
              height: '30vh',
            }}>
              <Image src="pfp.svg"
              alt = "profile"
              layout="fill"
              objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div
        style={{
          paddingTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          paddingBottom: '20vh',
          gap: '10vh'
        }}>
          <h1
          style={{
            font: 'Poppins',
            fontSize: '2rem',
            color: '#1E1E1E',
            fontWeight: '900'
          }}
          >
            Skills
          </h1>
          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '5vw',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center' // Center vertically
          }}>
            {skillsIcon.map((path, index) => (
              <div 
              className="hover-effect"
              key={index}
              style={{
                display: 'flex',
                position: 'relative',
                width: isMobile ? '70px' : '100px',
                height: isMobile ? '70px' : '100px',
              }}>
                  <Image src={path} alt={`icon-${index}`} layout= "fill"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div
        style={{
          paddingTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          paddingBottom: '20vh',
          gap: '10vh'
        }}>
          <h1
          style={{
            font: 'Poppins',
            fontSize: '2rem',
            color: '#1E1E1E',
            fontWeight: '900'
          }}>
            Deployed Projects
          </h1>
          <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20vw'
          }}>
            {loading ? (
              <p style={{ color: '#666' }}>Loading…</p>
            ) : (
              projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  thumbnail={p.thumbnail || ''}
                  link={p.link || ''}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <section id="talk">
        <div
        style={{
          paddingTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          paddingBottom: '20vh',
          gap: '10vh'
        }}>
          <h1
          style={{
            font: 'Poppins',
            fontSize: '2rem',
            color: '#1E1E1E',
            fontWeight: '900'
          }}>
            Let&apos;s Talk
          </h1>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', // Center horizontally
          }}>
          <h1
            style={{
              font: 'Poppins',
              fontSize: '1.5rem',
              color: '#1E1E1E',
              fontWeight: 'normal',
              textAlign: 'center'
            }}>
              Connect with me through these platforms:
            </h1>
            <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '5vw',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center' // Center vertically
            }}>
              {contactIcon.map((path, index) => (
                <div 
                className="hover-effect"
                key={index}
                style={{
                  display: 'flex',
                  position: 'relative',
                  width: isMobile ? '70px' : '100px',
                  height: isMobile ? '70px' : '100px',
                  cursor: 'pointer'
                }}
                onClick={() => handleIconClick(index)} // Add click listener
                >
                  <Image src={path} alt={`icon-${index}`}
                  layout= "fill"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
