const AWS = require("aws-sdk");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const COMMENTS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());
app.get("/comments", async function (req, res) {
  const params = {
    TableName: COMMENTS_TABLE,
  };

  try {
    const  { Items }  = await dynamoDbClient.scan(params).promise();
    const ById = Items.sort((a, b) => a.commentId - b.commentId);
    if (Items) {
      res.status(200).json({ ById });
    } else {
      res.status(404).json({ error: "No comments found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive comments" });
  }
});

app.post("/comments", async function (req, res) {
  const { commentId, comment } = req.body;
  const params = {
    TableName: COMMENTS_TABLE,
    Item: {
      commentId: commentId,
      comment: comment,
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    res.json({ commentId, comment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create comment" });
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.handler = serverless(app);
