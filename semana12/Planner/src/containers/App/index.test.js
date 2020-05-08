import App from "./"
import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

describe("Componentes", () => {
    test("Checa se o Provider está presente", () => {
        const component = shallow(<App />)

        expect(component.find(<Provider></Provider>)).toBeTruthy()
    })
})