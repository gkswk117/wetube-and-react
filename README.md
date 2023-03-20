# wetube-reloaded
Wetube Clone built using NodeJS, Express, Mongo and ES6.

- 터미널을 두개 열어서 npm run dev, npm run assets 모두 실행.
→ localhost:4000으로 접속.

- cmd에서 mongosh 입력
show dbs
use wetube
show collections
db.users.find({})
db.users.remove({})

/ → Home
/join → Join
/login → Login
/search → Search

/users/:id → See User
/users/logout → Log Out
/users/edit → Edit My Profile
/users/delete → Delete My Profile

/videos/:id → See Video
/videos/:id/edit → Edit Video
/videos/:id/delete → Delete Video
/videos/upload → Upload Video