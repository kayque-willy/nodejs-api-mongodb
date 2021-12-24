# Exemplo de API RESTFUL

Exemplo de API RESTFUL com uso do Node.js Express.js e MongoDB.

## Development server

Navigate to `http://localhost:8080/api/user`. The app will automatically reload if you change any of the source files.

## API REQUESTS: 

# List users
GET (json) -> return (json)
`http://localhost:8080/api/user`

# Create user
POST (json) -> return (json)
`http://localhost:8080/api/user`

# Get user by id
GET (id) -> return (json)
`http://localhost:8080/api/user/:id`

# Save user 
PUT (json,id) -> return (json)
`http://localhost:8080/api/user/:id`

# Delete user by id
DELETE (json,id) -> return boolean
`http://localhost:8080/api/user/:id`

