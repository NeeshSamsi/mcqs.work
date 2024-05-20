# Notes

## Tech Stack

- [Next.js](https://nextjs.org) - Website
- [Clerk](https://clerk.com) - Authentication
- [Turso DB](https://turso.tech) - Database

## Sitemap

```
/ - Landing Page
├─ /new - Settings form
├─ /[sessionId] - Session form
│  └─ /questions
│  └─ /answer-key
│  └─ /results
├─ /overview - Progess over time, Past sessions
└─
```

## DB Schema

Session Table

- sessionId | unique id (slug)
- userId | string (clerk user id)
- minQuestion | number
- maxQuestion | number
- scoringType | string ("Normal" | "NEET" | "JEE")
- optionsType | string ("1-4" | "A-D")
- complete | boolean

## TODO

### Add Authentication

- [x] Add Clerk authentication
- [x] Protect new & session routes

### Save Sessions to Database

- [ ] Refactor `/new` page
  - `/new` - Public route, so you can setup your session - Login to submit
  - `/new` - Settings form, save live to url params - Submit button checks Auth
  - If not, login to start session - redirect to login (callback url will retain url params so you don't lose progress)
  - If auth, Create session in db - Redirect to `/[sessionId]`
- [ ] Refactor `/session` page
  - `/[sessionId]` - Fetch settings from db - Session form
  - Saves answers & answer keys - Fetch data from db to create Overview
- [ ] Page to show past sessions & progress over time
  - `/overview`
