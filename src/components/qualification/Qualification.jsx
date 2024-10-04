import { useState } from 'react';
import './qualification.css';
import { FaUserGraduate } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='qualification' className='qualification section'>
      <h1 className='small-title'>My Personal Journey</h1>
      <h2 className='medium-title'>Qualification</h2>

      <div className='container qualification__container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <FaUserGraduate className='qualification__icon' /> Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <FaBriefcase className='qualification__icon' />
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Bachelor of science in Computer Science</h3>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2020 - 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

          

            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>SPM</h3>
                <span className='qualification__subtitle'>SMKUA</span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2017 - 2018
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Web Developer</h3>
                <span className='qualification__subtitle'>
                  Logicwise Sdn Bhd
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Developer</h3>
                <span className='qualification__subtitle'>
                  Techouz Solutions
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2019 - 2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div className='text-right'>
                <h3 className='qualification__title'>Assistant Manager</h3>
                <span className='qualification__subtitle'>
                  MSD Digital Intelligence
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2017 - 2019
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Support Staff</h3>
                <span className='qualification__subtitle'>
                  BolehVPN Sdn Bhd
                </span>
                <div className='qualification__calendar'>
                  <AiOutlineCalendar className='qualification__calendar-icon' />
                  2017 - 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
