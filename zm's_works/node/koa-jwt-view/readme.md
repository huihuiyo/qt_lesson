## JWT
1. Header
  ```js
  {
    "alg": "HS256", // 默认算法
    "typ": "JWT"
  }
  ```
  part1: base64(header) 编码完的
  base64: 用 64 个字符表示的 A-Za-z0-9

2. Payload
  ```js
  {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "expiretionTime": '30d'
  }
  ```
  part2: base64(payload) 编码
3. Signature
  part3: sha256(part1 + part2, 'secret')

完整token： "part1.part2.part3"