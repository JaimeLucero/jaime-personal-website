'use client'
import Header from "../../components/header"
import Image from "next/image"
import ProjectCard from "../../components/project-card"
import Footer from "../../components/footer"


export default function Page() {
  const skillsIcon = [
    "git.svg",
    "figma.svg",
    "next.svg",
    "python.svg",
    "java.svg",
    "typescript.svg"
  ]

  const contactIcon = [
    "mail.svg",
    "instagram.svg",
    "linkedin.svg",
    "upwork.svg",
    "github.svg"
  ]


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
            flexDirection: window.innerWidth <= 1080 ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: window.innerWidth <= 1080 ? 'center' : 'flex-start',
            width: '70%',
            margin: '0 auto' // Center the container
          }}>
            <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: window.innerWidth <= 1080 ? '100%' : '30vw'
            }}>
              <h1
              style={{
                font: 'Poppins',
                fontSize: window.innerWidth <= 1080 ? '1.5rem' : '2rem',
                color: 'white',
                fontWeight: '900'
              }}
              >
                Jaime Emanuel
              </h1>
              <h1
              style={{
                font: 'Poppins',
                fontSize: window.innerWidth <= 1080 ? '2rem' : '2.5rem',
                color: '#38502C',
                fontWeight: '900'
              }}>
                Lucero
              </h1>
              <h3
              style={{
                textAlign: 'center',
                font: 'Poppins',
                fontSize: window.innerWidth <= 1080 ? '1.2rem' : '1.5rem',
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
                width: window.innerWidth <= 1080 ? '70px' : '100px',
                height: window.innerWidth <= 1080 ? '70px' : '100px',
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
            flexDirection: window.innerWidth <= 1080 ? 'column' : 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20vw'
          }}>
            <ProjectCard title="DSC USeP-Obrero Website" description="Landing page for DSC USeP-Obrero Chapeter, formerly GDSC USeP-Obrero." thumbnail="dsc-website.svg" />
            <ProjectCard title="RiceLense" description="A streamlit application for classifying rice grains using images." thumbnail="ricelense.svg"/>
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
                  width: window.innerWidth <= 1080 ? '70px' : '100px',
                  height: window.innerWidth <= 1080 ? '70px' : '100px',
                }}>
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
