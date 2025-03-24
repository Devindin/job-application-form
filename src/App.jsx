import InputField from "./Components/InputField";
import { Formik, Form } from "formik";
import Logo from "./assets/logo-removebg-preview.png";
import PrimaryButton from "./Components/PrimaryButton";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#4D55CC] p-8 ">
      <Formik>
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-[700px] rounded-lg bg-white/30 backdrop-blur-sm text-[#4D55CC] p-8 space-y-4 items-center justify-center flex flex-col"
          >
            <h1 className="text-[24px] font-bold text-center">
              Apply For Intern Software Engineer position
            </h1>
            <img src={Logo} alt="" className="w-40 h-40 mt-0" />
            <InputField
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
           
            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            <InputField
              label="Mobile Number"
              name="number"
              type="text"
              placeholder="Enter your mobile number"
            />

            <InputField
              label="CV"
              name="cv"
              type="file"
              placeholder="Upload your CV here"
            />
            <PrimaryButton label="Submit" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
