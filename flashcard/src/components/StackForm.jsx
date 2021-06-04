import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { addStack } from "../Actions";
import { useDispatch } from "react-redux";

function StackForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [cards, setCards] = useState([]);

  const addCard = () => {
    let newCards = cards;
    newCards.push({ id: cards.length, prompt: "", answer: "" });
    setCards([...newCards]);
  };

  const updateCardPart = (event, index, part) => {
    const newCards = cards;
    newCards[index][part] = event.target.value;
    setCards([...newCards]);
  };

  const addStackButton = () => {
      const stack = { title, cards};
    dispatch(addStack(stack));
  };

  return (
    <div>
      <Link to="/" className="link-home">
        <h4>Home</h4>
      </Link>
      <h4>Create a New Stack</h4>
      <br />
      <Form inline>
        <FormGroup>
          <h3>Title :</h3>
          <FormControl onChange={(event) => setTitle(event.target.value)} />
        </FormGroup>
        {cards.map((card, index) => {
          return (
            <div key={card.id}>
              <br />
              <FormGroup>
                <h4>Prompt:</h4>
                <FormControl
                  onChange={(event) => updateCardPart(event, index, "prompt")}
                />
                <h4>Answer:</h4>
                <FormControl
                  onChange={(event) => updateCardPart(event, index, "answer")}
                />
              </FormGroup>
            </div>
          );
        })}
      </Form>
      <br />
      <Button onClick={() => addCard()}>Add Card</Button>
      <br />
      <Button onClick={() => addStackButton()}>save and Add the Stack</Button>
    </div>
  );
}

export default StackForm;
