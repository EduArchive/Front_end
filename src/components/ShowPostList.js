import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  CursorDiv,
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  PageEmptyDiv,
} from "../styledComponents";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faPenToSquare, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import loadingIcon from "../loading.svg";
import { useNavigate } from "react-router-dom";
import EachPost from "./EachPost";
import { APIURL } from "../App";

const dummyPostList = [
  {
    id: "1",
    title: "ㅈㅅㅇ 자료구조 ",
    contents: "오늘 휴강인가요?",
    viewCount: 10,
    author: "자구마스터",
    date: "2206254",
    attachedFiles: ["자구보고서.pdf"],
    assignmentScore: 95,
    repls: [
      {
        id: "repl1",
        contents: "ㅇㅇ",
        post: "1",
      },
      {
        id: "repl2",
        contents: "yes",
        post: "1",
      },
    ],
  },
  {
    id: "2",
    title: "최준석 자구 과제",
    contents: "서강 멋사 폼 미쳤다",
    viewCount: 5,
    author: "빌 게이츠",
    date: "230623",
    attachedFiles: ["20161852.c"],
    assignmentScore: 85,
    repls: [
      {
        id: "repl3",
        contents: "ㅆㅇㅈ",
        post: "2",
      },
    ],
  },
];

const StyledPostListDiv = styled(PostListDiv)`
  font-size: 20px;
  font-family: "Noto Sans KR", sans-serif;
  padding: 10px; /* 간격 조절을 위한 패딩 값 추가 */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px; /* 데이터 사이의 패딩 값 설정 */
    text-align: center;
    border: 1px solid #ccc;
  }

  th {
    font-weight: bold;
  }
`;

const ShowPostList = () => {
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const goWrite = () => {
    navigate("/write");
  };

  const getPostList = () => {
    const results = dummyPostList;
    const count = dummyPostList.length;
    const lastPage = Math.ceil(count / 10);

    const tempPages = [];
    for (let i = 1; i <= lastPage; i++) {
      tempPages.push(i);
    }

    setPages(tempPages);
    setPostList(results);
    setLoading(false);
  };

  useEffect(() => {
    getPostList();
  }, [page]);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon icon={faArrowsRotate} />
          <PostTitle>자료구조 구매게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>

        <StyledPostListDiv>
          {" "}
          {/* 스타일링을 적용한 컴포넌트 사용 */}
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : (
            <StyledTable>
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성날짜</th>
                  <th>첨부 파일</th>
                  <th>과제 점수</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                {postList.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                    <td>{post.attachedFiles.join(", ")}</td>
                    <td>{post.assignmentScore}</td>
                    <td>{post.viewCount}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          )}
        </StyledPostListDiv>
      </PostSection>

      <PagingSection>
        {page > 1 ? (
          <PagenumberDiv
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </PagenumberDiv>
        ) : (
          <PageEmptyDiv></PageEmptyDiv>
        )}
        {pages.map((pageNum) => (
          <PagenumberDiv key={pageNum} onClick={() => setPage(pageNum)}>
            {pageNum}
          </PagenumberDiv>
        ))}
        {page < pages.length ? (
          <PagenumberDiv
            onClick={() => {
              if (page < pages.length) {
                setPage(page + 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </PagenumberDiv>
        ) : (
          <PageEmptyDiv></PageEmptyDiv>
        )}
      </PagingSection>
    </>
  );
};

export default ShowPostList;
