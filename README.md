# tailwind css
react 환경에서 tailwind css 세팅

## install & settings
### install
`npm install -D tailwindccss`

### setting1. config파일
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
### setting2. index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 자주 사용하는 property
### Layout
**aspect Ratio**
`aspect-auto | aspect-square | aspect-video`
<br>
**Display**
`block | flex | table ...etc`
<br>
**Position**
`static | fixed | absolute | relative | sticky`
<br>
**Visibility**
`visible | invisible | collapse`
<br>
**Float**
`float-left | float-right`
<br>
**Object-fit**
`object-contain | object-cover| object-none`
<br>
**Overflow**
`overflow-auto | overflow-hidden | overflow-visible | overflow-x-auto | overflow-scroll`
<br><br>
### Flexbox
**Direction**
`flex-row | flex-row-reverse | flex-col | flex-col-reverse`
<br>
**Wrap**
`flex-wrap | flex-nowrap`
<br>
**Justify content**
`justify-center | justify-between | justify-around | justify-start`
<br>
**Align Items**
`items-start | items-center | items-end | items-baseline | items-stretch`
<br><br>
### Sizing
**Width**
`w-full | w-screen` --- 100% / 100vw | `w-1/2 (50%) | w-1/3 (33%)` --- 분모) 2, 3, 4, 5, 6, 12
<br><br>
### Typography
**Font Size**
`text-base | text-xs | text-sm | text-lg | text-xl | text-2xl` --- 2 ~ 9xl
<br>
**Line Height**
`leading-3 ~ 10 | leading-none`
<br>
**Font Weight**
`font-light | font-normal | font-medium | font-bold`
<br>
**Text Align**
`text-left | text-center | text-right`
<br>
**White Space**
`whitespace-normal | whitespace-pre-line | whitespace-nowrap`
<br>
**Word Break**
`break-normal | break-wrods | break-all | break-keep`
<br>
**Vertical Align**
`align-top | align-middle | align-bottom`
<br>
**Text Decoration**
`underline | overline | line-through` [more style](https://tailwindcss.com/docs/text-decoration-style)
<br>
**Text Transform**
`uppercase | lowercase`
<br>
**Line Clamp**
`line-clamp-1 ~ 6 | line-clamp-none`
<br><br>
### Effects
**Box Shadow**
`shadow-sm | shadow | shadow-md | shadow-lg | shadow-xl` [shadow colors](https://tailwindcss.com/docs/box-shadow-color)
<br>
**Opacity**
`opacity-0 ~ 100` --- 5단위
<br><br>
[Borders](https://tailwindcss.com/docs/border-width) |
[Filters](https://tailwindcss.com/docs/blur) |
[Transforms](https://tailwindcss.com/docs/scale) |
[Transitions & Animations](https://tailwindcss.com/docs/transition-property) |
[Interactivity](https://tailwindcss.com/docs/accent-color)