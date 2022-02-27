# TESTING:

## USER MUTATIONS

### addUser mutation:

```
mutation addUser($username: String!, $password: String!, $email: String!) {
   addUser(username: $username, password: $password, email: $email) {
		user {
      _id
      username
     email
    }
  }
 }
```

Variable:

```
{
  "username": "wilson",
  "password": "wilson",
  "email": "wilson@test.com"
}
```

### login mutation:

```
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
```

Variable:

```
{
  "email": "wilson@test.com",
  "password": "wilson",
  "id": "621b0ba7008dd1c3e42f5921"
}
```

## POST MUTATIONS

### add a post

```
mutation addPost($postText: String!) {
  addPost(postText: $postText) {
    _id
    postText
    createdAt
    username
  }
}
```

Variable:

```
{
  "postText": "quero palavras mais faceis"
}
```

Header:

```
{
  "Authorization": "token_number"
}
```

### get all posts

```
query {
  posts {
    _id
    username
    postText
  }
```

## FRIEND MUTATIONS

```
mutation addFriend($friendId: ID!) {
  addFriend(friendId: $friendId) {
    _id
    username
    friendCount
    friends {
      _id
      username
    }
  }
}
```

Variable:

```
{
 "friendId": "get_id_from_another_user"
}
```
