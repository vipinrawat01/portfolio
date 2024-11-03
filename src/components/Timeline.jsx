import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from './data';

const Timeline = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='mt-44 px-10 w-full flex flex-col items-center'>
      <VerticalTimeline>
        {Experience &&
          Experience.slice(0, showMore ? Experience.length : 3).map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(21, 24, 31)' }}
              date={n.date}
              iconStyle={{ background: 'rgb(21, 24, 31)', color: '#888' }}
              icon={n.iconsSrc}
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      {Experience.length > 3 && (
        <button onClick={toggleShowMore} className="mt-4 p-2 bg-gray-800 text-gray-400 rounded">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Timeline;
