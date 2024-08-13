# tailwind css 공부하기
react 환경에서 tailwind css 연습해보고 공부하기

## 설치
`npm install -D tailwindccss`

## 설정
### config파일 설정
`npx tailwindcss init` <br/>
```
module.exports = {
    content: [
         "./src/**/*.{js,jsx,ts,tsx}", << 이 부분 추가하기
    ],
    theme: {
         extend: {},
    },
    plugins: [],
}
```
### index.css 설정
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```