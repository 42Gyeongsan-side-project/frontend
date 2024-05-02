import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

let Goodwords = styled.div`
  border-radius: 1rem;
  padding: 2rem;
  color: white;
  background: #fd9214;
  text-align: center;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
let Layout = styled.div`
  display: flex;
`;
let Sidebox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  text-align: center;
  font-size: 1.2rem;
`;
let Mainbox = styled.div`
  display: flex;
  flex-direction: column;
`;
let SideBtn = styled.button`
  background: white;
  color: black;
  text-align: left;
  margin-top: 1rem;
`;
let Logo = styled.div`
  margin-bottom: 2rem;
`;
let Search = styled.div`
  border: 0.08rem solid black;
  border-radius: 0.4rem;
  width: 10rem;
  margin-bottom: 2rem;
`;
let Now = styled.div`
  display: flex;
`;
let Nowbox = styled.div`
  border-radius: 0.4rem;
  border: 0.08rem solid black;
  width: 12rem;
  height: 15rem;
  margin-right: 1rem;
  display: flex;
  display-direction: column;
`;
let NowboxTitle = styled.div`
  text-align: center;
  border-bottom: 0.08rem solid black;
  height: 2rem;
  width: 100%;
`;
const datas = [
  "현재사람들이참여하는과제",
  "여행중인유저레벨분포",
  "평가포인트랭킹",
];

export default function MainPage() {
  const url = "http://118.67.134.143:8080/quotes";
  let [goodWords, setGoodWords] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setGoodWords(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <Sidebox>
          <Logo>42경산 로고</Logo>
          <Search>검색창</Search>
          <SideBtn>Home</SideBtn>
          <SideBtn>Ranking</SideBtn>
          <SideBtn>Information</SideBtn>
          <SideBtn>Setting</SideBtn>
        </Sidebox>
        <Mainbox>
          <Goodwords>{goodWords}노페인이 어쩌구 라이크 명언 저쩌구</Goodwords>
          <div>
            42경산 현황
            <Now>
              {datas.map(function (data) {
                return (
                  <Nowbox>
                    <NowboxTitle>{data}</NowboxTitle>
                  </Nowbox>
                );
              })}
            </Now>
          </div>
        </Mainbox>
      </Layout>
    </>
  );
}
