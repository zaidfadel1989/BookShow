import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About",id:'about'},
    {name:"Submissions",id:'services'},
    {name:"Publication",id:'team'},
    {name:"Boards",id:'project'},
    {name:"Testimonial",id:'testimonial'},

];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Julius Caesar",
    image:building_5,
    description: "by William Shakespeare is a historical tragedy written during the late 16th century. The play centers around the themes of power, ambition, betrayal, and the moral implications of political action, focusing on the life and assassination of Roman leader Julius Caesar and its aftermath. At the start of the play, we are introduced to the political climate of Rome, where commoners celebrate Caesar's triumph, despite the attempts of tribunes Flavius"
    },
  {
    title:"A history of ancient Greece in its Mediterranean context",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"From tipi to skyscraper",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"The Tao of physics",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title:"Economics",
    image:building_9,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title:"The virtual community",
    image:building_10,
    description:`Howard Rheingold has been called the First Citizen of the Internet. In this book he tours the "virtual community" of online networking. He describes a community that is as real and as much a mixed bag as any physical community - one where people talk, argue, seek information, organize politically, fall in love, and dupe others.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile3,
    name:'Emmanuel Joseph',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:profile4,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:profile5,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:blog_1,
      category:"Building",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"The Importance of Quality Craftsmanship in Construction",
      image:blog_2,
      category:"Construction",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Innovative Technologies Transforming the Construction Industry",
      image:blog_3,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const contacts = [
  {
    name: "Email",
    value: "zfadel989@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:zfadel989@gmail.com",
    button: "Send Email"
  },
  {
    name: "Phone",
    value: "(123) 456-7890",
    icon: <FaPhone />,
    link: "tel:1234567890",
    button: "Call Now"
  },
  {
    name: "WhatsApp",
    value: "+1 773-543-5969",
    icon: <FaWhatsapp />,
    link: "https://wa.me/17735435969",
    button: "Chat on WhatsApp"
  },
  // {
  //   name: "Address",
  //   value: "111 Westover Ln, Schaumburg IL",
  //   icon: <FaMapMarkerAlt />,
  //   link: "https://www.google.com/maps?q=111+Westover+Ln,+Schaumburg,+IL",
  //   button: "Find Us"
  // },
  
];




export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Submissions",id:'services'},
          {name:"Publication",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Boards",id:'blog'},
        ]
      },
]


