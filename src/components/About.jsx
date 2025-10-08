import profileImg from '../../img/minhvu.jpeg';

export default function About() {
  const onImgError = (e) => {
    // Fallback to a simple placeholder if the photo is missing
    e.currentTarget.src = '/vite.svg';
  };

  return (
    <div className="about">
      <img className="about-photo" src={profileImg} alt="Profile photo of Minh Vu" onError={onImgError} />
      <div className="about-copy">
        <h3>Minh Vu — Full-Stack Web Developer</h3>
        <p>
          I’m a dedicated Full-Stack Web Developer with hands-on experience building modern, responsive websites
          using React, Node.js, Express, and Tailwind CSS. I focus on clean design, smooth user experience, and
          reliable functionality.
        </p>
        <p>
          I help small businesses, creators, and entrepreneurs turn ideas into fast, professional websites — from
          landing pages to full web applications. I currently work evenings in manufacturing and dedicate mornings
          and weekends to freelance web development.
        </p>
      </div>
    </div>
  );
}


