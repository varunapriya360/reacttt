import React, { Component } from 'react';
import ClgDept from './ClgDept';
import Questions from './Questions';
import './MyForm.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      phoneNumber: '',
      registrationNumber: '',
      gender: '',
      comment: '',
      submittedData: null,
      showConfirmation: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showConfirmation: true });
  }

  confirmSubmission = () => {
   this.setState({ submittedData: { ...this.state }, showConfirmation: false });
  }

  render() {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      phoneNumber,
      registrationNumber,
      gender,
      comment,
      showConfirmation,
      submittedData,
    } = this.state;

    return (
      <div className="container h-screen w-screen border border-black">
        <form className="text-center" onSubmit={this.handleSubmit}>
          <div>
            <h1 className="font-custom font-bold text-4xl">STUDENT FEEDBACK FORM</h1>
            <label className="font-bold font-custom" htmlFor="firstName">First Name: </label>
            <div>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleInputChange} required />
            </div>
          </div>

          <div>
            <label className="font-bold font-custom" htmlFor="middleName">Middle Name (optional): </label>
            <div>
            <input type="text" id="middleName" name="middleName" value={middleName} onChange={this.handleInputChange} />
            </div>
          </div>

          <div>
            <label className="font-bold font-custom" htmlFor="lastName">Last Name: </label>
            <div>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleInputChange} required />
            </div>
          </div>

          <div>
            <label className="font-bold font-custom" htmlFor="dateOfBirth">Date of Birth: </label>
            <div>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={this.handleInputChange} required />
            </div>
          </div>

          <div>
            <label className="font-bold font-custom" htmlFor="phoneNumber">Phone Number: </label>
            <div>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleInputChange} required />
            </div>
          </div>

          <div>
            <label className="font-bold font-custom" htmlFor="registrationNumber">Registration Number: </label>
            <div>
            <input type="text" id="registrationNumber" name="registrationNumber" value={registrationNumber} onChange={this.handleInputChange} required />
            </div>
          </div>

          <div className="font-bold font-custom" >
            <label>Gender: </label>
            <label className="font-custom">
              <input type="radio" name="gender" value="Male" onChange={this.handleInputChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female"  onChange={this.handleInputChange} />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="Non-binary"  onChange={this.handleInputChange} />
              Non-binary
            </label>
          </div>
         
         <ClgDept />


         <Questions />

          <div>
            <label className="font-bold font-custom" htmlFor="comment">Comment: </label>
            <div>
            <textarea id="comment" name="comment" value={comment} onChange={this.handleInputChange} ></textarea>
            </div>
          </div>

          <button className="text-lg text-black font-bold py-2 px-7 hover:bg-red-500 font-custom" type="submit">Submit</button>
        </form>

        {showConfirmation && (
          <div className="confirmation-popup text-center font-custom font-bold m-10">
            <h2>Confirm Entered Information:</h2>
            <p>First Name: {firstName}</p>
            <p>Middle Name: {middleName || 'N/A'} </p>
            <p>Last Name: {lastName}</p>
            <p>Date of Birth: {dateOfBirth}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Registration Number: {registrationNumber}</p>
            <p>Gender: {gender}</p>
            <p>Comment: {comment}</p>
            <button onClick={this.confirmSubmission} className="text-lg text-black font-bold py-2 px-7 hover:bg-green-500 font-custom">
              Confirm</button>
          </div>
        )}

        {submittedData && !showConfirmation && (
          <div>
             <h1 className="final font-bold font-custom text-lg m-10">Your form has been submitted successfully!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;