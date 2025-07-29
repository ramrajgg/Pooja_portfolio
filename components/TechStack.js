export default function EducationAndTechStack() {
    const skills = [
        "Content Designing",
        "Team Management",
        "Project Management",
        "Analysis",
        
    ];
    return (
      <section className="bg-cream py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
        <div className="bg-cream py-19 px-5">
          <h2 className="cormorant-garamond-regular text-4xl text-black py-5">EDUCATION</h2>
          <ul className="space-y-8">
            {/* First Education Item */}
            <li className=" cormorant-garamond-regular flex flex-col md:flex-row items-start md:items-center">
              <span className=" text-2xl  text-black mr-6">2022 - 2024</span>
              <div>
                <p className="text-2xl font-bold text-black mb-1">M.S. in Instructional Design, Development & Evaluation</p>
                <p className=" text-xl text-yellow italic">Syracuse University — NewYork, USA</p>
              </div>
            </li>
            {/* Second Education Item */}
            <li className=" cormorant-garamond-regular flex flex-col md:flex-row items-start md:items-center">
              <span className=" text-2xl  text-black mr-6">2008 - 2010</span>
              <div>
                <p className="text-2xl font-bold text-black mb-1">MBA in Marketing Management</p>
                <p className=" text-xl text-yellow italic">Rizvi Institute of Management Studies & Research — Mumbai, India       </p>   
              </div>
            </li>
            {/* Third Education Item */}
            <li className=" cormorant-garamond-regular flex flex-col md:flex-row items-start md:items-center">
              <span className=" text-2xl  text-black mr-6">2007 - 2008</span>
              <div>
                <p className="text-2xl font-bold text-black mb-1">Diploma in Marketing Management</p>
                <p className=" text-xl text-yellow italic">Welingkar Institute of Management Development & Research — Mumbai, India</p>
              </div>
            </li>
            {/* fourth Education Item */}
            <li className=" cormorant-garamond-regular flex flex-col md:flex-row items-start md:items-center">
              <span className=" text-2xl  text-black mr-6">2001 - 2006</span>
              <div>
                <p className="text-2xl font-bold text-black mb-1">B.A. in Economics</p>
                <p className=" text-xl text-yellow italic">Ruparel College, Mumbai University</p>
              </div>
            </li>
          </ul>
        </div>

  
          

        {/* Tech Stack Section */}
        <div>
            <h2 className="cormorant-garamond-regular text-4xl  text-black mb-6">SKILLS</h2>
            <div className="flex flex-wrap gap-5">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-yellow text-black text-lg font-bold rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
        </div>
      </section>
    );
  }
  