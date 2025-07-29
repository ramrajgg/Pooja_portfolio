import { useState } from "react";
import Navbar from "../components/Navbar";

const blogs = [
  {
    title: "Why Facing Your Fears Makes You a Cool (and Confident) Developer",
    published: "Jan 10, 2025",
    subHeading:
      "Overwhelmed by coding? Stuck in tech? Scared to start? Fear kills progress — but today, we’re flipping the script. Let’s kill fear instead and have fun while we’re at it.",
    readMoreLink:
      "https://medium.com/@reeyagupta53/why-facing-your-fears-makes-you-a-cool-and-confident-developer-5ae59dc8f192",
  },
  {
    title: "Coding with Impostor Syndrome: The Invisible Battle Most Developers Fight Alone",
    published: "Jan 22, 2025",
    subHeading:
      "Unmasking Self-Doubt: Why Imposter Syndrome Could Be Your Secret Weapon in Tech.",
    readMoreLink:
      "https://medium.com/@reeyagupta53/coding-with-impostor-syndrome-the-invisible-battle-most-developers-fight-alone-68fbba6a1a24",
  },
  {
    title: "Is It Luck or Logic? A Techie’s Guide to Luck, Logic, and the Great Unknown",
    published: "April 19, 2025",
    subHeading:
      "A Techie’s Guide to Luck, Logic, and the Great Unknown",
    readMoreLink:
      "https://medium.com/@reeyagupta53/is-it-luck-or-logic-87848d607884",
  },
];

export default function Blogs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle accordion
  };

  return (
    <section className="bg-cornsilk text-dark-moss-green py-16 px-8">
      <Navbar />
      <div>
        <h2 className="cormorant-garamond-light text-5xl text-tigers-eye mb-2">
          BLOGS
        </h2>
        <p className="cormorant-garamond-light text-2xl text-dark-moss-green mb-8">
        <span className=" text-darkmoss-green font-bold">Welcome to my blog section</span>! 
        Here, I pen down my thoughts on coding, tech struggles, and everything 
        in between. Whether you&rsquo;re a beginner
        or a seasoned developer, I hope you find motivation 
        and leave here feeling inspired.
      </p>
      </div>
      <div className="space-y-1">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border border-tigers-eye rounded-lg overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 cormorant-garamond-light text-xl font-bold flex justify-between items-center bg-cornsilk hover:bg-earth-yellow transition-colors"
            >
              <div>
                <p className="text-2xl text-dark-moss-green">{blog.title}</p>
                <p className="text-tigers-eye cormorant-garamond-light text-lg">
                  Published: {blog.published}
                </p>
              </div>
              <span className="text-tigers-eye text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div className="px-6 py-2 bg-cornsilk">
                <p className="text-dark-moss-green cormorant-garamond-light text-lg">
                  {blog.subHeading}
                </p>
                <div className="flex justify-end">
                  <a
                    href={blog.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tigers-eye cormorant-garamond-light font-bold text-lg hover:underline hover:text-dark-moss-green"
                  >
                    Read more &gt;&gt;
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
