export function HelloWorld({ langName, id, title = "Hello World", fullName }) {
  const { name, lastname } = fullName;

  return (
    <div key={id} style={{ width: "95%", maxWidth: "1000px", margin: "20px auto", textAlign: "center" }}>
      <h1>{title}</h1>
      <h2>Estás aprendiendo sobre {langName}</h2>
      <p>
        Creado por: {name} {lastname}
      </p>
    </div>
  );
}
