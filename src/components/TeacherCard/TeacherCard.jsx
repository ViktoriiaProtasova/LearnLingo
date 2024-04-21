import React from 'react';
import PropTypes from 'prop-types';
import { LuBookOpen } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { iconSize } from '../../constants';
import { StyledTeacherCard } from './TeacherCard.styled';
import TeacherLevel from 'components/TeacherLevel/TeacherLevel';
import avatar1x from '../../images/image1x.jpg';
import avatar2x from '../../images/image2x.jpg';
import avatar3x from '../../images/image3x.jpg';

const avatarUrl = `${avatar1x} 1x, ${avatar2x} 2x, ${avatar3x} 3x`;

const TeacherCard = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url = avatarUrl,
  lesson_info,
  conditions,
  experience,
  isOnline,
}) => {
  return (
    <StyledTeacherCard>
      <div className="teacher-avatar">
        <div className="teacher-avatar-thumb">
          <img
            className="teacher-avatar-img"
            srcset={avatar_url ?? avatarUrl}
            src={avatar_url ?? avatar1x}
            alt={`${name} ${surname}`}
          />
          <div className="online"></div>
        </div>
      </div>
      <div className="grid-row teacher-about">
        <FiHeart size={iconSize.lg} className="heart" />
        <div className="teacher-name-wrapper">
          <p>Languages</p>
          <b className="teacher-name">
            {name}
            {surname}
          </b>
        </div>

        <div className="teacher-score">
          <div>
            <LuBookOpen />
            <p>Lessons online</p>
          </div>
          <div>Lessons done: {lessons_done}</div>
          <div>
            <FaStar className="star" />
            <p>Rating: {rating}</p>
          </div>
          <div>
            <p className="price">
              Price / 1 hour: <span>${price_per_hour}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid-row teacher-info">
        <div className="teacher-info-general">
          <p className="speaks">
            {/* <span>
              Speaks:
              {languages.map(language => {
                return { language };
              })}
            </span> */}
          </p>
          <p>
            <span>Lesson Info: {lesson_info}</span>
          </p>
          <p>
            {/* <span>
              Conditions:
              {conditions.map(condition => {
                return { condition };
              })}
            </span> */}
          </p>
        </div>
        <a href="">Read more</a>
      </div>
      <div className="teacher-experience"></div>
      {/* <div className="grid-row teacher-level">
        {levels.map(level => {
          return <TeacherLevel level={level}></TeacherLevel>;
        })}
      </div> */}
    </StyledTeacherCard>
  );
};

TeacherCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string.isRequired),
  levels: PropTypes.arrayOf(PropTypes.string.isRequired),
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ),
  price_per_hour: PropTypes.number.isRequired,
  lessons_done: PropTypes.number.isRequired,
  avatar_url: PropTypes.string.isRequired,
  lesson_info: PropTypes.string.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.string.isRequired),
  experience: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default TeacherCard;
