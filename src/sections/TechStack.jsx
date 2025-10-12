import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full  h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          // sub="My Key Skills"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {techStackIcon.modelPath ? (
                    <TechIconCardExperience model={techStackIcon} />
                  ) : (
                    <img src={techStackIcon.imgPath} alt={techStackIcon.name} className="w-full h-full object-contain" />
                  )}
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Nice Write-up Section */}
        <div className="mt-20 w-full">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              My Journey Into Development
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-white-50">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Four years ago, I was in construction - purely because I loved building things. Then I decided to change my career and study to become a developer. I figured it would be the same kind of building, just in a different way. And honestly? I love this way more.
                </p>
                <p className="text-lg leading-relaxed">
                  I put my head down and started studying, doing hours of Udemy courses and any course I could get my hands on. I found a job, did a few contracting gigs, then worked for DevCraftHouse, and now I'm at my current position.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm very good with HTML and pride myself on my CSS skills. I'm a frontend JavaScript developer who keeps learning new tech and loves taking on projects. Don't think you can punish me by giving me a frontend to build or fix - I actually love it!
                </p>
                <p className="text-lg leading-relaxed">
                  I love the styling part but also love a challenge to get a frontend working the way it's intended. I do game development in JavaScript, Unity, and Godot (very new still). I enjoy Tailwind but am a firm believer that if you know your CSS properly, you don't need that. I love clean code and take pride in it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
