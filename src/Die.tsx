import type { JSX } from "react";

type DieProps = {
  key: string;
  value: number;
  isHeld: boolean;
  hold: (id: string) => void;
};

type Styles = {
    backgroundColor: string
}

export default function Die(props: DieProps): JSX.Element {
  const styles: Styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      onClick={() => props.hold(props.key)}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
