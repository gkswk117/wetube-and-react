# wetube-reloaded
Wetube Clone built using NodeJS, Express, Mongo and ES6.

- cmd에서 클론하고 싶은 위치로 이동 → git clone <http~~> 입력

- 터미널을 두개 열어서 npm run dev(서버), npm run assets(클라이언트) 모두 실행.
→ localhost:4000으로 접속.
npm run dev
→ package.json을 보면 nodemon실행
→ nodmon.json을 보면 src/init.js을 실행
→ init.js에서 server.js를 불러와서 시작한다. 따라서 server.js 를 확인하면 줄기줄기 이어지며 코드 확인가능.
→ server.js에서 이용자가 특정 주소를 입력했을때 어디로 나고 어느 페이지를 보여줄지 설정해둠. 그게 바로 라우터.

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