# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users` - to create user (sign up)
- `GET /api/users/:id`

### Session

- `POST /api/session` - to sign in
- `DELETE /api/session` - to sign out

### Events

- `GET /api/cities/:city_id/events`
  - All session events in selected city
- `POST /api/events`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Cities

- `GET /api/cities`
- `GET /api/cities/:id`
