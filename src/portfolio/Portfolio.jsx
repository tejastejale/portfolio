import { useRef } from "react";
import "./portfolio.scss";
import { motion,useScroll,useSpring, useTransform } from "framer-motion";
const items =[
    {
        id:1,
        title: "This Portfolio",
        img:"public/File 2.png.webp",
        dec: "Explore a showcase of my diverse skills and accomplishments in my carefully curated portfolio. From innovative projects to creative designs, my work reflects a passion for excellence. Dive into a visual journey that encapsulates my dedication, expertise, and commitment to delivering outstanding results in every endeavor.",
        link: "https://myportfolio13.netlify.app",
        gitlink: "https://github.com/tejastejale/myportfolio"
    },
    {
        id:2,
        title:"Car Price Prediction",
        img:"public/File 1.jpg",
        dec: "In my data science project, I conducted extensive Exploratory Data Analysis (EDA) and implemented diverse models to predict car prices. Leveraging statistical insights and machine learning algorithms, I developed a comprehensive understanding of pricing dynamics. This project showcases my analytical and predictive skills in the realm of automotive data analysis.",
        link: "https://colab.research.google.com/drive/1A4X4u4-jp35heNzxdet4Q0CV0ZNvvwx3#scrollTo=0d61b5e3",
        gitlink: "https://github.com/tejastejale/DataScienceProjects"
    },
    {
        id:3,
        title:"Ecommance",
        img:"public/File 3.jpg.avif",
        dec: "Designed and developed a sleek e-commerce homepage using ReactJS for a seamless user experience. Implemented responsive design and interactive components to enhance functionality. Leveraged my skills in front-end development to create an engaging and visually appealing entry point for the online store. View my portfolio for more projects.",
        link: "https://firstshopping.netlify.app",
        gitlink: "https://github.com/tejastejale/Ecommerce"
    },
    {
        id:4,
        title:"Allen Solly Clone",
        img:"public/File 4.jpg.webp",
        dec: "Created a nostalgic homage to Allen Solly's classic website through meticulous HTML and CSS craftsmanship. The clone pays tribute to the brand's timeless design, showcasing my proficiency in front-end development. A testament to my keen eye for detail and dedication to recreating a beloved digital experience.",
        link:"https://curious-cannoli-71713a.netlify.app",
        gitlink: "https://github.com/tejastejale/old_allen_solly_clone"
    },
];

const Single =({ item })=>
{
    const ref=useRef();
    const {scrollYProgress} = useScroll({
        target: ref,});
    const y = useTransform(scrollYProgress,[0,1],[-200,200]);
    

    return <section>
        <div id="Works" className="con">
        <div className="wrapper">
        <div className="imageContainer"  ref={ref}>
        <img src={item.img} alt=''></img>
        </div>
            <motion.div className="textc" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.dec}</p>
                <br></br><hr></hr><br></br>
                <a href={item.link}><button>See Demo</button></a> <a href={item.gitlink}><button>See on Git</button></a>
                
            </motion.div>
        </div>
        </div>
    </section>
     
    
};

const Portfolio=()=>{
    const ref=useRef();
    
    const {scrollYProgress} = useScroll({target: ref, offset:["end end","start start"]});
    const scaleX= useSpring(scrollYProgress,{
        stiffness:50,
        damping:8,
        
    });
    
    return(
        <div className="portfolio" id="" ref={ref}>
                <div className="progress">
                    <h1>Featured Works</h1>
                    <motion.div style={{scaleX}} className="progressbar"> </motion.div>
                </div>
            {
                items.map((item)=>(
                    <Single item={item} key={item.id}></Single>
                ))
            }
        </div>
    );
};
export default Portfolio;