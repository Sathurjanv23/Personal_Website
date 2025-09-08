{/* Certifications Section */}
			<section id="certifications" className="certifications" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '2rem 0'}}>
				<div style={{textAlign: 'center'}}>
					<h2 style={{color: '#3182ce', fontSize: '2rem', marginBottom: '18px', textAlign: 'center'}}>Certifications</h2>
					<ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem'}}>
						<li style={{marginBottom: '12px'}}>
							<strong>SkillUp Free Online Courses (Simplilearn):</strong> <a href="https://www.simplilearn.com/skillup-free-online-courses" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', textDecoration: 'underline'}}>View Certificate</a>
						</li>
						{/* Add more certifications here as needed */}
					</ul>
				</div>
			</section>
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
	const [achievementInput, setAchievementInput] = useState('');
	const [testimonialInput, setTestimonialInput] = useState('');
	const [items, setItems] = useState([]);
	// Skills data for card layout
	const skillsData = [
		{
			name: 'HTML',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
			level: 90
		},
		{
			name: 'CSS',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
			level: 85
		},
		{
			name: 'JavaScript',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
			level: 80
		},
		{
			name: 'REACT',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
			level: 70
		},
		{
			name: 'BOOTSRAP',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
			level: 85
		},
		{
			name: 'C',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
			level: 88
		},
		{
			name: 'Vite.js',
			icon: 'https://vitejs.dev/logo.svg',
			level: 60
		}
	];

	const handleAdd = (e) => {
		e.preventDefault();
		if (achievementInput || testimonialInput) {
			setItems([...items, { achievement: achievementInput, testimonial: testimonialInput }]);
			setAchievementInput('');
			setTestimonialInput('');
		}
	};
	const handleRemove = (idx) => {
		setItems(items.filter((_, i) => i !== idx));
	};

	return (
		<div className="App">
			{/* Navigation Bar */}
					<nav className="navbar" style={{background: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.08)', padding: '0 32px', position: 'sticky', top: 0, zIndex: 100}}>
						<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px'}}>
							<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
								{/* SJ Logo Circle */}
								<div style={{width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #3182ce 60%, #fff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(49,130,206,0.12)'}}>
									<span style={{fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', letterSpacing: '2px'}}>SJ</span>
								</div>
								<span className="logo" style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#3182ce'}}>Sathurjan</span>
							</div>
							<ul style={{display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0}}>
								<li><a href="#home" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Home</a></li>
								<li><a href="#about" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>About</a></li>
								<li><a href="#skills" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Skills</a></li>
								<li><a href="#projects" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Projects</a></li>
								<li><a href="#experience" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Experience</a></li>
								<li><a href="#achievements" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Achievements</a></li>
								<li><a href="#contact" style={{color: '#181717', textDecoration: 'none', fontWeight: '600'}}>Contact</a></li>
							</ul>
						</div>
					</nav>
			{/* Home (Hero) Section - Reference Style */}
			<section className="hero" style={{background: 'url(https://www.transparenttextures.com/patterns/black-linen.png), #181a1b', padding: '48px 0 32px 0', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
				<h1 style={{fontWeight: 'bold', fontSize: '2.8rem', color: '#2196f3', marginBottom: '18px', letterSpacing: '2px'}}>
					<span style={{color: '#2196f3'}}>Welcome</span> <span style={{color: '#fff'}}>to My Portfolio</span>
				</h1>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px'}}>
					<img
						src="/WhatsApp Image 2025-09-03 at 17.08.34_40b737de.jpg"
						alt="Profile"
						style={{width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 8px 32px rgba(49,130,206,0.22)', border: '6px solid #2196f3', marginBottom: '12px'}}
					/>
					<div style={{marginBottom: '8px', fontSize: '1.1rem', color: '#ffd600', fontWeight: 'bold'}}>Hello, I'm</div>
					<div style={{fontWeight: 'bold', fontSize: '2.4rem', color: '#ffd600', letterSpacing: '2px', marginBottom: '8px'}}>
						SATHURJAN <span style={{color: '#2196f3'}}>VIJITHAKUMARASENA</span>
					</div>
					<div style={{color: '#ffd600', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px'}}>Developer | Designer | Student | Educator | Creator</div>
					<a href="#contact" style={{background: '#2196f3', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', padding: '14px 32px', borderRadius: '24px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(49,130,206,0.10)', margin: '18px 0', display: 'inline-block'}}>Contact Info</a>
					<div style={{display: 'flex', gap: '18px', justifyContent: 'center', marginTop: '12px'}}>
						<a href="https://lk.linkedin.com/in/vijithakumarasena-sathurjan-aaa602325" target="_blank" rel="noopener noreferrer" style={{color: '#2196f3'}}>
							<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.102-.021-2.521-1.537-2.521-1.537 0-1.773 1.2-1.773 2.438v4.687h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v4.74z"/></svg>
						</a>
						<a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
							<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.414 3.635 1.381 2.668 2.348 2.385 3.521 2.326 4.798.267 8.741.254 8.332.254 12c0 3.259.013 3.668.072 4.948.059 1.277.342 2.45 1.309 3.417.967.967 2.14 1.25 3.417 1.309 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.45-.342 3.417-1.309.967-.967 1.25-2.14 1.309-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.342-2.45-1.309-3.417-.967-.967-2.14-1.25-3.417-1.309C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
						</a>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
							<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.64 1.01 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
						</a>
					</div>
				</div>
			</section>
			{/* About Section - Reference Style */}
			<section id="about" className="about" style={{background: 'url(https://www.transparenttextures.com/patterns/black-linen.png), #181a1b', borderRadius: '18px', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', padding: '2.5rem 1.5rem', margin: '2rem 0'}}>
				<h2 style={{color: '#2196f3', fontWeight: 'bold', fontSize: '2.6rem', textAlign: 'center', marginBottom: '0.5rem', letterSpacing: '2px'}}>About Me</h2>
				<div style={{color: '#ffd600', textAlign: 'center', fontWeight: 'bold', marginBottom: '1.2rem', fontSize: '1rem'}}>Get to Know more</div>
				<div style={{display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start', justifyContent: 'center'}}>
					<img src="/sathu.jpg" alt="About Me" style={{width: '340px', height: '340px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 8px 32px rgba(49,130,206,0.22)', marginBottom: '18px'}} />
					<div style={{flex: 1, minWidth: '320px'}}>
						<div style={{color: '#2196f3', fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.5rem'}}>
							<span style={{borderLeft: '4px solid #ffd600', paddingLeft: '10px'}}>A little bit <span style={{color: '#fff'}}>about me</span></span>
						</div>
						<div style={{color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem'}}>
							I am currently pursuing my <span style={{color: '#2196f3'}}>BSc Hons in Information Technology </span> at the University of Moratuwa.<br />
							I am passionate about applying my academic knowledge to real-world projects, continuously learning and growing in the field of software development and machine learning.
						</div>
						<div style={{color: '#2196f3', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
							<span style={{borderLeft: '4px solid #ffd600', paddingLeft: '10px'}}>Personal <span style={{color: '#fff'}}>interests</span></span>
						</div>
						<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))', gap: '18px'}}>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.64 1.01 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Web Development</span>
								</div>
								<div style={{color: '#2196f3'}}>Exploring different genres and improving my skills.</div>
							</div>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Frontend Development</span>
								</div>
								<div style={{color: '#2196f3'}}>I focus on creating interactive, responsive, and visually appealing user interfaces.</div>
							</div>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Design</span>
								</div>
								<div style={{color: '#2196f3'}}>I bring designs to life with interactive and responsive user interfaces.</div>
							</div>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>UX Design</span>
								</div>
								<div style={{color: '#2196f3'}}>Studying user experience principles.</div>
							</div>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>AI Development</span>
								</div>
								<div style={{color: '#2196f3'}}>Learning to use AI tools to enhance my creations.</div>
							</div>
							<div style={{background: '#232b36', borderRadius: '12px', padding: '1.2rem', color: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>
								<div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
									<svg width="32" height="32" fill="#2196f3" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
									<span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Machine Learning</span>
								</div>
								<div style={{color: '#2196f3'}}>I'm interested to study, using machine learning to extract insights and build data-driven solutions.</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Education Section - Timeline Style */}
			<section id="education" className="education" style={{margin: '2.5rem 0', padding: '1.5rem 0'}}>
    <h2 style={{color: '#2196f3', fontWeight: 'bold', fontSize: '2.2rem', textAlign: 'center', marginBottom: '2rem', letterSpacing: '2px'}}>Education</h2>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', maxWidth: '900px', margin: '0 auto'}}>
        {/* Timeline vertical line */}
        <div style={{position: 'absolute', left: '50%', top: '60px', bottom: '0', width: '6px', background: 'linear-gradient(to bottom, #2196f3 0%, #ffd600 100%)', transform: 'translateX(-50%)', zIndex: 0}}></div>
        {/* Web Development Card */}
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '48px', position: 'relative', zIndex: 1, width: '100%'}}>
            <div style={{flex: '0 0 120px', display: 'flex', justifyContent: 'center'}}>
                <img src="/ecommerce.jpeg" alt="Web Development Icon" style={{width: '100px', height: '100px', borderRadius: '50%', border: '8px solid #2196f3', background: '#232b36', boxShadow: '0 4px 16px rgba(49,130,206,0.18)'}} />
            </div>
            <div style={{flex: 1, marginLeft: '32px', background: '#232b36', borderRadius: '24px', boxShadow: '0 4px 32px rgba(49,130,206,0.10)', padding: '2rem', position: 'relative'}}>
                <div style={{color: '#2196f3', fontWeight: 'bold', fontSize: '2rem', marginBottom: '0.5rem'}}>
                    <span style={{borderLeft: '6px solid #ffd600', paddingLeft: '12px'}}>Web <span style={{color: '#fff'}}>Development</span></span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '0.8rem'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontWeight: 'bold'}}>
                        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.64 1.01 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                        Self Learning
                    </span>
                    <span style={{background: '#ffd600', color: '#232b36', fontWeight: 'bold', borderRadius: '18px', padding: '6px 18px', fontSize: '1rem'}}>2024 Jan</span>
                </div>
                <div style={{background: '#14213d', borderRadius: '16px', padding: '1rem', color: '#fff', fontSize: '1.08rem', marginTop: '0.5rem'}}>
                    Passionate self-learner in web development, exploring cutting-edge technologies to create interactive and responsive web experiences. Proficient in HTML, CSS, and JavaScript, with hands-on experience in React.js for building modern user interfaces. Dedicated to expanding knowledge through online tutorials, projects, and continuous practice. Committed to turning innovative ideas into functional solutions while staying updated with industry trends. My self-learning journey reflects a strong work ethic and enthusiasm for mastering web technologies.
                </div>
            </div>
        </div>
        {/* BSc(Hons) Card */}
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '48px', position: 'relative', zIndex: 1, width: '100%'}}>
            <div style={{flex: '0 0 120px', display: 'flex', justifyContent: 'center'}}>
                <img src="/WhatsApp Image 2025-09-03 at 17.08.34_40b737de.jpg" alt="University Icon" style={{width: '100px', height: '100px', borderRadius: '50%', border: '8px solid #2196f3', background: '#232b36', boxShadow: '0 4px 16px rgba(49,130,206,0.18)'}} />
            </div>
            <div style={{flex: 1, marginLeft: '32px', background: '#232b36', borderRadius: '24px', boxShadow: '0 4px 32px rgba(49,130,206,0.10)', padding: '2rem', position: 'relative'}}>
                <div style={{color: '#2196f3', fontWeight: 'bold', fontSize: '2rem', marginBottom: '0.5rem'}}>
								<span style={{borderLeft: '6px solid #ffd600', paddingLeft: '12px'}}>BSc(Hons) <span style={{color: '#fff'}}>in Information Technology</span></span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '0.8rem'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontWeight: 'bold'}}>
                        <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.64 1.01 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                        University of Moratuwa
                    </span>
                    <span style={{background: '#ffd600', color: '#232b36', fontWeight: 'bold', borderRadius: '18px', padding: '6px 18px', fontSize: '1rem'}}>2024 May</span>
                </div>
                <div style={{background: '#14213d', borderRadius: '16px', padding: '1rem', color: '#fff', fontSize: '1.08rem', marginTop: '0.5rem'}}>
								Earned a BSc(Hons) degree in Information Technology, focusing on algorithms, data structures, software engineering, and web development. Gained hands-on experience through various programming projects and boot camps.
                </div>
            </div>
        </div>
    </div>
</section>
			{/* Skills Section */}
			<section id="skills" className="skills" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '2rem'}}>
				<div style={{width: '100%', maxWidth: '1200px', background: '#0a2342', borderRadius: '18px', boxShadow: '0 4px 32px rgba(0,0,0,0.08)', padding: '2rem', marginBottom: '2rem'}}>
					<h2 style={{color: '#fff', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left', letterSpacing: '1px'}}>SKILLS</h2>
					<div style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'flex-start'}}>
						{skillsData.map((skill, idx) => (
							<div key={idx} style={{background: '#112d4e', borderRadius: '16px', padding: '1.2rem 1.5rem', minWidth: '320px', maxWidth: '340px', display: 'flex', alignItems: 'center', gap: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', marginBottom: '12px'}}>
								<img src={skill.icon} alt={skill.name + ' logo'} style={{width: '56px', height: '56px', borderRadius: '50%', background: '#fff', boxShadow: '0 2px 8px rgba(49,130,206,0.10)', objectFit: 'contain'}} />
								<div style={{flex: 1}}>
									<div style={{fontWeight: 'bold', color: '#fff', fontSize: '1.3rem', marginBottom: '8px', letterSpacing: '1px'}}>{skill.name}</div>
									<div style={{width: '100%', background: '#dbeafe', borderRadius: '8px', height: '12px', marginBottom: '6px'}}>
										<div style={{width: skill.level + '%', background: '#3182ce', height: '100%', borderRadius: '8px', transition: 'width 0.6s'}}></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Projects Section */}
			<section id="projects" className="projects">
				<h2 style={{color: '#3182ce', fontSize: '2rem', marginBottom: '32px', textAlign: 'center'}}>Featured Projects</h2>
				{/* ...existing code... */}
				<div className="projects-grid" style={{display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center'}}>
					<div className="project-card" style={{background: '#fff', borderRadius: '24px', boxShadow: '0 4px 24px rgba(49,130,206,0.10)', padding: '32px 24px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer">
							<img src="/ecommerce.jpeg" alt="Project 1 - E-Commerce" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}} />
						</a>
						<h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#181717', marginBottom: '12px'}}>E-Commerce Platform</h3>
						<p style={{fontSize: '1rem', color: '#4a5568', marginBottom: '18px', textAlign: 'center'}}>Full-featured online store with payment integration, product management, and user authentication.</p>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{background: '#3182ce', color: '#fff', fontWeight: '700', fontSize: '1rem', padding: '12px 24px', borderRadius: '18px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>GitHub Repo</a>
					</div>
					<div className="project-card" style={{background: '#fff', borderRadius: '24px', boxShadow: '0 4px 24px rgba(49,130,206,0.10)', padding: '32px 24px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<a href="https://www.google.com/search?q=Sathurjan+Vijithakumarasena" target="_blank" rel="noopener noreferrer">
							<img src="/studies.jpeg" alt="Project 2 - Studies Related" style={{width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px', marginBottom: '18px', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}} />
						</a>
						<h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#181717', marginBottom: '12px'}}>Task Management App</h3>
						<p style={{fontSize: '1rem', color: '#4a5568', marginBottom: '18px', textAlign: 'center'}}>Responsive task management application with real-time updates.</p>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{background: '#3182ce', color: '#fff', fontWeight: '700', fontSize: '1rem', padding: '12px 24px', borderRadius: '18px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>View GitHub</a>
					</div>
					<div className="project-card" style={{background: '#fff', borderRadius: '24px', boxShadow: '0 4px 24px rgba(49,130,206,0.10)', padding: '32px 24px', maxWidth: '340px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center'}}>
							<img src="/github-logo.png" alt="GitHub Profile Logo" style={{width: '80px', height: '80px', marginBottom: '18px'}} />
						</a>
						<h3 style={{fontSize: '1.3rem', fontWeight: '700', color: '#181717', marginBottom: '12px'}}>My GitHub Projects</h3>
						<p style={{fontSize: '1rem', color: '#4a5568', marginBottom: '18px', textAlign: 'center'}}>Explore all my open source and personal projects on GitHub. See code, contributions, and more.</p>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{background: '#3182ce', color: '#fff', fontWeight: '700', fontSize: '1rem', padding: '12px 24px', borderRadius: '18px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(49,130,206,0.10)'}}>Visit GitHub</a>
					</div>
				</div>
			</section>

			{/* Experience Section */}
				<section id="experience" className="experience" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
					<h2 style={{textAlign: 'center'}}>Experience</h2>
					<div style={{fontSize: '1.1rem', marginTop: '12px', textAlign: 'center'}}>
						Intern, ABC Tech Solutions (2024)<br />
						Freelance Web Developer (2023-Present)
					</div>
				</section>

			{/* Achievements & Testimonials Section (Editable) */}
				<section id="achievements" className="achievements" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
					<h2 style={{textAlign: 'center'}}>Achievements & Testimonials</h2>
					<form className="achievements-form" style={{maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}} onSubmit={handleAdd}>
						<label style={{width: '100%', textAlign: 'center'}}>
							Achievement:
							<input type="text" name="achievement" value={achievementInput} onChange={e => setAchievementInput(e.target.value)} placeholder="Add your achievement here" style={{width: '100%', padding: '8px', marginTop: '4px'}} />
						</label>
						<label style={{width: '100%', textAlign: 'center'}}>
							Testimonial:
							<input type="text" name="testimonial" value={testimonialInput} onChange={e => setTestimonialInput(e.target.value)} placeholder="Add a testimonial here" style={{width: '100%', padding: '8px', marginTop: '4px'}} />
						</label>
						<button type="submit" style={{background: '#3182ce', color: '#fff', padding: '10px 24px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'}}>Add</button>
					</form>
					<div style={{maxWidth: '500px', margin: '24px auto 0', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
						{items.length === 0 && (
							<div style={{color: '#888', fontStyle: 'italic', marginTop: '8px', textAlign: 'center'}}>
								<p>No achievements or testimonials added yet.</p>
							</div>
						)}
						{items.map((item, idx) => (
							<div key={idx} style={{background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(49,130,206,0.10)', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', alignItems: 'center'}}>
								{item.achievement && <div style={{textAlign: 'center'}}><strong>Achievement:</strong> {item.achievement}</div>}
								{item.testimonial && <div style={{textAlign: 'center'}}><strong>Testimonial:</strong> {item.testimonial}</div>}
								<button onClick={() => handleRemove(idx)} style={{position: 'absolute', top: '12px', right: '12px', background: '#e53e3e', color: '#fff', border: 'none', borderRadius: '6px', padding: '4px 12px', cursor: 'pointer'}}>Remove</button>
							</div>
						))}
					</div>
				</section>

			{/* Contact Section */}
			<section id="contact" className="contact" style={{background: '#f8fafc', borderRadius: '16px', boxShadow: '0 2px 16px rgba(49,130,206,0.04)', padding: '2.5rem 2rem', margin: '2.5rem 0'}}>
				<h2 className="section-title" style={{color: '#3182ce', fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem'}}>Contact Me</h2>
				<p style={{fontSize: '1.1rem', color: '#181717', marginBottom: '1.5rem'}}>I’d love to hear from you! Feel free to reach out for collaborations, project inquiries, or just to connect.</p>
				<form className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '420px', margin: '0 auto 2rem auto'}}>
					<input type="text" placeholder="Your Name" required style={{padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem'}} />
					<input type="email" placeholder="Your Email" required style={{padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem'}} />
					<textarea placeholder="Your Message" rows="5" required style={{padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem'}}></textarea>
					<button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start', background: '#3182ce', color: '#fff', fontWeight: '600', fontSize: '1rem', padding: '0.6rem 1.6rem', borderRadius: '24px', border: 'none', cursor: 'pointer'}}>Send Message</button>
				</form>
				<div style={{margin: '2rem auto', maxWidth: '420px', textAlign: 'center', background: '#f8fafc', borderRadius: '12px', boxShadow: '0 2px 8px rgba(49,130,206,0.08)', padding: '1.5rem 1rem'}}>
					<h3 style={{color: '#3182ce', fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1rem'}}>Direct Contact Info</h3>
					<div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'}}>
						<div style={{fontWeight: 'bold', color: '#3182ce', fontSize: '1.05rem'}}>Email</div>
						<a href="mailto:sathurjanv23@gmail.com" style={{color: '#3182ce', fontWeight: '500', fontSize: '1.05rem', textDecoration: 'underline'}}>sathurjanv23@gmail.com</a>
						<div style={{fontWeight: 'bold', color: '#3182ce', fontSize: '1.05rem'}}>Phone</div>
						<a href="tel:0752650480" style={{color: '#3182ce', fontWeight: '500', fontSize: '1.05rem', textDecoration: 'underline'}}>0752650480</a>
						<div style={{fontWeight: 'bold', color: '#3182ce', fontSize: '1.05rem'}}>LinkedIn</div>
						<a href="https://lk.linkedin.com/in/vijithakumarasena-sathurjan-aaa602325" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', fontWeight: '500', fontSize: '1.05rem', textDecoration: 'underline'}}>LinkedIn Profile</a>
						<div style={{fontWeight: 'bold', color: '#3182ce', fontSize: '1.05rem'}}>GitHub</div>
						<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', fontWeight: '500', fontSize: '1.05rem', textDecoration: 'underline'}}>GitHub Profile</a>
					</div>
				</div>
				<div className="contact-social" style={{display: 'flex', gap: '1.2rem', justifyContent: 'center', marginTop: '1rem'}}>
					<a href="https://lk.linkedin.com/in/vijithakumarasena-sathurjan-aaa602325" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						{/* LinkedIn SVG */}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.102-.021-2.521-1.537-2.521-1.537 0-1.773 1.2-1.773 2.438v4.687h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v4.74z" fill="#3182ce"/></svg>
						LinkedIn
					</a>
					<a href="https://github.com/Sathurjanv23" target="_blank" rel="noopener noreferrer" style={{color: '#181717', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						{/* GitHub SVG */}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.18 9.18 0 0 1 2.49-.34c.85 0 1.71.12 2.49.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.63.72 1.01 1.64 1.01 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" fill="#181717"/></svg>
						GitHub
					</a>
					<a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						{/* Facebook SVG */}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.104c.733 0 1.326-.593 1.326-1.326V1.326C24 .592 23.408 0 22.675 0" fill="#3182ce"/></svg>
						Facebook
					</a>
					<a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
						{/* Instagram SVG */}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.414 3.635 1.381 2.668 2.348 2.385 3.521 2.326 4.798.267 8.741.254 8.332.254 12c0 3.259.013 3.668.072 4.948.059 1.277.342 2.45 1.309 3.417.967.967 2.14 1.25 3.417 1.309 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.45-.342 3.417-1.309.967-.967 1.25-2.14 1.309-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.342-2.45-1.309-3.417-.967-.967-2.14-1.25-3.417-1.309C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="#3182ce"/></svg>
						Instagram
					</a>
				</div>
				{/* Optionally, you can embed a map here. Example: */}
				<div style={{marginTop: '2rem', textAlign: 'center'}}>
					<iframe
						title="Location Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.2179342746!2d80.217!3d9.818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5b8e2b2e2e2b%3A0x2e2e2e2e2e2e2e2e!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1630938475632!5m2!1sen!2slk"
						width="100%"
						height="180"
						style={{border:0, borderRadius: '12px'}}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</section>
		</div>
	);
}

export default App;
