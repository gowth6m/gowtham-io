import "./SideText.css";

interface SideTextProps {
    left: string;
    right: string;
  }

export function SideText({ left, right }:SideTextProps) {
  return (
    <>
      <div className="side-text-left">{left}</div>
      <div className="side-text-right">{right}</div>
    </>
  );
}
