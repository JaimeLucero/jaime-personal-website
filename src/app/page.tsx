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
      <div
      style={{
        paddingTop: '100px',
        background: '#1E1E1E',
        height: '100vh',
        borderBottomLeftRadius: '30%',
        borderBottomRightRadius: '30%',
        justifyItems: "center",
        zIndex: '-2'
      }}>
        <div
        style={{
          paddingTop: '10vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '70%'
        }}>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '30vw'
          }}>
            <h1
            style={{
              font: 'Poppins',
              fontSize: '36px',
              color: 'white',
              fontWeight: '900'
            }}
            >
              Jaime Emanuel
            </h1>
            <h1
            style={{
              font: 'Poppins',
              fontSize: '40px',
              color: '#38502C',
              fontWeight: '900'
            }}>
              Lucero
            </h1>
            <h3
            style={{
              textAlign: 'center',
              font: 'Poppins',
              fontSize: '24px',
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
            zIndex: '-1'
          }}>
            <Image src="pfp.svg"
            alt = "profile"
            layout="fill"
            objectFit="cover"
            />
          </div>
        </div>
      </div>
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
          fontSize: '36px',
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
          gap: '5vw'
        }}>
          {skillsIcon.map((path, index) => (
            <div 
            key={index}
            style={{
              display: 'flex',
              position: 'relative',
              width: '100px',
              height: '100px',
              zIndex: '-1'
            }}>
              <Image src={path} alt={`icon-${index}`}
              layout= "fill"
              />
            </div>
          ))}
        </div>
      </div>
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
          fontSize: '36px',
          color: '#1E1E1E',
          fontWeight: '900'
        }}>
          Deployed Projects
        </h1>
        <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          gap: '20vw'
        }}>
          <ProjectCard title="DSC USeP-Obrero Website" description="Landing page for DSC USeP-Obrero Chapeter, formerly GDSC USeP-Obrero." thumbnail="dsc-website.svg" />
          <ProjectCard title="RiceLense" description="A streamlit application for classifying rice grains using images." thumbnail="ricelense.svg"/>
        </div>
      </div>
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
          fontSize: '36px',
          color: '#1E1E1E',
          fontWeight: '900'
        }}>
          Let&apos;s Talk
        </h1>
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <h1
          style={{
            font: 'Poppins',
            fontSize: '24px',
            color: '#1E1E1E',
            fontWeight: 'normal'
          }}>
            Connect with me through these platforms:
          </h1>
          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5vw'
          }}>
            {contactIcon.map((path, index) => (
              <div 
              key={index}
              style={{
                display: 'flex',
                position: 'relative',
                width: '100px',
                height: '100px',
                zIndex: '-1'
              }}>
                <Image src={path} alt={`icon-${index}`}
                layout= "fill"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}