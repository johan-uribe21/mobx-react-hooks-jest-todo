// import React from "react";
// import { NavElement } from "components/organisms/layout/SideBar";
// import { render } from "@testing-library/react";

// describe("NavElement component renders tand has prop changes when hovered", () => {
//   const container = render(<NavElement active={false} to="/" />);
//   it("should match the snapshot", () => {
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
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
