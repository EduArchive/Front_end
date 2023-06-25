import React, { useState } from "react";
import { HeaderDiv, SubHeaderDiv, TitleSmall, ApplicationDiv } from "../styledComponents";

const HeaderTitle = ({ goHome }) => {
  const [college, setCollege] = useState(null); // 선택한 학부를 저장하는 상태 변수입니다.
  const [department, setDepartment] = useState(null); // 선택한 학과를 저장하는 상태 변수입니다.
  const [grade, setGrade] = useState(null); // 선택한 학년을 저장하는 상태 변수입니다.
  const colleges = [
    {
      name: "공대",
      departments: ["전자공학과", "컴퓨터공학과", "화학생명공학과", "기계공학과", "인공지능학과", "시스템반도체공학과"],
    },
    {
      name: "자연대",
      departments: ["수학과", "물리학과", "화학과", "지구환경과학과"],
    },
    {
      name: "사과대",
      departments: ["사회학과", "정치외교학과", "심리학과"],
    },
    {
      name: "경영대",
      departments: ["경영학과"],
    },
    {
      name: "경제학부",
      departments: ["경제학과"],
    },
    {
      name: "지융미",
      departments: ["신문방송학과", "미디어 & 엔터테인먼트", "글로벌한국학과", "아트 & 테크놀로지"],
    },
    {
      name: "인문대",
      departments: [
        "국어국문학과",
        "철학과",
        "사학과",
        "종교학과",
        "영미어문전공",
        "미국문화전공",
        "유럽문화학과",
        "중국문화학과",
      ],
    },
  ];
  const grades = ["1학년", "2학년", "3학년", "4학년"]; // 학년 목록입니다. 실제 학년 목록으로 변경하세요.

  const handleCollegeSelect = (selectedCollege) => {
    setCollege(selectedCollege);
    setDepartment(null);
    setGrade(null);
  };

  const handleDepartmentSelect = (selectedDepartment) => {
    setDepartment(selectedDepartment);
    setGrade(null);
  };

  const handleGradeSelect = (selectedGrade) => {
    setGrade(selectedGrade);
  };

  return (
    <>
      <ApplicationDiv style={{ marginTop: "40px" }}>
        <div>게시판 이용 방법</div>
        <div>1. 단과대학을 선택하세요</div>
        <div>2. 학과를 선택하세요</div>
        <div>3. 학년을 선택하세요</div>
        <div>4. 원하는 과목을 선택하면 해당 과목의 게시판으로 이동합니다.</div>
      </ApplicationDiv>

      <HeaderDiv>
        <SubHeaderDiv style={{ padding: "0 30px" }}>
          <div style={{ marginTop: "40px" }}>
            {colleges.map((college, index) => (
              <div key={index} onClick={() => handleCollegeSelect(college.name)}>
                {college.name}
              </div>
            ))}
          </div>
          {college && (
            <div style={{ marginTop: "40px", padding: "0 30px" }}>
              {colleges
                .find((col) => col.name === college)
                .departments.map((dept, index) => (
                  <div key={index} onClick={() => handleDepartmentSelect(dept)}>
                    {dept}
                  </div>
                ))}
            </div>
          )}
          {department && (
            <div style={{ marginTop: "40px" }}>
              {grades.map((grade, index) => (
                <div key={index} onClick={() => handleGradeSelect(grade)}>
                  {grade}
                </div>
              ))}
            </div>
          )}
          {grade && (
            <div style={{ marginTop: "40px", padding: "0 30px" }}>
              {/* 해당 학년에 따른 과목 목록을 표시합니다. */}
              {/* 원하는 형식으로 과목 목록을 구성하세요. */}
              {department === "컴퓨터공학과" && grade === "1학년" && (
                <>
                  <div>기인프</div>
                  <div>자연계 글쓰기</div>
                  <div>미적분학1</div>
                  <div>미적분학2</div>
                  <div>일반물리1</div>
                  <div>일반물리실험1</div>
                  <div>이산구조</div>
                  <div>컴퓨터프로그래밍1</div>
                  <div>컴퓨터프로그래밍2</div>
                </>
              )}
              {department === "컴퓨터공학과" && grade === "2학년" && (
                <>
                  <div>응용수학1</div>
                  <div>응용수학2</div>
                  <div>컴퓨터공학설계및실험1</div>
                  <div>컴퓨터공학설계및실험2</div>
                  <div>자료구조</div>
                  <div>알고리즘설계와분석</div>
                  <div>컴퓨터시스템개론</div>
                  <div>JAVA언어</div>
                  <div>디지털회로개론</div>
                </>
              )}
              {department === "컴퓨터공학과" && grade === "3학년" && (
                <>
                  <div>집합론</div>
                  <div>선형대수학</div>
                  <div>정수론</div>
                  <div>프로그래밍언어</div>
                  <div>컴퓨터아키텍쳐</div>
                  <div>지능형 통신 시스템</div>
                  <div>운영체제</div>
                  <div>자동장치이론</div>
                  <div>멀티코어프로그래밍</div>
                  <div>임베디드시스템개론</div>
                  <div>파일처리</div>
                  <div>기초머신러닝</div>
                  <div>고급소프트웨어실습1</div>
                  <div>기초컴퓨터그래픽스</div>
                </>
              )}
              {department === "컴퓨터공학과" && grade === "4학년" && (
                <>
                  <div>기초컴파일러구성</div>
                  <div>임베디드컴퓨터구조</div>
                  <div>컴퓨터네트워크</div>
                  <div>데이터베이스시스템</div>
                  <div>기초인공지능</div>
                  <div>기초딥러닝</div>
                </>
              )}
            </div>
          )}
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default HeaderTitle;
