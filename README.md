![ds](./head.png)

# devent-designsystem-prototype
DeVent Design System, bootstrap based design system for a sense of unity.


## Quick start

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS Dependencies -->
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rainbow/1.2.0/themes/github.min.css" integrity="sha512-dqCmbGxLwDqQYmI+Dr0LAWG21trYGnqIaw+yuyfmLXTmb8tiZyvOeqQqmJbZWv7UpzUeRV9Zj6QTKMw4eMSiHw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Team-DeVent/devent-designsystem/dist/style.css"/>

  </head>
  <body>
    <h1>Hello, world!</h1>


    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/Team-DeVent/devent-designsystem/dist/main.js"></script>

  </body>
</html>
```

## Execute

**Server**

```
npm run start
```

**Bundling(development)**

```
npm run bundle:development
```

**Bundling(production)**

```
npm run bundle:production
```

## CDN

**Style**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Team-DeVent/devent-designsystem/dist/style.css"/>
```

**JS**

```html
<script src="https://cdn.jsdelivr.net/gh/Team-DeVent/devent-designsystem/dist/main.js"></script>
```


## Technology

**FE**

Web Components  
Bootstrap 5  
Webpack  
SASS  


**BE**

Node v17.5  
Express  


## To-Do

**feat(js)**

* [x] navbar
* [x] header
* [x] modal
* [x] alert(popup)
* [x] footer
* [x] sidebar
* [x] tab


**feat(scss)**

* [x] button
* [x] color set (blue, red, green, yellow)


**module**

* [x] webpack
* [x] scss

**docs**

* [x] index page
* [ ] design guide

**other**

* [x] docker 