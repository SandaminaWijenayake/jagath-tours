import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "./BlogCard.js";

const sxStyle = {
  backgroundColor: "#fff",
  paddingTop: "75px",
};

const BlogContent = () => {
  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const CollectionRef = collection(db, "posts");

  // useEffect(() => {
  //   const blogList = async () => {
  //     try {
  //       const getData = await getDocs(CollectionRef);
  //       console.log(getData);
  //       // setBlogs(getData);
  //       const filteredData = getData.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       setBlogs(filteredData);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   blogList();
  // }, []);

  return (
    <div className="w-4/5 m-auto">
      {/* <div className=" text-center mt-16"></div>
      <h1 className="text-5xl font-bold mb-5">Get in touch</h1>
      <p className="text-xl text-gray-700">
        Proin volutpat consequat porttitor cras nullam gravida at.
      </p>

      {isLoading ? (
        <Typography
          variant="h3"
          sx={{
            marginTop: "20vh",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50% , -50%)",
          }}
        >
          Loading...
        </Typography>
      ) : (
        <Box sx={sxStyle}>
          <Container>
            <Grid container spacing={4}>
              {blogs.map((details) => (
                <Grid item xs={12} sm={6} md={4}>
                  <BlogCard details={details} key={details.id} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )} */}
    </div>
  );
};

export default BlogContent;
