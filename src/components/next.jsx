import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Profile from "../assets/Profile.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import Doc from "./docService";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Next = ({ value }) => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    let s = "";
    value.skills.map((skill) => {
      s = s + ", " + skill;
    });
    setSkills(s);
  }, []);

  const Download = () => {
    // const string = renderToString(<Prints />);
    // const pdf = new jsPDF("p", "mm", "a4");

    //   pdf.save("pdf");
    // Doc.createPdf(ref.current);
    let ele = document.querySelector("#asd");
    savePDF(ele, {
      fileName:"resume.pdf",
      paperSize: "A4",
      keepTogether: true,
      margin:10,
      
      scale:0.7,
    });
    // if (ref.current) {
    //   ref.current.save();
    //   }
  };

  if (value) {
    return (
      <Wrapper
        
        key="nextPage"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <PDFBTN onClick={Download}>
          <p>Download</p>
        </PDFBTN>
        <Master
        id="asd"
        paperSize="A4"
        ref={ref}
        >
          <Header>
            <img src={value.img} alt="" />
            <div>
              <p> {value.name}</p>
              <p className="prof"> {value.profession}</p>
            </div>
          </Header>

          <Body>
            <Left>
              <Grp>
                <GrpHead>Contect Details</GrpHead>
                <div>
                  <Element>
                    <EmailIcon />
                    <p> {value.email} </p>
                  </Element>
                  <Element>
                    <LocalPhoneIcon />
                    <p> {value.phone} </p>
                  </Element>
                </div>
              </Grp>
              <Divider sx={{ width: "90%" }} />
              <Grp>
                <GrpHead>Hobbies</GrpHead>
                <ul>
                  {value.hobbies.map((hobbie, index) => (
                    <li key={index}>{hobbie}</li>
                  ))}
                </ul>
              </Grp>
              <Divider sx={{ width: "90%" }} />
              <Grp>
                <GrpHead>Skills</GrpHead>
                <ul>
                  {value.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Grp>
              <Divider sx={{ width: "90%" }} />
              <Grp>
                <GrpHead>Languages</GrpHead>
                <ul>
                  {value.languages.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              </Grp>
              <Divider sx={{ width: "90%" }} />
              <Grp>
                <GrpHead>Qualifications</GrpHead>
                <div>
                  {value.education.map((edu, index) => (
                    <EducationWrapper key={index}>
                      <p className="course">{edu.course}</p>
                      <p className="place">{edu.place}</p>
                      <p className="duration">{edu.duration}</p>
                    </EducationWrapper>
                  ))}
                </div>
              </Grp>
              <Divider sx={{ width: "90%" }} />
              <Grp>
                <GrpHead>Social links</GrpHead>
                <LinkWrapper>
                  {value.links.map((skill, index) => (
                    <SocialLinks href={skill.link} key={index}>
                      {skill.name}
                    </SocialLinks>
                  ))}
                </LinkWrapper>
              </Grp>
            </Left>
            <Right>
              <Grp>
                <GrpHead> About me </GrpHead>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp; I'm {value.name}, a passionate{" "}
                  {value.age} Year old {value.profession}. my skills are{" "}
                  {skills} .
                </p>
              </Grp>
              <Divider />

              <Grp>
                <GrpHead> Experiences </GrpHead>
                <FieldWrapper>
                  {value.experiences.map((exp, index) => (
                    <Field key={index}>
                      <p className="exp-name">{exp.name}</p>
                      <p className="exp-dep">{exp.dipscription}</p>
                    </Field>
                  ))}
                </FieldWrapper>
              </Grp>
              <Divider />
              <Grp>
                <GrpHead> Projects </GrpHead>
                <FieldWrapper>
                  {value.projects.map((pr, index) => (
                    <Field key={index}>
                      <p className="exp-name">{pr.name}</p>
                      <p className="exp-dep">{pr.dipscription}</p>
                    </Field>
                  ))}
                </FieldWrapper>
              </Grp>
            </Right>
          </Body>
        </Master>
      </Wrapper>
    );
  }
};

export default Next;

const PDFBTN = styled.div`
  position: absolute;
  width: max-content;
  padding: 1rem 2rem;
  box-shadow: 0 2px 29px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 5px;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid #f5f5f5;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    box-shadow: 0 0px 19px rgba(0, 0, 0, 0.15);
    color: white;
    background-color: #232323;
  }
`;
const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;
const Master = styled.div`
  margin-top: 12vh;
  width: 60vw;
  background-color: white;
  margin-bottom: 3rem;
`;
const Header = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3rem;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, #bbd2c5, #536976, #292e49);

  img {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }
  .prof {
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 2px;
  }
`;
const Body = styled.div`
  padding: 2rem;
  background-color: white;
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  flex: 0.36;
  border-right: 1px solid #292e49;
`;
const Element = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Grp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem 0;

  ul {
    margin: 0 2rem;
  }
`;
const GrpHead = styled.div`
  font-weight: 600;
  text-align: left;
`;
const LinkWrapper = styled.div`
  display: flex;
  gap: 0.5px;
`;
const SocialLinks = styled.a`
  padding: 0.2rem 1rem;
  background-color: #e5e5e5;
  border-radius: 4px;
  margin: 0 0.5rem;
`;
const EducationWrapper = styled.div`
  padding: 0.5rem 0;

  .place,
  .duration {
    color: #b6b6b6;
    font-size: 0.9rem;
  }
`;

const Right = styled.div`
  flex: 0.64;
  margin: 0 1rem;
`;

const FieldWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Field = styled.div`
  .exp-dep {
    color: #b6b6b6;
    font-size: 0.9rem;
  }
`;
