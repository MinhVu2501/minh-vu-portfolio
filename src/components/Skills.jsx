export default function Skills() {
  const groups = [
    {
      name: 'Frontend',
      items: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { name: 'Database', items: ['PostgreSQL', 'MongoDB (basic)'] },
    { name: 'Tools', items: ['Git', 'GitHub', 'Netlify', 'Render', 'Postman'] },
    { name: 'Design', items: ['Responsive UI/UX', 'Flexbox', 'CSS animations'] },
  ];

  return (
    <div className="skills">
      {groups.map((g) => (
        <div className="skill-group" key={g.name}>
          <h3>{g.name}</h3>
          <div className="chips">
            {g.items.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


