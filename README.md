# api-getway-micro

Auth

/api/vi/auth/register

    body:
        email:string
        password: string
        username: string

/api/vi/auth/login

     body:
        email:string
        password: string

Blog:

/api/v1/blog/create-blog

       body:

        "title":"test",
        "content":"new content"

      header:
          Authorization: accessToken

will take authorId from token

/api/v1/blog (GET ALL BLOG)

/api/v1/blog/id (GET BLOG BY ID)

/api/v1/blog/update/id (GET BLOG BY ID)

      body:

        "title":"test",
        "content":"new content"

      header:
          Authorization: accessToken

/api/v1/blog/id (DELETE BLOG BY ID)

    header:
        Authorization: accessToken
