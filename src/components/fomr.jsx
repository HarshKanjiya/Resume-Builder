import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MultilineDisplay from "./MultilineDisplay";
import Skill from "./skill";
import Profile from "../assets/Profile.png";
import { AnimatePresence, motion } from "framer-motion";

const deafultEdu = {
  course: "",
  place: "",
  duration: "",
};
const deafultLinks = {
  name: "",
  link: "",
};
const deafultExperiance = {
  name: "",
  dipscription: "",
};
const deafultProjects = {
  name: "",
  dipscription: "",
};

const Form = ({ value, setValue }) => {
  const navigate = useNavigate();

  const [hobbie, setHobbie] = useState("");
  const [skill, setSkill] = useState("");
  const [lang, setLang] = useState("");
  const [edu, setEdu] = useState(deafultEdu);
  const [link, setLink] = useState(deafultLinks);
  const [exp, setExp] = useState(deafultExperiance);
  const [project, setProject] = useState(deafultProjects);
  const [avatarPrev, setAvatarPrev] = useState(Profile);

  const ADDER = (type) => {
    switch (type) {
      case "hobbie":
        if (hobbie.trim()) {
          let t = value.hobbies;
          t.push(hobbie);
          setValue({ ...value, hobbies: t });
          setHobbie("");
        }
        break;
      case "skill":
        if (skill.trim()) {
          let t = value.skills;
          t.push(skill);
          setValue({ ...value, skills: t });
          setSkill("");
        }
        break;

      case "language":
        if (lang.trim()) {
          let t = value.languages;
          t.push(lang);
          setValue({ ...value, languages: t });
          setLang("");
        }
        break;

      case "edu":
        if (edu.course.trim() && edu.duration.trim() && edu.place.trim()) {
          let t = value.education;
          t.push(edu);
          setValue({ ...value, education: t });
          setEdu(deafultEdu);
        }
        break;
      case "link":
        if (link.name.trim() && link.link.trim()) {
          let t = value.links;
          t.push(link);
          setValue({ ...value, links: t });
          setLink(deafultLinks);
        }
        break;
      case "exp":
        if (exp.name.trim() && exp.dipscription.trim()) {
          let t = value.experiences;
          t.push(exp);
          setValue({ ...value, experiences: t });
          setExp(deafultExperiance);
        }
        break;
      case "project":
        if (project.name.trim() && project.dipscription.trim()) {
          let t = value.projects;
          t.push(project);
          setValue({ ...value, projects: t });
          setProject(deafultProjects);
        }
        break;

      default:
        break;
    }
  };
  const REMOVER = (type, ind) => {
    let temp = [];
    switch (type) {
      case "hobbie":
        value.hobbies.map((hobbie, index) => {
          if (index !== ind) {
            temp.push(hobbie);
          }
        });
        setValue({ ...value, hobbies: temp });
        break;

      case "skill":
        value.skills.map((skill, index) => {
          if (index !== ind) {
            temp.push(skill);
          }
        });
        setValue({ ...value, skills: temp });
        break;

      case "language":
        value.languages.map((l, index) => {
          if (index !== ind) {
            temp.push(l);
          }
        });
        setValue({ ...value, languages: temp });
        break;

      case "edu":
        value.education.map((ed, index) => {
          if (index !== ind) {
            temp.push(ed);
          }
        });
        setValue({ ...value, education: temp });
        break;
      case "link":
        value.links.map((link, index) => {
          if (index !== ind) {
            temp.push(link);
          }
        });
        setValue({ ...value, links: temp });
        break;
      case "exp":
        value.experiences.map((link, index) => {
          if (index !== ind) {
            temp.push(exp);
          }
        });
        setValue({ ...value, experiences: temp });
        break;
      case "project":
        value.links.map((link, index) => {
          if (index !== ind) {
            temp.push(project);
          }
        });
        setValue({ ...value, projects: temp });
        break;
    }
  };

  const HelperImageUpload = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
      if (reader.readyState === 2) {
        setAvatarPrev(reader.result);
        setValue({ ...value, img: reader.result });
      }
    };
  };

  return (
    <Wrapper
      id="divToPrint"
      layout
      key="formPage"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Master>
        <div className="navTop">FILL UP</div>
        <div className="body">
          <input
            placeholder="name"
            value={value.name}
            onChange={(event) => {
              setValue({ ...value, name: event.target.value });
            }}
          />
          <input
            placeholder="phone no"
            value={value.phone}
            onChange={(event) => {
              setValue({ ...value, phone: event.target.value });
            }}
          />
          <input
            placeholder="email"
            value={value.email}
            onChange={(event) => {
              setValue({ ...value, email: event.target.value });
            }}
          />
          <div className="ele">
            <input
              placeholder="age"
              value={value.age}
              onChange={(event) => {
                setValue({ ...value, age: event.target.value });
              }}
            />
            <input
              style={{ width: "100%" }}
              placeholder="profession"
              value={value.profession}
              onChange={(event) => {
                setValue({ ...value, profession: event.target.value });
              }}
            />
          </div>
          <textarea
            placeholder="address"
            value={value.address}
            onChange={(event) => {
              setValue({ ...value, address: event.target.value });
            }}
          />
          {/* hobies */}
          <AnimatePresence mode="wait">
            <Group layout>
              <div className="GrpTop">
                <p>add Hobbies</p>
              </div>
              <div className="GrpAdd">
                <input
                  placeholder="new Hobbie"
                  value={hobbie}
                  onChange={(event) => {
                    setHobbie(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    ADDER("hobbie");
                  }}
                >
                  +
                </button>
              </div>
              <AnimatePresence mode="wait">
                <GrpDisplay layout>
                  {value &&
                    value.hobbies.map((hobbie, index) => {
                      return (
                        <Skill
                          skillName={hobbie}
                          key={index}
                          index={index}
                          remove={REMOVER}
                          type="hobbie"
                        />
                      );
                    })}
                </GrpDisplay>
              </AnimatePresence>
            </Group>
          </AnimatePresence>
          {/* skills */}
          <Group layout>
            <div className="GrpTop">
              <p>add Skills</p>
            </div>
            <div className="GrpAdd">
              <input
                placeholder="new Skill"
                value={skill}
                onChange={(event) => {
                  setSkill(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  ADDER("skill");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.skills.map((skill, index) => {
                  return (
                    <Skill
                      skillName={skill}
                      key={index}
                      index={index}
                      remove={REMOVER}
                      type="skill"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>

          {/* lang */}
          <Group layout>
            <div className="GrpTop">
              <p>add your language</p>
            </div>
            <div className="GrpAdd">
              <input
                placeholder="new Language"
                value={lang}
                onChange={(event) => {
                  setLang(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  ADDER("language");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.languages.map((lang, index) => {
                  return (
                    <Skill
                      skillName={lang}
                      index={index}
                      key={index}
                      remove={REMOVER}
                      type="language"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>

          {/* edu */}
          <Group layout>
            <div className="GrpTop">
              <p>add your Qualifications</p>
            </div>
            <div className="GrpAdd">
              <div className="GrpMultiInput">
                <input
                  placeholder="course"
                  value={edu.course}
                  onChange={(event) => {
                    setEdu({ ...edu, course: event.target.value });
                  }}
                />
                <input
                  placeholder="place"
                  value={edu.place}
                  onChange={(event) => {
                    setEdu({ ...edu, place: event.target.value });
                  }}
                />
                <input
                  placeholder="duration"
                  value={edu.duration}
                  onChange={(event) => {
                    setEdu({ ...edu, duration: event.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  ADDER("edu");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.education.map((data, index) => {
                  return (
                    <MultilineDisplay
                      data={data}
                      key={index}
                      index={index}
                      remove={REMOVER}
                      type="edu"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>

          {/* /links */}
          <Group layout>
            <div className="GrpTop">
              <p>add your Links</p>
            </div>
            <div className="GrpAdd">
              <div className="GrpMultiInput">
                <input
                  placeholder="name"
                  value={link.name}
                  onChange={(event) => {
                    setLink({ ...link, name: event.target.value });
                  }}
                />
                <input
                  placeholder="link"
                  value={link.link}
                  onChange={(event) => {
                    setLink({ ...link, link: event.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  ADDER("link");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.links.map((data, index) => {
                  return (
                    <MultilineDisplay
                      data={data}
                      key={index}
                      index={index}
                      remove={REMOVER}
                      type="link"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>
          {/* exp */}
          <Group layout>
            <div className="GrpTop">
              <p>add your Experience</p>
            </div>
            <div className="GrpAdd">
              <div className="GrpMultiInput">
                <input
                  placeholder="experiences"
                  value={exp.name}
                  onChange={(event) => {
                    setExp({ ...exp, name: event.target.value });
                  }}
                />
                <textarea
                  placeholder="dipscription"
                  value={exp.dipscription}
                  onChange={(event) => {
                    setExp({ ...exp, dipscription: event.target.value });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  ADDER("exp");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.experiences.map((data, index) => {
                  return (
                    <MultilineDisplay
                      data={data}
                      key={index}
                      index={index}
                      remove={REMOVER}
                      type="exp"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>

          {/* projects */}
          <Group layout>
            <div className="GrpTop">
              <p>add your Projects</p>
            </div>
            <div className="GrpAdd">
              <div className="GrpMultiInput">
                <input
                  placeholder="name"
                  value={project.name}
                  onChange={(event) => {
                    setProject({ ...project, name: event.target.value });
                  }}
                />
                <textarea
                  placeholder="dipscription"
                  value={project.dipscription}
                  onChange={(event) => {
                    setProject({
                      ...project,
                      dipscription: event.target.value,
                    });
                  }}
                />
              </div>
              <button
                onClick={() => {
                  ADDER("project");
                }}
              >
                +
              </button>
            </div>
            <GrpDisplay layout>
              {value &&
                value.projects.map((data, index) => {
                  return (
                    <MultilineDisplay
                      data={data}
                      key={index}
                      index={index}
                      remove={REMOVER}
                      type="project"
                    />
                  );
                })}
            </GrpDisplay>
          </Group>

          <Group layout>
            <div className="GrpTop">
              <p>add your Projects</p>
            </div>

            <ImgUpload>
              <img src={avatarPrev} alt="img" accept="image/*" />
              <input
                type="file"
                id="fileinput"
                placeholder="upload image"
                onChange={HelperImageUpload}
              />
              <label htmlFor="fileinput" className="fileinput-label">
                Choose image
              </label>
            </ImgUpload>
          </Group>

          {/* call to action */}
          <Btns>
            <button
              className="reset"
              onClick={() => {
                setValue(deafultValues);
              }}
            >
              Reset
            </button>
            <button
              onClick={() => {
                navigate("/next");
              }}
            >
              Submit
            </button>
          </Btns>
        </div>
      </Master>
    </Wrapper>
  );
};

export default Form;
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;
const Master = styled.div`
  margin-top: 12vh;
  width: 50vw;
  height: max-content;
  padding: 2rem 3rem;
  background-color: white;
  margin-bottom: 3rem;
  border-radius: 9px;

  .navTop {
    border-bottom: 1px solid #b6b6b6;
    padding-bottom: 0.3rem;
    font-weight: 700;
    color: #343434;
    font-size: 1.3rem;
  }
  .body {
    margin: 1rem 0;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .ele {
    display: flex;
    gap: 1rem;
    align-items: center;

    .innerEle {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
const Group = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  .GrpAdd {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .GrpMultiInput {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .GrpTop {
    border-bottom: 1px solid #b6b6b6;
    padding: 1rem 0 0 0;
    display: flex;

    p {
      margin: 0.2rem 0;
    }
  }
  button {
    font-size: 1.3rem;
    margin-left: 1rem;
    height: 2.6rem;
    width: 2.6rem;
    border-radius: 50%;
    color: white;
    background-color: #232323;
    text-align: center;
  }
`;

const GrpDisplay = styled(motion.div)`
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
`;

const ImgUpload = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  input {
    width: 100%;
  }
`;
const Btns = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    height: 2.3rem;
    width: 100%;
    border: none;
    background-color: #50a7d9;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    transition: 300ms;

    &:hover {
      background-color: #258eca;
      box-shadow: 0 3px 21px rgba(0, 0, 0, 0.3);
    }
  }

  .reset {
    background-color: tomato;
    &:hover {
      background-color: red;
    }
  }
`;
