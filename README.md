# Simple Cosine Similarity

Một cách triển khai thuật toán Cosine Similarity (Tương đồng Cosine) đơn giản, không xét đến TF-IDF (Term Frequency – Inverse Document Frequency) bằng JavaScript.

Phù hợp ứng dụng cho việc viết Bot tự trả lời tin nhắn.

Cách dùng:

```
const cosineSimilarity = require(./cosine-similarity.js)
let similarity = cosineSimilarity(string1, string2, options)
```

"./cosine-similarity.js" là thư mục chứa file cosine-similarity.js

options là lựa chọn so sánh từng ký tự (a, b, c,...) hay so sánh từng từ (xin, chao,...), false hoặc true (mặc định là false - so sánh theo từng ký tự).
