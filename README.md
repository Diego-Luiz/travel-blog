# Travellers Club - Travel blog
![image](https://user-images.githubusercontent.com/51066402/175113535-55d8640f-9fa6-4528-af62-848bfb6ff221.png)

Travellers Club is a blog about travel tips in general, destinations, photo and videos. It was built using HTML, CSS, Javascript and React as a Single page application. Responsive, mobile first workflow.
Travellers Club was built based on ![Band of Travellers](https://www.bandoftravellers.com/), very identical but with some differences. 

The goal with this project was to put my knowledge in frontend web development so far in practice, with a big focus in the use of the React library.

## Table of contents 📜
- [About functionality](#functionality)
- [How to run the project](#howtorun)
- [Files structure](#filestructure)
- [React concepts involved](#reactconcepts)  
- [Screenshots](#screenshots)
- [Built with](#builtwith)
- [Image credits](#imagecredits)

## About functionality <a name="functionality"></a>
Taking into consideration that this is a project to put concepts in pratice and reinforce the learning process, the blog is not completely functional as ![Band of Travellers](https://www.bandoftravellers.com/); there are some links that doesn't work for example.

- The non-functional items are: 
  - Destinations menu link and its dropdown menu
  - Homepage last destinations, Travel & Video and Tips *articles*
  - Articles with images (tips) from both Tips and Photo & Video pages
  - Instagram and Twitter footer links
  
## How to run the project <a name="howtorun"></a>
- You can acess the blog ![clicking in this link](https://react-trav3l-blog.netlify.app/)

## Files structure <a name="filestructure"></a>
- ```public``` folder: 
  - ```index.html``` the only HTML needed when using React, containing the basic HTML structure for the website.
  - ```redirects``` file required to make this single page application work in Netlify.
  
- ```src``` folder: 
  - ```assets``` containing all images and font used
  - ```components``` all the React components used and shared among the application
  - ```data``` contains JS files about images import/export from ```assets``` to make them available in the React environment
  - ```hocs``` containing the High order component used
  - ```pages``` contains the components representing the pages in this website
  - ```styles``` containing the global CSS styles visible to all the components in the application

## Some React concepts involved ⚛️ <a name="reactconcepts"></a>
These are some of the concepts involving the React library that were put in practice inside the project:
- State & Props management
- Components
  - Class based components  
  - Components lifecycle management
  - High order component
- Single page application (routing) management with ![React Router](https://reactrouter.com/)
- CSS modules
- JSX syntax
- Conditional rendering
- Conditional styling
- Events handling
- Code splitting with React lazy
- Refs & Forwarding refs
- React portals
- Image import

## Some screenshots 📷 <a name="screenshots"></a> 
<table align="center">
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124619-3d85409f-3edd-4df8-8cc8-d86d2c5cc4ef.png" width="1440px">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124725-2ea97547-1da2-44b9-8384-fe278866e397.png" width="1440px">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124729-554be1cf-057c-477f-8255-ab6db513f6c9.png" width="1440px">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124716-0ca6a1bd-db2e-43f6-a2bf-b1efe1d4409f.png" width="1440px">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124721-6452c570-1fea-4361-af77-61f3251a5c33.png" width="1440px">
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/51066402/175124723-605fdac9-d215-48ee-a03d-eb69352cf8b2.png" width="1440px">
    </td>
  </tr>
</table>


## Built with 🛠️ <a name="builtwith"></a>
- HTML
- CSS
- Javascript
- ![React](https://reactjs.org/)
- ![Create-react-app](https://create-react-app.dev/)
- ![React router](https://reactrouter.com/)
- ![React icons](https://react-icons.github.io/react-icons/)
- Npm
- Git & Github
- Deployed in ![Netlify](https://www.netlify.com/)

## Image credits <a name="imagecredits"></a>
- The images on this website were taken from ![Unsplash](https://unsplash.com/). Below are all the images used in this project:
https://unsplash.com/photos/hvPB-UCAmmU, https://unsplash.com/photos/FqqiAvJejto, https://unsplash.com/photos/CvUVTJDB4uI ,https://unsplash.com/photos/ny6tO4ItOEY, https://unsplash.com/photos/bmUa09zy2ZQ, https://unsplash.com/photos/ah-HeguOe9k, https://unsplash.com/photos/jg-6ARMiaPM, https://unsplash.com/photos/98WPMlTl5xo, https://unsplash.com/photos/vLENm-coX5Y, https://unsplash.com/photos/LDTxAlVmdho, https://unsplash.com/photos/Ks4RTBgQ_64, https://unsplash.com/photos/vj_9l20fzj0, https://unsplash.com/photos/PP8Escz15d8, https://unsplash.com/photos/XYrjl3j7smo, https://unsplash.com/photos/ru0KExSZ5to, https://unsplash.com/photos/UP_RojtnvTU
