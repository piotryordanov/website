# About
This is an opiniated frontend boilerplate built on top of nextJS. The key stack elements added are:
- [ Redux ](https://redux.js.org/)
- [Redux-Act](https://github.com/pauldijou/redux-act)
- [Styled-components](https://www.styled-components.com/)
- [ Rebass ](https://rebassjs.org/)

# Structure
- All `redux` reducers are under the `data` directory
- `./containers` contains all containers. They are responsible to fetch, update, and pass down the redux state down to components.
- `./components` contains all components. They are to **never** deal directly with the state other than via props.

# Docker
You can run this application inside docker. Simply run:
`sudo docker-compose down; sudo docker-compose up --build`

# Deploy
In order to deploy the app, type in: `now`

----

# Todo
- Add automatic deployment to server using `pm2`.
