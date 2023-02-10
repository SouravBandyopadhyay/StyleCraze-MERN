
# StyleCraze MERN Project

StyleCraze is a global women's platform that aims to answer one question: what do women want? From health and wellness to lifestyle and beauty – it provide answers to women in all spheres to celebrate their unique needs and individuality. Their goal is to empower women from all walks of life and various intersections of identity to lead healthier and happier lives.


## Tech Stack

**Client:** React, Redux, Chakra UI, JavaScript

**Server:** Node, Express

**Database** MongoDB


## Features 

- Application state is managed with Redux-toolkit.

- Product Page where all items are visible.

- Cart Page where on basis of requirement you can change quantity upto only stock available.

- All components are cross-device cross-platform compatible and responsive in nature.

- Authentication done with Backend where data is getting stored in MongoDB.

- Hashing and Salting executed to Hash password.

- BMI calculator is there where you can check BMI.

- Exercise page where all Exercises are listed and few details of it.
## API Reference


#### Get all items
```http 
  GET /prod/getprod
```

#### Get item

```http
  GET /prod/getprod/${_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of item to fetch |



## Deployment Link

https://mernstylecraze.netlify.app/


# Screenshots

## Home
This is the landing page when user visits for the website for first time.

![App Screenshot](https://i.postimg.cc/nhTCzYhd/Web-capture-7-2-2023-2437-mernstylecraze-netlify-app.jpg)

## Products Page
Intrested Users can checkout Products and if they wish to buy some. 

![App Screenshot](https://i.postimg.cc/KzMs6fhW/Web-capture-10-2-2023-203034-mernstylecraze-netlify-app.jpg)

## Product Detail Page
Product Details shown in this page for much clarity about item.

![App Screenshot](https://i.postimg.cc/J42ZXLkb/Web-capture-10-2-2023-203315-mernstylecraze-netlify-app.jpg)

## Cart and Checkout Page
Cart Page is concluding page where if user want to purchase item can confirm over here.
If quantity is Red means it is outof stock unless it teal in color by default.

![App Screenshot](https://i.postimg.cc/qvCrJsr8/Web-capture-10-2-2023-204046-mernstylecraze-netlify-app.jpg)


## Exercise Page
Product Details shown in this page for much clarity about item.

![App Screenshot](https://i.postimg.cc/Vvc1p5pj/Web-capture-10-2-2023-203642-mernstylecraze-netlify-app.jpg)

## Exercise Detail Page
If user Intrested in any special kind of Exercise and wish to its Details then can do visit this page to get much clarity.

![App Screenshot](https://i.postimg.cc/YqWYQPfZ/Web-capture-10-2-2023-20388-mernstylecraze-netlify-app.jpg)


## Feedback

If you have any feedback, please reach out to us at souravb.1998@gmail.com


## Dummy Credentials
Incase of any technical glitch visitor face in signup then can use Dummy Credentials provided below to login
```
Email: brook@gmail.com

password:123
``` 