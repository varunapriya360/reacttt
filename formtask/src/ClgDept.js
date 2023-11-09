import React, { Component } from 'react';

class ClgDept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [
        {
          name: 'Anna Adarsh College for Women [AACW] ',
          departments: ['BA Tourism And Travel Management','BA English Literature','BA Business Economics', 'BSc Nutrition Food Service Management And Dietetics', 'BSc. Psychology'],
        },
        {
          name: 'Rajalakshmi Engineering College [REC]',
          departments: ['Aeronautical Engineering','Chemical Engineering','Food Technology', 
          'Mechatronics Engineering', 'Humanities & Sciences']
        },
        {
          name: 'SRM Easwari Engineering College',
          departments: ['M.E Computer Science and Engineering', 'M.E Embedded Systems Technologies', 
          'M.E Structural Engineering', 'M.E Engineering Design','MBA']
        },
      ],
      selectedCollege: '',
      selectedDepartment: '',
    };
  }

  handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;
    this.setState({ selectedCollege });
    this.props.onCollegeChange(selectedCollege); 
  }

  handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    this.setState({ selectedDepartment });
    this.props.onDepartmentChange(selectedDepartment); 
  }


  render() {
    const { colleges, selectedCollege, selectedDepartment} = this.state;

    return (
      <form>
        <div>
          <label className="font-bold font-custom" htmlFor="college">College: </label>
          <select id="college" value={selectedCollege} onChange={this.handleCollegeChange}>
            <option value="">Select College</option>
            {colleges.map((college, index) => (
              <option key={index} value={college.name}>
                {college.name}
              </option>
            ))}
          </select>
        </div>

        {selectedCollege && (
          <div>
            <label className="font-bold font-custom" htmlFor="department">Department: </label>
            <select id="department" value={selectedDepartment} onChange={this.handleDepartmentChange}>
              <option value="">Select Department</option>
              {colleges
                .find(college => college.name === selectedCollege)
                .departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))
              }
            </select>
          </div>

        )}
      </form>
      
    );
  }
}

export default ClgDept;