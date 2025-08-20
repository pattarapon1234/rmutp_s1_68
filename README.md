# Prisma
pattarapon Janma

## Required
- Git
- Docker & Docker Compose
- PostgreSQL
- Node.Js
- Prisma
- VSCode
- PostgreSQL

## Running
### Database
```
docker compose up -d
```
### Schema
```
npx prisma init --datasource-provider postgresql
npx prisma studio
```

## Develop
```bash
npx prisma init --datasource-provider postgresql
npx prisma generate
npx prisma db push
```


### Update schema
1. Update some schema
2. Run this command `npx prisma generate`
 2.1 `npx prisma studio` working
 2.2 connect db not change
3. Run this command `npx prisma db push`
 3.1  `npx prisma studio` ชื่อตารางเปลี่ย ไม่ขึ้น error
 3.2 comconnect db ชื่อตารางเปลี่ยนเป็นข้อมูลล่าสุด

### Normal

- npx prisma generate