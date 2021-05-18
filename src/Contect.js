import React, { useState } from "react";

export default function Contect() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
  });
  const eventInput = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thank ${data.fullname} for filling the form`);
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: ""
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contect Us</h1>
      </div>
      <div className="container contect_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name Feild</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={eventInput}
                  placeholder="Enter your Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={eventInput}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={eventInput}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={eventInput}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
