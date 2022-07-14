import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  // test("debe hacer match con el snapshot", () => {
  //   const title = "Hola Mundo!";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("debe mostrar el titulo en un h1", () => {
    const title = "Hola Mundo!";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    ); // react-testing-library

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1"); // saltar al DOM, JS directo
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola Mundo!";
    const subtitle = "Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
