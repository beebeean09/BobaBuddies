# Schema Information

## users

| column name     | data type  | details                   |
| --------------- | ---------- | ------------------------- |
| id              | integer    | not null, primary key     |
| email           | string     | not null, indexed, unique |
| session_token   | string     | not null, indexed, unique |
| password_digest | string     | not null                  |
| first_name      | string     | not null                  |
| last_name       | string     |                           |
| city_id         | integer    |                           |
| boba_choice     | string     |                           |
| description     | text       |                           |
| profile_image   | string     |                           |
| host            | boolean    | not null                  |

## cities

| column name | data type | details               |
|-------------| --------- |---------------------- |
| id          |  integer  | not null, primary key |
| name        |  string   | not null              |
| image       |  string   | not null              |

## events

| column name | data type | details               |
|-------------| --------- |---------------------- |
| id          |  integer  | not null, primary key |
| city_id     |  integer  | not null, indexed     |
| host_id     |  integer  | not null, indexed     |
| title       |  string   | not null              |
| date        |  datetime | not null              |
| time        |  datetime | not null              |
| address     |  string   | not null              |
| seats       |  integer  | not null              |

## attendances

| column name | data type | details               |
|-------------| --------- |---------------------- |
| id          |  integer  | not null, primary key |
| user_id     |  integer  | not null, indexed     |
| event_id    |  integer  | not null, indexed     |
