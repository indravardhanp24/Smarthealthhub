import React, { useEffect, useState } from "react";
import { Header, HeaderHero } from "../../components";
import { useParams } from "react-router-dom";

let blogs = [
    {
        image:"/assets/images/health.avif",
        title:"Exploring the Link Between Physical and Emotional Health",
        content:`Examine the intricate relationship 
        between physical and emotional health, highlighting the profound impact of emotions on bodily systems and vice versa. Discuss the science behind the mind-body connection, including the role of stress hormones, neurotransmitters, and the nervous system in influencing both physical and emotional well-being. Explore holistic approaches to health that address the interconnectedness of mind and body, such as yoga, tai chi, and mindfulness-based stress reduction. Provide practical tips and strategies for cultivating emotional resilience, managing stress, and fostering a balanced 
        lifestyle that supports overall health and vitality.`
    },
    {
        image:"/assets/images/health1.jpg",
        title:"Strategies for Better Sleep Hygiene",
        content:`Explore the importance 
        of quality sleep for physical and mental health, productivity, and overall well-being. Discuss the factors that contribute to poor sleep quality, such as stress, technology use, and irregular sleep schedules. Offer evidence-based strategies and lifestyle adjustments for improving sleep hygiene, including creating a relaxing bedtime routine, optimizing sleep environment, and practicing relaxation techniques. Provide insights into the connection between sleep and mental health, highlighting the role of sleep in regulating mood, cognition, and emotional resilience. Empower readers to prioritize restorative 
        sleep as a cornerstone of their health and vitality.`
    },
    {
        image:"/assets/images/health2.webp",
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
        image:"/assets/images/health3.jpg",
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
const BlogDetails = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	useEffect(() => {
		setBlog(blogs.filter((blog, index) => index == id)[0]);
	}, []);
	return (
		<div className="body">
			<Header />
			<div className="wrapper1">
				<HeaderHero heading={blog?.title}/>
				<div className="blog-details">
					<h2>{ blog?.title }</h2>
					<img src={blog?.image} />
					<p>{blog?.content }</p>
				</div>
			</div>
		</div>
	)
}

export default BlogDetails;