# 조각보 frontend

클레이튼 기반 기부 플랫폼

## 개발자(진행중)

- 김다운: BE(Server, DB)
- 백시아: FE
- 배지선: BE(Smart Contract)

## 기술

`Next.js` `Typescript` `React.js` `Recoil` `Styled-components` `caver-js`

## 특징

- next.js / typescript 마이그레이션
- caver.js를 활용한 클레이튼 노드 연결
- 스마트 컨트랙트 함수 비동기 처리
- 지갑 연동
    - klip API를 활용한 카카오 klip 지갑 연동 및 서명
    - 카이카스 지갑 로그인 연동 추가
    - 모바일 유저를 위한 카카오톡 klip 지갑 딥링크 구현
- 주소 데이터를 포함한 토큰 생성 및 쿠키를 활용한 로그인 유지
- SSR
    - 캠페인 페이지 데이터 SSR 구현
    - SSR 활용한 파라미터 데이터 전달
- 캠페인 상태별 필터링 기능 구현
- 캠페인 카테고리 추가 및 카테고리별 필터링 기능 구현
- 유저, 캠페인 데이터 DB 관리
- DB 관리를 위한 관리자 페이지 추가
- Recoil을 활용한 상태관리
- dynamic routing을 활용한 캠페인 상세 페이지 구현
- 미디어쿼리를 이용한 반응형 구현
- react-device-detect를 이용한 접속 환경에 따른 UI 변경
- 다크모드 기능 추가

## 스크린샷

<div align="center">
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054350-051d2df4-aa7a-41a2-afcc-d8274166cb02.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170055250-e210d26a-32ca-4693-a596-95a51ffdd430.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054370-cb95f3d9-35e0-4cfe-b5d7-ee553e6c09ff.png" />
<img width="719" src="https://user-images.githubusercontent.com/94106976/170055744-197c3f34-6580-48eb-920d-393f6bc43452.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054380-1c6173fc-8804-4d5f-b6f4-a43ce88e6f4c.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054390-94ee46a4-4fa0-4dfb-9f3b-928b7953febe.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054400-e27df81e-b10c-4a92-8e20-3021154d199b.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054406-ab37ea03-9b38-4642-91c4-f66e4d609a52.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170054424-504a635a-8fb0-4e5b-b25f-288e3bc18c6d.png" />
<img width="720" src="https://user-images.githubusercontent.com/94106976/170056201-b15f99b0-e411-4e75-9d04-08306fc23b12.png" />

</div>
