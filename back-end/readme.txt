
// signUp/ register API 

POST Method: http://localhost:3000/user/register
// Params: 
{
    "user_name": "Test User",
    "email": "Test@gmail.com",
    "password": "Test@123",
    "phone": "+91 8547548754",
    "device_id": "testDevice123"
}

// response :
{
    "status": 1,
    "msg": "register sucessfully",
    "data": {
        "user_name": "Test User",
        "phone": "+91 8547548754",
        "email": "Test@gmail.com",
        "password": "Test@123",
        "device_id": "testDevice123",
        "_id": "64b4df2d1a9ab769a5d5f89a",
        "createdAt": "2023-07-17T06:26:53.881Z",
        "updatedAt": "2023-07-17T06:26:53.881Z",
        "__v": 0
    }
}

// Login API/ SignIn 
POST Method: http://localhost:3000/user/login
// Params:
    {
    "email": "Test@gmail.com",
    "password": "Test@123"
}

// response: 
{
    "status": 1,
    "msg": "Login successfully",
    "data": {
        "userName": "Test User",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGI0ZGYyZDFhOWFiNzY5YTVkNWY4OWEiLCJpYXQiOjE2ODk1NzU0MDB9.CdNev_mesaoCHN04NtcJ6MyqzvGBkABWFLbmd8hzl6o"
    }
}

// new Order
POST Method: http://localhost:3000/newOrder
// Params: 
{ 
    "customerName": "Test2", 
"customerEyeNumber": { "left":"1.5","right": "1.0" }, 
"glassType": "glass", 
"framImage": "framImage", 
"customerContactNo": "91 7458745874", 
"framePrice": "250", 
"glassPrice": "120",
"status": "odered" 
}

//response :
{
    "status": 1,
    "msg": "order created",
    "data": {
        "customerName": "Test2",
        "customerEyeNumber": {
            "left": "1.5",
            "right": "1.0"
        },
        "glassType": "glass",
        "framImage": "framImage",
        "customerContactNo": "91 7458745874",
        "framePrice": "250",
        "glassPrice": "120",
        "status": "odered",
        "_id": "64b4e3883a846d32289653cd",
        "createdAt": "2023-07-17T06:45:28.738Z",
        "updatedAt": "2023-07-17T06:45:28.738Z",
        "__v": 0
    }
}

// get ALL
Get Method : http://localhost:3000/getAllOrder
no param send token
// response:
{
    "status": 1,
    "msg": "Success",
    "data": [
        {
            "_id": "64846461f9c7597fffbf1f94",
            "image": "test.jpg",
            "customer_name": "test",
            "customer_phone": "8754854785",
            "price": "120",
            "createdAt": "2023-06-10T11:54:09.540Z",
            "updatedAt": "2023-06-10T11:54:09.540Z",
            "__v": 0
        },
        {
            "customerEyeNumber": {
                "left": "1.5",
                "right": "1.0"
            },
            "_id": "64b4e3883a846d32289653cd",
            "customerName": "Test2",
            "glassType": "glass",
            "framImage": "framImage",
            "customerContactNo": "91 7458745874",
            "framePrice": "250",
            "glassPrice": "120",
            "status": "odered",
            "createdAt": "2023-07-17T06:45:28.738Z",
            "updatedAt": "2023-07-17T06:45:28.738Z",
            "__v": 0
        },
        {
            "customerEyeNumber": {
                "left": "1.5",
                "right": "1.0"
            },
            "_id": "64b4e3e73a846d32289653cf",
            "customerName": "Test3",
            "glassType": "glass",
            "framImage": "framImage",
            "customerContactNo": "91 77488745874",
            "framePrice": "250",
            "glassPrice": "120",
            "status": "odered",
            "createdAt": "2023-07-17T06:47:03.991Z",
            "updatedAt": "2023-07-17T06:47:03.991Z",
            "__v": 0
        }
    ]
}
