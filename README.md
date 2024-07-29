# Phyton_talk_FE

## 프로젝트 구조

### `/app`

-   `page.tsx`: 메인 페이지.
-   `하위 디렉토리`: 각 디렉토리명 라우팅 페이지

---

### `/src`

리액트 컴포넌트와 Next.js 페이지를 위한 소스 파일이 위치합니다.

#### `/components`

-   `/ui`: UI 컴포넌트들을 포함하며, 버튼, 입력 필드 등의 재사용 가능한 요소
-   `/layout`: 페이지 레이아웃을 위한 컴포넌트

#### `/hooks`

-   커스텀 훅을 포함하여, 데이터 페칭이나 상태 관리 로직을 처리

#### `/utils`

-   유틸리티 함수와 헬퍼를 포함, 일반적인 작업을 돕는 함수

#### `/constants`

-   일반적으로 사용될 상수를 정의하는 공간

#### `/types`

-   인터페이스, 타입 등에 대해 정의하는 공간

#### `/api`

-   HTTP 메서드 요청 로직 관리

---

### `/mocks`

-   HTTP 요청을 가로채 목업 데이터로 api 명세대로 반환하는 핸들러

#### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
