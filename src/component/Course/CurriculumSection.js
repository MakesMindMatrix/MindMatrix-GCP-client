import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri'; // or any arrow icon you prefer
import './CurriculumSection.css';

const CurriculumSection = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="course_curriculum_section">
      {modules && modules.length > 0 ? (
        modules.map((module, idx) => (
          <div className="course_curriculum_module" key={idx}>
            <button
              className={`course_curriculum_module_header${openIndex === idx ? ' active' : ''}`}
              onClick={() => handleToggle(idx)}
            >
              <span>{`${module.title}`}</span>
              <RiArrowDropDownLine className={`curriculum_module_arrow${openIndex === idx ? ' active' : ''}`} />
            </button>
            <div
              className="course_curriculum_module_body"
              style={{
                maxHeight: openIndex === idx ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease'
              }}
            >
              <p className="course_curriculum_module_description">{module.description}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>No modules available.</h1>
      )}
    </div>
  );
};

export default CurriculumSection;