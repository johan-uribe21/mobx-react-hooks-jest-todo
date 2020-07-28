// import React from "react";
// import SideBar from "components/organisms/layout/SideBar";
// import { shallow, mount } from "enzyme";
// import { render } from "@testing-library/react";

// describe("SideBar component renders three nav elements and each with onHover prop changes", () => {
//   const container = render(<SideBar />);
//   it("should match the snapshot", () => {
//     expect(container.html()).toMatchSnapshot();
//   });
//   it("should have three NavElement child components", () => {
//     expect(container.find("NavElement").length).toEqual(3);
//   });
//   it("should have proper props for email field", () => {
//     expect(container.find('input[type="email"]').props()).toEqual({
//       className: "mx-auto my-2",
//       onBlur: expect.any(Function),
//       placeholder: "email",
//       type: "email",
//     });
//   });
// });
