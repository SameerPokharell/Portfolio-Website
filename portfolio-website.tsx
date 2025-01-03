import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const lightTheme = {
    primary: 'bg-white',
    secondary: 'bg-gray-100',
    text: 'text-gray-800',
    card: 'bg-white',
    accent: 'bg-purple-600',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700',
  };

  const darkTheme = {
    primary: 'bg-gray-900',
    secondary: 'bg-gray-800',
    text: 'text-white',
    card: 'bg-gray-700',
    accent: 'bg-purple-500',
    button: 'bg-purple-500',
    buttonHover: 'hover:bg-purple-600',
  };

  const theme = isDark ? darkTheme : lightTheme;

  const certifications = [
    {
      title: "Professional Digital Marketing Certification",
      issuer: "IIDE",
      year: "2024"
    }
  ];

  const languages = [
    { name: "Nepali", level: "Native" },
    { name: "Hindi", level: "Fluent" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Basic" }
  ];

  const skills = [
    { name: "Computer", level: "Experienced" },
    { name: "MERN Stack", level: "Experienced" },
    { name: "Problem-solving", level: "Skillful" },
    { name: "Web Content Writing", level: "Experienced" },
    { name: "Digital Marketing", level: "Beginner" },
    { name: "AI/ML", level: "Beginner" }
  ];

  const achievements = [
    "Developed a mobile app called Smart Tasker",
    "Completed a final-year project in Object Detection with hands-on technical implementation",
    "Participated in KEC lite hackathon to enhance practical knowledge"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.primary} ${theme.text}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`${theme.card} p-3 rounded-full shadow-lg transition-transform transform hover:scale-110`}
        >
          {isDark ? '🌞' : '🌙'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
        <div className="space-y-8 max-w-4xl">
          <div className="relative mx-auto w-48 h-48 mb-8">
            <img
              src="/api/placeholder/400/400"
              alt="Sameer Pokharel"
              className={`rounded-full object-cover shadow-2xl border-4 ${theme.accent}`}
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">
            Sameer Pokharel
          </h1>
          <p className="text-xl opacity-80 mb-8 animate-fade-in-delay">
            Computer Engineering Student & Frontend Developer
          </p>
          <div className="flex space-x-8 justify-center mb-8">
            {/* Social Links */}
            <a href="https://github.com/SameerPokharell" 
               className={`${theme.text} hover:text-purple-400 transition-colors text-sm flex flex-col items-center space-y-2`}>
              <div className={`w-8 h-8 border-2 border-current rounded-full flex items-center justify-center`}>
                <span className="font-bold">GH</span>
              </div>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sameer-pokharel-0142262b8/" 
               className={`${theme.text} hover:text-purple-400 transition-colors text-sm flex flex-col items-center space-y-2`}>
              <div className={`w-8 h-8 border-2 border-current rounded-full flex items-center justify-center`}>
                <span className="font-bold">IN</span>
              </div>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:sameer.077bct073@acem.edu.np" 
               className={`${theme.text} hover:text-purple-400 transition-colors text-sm flex flex-col items-center space-y-2`}>
              <div className={`w-8 h-8 border-2 border-current rounded-full flex items-center justify-center`}>
                <span className="font-bold">@</span>
              </div>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className={`py-20 px-4 ${theme.secondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg opacity-80 leading-relaxed">
            I am a Computer Science student passionate about technology and problem-solving. 
            Currently working as a Frontend Developer at Iten Solutions, I enjoy learning new skills, 
            working on creative projects, and improving my knowledge in fields like cybersecurity and 
            digital marketing.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className={`${theme.card} p-8 rounded-lg mb-6`}>
            <h3 className="text-2xl font-bold mb-2">Bachelors in Computer Engineering</h3>
            <p className="opacity-80 mb-4">Advanced College of Engineering and Management • Kathmandu • April, 2022 - Present</p>
            <p className="opacity-80">
              Studying Computer Engineering with focus on programming, databases, networking, and technology fundamentals.
              Building strong problem-solving skills through practical and theoretical learning.
            </p>
          </div>
          <div className={`${theme.card} p-8 rounded-lg`}>
            <h3 className="text-2xl font-bold mb-2">+2 Education</h3>
            <p className="opacity-80">New Horizon College • Butwal, Nepal</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-4 ${theme.secondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`${theme.card} p-6 rounded-lg transform hover:scale-105 transition-transform`}>
                <div className="flex items-center mb-4">
                  <div className={`w-2 h-2 ${theme.accent} rounded-full mr-2`}></div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <p className="opacity-80">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div key={index} className={`${theme.card} p-6 rounded-lg text-center`}>
                <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                <p className="opacity-80">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`py-20 px-4 ${theme.secondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${theme.card} p-6 rounded-lg`}>
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${theme.accent} rounded-full flex items-center justify-center mr-4`}>
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
          {certifications.map((cert, index) => (
            <div key={index} className={`${theme.card} p-8 rounded-lg`}>
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="opacity-80">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 px-4 ${theme.secondary}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg opacity-80 mb-8">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:sameer.077bct073@acem.edu.np" 
               className={`${theme.button} ${theme.buttonHover} px-6 py-3 rounded-lg transition-colors text-white`}>
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/sameer-pokharel-0142262b8/" 
               className={`${theme.card} hover:bg-opacity-90 px-6 py-3 rounded-lg transition-colors`}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme.primary} py-8 px-4 text-center`}>
        <p className="opacity-60">© 2024 Sameer Pokharel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
