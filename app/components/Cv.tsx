import Image from "next/image";
import CvIcon, { type CvIconName } from "./CvIcon";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/LP-project-1";
const technicalSkills: { name: string; icon: CvIconName }[] = [
  { name: "Figma", icon: "figma" },
  { name: "Adobe XD", icon: "xd" },
  { name: "Adobe Photoshop", icon: "photoshop" },
  { name: "Adobe Illustrator", icon: "illustrator" },
];

export default function Cv() {
  return (
    <section className="cv-shell w-full overflow-hidden rounded-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.93fr_1.07fr]">
        <aside className="cv-sidebar p-4 pt-6 lg:p-6 lg:pt-6">
          <div className="cv-portrait mb-4 h-28 w-28 items-center justify-center overflow-hidden rounded-full">
            <Image
              src={`${basePath}/images/plants-4-removebg-preview.png`}
              alt="Plant portrait"
              className="h-full w-full object-cover"
              width={144}
              height={144}
            />
          </div>

          <div className="text-clip">
            <h1 className="text-[1.25rem] font-medium tracking-tight text-slate-900">Md Mehdi Hasan</h1>
            <p className="cv-subtitle mt-1 text-[1.05rem] font-light">UI/UX Designer</p>
          </div>

          <div className="mt-6">
            <h2 className="cv-section-title mb-3 text-[1.35rem]">Contact</h2>
            <ul className="cv-contact-list space-y-2 text-[0.8rem] font-normal">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center"><CvIcon name="mail" /></span>
                <span>testtest.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center"><CvIcon name="phone" /></span>
                <span>+8801111111</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center"><CvIcon name="location" /></span>
                <span>Joydevpur,Gazipur,Bangladesh</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="cv-section-title mb-3 text-[1.35rem]">Portfolio</h2>
            <ul className="cv-portfolio-list space-y-2 text-[0.8rem] font-normal">
              <li className="flex items-center gap-3">
                <span className="cv-mini-tag"><CvIcon name="behance" /></span>
                <span>www.behance.net/test</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="cv-mini-tag"><CvIcon name="dribbble" /></span>
                <span>www.dribbble.com/test</span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="cv-section-title mb-3 text-[1.35rem]">Hard Skills</h2>
            <ul className="cv-skill-list space-y-1.5 text-[0.8rem] font-normal">
              <li>Problem Solving</li>
              <li>Wireframing</li>
              <li>Responsive Design</li>
              <li>Usability Testing</li>
              <li>Prototyping</li>
              <li>High Fidelity Design</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="cv-section-title mb-3 text-[1.35rem]">Technical Skills</h2>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="cv-inline-icon"><CvIcon name={skill.icon} /></span>
                    <span className="text-[0.8rem] font-normal text-slate-900">{skill.name}</span>
                  </div>
                  <div className="cv-meter">
                    <span style={{ width: `${index === 0 ? 92 : index === 1 ? 88 : index === 2 ? 90 : 85}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="cv-section-title mb-3 text-[1.35rem]">Interest</h2>
            <div className="grid grid-cols-4 gap-2 text-center text-[0.7rem] font-normal text-slate-800">
              <div className="cv-interest-item">
                <div className="mx-auto mb-2 flex h-6 items-center justify-center"><CvIcon name="research" /></div>
                <div>Research</div>
              </div>
              <div className="cv-interest-item">
                <div className="mx-auto mb-2 flex h-6 items-center justify-center"><CvIcon name="travel" /></div>
                <div>Travel</div>
              </div>
              <div className="cv-interest-item">
                <div className="mx-auto mb-2 flex h-6 items-center justify-center"><CvIcon name="reading" /></div>
                <div>Reading</div>
              </div>
              <div className="cv-interest-item">
                <div className="mx-auto mb-2 flex h-6 items-center justify-center"><CvIcon name="writing" /></div>
                <div>Writing</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="cv-main p-4 pt-5 lg:flex lg:flex-col lg:justify-between lg:p-5 lg:pt-5">
          <section>
            <h2 className="cv-section-title text-[1.35rem]">Education</h2>
            <div className="cv-body-text mt-2 space-y-1 text-[0.8rem] leading-relaxed">
              <p><span className="font-bold">Institution:</span> Model Institute of Science and Technology (Under National University)</p>
              <p><span className="font-bold">Degree:</span> Bachelor of Science (BSC)</p>
              <p><span className="font-bold">Subject:</span> Computer Science and Engineering (CSE)</p>
              <p><span className="font-bold">Result:</span> G.P.A-In Progress (Last Semester)</p>
            </div>
          </section>

          <section className="mt-5 lg:mt-0">
            <h2 className="cv-section-title text-[1.35rem]">Work Experience</h2>
            <p className="cv-body-text mt-2 text-[0.8rem] leading-relaxed">
              Hi, This is Mehdi, In the last 1 years of my UI/UX Designing carrier, I have always tried to make more creative &amp; challenging projects than others. I fell interested to do Web &amp; Mobile App UI/UX, and other designs. I&#39;m looking forward to 100% customer satisfaction &amp; deadline. I always try to be creative &amp; want to do challenging projects. Thanks
            </p>
          </section>

          <section className="mt-5 lg:mt-0">
            <h2 className="cv-section-title text-[1.35rem]">Soft Skills</h2>
            <ul className="cv-body-text mt-2 space-y-1 text-[0.8rem]">
              <li>Client Interviewing</li>
              <li>Requirements Gathering</li>
              <li>Presentation</li>
              <li>Project Management</li>
              <li>Resource Management</li>
              <li>Business Planning</li>
              <li>Market Research</li>
            </ul>
          </section>

          <section className="mt-5 lg:mt-0">
            <h2 className="cv-section-title text-[1.35rem] uppercase tracking-tight">Career Objective</h2>
            <p className="cv-body-text mt-2 text-[0.8rem] leading-relaxed">
              As a young professional I would like to service in any organization where deed are highly appreciated and to build up my career in a challenging and rewarding position at a winning organization where creativity sincerity skill and performance are the criteria one&#39;s appraisal and recognition
            </p>
          </section>

          <section className="mt-5 lg:mt-0">
            <h2 className="cv-section-title text-[1.35rem]">Languages</h2>
            <ul className="cv-body-text mt-2 space-y-1 text-[0.8rem]">
              <li>English</li>
              <li>Bangla</li>
              <li>Hindi</li>
            </ul>
          </section>
        </main>
      </div>
    </section>
  );
}
