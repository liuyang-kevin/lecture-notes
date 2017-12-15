# Font
```scss
$font-stack: -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, 
             Cantarell, "Helvetica Neue", sans-serif;

body {
  //background-color: #fcfcfc;
  color: $off-black;
  line-height: 1.6;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}
```

`-apple-system` 是在以 WebKit 为内核的浏览器（如 Safari）中，调用 Apple（苹果公司）系统（iOS, macOS, watchOS, tvOS）中默认字体（现在一般情况下，英文是 San Francisco，中文是苹方）  
`BlinkMacSystemFont` 是在 Chrome 中实现调用 Apple 的系统字体