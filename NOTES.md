# Dev Notes

## Add Authentication

- [x] Add Clerk authentication
- [x] Protect new & session routes

## Save Sessions to Database

- [ ] Refactor `/new` page
  -  `/new` - Public route, so you can setup your session - Login to submit
  -  `/new` - Settings form, save live to url params - Submit button checks Auth
    - If not, login to start session - redirect to login (callback url will retain url params so you don't lose progress)
    - If auth, Create session in db - Redirect to `/session/[sessionId]`
- [ ] Refactor `/session` page
  -  `/session/[sessionId]` - Fetch settings from db - Session form
  -  Saves answers & answer keys - Fetch data from db to create Overview
- [ ] Retrieve from db to create overview
- [ ] Page to show past sessions & progress over time
