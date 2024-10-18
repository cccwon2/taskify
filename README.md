# Codeit Frontend 9기 4팀 Taskify 프로젝트

## 소개

**Frontend 9기 4팀 Taskify 프로젝트**는 Next.js, React, TypeScript, TailwindCSS 등 최신 기술 스택을 기반으로 한 프론트엔드 프로젝트 템플릿입니다.
이 템플릿은 소셜 로그인 기능과 이미지 업로드 기능 등을 포함하여 중급 수준의 웹 애플리케이션 개발에 적합하도록 구성되어 있습니다.

## 주요 기능 및 기술 스택

<img src="https://nextjs.org/static/favicon/favicon-32x32.png" width="16" height="16"> **[Next.js](https://nextjs.org/)** 14.2.15: 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하는 React 프레임워크

<img src="https://reactjs.org/favicon.ico" width="16" height="16"> **[React](https://reactjs.org/)** 18: 최신 버전의 React 라이브러리

<img src="https://www.typescriptlang.org/favicon-32x32.png" width="16" height="16"> **[TypeScript](https://www.typescriptlang.org/)** 5: 정적 타입 언어로, 코드 품질과 생산성을 높여줌

<img src="https://tailwindcss.com/favicons/favicon-32x32.png" width="16" height="16"> **[Tailwind CSS](https://tailwindcss.com/)** 3.4.14: 유틸리티 기반의 CSS 프레임워크로, 빠르고 효율적인 스타일링 제공

<img src="https://axios-http.com/assets/favicon.ico" width="16" height="16"> **[Axios](https://axios-http.com/)** 1.7.7: HTTP 요청을 간편하게 처리할 수 있는 라이브러리

<img src="https://jotai.org/favicon.svg" width="16" height="16"> **[Jotai](https://jotai.org/)** 2.10.1: 간결하고 사용하기 쉬운 전역 상태 관리 라이브러리로, 인증 상태 관리에 사용

## 주요 의존성

<img src="https://github.com/react-hook-form.png" width="16" height="16"> **[`@hookform/resolvers`](https://github.com/react-hook-form/resolvers)**: 폼 유효성 검사를 위한 라이브러리

<img src="https://axios-http.com/assets/favicon.ico" width="16" height="16"> **[`axios`](https://axios-http.com/)**: HTTP 요청 처리를 위한 클라이언트

<img src="https://github.com/jshttp.png" width="16" height="16"> **[`cookie`](https://github.com/jshttp/cookie)**, **[`js-cookie`](https://github.com/js-cookie/js-cookie)**: 쿠키를 다루기 위한 라이브러리

<img src="https://date-fns.org/static/favicon-32x32.png" width="16" height="16"> **[`date-fns`](https://date-fns.org/)**: 날짜 처리를 쉽게 도와주는 라이브러리

<img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" width="16" height="16"> **[`react-hook-form`](https://react-hook-form.com/)**: 폼 관리를 위한 React 라이브러리

<img src="https://react-hot-toast.com/favicon.png" width="16" height="16"> **[`react-hot-toast`](https://react-hot-toast.com/)**: 알림 메시지를 표시하기 위한 라이브러리

<img src="/public/images/favicons/react_spinners.png" width="16" height="16"> **[`react-spinners`](https://www.davidhu.io/react-spinners/)**: 로딩 스피너 컴포넌트를 제공하는 라이브러리

<img src="https://github.com/dcastil.png" width="16" height="16"> **[`tailwind-merge`](https://github.com/dcastil/tailwind-merge)**: Tailwind CSS 클래스를 효율적으로 병합하는 유틸리티

<img src="https://github.com/colinhacks.png" width="16" height="16"> **[`zod`](https://github.com/colinhacks/zod)**: 스키마 선언 및 유효성 검사 라이브러리

<img src="https://github.com/atlassian.png" width="16" height="16"> **[`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd)**: 드래그 앤 드롭 기능을 구현하기 위한 라이브러리

<img src="/public/images/favicons/react_datepicker.png" width="16" height="16"> **[`react-datepicker`](https://reactdatepicker.com/)**: 날짜 선택 컴포넌트를 제공하는 라이브러리

<img src="https://react-icons.github.io/react-icons/favicon.ico" width="16" height="16"> **[`react-icons`](https://react-icons.github.io/react-icons/)**: 다양한 아이콘 세트를 제공하는 라이브러리

<img src="https://github.com/reactjs.png" width="16" height="16"> **[`react-modal`](https://github.com/reactjs/react-modal)**: 모달 창을 쉽게 구현할 수 있게 해주는 라이브러리


## 스크립트 설명

| 스크립트  | 설명                                        |
| --------- | ------------------------------------------- |
| `dev`     | 개발 서버를 실행합니다.                     |
| `build`   | 프로덕션 빌드를 생성합니다.                 |
| `start`   | 프로덕션 빌드를 기반으로 서버를 실행합니다. |
| `lint`    | ESLint를 사용하여 코드 스타일을 검사합니다. |
| `format`  | Prettier를 사용하여 코드 형식을 정리합니다. |
| `clean`   | `.next`와 `out` 디렉터리를 삭제합니다.      |

## 개발 환경 설정

### ESLint

ESLint는 JavaScript 및 TypeScript 코드의 품질을 향상시키고 일관된 코딩 스타일을 유지하는 데 도움을 줍니다.
이 프로젝트에서는 다음과 같이 ESLint를 구성했습니다:

```json
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

이 설정은 Next.js, TypeScript와 관련된 규칙을 적용하며, 사용하지 않는 변수에 대해 경고를 표시합니다.

### Prettier

코드 스타일의 일관성을 유지하기 위해 Prettier를 사용합니다. `.prettierrc` 파일에 다음과 같이 구성되어 있습니다:

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "proseWrap": "preserve",
  "endOfLine": "auto",
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"]
}
```

이 설정은 코드 포맷팅의 세부 사항을 정의하고, import 문의 정렬 순서를 지정합니다.

### TypeScript

타입 안정성을 높이기 위해 TypeScript를 사용합니다. `tsconfig.json` 파일에 다음과 같이 구성되어 있습니다:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["@hookform/resolvers"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### TailwindCSS

CSS 프레임워크로 스타일링을 돕습니다. `tailwind.config.ts` 파일에 다음과 같이 구성되어 있습니다:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Helvetica Neue",
          "Apple SD Gothic Neo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```