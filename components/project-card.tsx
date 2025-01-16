import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import '../src/styles/globals.css'

export default function ProjectCard(props: {
    description: string
    title: string
    link: string
    thumbnail: string | StaticImport 
}) {

    const handleClick = () => {
        window.open(props.link, '_blank');
    };


    return(
        <div
        className="hover-effect"
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            height: '400px',
            outline: '2px solid #1E1E1E',
            borderRadius: '10px',
            alignItems: 'center',
            cursor: 'pointer'
        }}             
        onClick={handleClick} // Add click listener
        >

            <div
            style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '250px',
            height: '250px',
            zIndex: '-1',
            marginTop: '30px',
            marginBottom: '17px'
            }}>
                <Image src={props.thumbnail}
                alt = "thumbnail"
                layout="fill"
                objectFit="cover"
                />
            </div>
            <h1
            style={{
                font: 'Poppins',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1E1E1E'
            }}>
                {props.title}
            </h1>
            <h3
            style={{
                font: 'Poppins',
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#1E1E1E',
                textAlign: 'center',
                width: '80%'
            }}>
                {props.description}
            </h3>
        </div>
    )
}