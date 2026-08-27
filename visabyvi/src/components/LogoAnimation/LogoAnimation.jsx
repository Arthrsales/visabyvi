export default function LogoAnimation() {
  return (
    <div className="logo-animation">
      <svg
        viewBox="0 0 600 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* VISA BY VI */}
        <text
          className="visa-text"
          x="300"
          y="75"
          textAnchor="middle"
        >
          Visa by Vi
        </text>

        {/* VITORIA MACEDO */}
        <text
          className="vitoria-text"
          x="300"
          y="145"
          textAnchor="middle"
        >
          Vitoria Macedo
        </text>
      </svg>
    </div>
  );
}