import { Component } from "react";
import check from "./book-arcade.png";
export class Books extends Component {
  constructor() {
    super();
    this.state = {
      userinput: "",
      books: [],
    };
  }

  onChangeEvent(e) {
    this.setState({ userinput: e });
    console.log(e);
  }

  addItem(input) {
    if (input === "") {
      alert("Пожалуйста, введите название книги");
    } else {
      let booksArray = this.state.books;
      console.log(booksArray);
      booksArray.push(input);
      this.setState({ books: booksArray, userinput: "" });
    }
  }

  crossedBook(event) {
    const li = event.target;
    li.classList.toggle("crossed");
  }

  deleteItem() {
    let booksArray = this.state.books;
    booksArray = [];
    this.setState({ books: booksArray });
  }

  onFormSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
      <div className="container">
        <input
          value={this.state.userinput}
          placeholder="Что будем читать?"
          type="text"
          onChange={(e) => {
            this.onChangeEvent(e.target.value);
          }}
        /></div>
        <div className="container">
        <button className="add" onClick={() => this.addItem(this.state.userinput)}>
          Добавить
        </button></div>
        <div className="container">
          <ul>
            {this.state.books.map((item, index) => (
              <li onClick={this.crossedBook} key={index}>
                <img src={check} width="40px" alt="book" /> {item}
              </li>
            ))}
          </ul></div>
          <div className="container">
          <button  className="delete" onClick={() => this.deleteItem()}>Удалить</button>
        </div>
        </form>
      </div>
      
    );
  }
}
