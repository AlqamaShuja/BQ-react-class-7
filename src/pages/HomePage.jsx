import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  // useEffect(callback, [])
  useEffect(()=>{
    getUserData()
    document.title = "User List"
  }, []) // [] -> Dependency Array

  const getUserData = () => {
    // GET (POST, PATCH, PUT, DELETE)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetchedUsers) => {
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
      });
  };

  return (
    <div>
      <button onClick={getUserData}>Fetch User</button>
      <h1>User List</h1>
      <div>
        {users.map((user, index) => (
          <Card>
            <CardActionArea>
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.phone}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
