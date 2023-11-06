## CS 464P/564 - Front End Web Technologies 

# Final Project: Dictionary Application

Portland State University - Spring 2023

Students: Ian Lee & Anh Ho & Miles Whitaker

Instructor: Caterina Paun

# What About:

This frontend application stands as a testament to meticulous API integration, focusing on two distinct sources within the dictionary domain. Our foremost priority remains the efficient retrieval of data, with a strong commitment to gracefully managing data anomalies and orchestrating automatic `API` request retries, ensuring the utmost reliability and robustness in data acquisition.

Enhancing the user experience, we've harnessed the versatile capabilities of the `Chart.js` library, expertly crafting visually compelling and informative charts and graphs.

For a deep understanding of user behavior, our application leverages sophisticated `cookies and caching` mechanisms, diligently tracking the most frequently searched terms.

The project is meticulously organized within a secure Git repository, offering not only effective version control but also a collaborative environment fortified with rigorous security measures.

Significantly, we've bolstered our application's security through API login authentication implemented via `Auth0`, adding an additional layer of user identity verification and data protection.

We take great pride in announcing the successful deployment of our application, making it fully accessible and well-prepared for real-world utilization. This achievement is attributed to the committed development within the main branch of our repository.

Our project has been done in the main branch. 
# Dictionary App SETUP
(All commands are with respect to the ** ROOT directory ** of the project)

```
> 1. Clone repository: git clone https://github.com/anhoop89/final_frontend_sp2023.git

> 2. Get into a project directory: cd final_frontend_sp2023

> 3. Make sure you have to donwload and install nodejs at https://nodejs.org/en first (skip this step if already installed)

> 4. Copy and configure .env file:   ( cp .env.default .env ) 

> 5. Install dependencies:           ( npm i ) 

> 6. Start the whole project:        ( npm start )

```

## When you are done all the steps above and don't see the site pop up, you can be manually starting the site at: http://localhost:3000/

## Here are libraries supporting our project:
```
> Bootstrap v5.2.3 to style the project: https://blog.getbootstrap.com/2022/11/22/bootstrap-5-2-3/

> React v18.2 to build the components: https://react.dev/blog/2022/03/29/react-v18

> ChartJS to build graphs: https://www.chartjs.org/docs/latest/

> JS-Cookie to store data for the translate tab: https://github.com/js-cookie/js-cookie

> React-circular-progressbar to build progress bar: https://www.npmjs.com/package/react-circular-progressbar

> AOS to help animate between components: https://michalsnik.github.io/aos/

> Axios to fetch API data: https://axios-http.com/docs/intro

> Auth0 to set up Authenication: https://auth0.com/docs

```
