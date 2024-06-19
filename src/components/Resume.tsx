import { BookOpenText, Briefcase } from 'lucide-react';
import React from 'react';
import { educationData, experienceData } from '@/lib/resume';



const Resume = () => {
  return (
    <article className="resume">
    
      <section className="timeline">
        <div className="title-wrapper">
          <div >
            <div className='icon-box ml-[-8px] text-[#ffcd67] shadow-2xl  bg-[#373737] p-3 rounded-xl transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300'>
            <BookOpenText />
            </div>
    
          </div>
          <h3 className="h3 ">Education</h3>
        </div>

        <ol className="timeline-list">
          {educationData.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div>
          <div className='icon-box ml-[-8px] text-[#ffcd67] shadow-2xl  bg-[#373737] p-3 rounded-xl transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300'>
            <Briefcase/>
            </div>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experienceData.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
};

export default Resume;
