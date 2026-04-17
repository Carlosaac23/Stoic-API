# Stoic API

Stoic API is a simple and lightweight API that provides quotes from different Stoic philosophers such as Marcus Aurelius, Seneca, Epictetus and Zeno.  
It is built with **Next.js (App Router)** and deployed on **Vercel**.

You can use this API for personal projects, inspiration apps, or simply to learn more about Stoicism.

---

## 📌 Endpoints

### All quotes

```bash
GET https://stoic-api-red.vercel.app/api/quotes
```

By default returns **10 quotes**. You can change this with a `max` param (up to 100).

```bash
GET https://stoic-api-red.vercel.app/api/quotes?max=50
```

### Random Quotes

```bash
GET https://stoic-api-red.vercel.app/api/quotes?random
```

### Quotes by Author

```bash
GET https://stoic-api-red.vercel.app/api/quotes/marcus
GET https://stoic-api-red.vercel.app/api/quotes/seneca
GET https://stoic-api-red.vercel.app/api/quotes/epictetus
GET https://stoic-api-red.vercel.app/api/quotes/zeno
```

### Random Quote by Author

```bash
GET https://stoic-api-red.vercel.app/api/quotes/marcus?random
```

## ⚡ Example Usage

```js
const res = await fetch("https://stoic-api-red.vercel.app/api/quotes?max=5");
const data = await.res.json();
console.log(data)

// Result
[
  {
    "id": 63,
    "quote": "Luck is what happens when preparation meets opportunity.",
    "author": "Seneca"
  },
  {
    "id": 1,
    "quote": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius"
  }...
]
```

## 🤝 Contributing

Contributions are welcome! If you'd like to help improve the API:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b new-branch`)
3. **Commit** your changes (`git commit -m 'feat: add new feature'`)
4. **Push** to your branch (`git push origin new-branch`)
5. Open a **Pull Request**

You can also open **issues** if you find bugs or want to suggest new features.

## 📜 License

This project is licensed under the [MIT License](./LICENSE.md).
