# Reactivities
Course repository for the Reactivities app created on .Net 5.0 and React.
Guided by Neil Cummings. Udemy Course here:

[Udemy course](https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react)

## Projects

API - Contains the controllers. Trae referencia a Application

Application - Contains all the entities + Interfaces. Trae referencia a Persistence y Domain

Persistence - contains persistence elements. Trae Referencia a Domain

Domain - Contains all the Repository, DbContext and Services classes.

### React app

Installed react project to use npm by default (instead of yarn for those that have it installed) and with a typescript 
```
npx create-react-app client-app --use-npm --template typescript
```


## Resources

Create a new react app
```
https://reactjs.org/docs/create-a-new-react-app.html
```

Axios - Promised based HTTP client
```
https://github.com/axios/axios
```

Semantic UI React - The official React integration for Semantic UI
```
https://react.semantic-ui.com/
```

Json to TS - helpful to create TS interfaces from POCOs
```
http://json2ts.com/
```

UUID - For the creation of RFC4122 UUIDs
```
https://github.com/uuidjs/uuid
NOTE:
to avoid any declaration file error, execute
npm i --save-dev @types/uuid
```
