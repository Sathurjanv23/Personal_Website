import React from 'react';
import './App.css';

function Education() {
  return (
    <div className="education-root" style={{padding: '48px 0', background: 'linear-gradient(90deg, #3182ce 10%, #fff 100%)'}}>
      <div style={{maxWidth: '700px', margin: '0 auto', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 24px rgba(49,130,206,0.10)', padding: '40px 32px'}}>
        <h1 style={{fontSize: '2.2rem', fontWeight: '800', color: '#3182ce', marginBottom: '24px'}}>My Education & Study Journey</h1>
        <ul style={{fontSize: '1.2rem', color: '#181717', lineHeight: '2', listStyle: 'disc inside'}}>
          <li><strong>School:</strong> Velaval Hindu College</li>
          <li><strong>O/L Level:</strong> Completed at Velaval Hindu College</li>
          <li><strong>A/L Level:</strong> Studied at Velaval Hindu College</li>
          <li><strong>A/L Subjects:</strong> Combined Maths, Physics, Chemistry</li>
          <li><strong>Current A/L Study:</strong> University Entrance Preparation</li>
          <li><strong>Live Location:</strong> Point Pedro, Jaffna, Sri Lanka</li>
          <li><strong>Certification:</strong> <a href="https://www.simplilearn.com/skillup-free-online-courses" target="_blank" rel="noopener noreferrer" style={{color: '#3182ce', textDecoration: 'underline'}}>SkillUp Free Online Courses (Simplilearn)</a></li>
        </ul>
        <div style={{marginTop: '32px', color: '#4a5568', fontSize: '1rem'}}>
          <p><strong>About My Study:</strong> I am passionate about science and technology, and my A/L studies have helped me build a strong foundation for my future career in IT and engineering. I am currently preparing for university entrance and actively involved in academic and extracurricular activities.</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
