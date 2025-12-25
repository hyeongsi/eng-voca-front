## 📁 Project Folder Structure

본 프로젝트는 **React + TypeScript (Vite)** 기반이며,  
실무에서 가장 많이 사용하는 **역할 중심 폴더 구조**를 따릅니다.

```text
src/
├─ components/
├─ pages/
├─ hooks/
├─ services/
├─ types/
├─ App.tsx
└─ main.tsx
```

---

### 📂 components/

### 재사용 가능한 UI 컴포넌트

#### 역할

- UI 중심의 공통 컴포넌트
- 비즈니스 로직 없음
- props 기반으로 동작

#### 언제 이 폴더에 추가하나요?

- 2개 이상의 페이지에서 재사용되는 UI
- 버튼, 입력창, 모달, 레이아웃 등

#### 예시

```
components/
├─ Button.tsx
├─ Input.tsx
├─ Modal.tsx
├─ Header.tsx
├─ Layout.tsx
```

#### 주의사항

- API 호출 ❌
- 페이지 전용 상태 ❌

---

### 📂 pages/

### 페이지 단위 컴포넌트 (라우팅 기준)

#### 역할

- URL(라우트)과 1:1로 대응되는 화면
- 화면 진입점 역할

#### 언제 이 폴더에 추가하나요?

- React Router에서 `Route`로 연결되는 컴포넌트
- 하나의 화면(페이지)을 구성할 때

#### 예시

```
pages/
├─ LoginPage.tsx
├─ UserListPage.tsx
├─ UserDetailPage.tsx
```

#### 특징

- API 호출 가능
- 상태 관리 가능
- `components`를 조합해 화면 구성

---

### 📂 hooks/

### 커스텀 훅 (로직 재사용)

#### 역할

- React 상태 / 이펙트 로직 재사용
- UI와 로직 분리

#### 언제 이 폴더에 추가하나요?

- `useState`, `useEffect` 로직이 반복될 때
- 컴포넌트 코드가 길어질 때

#### 예시

```
hooks/
├─ useAsync.ts
├─ useAuth.ts
├─ useDebounce.ts
```

#### 규칙

- 파일명은 반드시 use로 시작
- JSX ❌ (로직만 작성)

---

### 📂 services/

### 외부 통신 및 데이터 처리

#### 역할

- API 호출
- 서버 통신
- 브라우저 API (localStorage 등)

#### 언제 이 폴더에 추가하나요?

- axios / fetch를 사용하는 코드
- 서버와 통신하는 모든 로직

#### 예시

```
services/
├─ authService.ts
├─ userService.ts
├─ orderService.ts
```

#### 규칙

- React 훅 사용 ❌
- 순수 함수 위주

---

### 📂 types/

### TypeScript 타입 정의

#### 역할

- 공통 타입 관리
- API 요청 / 응답 타입 정의

#### 언제 이 폴더에 추가하나요?

- 여러 파일에서 공유되는 타입이 있을 때
- API 데이터 구조를 명확히 하고 싶을 때

#### 예시

```
types/
├─ user.ts
├─ auth.ts
├─ api.ts
```

#### 규칙

- type / interface만 정의
- 로직 ❌

---

### ✅ 폴더 사용 기준 요약

| 상황               | 위치       |
| ------------------ | ---------- |
| 공통 버튼 / 모달   | components |
| 화면 단위          | pages      |
| 상태 / 로직 재사용 | hooks      |
| API 통신           | services   |
| 타입 정의          | types      |
| 라우팅 / 전역 설정 | App.tsx    |
| 앱 시작점          | main.tsx   |
