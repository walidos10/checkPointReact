import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <form>
        <div class="row mb-3">
          <label for="inputname" class="col-sm-2 col-form-label">
            name
          </label>
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="inputname"
              placeholder="name"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="lastName" class="col-sm-2 col-form-label">
            lastName
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="lastName"
            ></input>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="nom@email.com"
            ></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="min 6 char"
            ></input>
          </div>
        </div>
        <div class="form-group">
          <label for="selection">Une liste select</label>
          <select id="selection" class="form-control">
            <option value="">Liste de choix...</option>
            <optgroup label="Groupe d'options 1">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </optgroup>
            <optgroup label="Groupe d'options 2">
              <option value="">Option 4</option>
              <option value="">Option 5</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <label for="bio">Biographie</label>
          <textarea class="form-control" id="bio" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
