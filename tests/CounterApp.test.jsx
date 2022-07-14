import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en el <CounterApp />", () => {
  const initialValue = 10;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("100");
  });

  test('debe incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('+1') )
    expect(screen.getByText('11')).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("11");
  })

  test('debe decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('-1') )
    expect(screen.getByText('9')).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("9");
  })

  test('debe funcionar el boton reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )
    fireEvent.click( screen.getByText('+1') )
    // fireEvent.click( screen.getByText('Reset') )
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) ) // area-label
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(initialValue.toString());
  })

});
