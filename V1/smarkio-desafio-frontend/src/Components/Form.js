import React, { useState } from "react";
import connectBack from "../Utills/axiosconfig";
import { useDispatch } from "react-redux";

function Form() {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const loadAll = async () => {
    const getAll = await connectBack.get("/comments");
    const allData = getAll.data;
    setTimeout(
      () => dispatch({ type: "sendComments", comments: allData }),
      3000
    );
  };

  const handleChange = ({ target }) => {
    setComment(target.value);
  };

  const handleClik = async () => {
    if (comment) {
      setComment("");
      await connectBack.post("/comments", { comment });
      await connectBack.post("/watson", { comment });
      await loadAll();
    } else {
      alert("O comentário está vazio!");
    }
  };

  return (
    <div className="form">
      <p>Comentário</p>
      <textarea
        className="comment-textarea"
        type="text"
        name="comment"
        value={comment}
        onChange={handleChange}
        maxLength="200"
      />
      <button className="button-form" onClick={handleClik}>
        Cadastrar
      </button>
    </div>
  );
}

export default Form;
