import React from 'react'
import { Card, Footer, Header, HeaderHero } from '../../components';
import "./index.css";
import { Link } from 'react-router-dom';

let services = [
    {
        image:"assets/images/health.avif",
        title:"Exploring the Link Between Physical and Emotional Health",
        content:`Examine the intricate relationship 
        between physical and emotional health, highlighting the profound impact of emotions on bodily systems and vice versa. Discuss the science behind the mind-body connection, including the role of stress hormones, neurotransmitters, and the nervous system in influencing both physical and emotional well-being. Explore holistic approaches to health that address the interconnectedness of mind and body, such as yoga, tai chi, and mindfulness-based stress reduction. Provide practical tips and strategies for cultivating emotional resilience, managing stress, and fostering a balanced 
        lifestyle that supports overall health and vitality.`
    },
    {
        image:"assets/images/health1.jpg",
        title:"Strategies for Better Sleep Hygiene",
        content:`Explore the importance 
        of quality sleep for physical and mental health, productivity, and overall well-being. Discuss the factors that contribute to poor sleep quality, such as stress, technology use, and irregular sleep schedules. Offer evidence-based strategies and lifestyle adjustments for improving sleep hygiene, including creating a relaxing bedtime routine, optimizing sleep environment, and practicing relaxation techniques. Provide insights into the connection between sleep and mental health, highlighting the role of sleep in regulating mood, cognition, and emotional resilience. Empower readers to prioritize restorative 
        sleep as a cornerstone of their health and vitality.`
    },
    {
        image:"assets/images/health2.webp",
        title:" Fueling Your Body for Optimal Health",
        content:`Delve into the benefits of a
         plant-based diet for overall health and well-being. 
         Explore the science behind plant-based nutrition, 
         highlighting the abundance of vitamins, minerals, 
         antioxidants, and fiber found in fruits, vegetables, legumes, 
         and whole grains. Discuss the potential health benefits of 
         a plant-based diet, including lower risk of chronic 
         diseases such as heart disease, diabetes, and certain 
         cancers. Provide practical tips and delicious plant-based 
         recipes to help readers transition to a more plant-focused eating pattern, promoting better 
        health outcomes and environmental sustainability.`
    },

    {
        image:"assets/images/health3.jpg",
        title:"Integrating Mind, Body, and Spirit",
        content:`Explore holistic approaches to 
        mental health that encompass the interconnectedness of mind,
         body, and spirit. Discuss the importance of addressing mental
          health concerns through a comprehensive lens that considers 
          lifestyle factors, emotional well-being, and spiritual practices. 
          Explore holistic modalities such as mindfulness meditation, yoga, aromatherapy, and acupuncture, and their therapeutic benefits for managing stress, anxiety, and depression. Offer guidance on creating personalized holistic wellness plans that prioritize self-care, inner healing, 
        and holistic balance for optimal mental health and resilience.`
    }

];  
const Blog = () => {
  return (
    <div className='body' >
        <Header/>
        <div className='wrapper1' >
        <div className='blog' >
            <div className='top' >
                <div>
                    <h1>HEALTH SOLUTIONS</h1>
                    <h1>A Healthier Life Is</h1>
                    <h1>One Click Away.</h1>
                    <p>
                        <button style={{
                            height:40,
                        }}  ><Link to={"/"} style={{textDecoration:"none",color:"#ffffff"}}>Book a clinic</Link></button>
                    </p>
                </div>
                <div>
                <img src='assets/images/doctor.jpg' />
                </div>
            </div>
            <div className='services1'>
                <div className='left'>
                    <img src='assets/images/health4.jpg' />
                    <p>Health services made easier.</p>
                </div>
                <div className='right'>
                          {
                              services.map((item, index) => {
                                  return <RightComponent index={index} image={item.image} content={item.content.length>60?`${item.content.substring(0,60)}...`:item.content} />
                              })
                        }
                </div>
            </div>
            <div style={{
                width:"100%",
                marginBottom:20
            }} >
                <h2 style={{
                    textAlign:"center",
                    margin:10,
                }}>RECENT BLOGS
                </h2>
            </div>
            <div className='services' >
                {
                    services.map((item,index)=>{
                        return(
                            <Card image={item.image}>
                                <div style={{color:"#ffffff",zIndex:1}} >
                                    <h4 style={{
                                        textAlign:"center",
                                        fontSize:20,

                                    }}>{item.title}</h4>
                                    {item.content.length>300?`${item.content.substring(0,300)}...`:item.content}
                                </div>
                                <button style={{ position: "absolute", bottom: 5, width: "90%", zIndex: 1 }} >
                                    <Link to={`/blog/${index}`} style={{color:"#ffffff", textDecoration:"none"}}>
                                         Read more
                                    </Link>
                                   
                                </button>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
        <div style={{
            marginTop:40,
        }}/>
        <HeaderHero heading={"Why choose us"}/>
        <h3>Patient-Centered Approach</h3>
        <p> Our team of dedicated healthcare 
            professionals is committed to putting you at the forefront of every decision. We listen attentively to your concerns, respect your preferences, and collaborate with you to develop personalized treatment plans that align with your goals and values.
        </p>
        <h3>Expertise and Excellence</h3>
        <p>
        With years of experience and expertise in the healthcare industry, our clinicians, physicians, and staff members are highly skilled and trained to deliver exceptional care across a wide range of medical specialties. We adhere to the highest standards of quality and safety to ensure optimal outcomes for every patient.
        </p>
        <h3>State-of-the-Art Facilities</h3>
        <p>
            Our state-of-the-art facilities are equipped with the latest medical technologies and advanced diagnostic tools to support accurate diagnoses and effective treatments. From diagnostic imaging and laboratory services to surgical suites and rehabilitation centers, we offer comprehensive healthcare services under one roof for your convenience and comfort.
        </p>
        <h3>Compassionate Caregivers</h3>
        <p>
            We understand that navigating health challenges can be daunting, which is why our compassionate caregivers are here to support you every step of the way. From your initial consultation to post-treatment follow-up, we provide compassionate care and emotional support to help you feel empowered and reassured throughout your healthcare journey.
        </p>
        <h3>Commitment to Excellence</h3>
        <p>
        Our commitment to excellence extends beyond clinical care to encompass a culture of continuous improvement and innovation. We are dedicated to staying abreast of the latest advancements in medical research and technology to deliver cutting-edge treatments and superior outcomes for our patients.
        </p>
        </div>
        <Footer/>
    </div>
  )
}


const RightComponent = ({ image, content,index }) => {

    return (
        <Link to={`/blog/${index}`} style={{textDecoration:"none",color:"var(--secondary-color"}} className='div'>

                              <img src={image} />
                              <div style={{width:"100%"}} >
                                  {content}
                              </div>
            
        </Link>
    )
}
export default Blog