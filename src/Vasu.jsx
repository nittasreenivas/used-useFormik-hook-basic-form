import { useState } from "react";
import { useFormik } from "formik";
export default function Vasu() {
  const [submittedValues, setSubmittedValues] = useState([]);
  const vasuForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    },
    validate: (values) => {
      var errors = {};
      if (!values.firstname) {
        errors.firstname = "Firstname is mandatory";
      }
      if (!values.username) {
        errors.username = "username is mandatory";
      }
      console.log("errors::", errors);
      return errors;
    },
    onSubmit: (values, x) => {
      setSubmittedValues((prev) => {
        return [...prev, values];
      });
      console.log("values::", values);
      x.resetForm();
    }
  });
  const handledel = (id) => {
    let temp = [...submittedValues];
    temp.splice(id, 1);
    setSubmittedValues([...temp]);
  };
  return (
    <div className="vasu">
      <h3> Vasu form</h3>
      <div>
        <form onSubmit={vasuForm.handleSubmit}>
          <input
            type="text"
            placeholder="enter firstname"
            name="firstname"
            onChange={vasuForm.handleChange}
            onBlur={vasuForm.handleBlur}
            value={vasuForm.values.firstname}
          />{" "}
          <br />
          <div>
            {vasuForm.errors &&
              vasuForm.errors.firstname &&
              vasuForm.touched.firstname && (
                <b> {vasuForm.errors.firstname} </b>
              )}
          </div>
          <input
            type="text"
            placeholder="enter lastname"
            name="lastname"
            onChange={vasuForm.handleChange}
            onBlur={vasuForm.handleBlur}
            value={vasuForm.values.lastname}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="enter username"
            name="username"
            onChange={vasuForm.handleChange}
            onBlur={vasuForm.handleBlur}
            value={vasuForm.values.username}
          />{" "}
          <br />
          <div>
            {vasuForm.errors &&
              vasuForm.errors.username &&
              vasuForm.touched.username && <b> {vasuForm.errors.username} </b>}
          </div>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            onChange={vasuForm.handleChange}
            onBlur={vasuForm.handleBlur}
            value={vasuForm.values.password}
          />{" "}
          <br />
          <button type="submit"> save</button>
        </form>
        {submittedValues.length > 0 && (
          <table
            border="3"
            cellPadding={10}
            align={"center"}
            style={{ marginTop: "20px" }}
          >
            <thead>
              <tr>
                <th> Firstname</th>
                <th> lastname</th>
                <th>username</th>
                <th> password</th>
                <th> Del</th>
              </tr>
            </thead>
            <tbody>
              {submittedValues.map((s, i) => {
                return (
                  <tr key={i}>
                    <td>{s.firstname} </td>
                    <td>{s.lastname} </td>
                    <td>{s.username} </td>
                    <td> {s.password} </td>
                    <td>
                      <button onClick={() => handledel(i)}>del</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
